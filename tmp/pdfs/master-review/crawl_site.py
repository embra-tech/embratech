from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
from urllib.parse import urljoin, urlsplit
import json, re, hashlib, datetime, copy
from urllib.request import Request, urlopen
from types import SimpleNamespace
import xml.etree.ElementTree as ET
from lxml import html as LH

ROOT=Path(__file__).resolve().parents[3]
OUT=ROOT/'output/master-review/2026-10-19'
HTML=OUT/'live-html'; HTML.mkdir(parents=True,exist_ok=True)
BASE='https://www.embratechnologies.org'
UA='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36'
def get(url,ua=UA):
    with urlopen(Request(url,headers={'User-Agent':ua}),timeout=45) as r:
        content=r.read()
        return SimpleNamespace(url=r.url,status_code=r.status,content=content,text=content.decode('utf-8'),headers=r.headers)
def norm(url):
    p=urlsplit(url);return p.path.rstrip('/') or '/'
def flatten(obj):
    if isinstance(obj,list):
        return [v for x in obj for v in flatten(x)]
    if isinstance(obj,dict):
        return [obj]+flatten(obj.get('@graph',[]))
    return []
def parse(url):
    r=get(url); soup=LH.fromstring(r.text);main=(soup.xpath('//main') or [soup])[0]
    schemas=[]
    for t in soup.xpath('//script[@type="application/ld+json"]'):
        try: schemas+=flatten(json.loads(t.text or ''))
        except Exception:pass
    scripts=[urljoin(r.url,t.get('src')) for t in soup.xpath('//script[@src]')]
    def cleaned(node):
        clean=copy.deepcopy(node)
        for t in clean.xpath('.//script|.//style|.//noscript'):t.drop_tree()
        return ' '.join(clean.text_content().split())
    text=cleaned(main);fulltext=cleaned(soup)
    def meta(name):
        t=soup.xpath('//meta[@name="'+name+'"]');return t[0].get('content','') if t else ''
    def links(root):return [{'href':urljoin(r.url,a.get('href','')),'text':' '.join(a.text_content().split()),'rel':a.get('rel','')} for a in root.xpath('.//a[@href]')]
    crumbs=[x for x in schemas if x.get('@type')=='BreadcrumbList']
    path=norm(r.url);slug='home' if path=='/' else path.strip('/').replace('/','--')
    (HTML/(slug+'.html')).write_text(r.text,encoding='utf-8')
    title=soup.xpath('string(//title)')
    return {'url':url,'finalURL':r.url,'path':path,'status':r.status_code,'htmlBytes':len(r.content),'title':title,'titleLength':len(title),'description':meta('description'),'descriptionLength':len(meta('description')),'canonical':soup.xpath('string(//link[@rel="canonical"]/@href)'),'robots':meta('robots'),'xRobotsTag':r.headers.get('x-robots-tag'),'h1':[' '.join(x.text_content().split()) for x in main.xpath('.//h1')],'headings':[(x.tag,' '.join(x.text_content().split())) for x in main.xpath('.//h1|.//h2|.//h3|.//h4|.//h5|.//h6')],'wordCount':len(re.findall(r"\b[\w'-]+\b",text)),'text':text,'fullText':fulltext,'mainLinks':links(main),'allLinks':links(soup),'scripts':scripts,'schemas':schemas,'breadcrumbCount':len(crumbs),'duplicateBreadcrumb':len(crumbs)>len({json.dumps(c,sort_keys=True) for c in crumbs})}

r=get(BASE+'/sitemap.xml');(OUT/'sitemap.xml').write_text(r.text,encoding='utf-8')
urls=[n.text for n in ET.fromstring(r.text).iter() if n.tag.endswith('loc')]
with ThreadPoolExecutor(max_workers=4) as pool:pages=list(pool.map(parse,urls))
for p in pages:
    p['incomingAllPages']=sorted({s['path'] for s in pages if s['path']!=p['path'] and any(urlsplit(a['href']).netloc==urlsplit(BASE).netloc and norm(a['href'])==p['path'] for a in s['allLinks'])})
    p['incomingMainPages']=sorted({s['path'] for s in pages if s['path']!=p['path'] and any(urlsplit(a['href']).netloc==urlsplit(BASE).netloc and norm(a['href'])==p['path'] for a in s['mainLinks'])})
robots=get(BASE+'/robots.txt');(OUT/'robots.txt').write_text(robots.text,encoding='utf-8')
uaChecks=[]
for label,ua in [('normal',UA),('googlebot','Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'),('lighthouse',UA+' Chrome-Lighthouse')]:
    h=get(BASE+'/',ua); s=LH.fromstring(h.text); m=copy.deepcopy((s.xpath('//main') or [s])[0])
    for t in m.xpath('.//script|.//style'):t.drop_tree()
    text=' '.join(m.text_content().split())
    uaChecks.append({'label':label,'status':h.status_code,'bytes':len(h.content),'scripts':len(s.xpath('//script[@src]')),'h1':[' '.join(x.text_content().split()) for x in m.xpath('.//h1')],'mainTextHash':hashlib.sha256(text.encode()).hexdigest(),'textSample':text[:500]})
    (HTML/f'ua-{label}.html').write_text(h.text,encoding='utf-8')
report={'checkedAtUTC':datetime.datetime.now(datetime.timezone.utc).isoformat(),'pages':pages,'uaChecks':uaChecks}
(OUT/'live-crawl.json').write_text(json.dumps(report,indent=2),encoding='utf-8')
print(json.dumps({'sitemapPages':len(pages),'statusFailures':[(p['path'],p['status']) for p in pages if p['status']!=200],'h1Failures':[(p['path'],p['h1']) for p in pages if len(p['h1'])!=1],'canonicalFailures':[(p['path'],p['canonical']) for p in pages if p['canonical'].rstrip('/')!=p['url'].rstrip('/')],'over65Titles':[(p['path'],p['titleLength'],p['title']) for p in pages if p['titleLength']>65],'duplicateBreadcrumbs':[p['path'] for p in pages if p['duplicateBreadcrumb']],'uaChecks':uaChecks},indent=2))
