from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
from urllib.request import Request,urlopen
from urllib.parse import urljoin,urlsplit
from lxml import html
import json,datetime,re
ROOT=Path(__file__).resolve().parents[3];OUT=ROOT/'output/master-review/2026-10-19'
data=json.loads((OUT/'live-crawl.json').read_text(encoding='utf-8'))
UA='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36'
def fetch(url):
    with urlopen(Request(url,headers={'User-Agent':UA}),timeout=30) as r:return r.url,r.status,r.read(),dict(r.headers)
def asset(url):
    try:
        final,status,b,headers=fetch(url)
        return {'url':url,'status':status,'bytes':len(b),'contentEncoding':headers.get('Content-Encoding'),'threeMarkers':any(x in b for x in [b'THREE.WebGLRenderer',b'WebGLRenderer: Error',b'threejs.org'])}
    except Exception as e:return {'url':url,'error':str(e)}
home=next(p for p in data['pages'] if p['path']=='/')
with ThreadPoolExecutor(max_workers=4) as pool:assets=list(pool.map(asset,home['scripts']))
clients=['https://pndlaundry.com/','https://tuxfordcollision.com/','https://alaskafastfixhandyman.com/','https://vvasquezhandymanllc.net/','https://bestbreaks.com.au/','https://skyhightreeservicechicago.com/']
def credit(url):
    try:
        final,status,b,_=fetch(url);tree=html.fromstring(b);links=[]
        for a in tree.xpath('//a[@href]'):
            if 'embratechnologies.org' in a.get('href',''):links.append({'href':urljoin(final,a.get('href')),'text':' '.join(a.text_content().split()),'rel':a.get('rel','')})
        return {'url':url,'finalURL':final,'status':status,'credits':links}
    except Exception as e:return {'url':url,'error':str(e)}
with ThreadPoolExecutor(max_workers=4) as pool:credits=list(pool.map(credit,clients))
commits=['4305277','edce867','2f1b984','6b926a5','828402a','8721c96','5cf96f5','f543429']
def release(sha):
    try:
        _,_,b,_=fetch('https://api.github.com/repos/embra-tech/embratech/commits/'+sha+'/status');r=json.loads(b)
        return {'commit':sha,'state':r['state'],'statuses':[{k:s.get(k) for k in ['context','state','description','target_url','created_at']} for s in r['statuses']]}
    except Exception as e:return {'commit':sha,'error':str(e)}
with ThreadPoolExecutor(max_workers=4) as pool:releases=list(pool.map(release,commits))
result={'checkedAtUTC':datetime.datetime.now(datetime.timezone.utc).isoformat(),'assets':assets,'initialScriptUncompressedBytes':sum(x.get('bytes',0) for x in assets),'credits':credits,'releases':releases}
(OUT/'supplemental-evidence.json').write_text(json.dumps(result,indent=2),encoding='utf-8')
print(json.dumps(result,indent=2))
