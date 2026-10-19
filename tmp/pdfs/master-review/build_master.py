from pathlib import Path
import json, re, csv, hashlib, html
from datetime import datetime, timezone, timedelta
from reportlab.pdfgen import canvas
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, Image, KeepTogether
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.enums import TA_LEFT
from pypdf import PdfReader

ROOT=Path('C:/website projects/embrav7/kimi2/embra-next')
E=ROOT/'output/master-review/2026-10-19'
OUT=ROOT/'output/pdf/Embra-Verified-Master-SEO-Report-2026-10-20.pdf'
OUT.parent.mkdir(parents=True,exist_ok=True)
def load(n): return json.loads((E/(n+'.json')).read_text(encoding='utf-8'))
C=load('live-crawl'); US=load('www-us'); WW=load('www-worldwide'); NW=load('non-www-worldwide'); SUP=load('supplemental-evidence')
PAGES={x['path']:x for x in C['pages']}
Q={x['Top queries']:x for x in US['Queries']}
indexed_text=(E/'gsc-indexed-pages.txt').read_text(encoding='utf-8')
indexed={x.rstrip('/,.') for x in re.findall(r'https://www\.embratechnologies\.org[^\s"<>]*',indexed_text)}
discovered_text=(E/'gsc-discovered-pages.txt').read_text(encoding='utf-8')
discovered={x.rstrip('/,.') for x in re.findall(r'https://www\.embratechnologies\.org[^\s"<>]*',discovered_text)}
for name,file in [('Arial','arial.ttf'),('ArialB','arialbd.ttf'),('ArialI','ariali.ttf')]: pdfmetrics.registerFont(TTFont(name,'C:/Windows/Fonts/'+file))
pdfmetrics.registerFontFamily('Arial',normal='Arial',bold='ArialB',italic='ArialI',boldItalic='ArialB')
NAVY=colors.HexColor('#11273C'); BLUE=colors.HexColor('#17649B'); TEAL=colors.HexColor('#087F78'); MUTED=colors.HexColor('#526575'); LIGHT=colors.HexColor('#EFF4F8'); LINE=colors.HexColor('#D4DFE7'); AMBER=colors.HexColor('#9B5D16')
S={
 'body':ParagraphStyle('body',fontName='Arial',fontSize=10.1,leading=14.4,textColor=NAVY,spaceAfter=8),
 'small':ParagraphStyle('small',fontName='Arial',fontSize=8.4,leading=11.5,textColor=MUTED,spaceAfter=6),
 'h1':ParagraphStyle('h1',fontName='ArialB',fontSize=24,leading=28,textColor=NAVY,spaceAfter=13),
 'h2':ParagraphStyle('h2',fontName='ArialB',fontSize=13,leading=17,textColor=BLUE,spaceBefore=10,spaceAfter=7),
 'kicker':ParagraphStyle('kicker',fontName='ArialB',fontSize=8.8,leading=12,textColor=TEAL,spaceAfter=8),
 'cell':ParagraphStyle('cell',fontName='Arial',fontSize=8.6,leading=11.6,textColor=NAVY),
 'head':ParagraphStyle('head',fontName='ArialB',fontSize=8.7,leading=11.6,textColor=colors.white),
 'metric':ParagraphStyle('metric',fontName='ArialB',fontSize=26,leading=31,textColor=BLUE),
}
story=[]; sections=[]
def esc(s): return html.escape(str(s))
def p(s,style='body'): return Paragraph(s,S[style])
def add(s,style='body'): story.append(p(s,style))
def title(t,k):
 if story: story.append(PageBreak())
 sections.append(t); add(k.upper(),'kicker');add(t,'h1')
def h(t): add(t,'h2')
def note(t):
 t=Table([[p(t,'small')]],colWidths=[495]);t.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,-1),LIGHT),('BOX',(0,0),(-1,-1),.5,LINE),('LEFTPADDING',(0,0),(-1,-1),11),('RIGHTPADDING',(0,0),(-1,-1),11),('TOPPADDING',(0,0),(-1,-1),9),('BOTTOMPADDING',(0,0),(-1,-1),7)]));story.append(t);story.append(Spacer(1,9))
def table(headers,rows,widths=None,small=False):
 widths=widths or [495/len(headers)]*len(headers)
 data=[[p(esc(x),'head') for x in headers]]
 for row in rows: data.append([p(str(x),'metric' if '<font size="25"' in str(x) else ('small' if small else 'cell')) for x in row])
 t=Table(data,colWidths=widths,repeatRows=1,hAlign='LEFT')
 t.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),NAVY),('VALIGN',(0,0),(-1,-1),'TOP'),('ROWBACKGROUNDS',(0,1),(-1,-1),[colors.white,LIGHT]),('LINEBELOW',(0,0),(-1,0),.7,NAVY),('LINEBELOW',(0,1),(-1,-1),.35,LINE),('LEFTPADDING',(0,0),(-1,-1),7),('RIGHTPADDING',(0,0),(-1,-1),7),('TOPPADDING',(0,0),(-1,-1),7),('BOTTOMPADDING',(0,0),(-1,-1),7)]))
 story.append(t);story.append(Spacer(1,9))
def link(url,label): return '<link href="'+html.escape(url,quote=True)+'" color="#17649B">'+esc(label)+'</link>'

title('Verified master SEO review','Embra Technologies / Verified 19-20 October 2026')
add('US nationwide. Home-service website and SEO sales.','h2')
add('Prepared October 20. GSC was read October 19 (search data through October 17); the website was rechecked after a later release. Closed issues are marked below.','small')
add('<b>My verdict:</b> the uploaded report is the better consolidated status document. My October 17 Search Console plan is the better basis for your US sales strategy because it separates US demand, both properties, buyer intent and weak samples. Neither should be used unchanged. This report combines their useful findings and corrects both.')
table(['US Google clicks','US impressions','US average position'],[['<font size="25" color="#17649B">0</font>','<font size="25" color="#17649B">582</font>','<font size="25" color="#17649B">35.5</font>']], [165,165,165])
add('www property, Web search, September 29-October 17, 2026. Read October 19. These figures precede the October 18-19 releases. [D1]','small')
h('The decision that changes the plan')
add('Do not treat backlinks as the only remaining obstacle. Two important sales pages were not indexed at the last inspection; broad performance and SEO promises still need substantiation; the normal desktop experience uses a serif fallback font; and accepted-lead measurement needs verification. The newer release has removed the named project-growth claims. Work on these alongside relevant authority building.')
table(['Step','What to do next','Why'],[
('1','Review remaining speed/SEO promises and inspect service-page discovery. Keep the completed project-claim cleanup.','Trust and eligibility come before judging rank gains.'),
('2','Improve the handyman offer and the Local SEO offer; link proof and guides.','Handyman has the strongest priority niche-page exposure; SEO needs a credible sales destination.'),
('3','Verify lead delivery, source attribution, privacy wording and normal visitor performance.','Search visibility must turn into qualified inquiries.'),
('4','Develop client evidence, honest reviews and useful original resources in parallel.','Relevant recognition can support growth; link quotas cannot guarantee positions.')],[35,232,228])
note('<b>Your constraints remain in force.</b> The audit-only stripped page stays. This review changed no website source, deployed nothing, submitted no forms and sent no outreach. New visible edits still need your approval of the exact proposal.')
add('The following pages contain the report comparison, corrected data, keyword priorities, action plan, all 19 issue decisions, a claim ledger covering all 11 uploaded pages, and the 38-page crawl inventory. Unknowns are marked explicitly.','small')

title('Which report is better, and why','Comparison / scope matched fairly')
add('The uploaded report compares itself mainly with a five-page release summary. That summary was never intended to replace the earlier 22-page audit and 10-page keyword plan. A fair comparison includes all three prior documents. [U1, A1-A3]')
table(['Decision area','Stronger source','Reason / qualification'],[
('Consolidated status and ownership','Uploaded report','Eight releases, a 19-item register and a parallel roadmap are easier to manage than scattered documents.'),
('US customer acquisition','October 17 keyword plan','Uses US filters, both URL-prefix properties, explicit intent assignments and tiny-sample cautions. The uploaded headline data is worldwide.'),
('Latest search snapshot','Uploaded report, then this review','Its www totals through October 17 reproduce. This review also re-exported US and non-www data and inspected the service URLs.'),
('Evidence and ranking forecasts','Prior keyword plan','No invented score-to-rank thresholds or link-count forecasts. The uploaded 59/100 arithmetic works, but predictive thresholds do not have a validated basis.'),
('Design, motion and tracking depth','Earlier full audit, with corrections','Broader coverage, but it mixed some unpublished tracking work into current behavior. Production has been separated here.'),
('Complete live consistency','Neither prior set','Both missed the homepage Sky High claim in the initial October 19 snapshot. A later release fixed it; the original conclusion was still too broad for its evidence.'),
('Useful final decision document','This verified consolidation','Retains the issue register and parallel authority work, applies US evidence and labels unknowns instead of assigning certainty.')],[119,126,250])
h('Corrections to my own work')
add('The October 16 audit should not have described unpublished middleware and /api/collect behavior as deployed. Current production uses /api/track and /api/lead. Its earlier recommendation to remove the audit variant is superseded by your instruction to retain it. The October 19 release summary accurately limits Phase 3 to three routes, but should have highlighted the homepage inconsistency that remained then. That gap is now fixed in the later release.')
add('My earlier keyword data is historical, not a post-release result. The handyman and tree-page US totals have not changed from that baseline even though the site-wide US total increased. Neither report proves that the new releases improved rankings.','small')

title('What changed before this report was delivered','Latest state / rechecked October 20')
add('Two later commits appeared after the initial comparison: da47749 adds a DesignRush listing link, and f7b6d18 removes project-growth claims, revises case-study copy, shortens titles, truncates visitor IPs and changes the hero fallback. The public page output and source were rechecked. These changes were not made by this report task. [R3]')
table(['Item','Latest verified state','Remaining work'],[
('Project outcomes','Named +215%, +280%, +190% and 3.4x claims are absent from the rechecked homepage, portfolio and case presentations. Sky High homepage now uses features.','Do not schedule the same cleanup again. Verify any future outcome claims with dated client evidence.'),
('Titles / description','All seven blog SEO titles are now 44-59 characters; niches description is 152, previously 179.','Maintain useful titles. Truncation or CTR improvement is not guaranteed.'),
('Project count / case copy','Homepage now says six projects. Several case descriptions are plainer.','Case sections still need semantic heading cleanup; originality is not proved by adjective counts.'),
('Visitor IP','New track handler truncates IPv4 to x.y.z.0 and attempts IPv6-prefix shortening.','This alone does not prove anonymity. Session IDs, location, user-agent and conditional lead records still need accurate disclosure and retention controls.'),
('Hero fallback','Failure fallback changed from 10 seconds to 4 in source.','Normal-device speed gains were not benchmarked; Times New Roman fallback remains in the normal browser.'),
('Other open work','Lead acceptance checks, contextual guide links, breadcrumb duplication, Local SEO overstatements and substantive founder proof remain.','Prioritize these plus the handyman offer and sales-page discovery.')],[100,223,172])
note('The claim ledger reviews what was true at the original October 19 verification and explicitly notes later resolutions. GSC dates have not been advanced: no ranking benefit can yet be attributed to the later release. Latest crawl and source details are kept separately from the historical observations.')

title('The corrected search baseline','Search Console / fresh exports from both properties')
table(['Property and scope','Dates represented','Clicks','Impressions','Avg. pos.'],[
('www / worldwide','Sep 29-Oct 17','1','656','32.3'),
('www / United States','Sep 29-Oct 17','0','582','35.5'),
('non-www / worldwide','Jul 18-Oct 17','11','210','7.4'),
('non-www / United States','Jul 18-Oct 17','0','125','7.62'),
('non-www / matched recent dates','Sep 29-Oct 17','0','1','1.0')],[158,119,44,82,92])
add('The www click is attributed to Nicaragua and the homepage. The non-www historical clicks are from India (10) and the UK (1). “First Google click” is only defensible within the selected www reporting window; it is not the first click across the site’s history. [D1-D3]')
table(['US page','Impressions','Avg. position','Interpretation'],[
('Handyman sales page','123','21.51','Largest priority niche-page signal; commercial offer worth improving.'),
('Tree-service sales page','31','15.61','Already revised; wait for recrawl and new data before more rewriting.'),
('HVAC SEO guide','37','59.57','Visibility exists, but the guide and SEO sales offer need distinct jobs.'),
('Auto-body marketing guide','63','30.33','Useful secondary vertical, after the main home-service priorities.'),
('Pricing','30','4.50','Inspect query relevance; brand ambiguity can inflate apparent success.')],[157,73,81,184])
h('Read the numbers correctly')
add('The 180 worldwide and 176 US query rows are disclosed query strings, not search volume or all searches. GSC omits some queries, and page totals use different aggregation from property totals. Do not add page rows to reconstruct chart totals. Average position is an aggregate, not a fixed nationwide rank. [G1]')
add('US devices: desktop 491 impressions / 36.52 position; mobile 86 / 28.12; tablet 5 / 62.20. All have zero clicks. There is not enough evidence for a reliable conversion-rate forecast or device-specific winner.','small')
note('Compared with the October 17 export through October 14, www US impressions rose from 505 to 582 and disclosed queries from 169 to 176. These are longer cumulative windows, not a controlled improvement test. The uploaded October 14-read baseline of 503 / 164 could not be reproduced from a supplied export.')

title('Indexing: report date is not data date','Discovery / current URL inspections')
add('The aggregate Page indexing report was read on October 19 but shows <b>last update October 12</b>. It lists 21 indexed URLs and 17 not indexed across “All known pages.” All four issue validations show Started. That is not validation passed or proof of a current fix. [D4]')
table(['Aggregate reason','Count','How to interpret'],[
('Discovered - currently not indexed','13','Historical examples; investigate useful sales pages first.'),
('Duplicate without user-selected canonical','2','Historical URLs must be reconciled individually; a live canonical is not proof Google accepted it.'),
('Not found (404)','1','An intentionally removed URL need not be indexed.'),
('Crawled - currently not indexed','1','The uploaded old-.html characterization was not freshly confirmed at example level.')],[208,50,237])
add('I matched all 21 indexed-example URLs to the current 38-URL sitemap. Therefore 21 current sitemap URLs are represented in that dated indexed list. The remaining 17 current URLs are <b>not automatically the same set</b> as the aggregate’s 17 exclusions, which includes legacy addresses. [D4, C1]')
table(['URL inspected on October 19','Current displayed result'],[
('/services/web-design','URL is not on Google; Page not indexed: URL unknown to Google. No crawl date or referring sitemap shown.'),
('/services/local-seo','Same result. This differs from the older aggregate discovered list and must be recorded with its own observation date.')],[180,315])
h('The next useful check')
add('Confirm sitemap submission and last read, incoming crawlable links, rendered content and URL Inspection live-test accessibility for these two pages. Record Google-selected canonical when available. Request indexing after a meaningful correction; repeated requests are not a substitute for discovery and useful content. No new request was made in this review.')
add('The 13 discovered examples include the two sales pages, care plan, niches hub, landscaping page, four project pages, three guides and terms. The complete current sitemap crosswalk is in the inventory at the end. Do not promise that all 38 must be indexed for the business to succeed. Prioritize useful sales and proof pages.','small')
note('No penalty, crawl-budget diagnosis or cause of the inspection discrepancy has been established. A 200 response and indexable metadata are prerequisites, not confirmation of indexing.')

title('Claim cleanup: resolved and remaining','Live content / rechecked October 20')
add('The initial October 19 check found the homepage Sky High +215% and 95/100 claims still live, even though Phase 3 had removed them on three other routes. The later f7b6d18 release fixes that homepage gap and removes the named growth outcomes elsewhere. This report records both the original omission and its resolution. [C1-C2, R3]')
table(['Touchpoint','Latest status','Next action'],[
('Sky High homepage','Resolved: feature-based copy, accurate service-area wording, no +215% or 95/100 badge.','Preserve the corrected claim scope.'),
('Tuxford / Alaska / V Vasquez','Resolved for the named +280%, +190% and 3.4x outcomes in the rechecked presentations.','Check any new numerical outcomes against client evidence.'),
('Other speed badges','Fixed 97/98/99 scores and broader performance positioning still appear.','Record URL, device, test date and method; avoid presenting stripped-audit results as normal visitor performance.'),
('Homepage broader promises','99/100, 0.38s and generalized sub-second/verified positioning remain.','Substantiate or propose accurate qualified wording.'),
('Local SEO offer','Map Pack “ensure” wording, universal city-page advice and broad schema-impact statements remain.','Replace with actual deliverables and conditional expectations after exact-copy approval.'),
('Homepage project count','Resolved: now six projects.','Keep overview and portfolio counts synchronized.')],[125,205,165])
h('Proof required for a results claim')
add('Keep the source, client permission, measurement window, denominator, lead definition and other marketing changes. GSC can support search traffic outcomes; it cannot by itself prove qualified-lead growth. The absence of supporting evidence does not establish that an outcome never happened.')
note('The next claim review should focus on remaining performance and SEO promises. Do not redo the completed project-growth cleanup. The original screenshots are retained as historical evidence, not as a representation of the latest homepage.')

title('Technical checks: what passes, what remains','38 current sitemap URLs / recheck October 20')
table(['Check','Verified result','Meaning'],[
('HTTP / H1 / canonical / robots','38/38 returned 200, one H1, matching self-canonical and no observed noindex.','Good baseline. Not a comprehensive SEO pass, rendering audit or Google canonical confirmation.'),
('Blog title lengths','Resolved: seven titles changed from 67-76 to 44-59 characters.','Keep concise meaning. The earlier fixed 65-character truncation claim was still incorrect.'),
('Breadcrumb duplication','Seven pages have two BreadcrumbList objects; six are identical duplicates.','The niches pair differs. Consolidate carefully; no ranking penalty was demonstrated.'),
('Case-study structure','Each case has three H3 approach headings and one H2 global CTA. Section labels are styled divs.','“One subheading” is inaccurate. Promote meaningful sections into a coherent H2/H3 hierarchy.'),
('Guide discovery','Tree, auto-body and HVAC guides each have one unique incoming main-content page: /blog.','Under-linked, not orphaned. Add a relevant contextual link from each niche/service route.'),
('Niches description / URL','Description is now 152 characters; /niches/ remains the address.','Shorten only for clarity. Do not migrate a functioning URL merely because its wording is jargon.')],[123,192,180])
h('Changes worth doing together')
add('Use a small remaining technical batch: the correct heading hierarchy, one consistent breadcrumb graph and contextual guide links. The title-shortening batch is already published. Keep URLs and design stable unless a clear user benefit justifies changing them. Validate the rendered result and link destinations after release.')
add('A single H1 is an editorial convention used in these checks, not a promise of higher ranking. Duplicate breadcrumb cleanup and shorter titles are maintenance improvements; the evidence does not identify them as the dominant limit on top-three positions. [G2]','small')
note('The Pick N Drop case study has 487 word tokens in our main-content extraction, including its shared CTA. The uploaded 439 uses an unspecified boundary. Neither number proves thin content. Add original evidence because it answers buyer questions, not to reach a word count.')

title('Design, motion and the audit-only page','Real experience / preserved user decision')
add('<b>Does keeping the stripped audit page hurt ranking?</b> This audit does not establish that it has caused a ranking loss or a penalty. It also cannot certify that the setup has no risk. What it demonstrably does is make an audit score unrepresentative of the normal page workload. Keep it as requested and measure the real experience separately. [C1-C3, G3]')
table(['Observation','Evidence / practical consequence'],[
('Normal versus audit response','Normal and Googlebot-UA HTTP responses each included 13 initial external scripts; Lighthouse-UA response included zero. Main-text hashes matched in this test.'),
('Limit of that test','A spoofed user-agent fetch is not an authenticated Googlebot render. Matching text does not prove every rendered experience is equivalent or establish compliance.'),
('Live desktop typography','Computed body, H1 and paragraph font-family was Times New Roman. The deployment config includes intended web fonts, but the normal rendered page uses the fallback.'),
('Performance evidence','GSC Core Web Vitals showed no data. Initial script bodies totaled 664,535 uncompressed bytes in the initial fetch and 665,066 in the final recheck. This excludes dynamic/lazy resources and is not transfer size.'),
('Uploaded payload claim','The exact 1.2 MB / 520 KB Three.js / all-devices claim was not reproduced. A Three.js scene exists in source; total runtime load needs a device/network trace.'),
('Speed Insights','Its component is already in the deployed layout and tracking scripts appear in the normal DOM. Dashboard collection, sample size and plan/settings were not inspected.')],[131,364])
h('Preserve the visual identity; remove friction with evidence')
add('The dark palette, animated hero and project screenshots give the site a recognizable presentation. First fix the verified font application issue after preview approval. Then test first-use mobile reading, menu, calls to action, reduced motion, scroll reveals and form completion on the normal route. Change animation cost only where device testing supports it.')
add('Google uses Core Web Vitals among many signals; a strong score does not guarantee ranking. A missing field report is unknown performance, not a pass or a fail. Do not use the uploaded 6.5/10 “real visitors” score as a measured baseline. [G3, G8]','small')

title('IP capture, attribution and lead reliability','Production source review / no visitor records accessed')
add('Tracking is not wholly unpublished. The current deployment includes DurationTracker, /api/track, /api/lead, Vercel Analytics and Speed Insights. Separate experimental /api/collect and middleware work in the earlier workspace snapshot was not the deployed implementation. This corrects both the uploaded framing and my initial audit. [R2-R3]')
table(['Deployed behavior','Confirmed from code','Still unverified'],[
('Visitor tracking','Pageview and visible-duration events use a session ID. The new /api/track shortens IPs; country, city and user-agent remain. It sends to Axiom if configured.','Whether credentials are configured, records arrive, retention/access settings and actual bot-filter quality.'),
('Lead handling','Contact form sends to FormSubmit and /api/lead; lead route can attach the session ID. A LeadSubmitted analytics event is attempted after a successful HTTP response.','Accepted inbox delivery, reliable persisted record, duplicate handling and business qualification.'),
('Failure handling','Axiom responses are not checked for a successful status; missing credentials can produce an apparently successful route response.','A controlled end-to-end delivery test is needed; no customer form was submitted here.'),
('Source context','Current form payload has no dedicated landing-page, campaign or external-source fields. Tracker referrer_path is the previous internal route.','Reliable source-to-qualified-lead reporting is not established.'),
('Privacy wording','Live page says Axiom data is anonymized with no personal identifiers. IPs are now shortened; identifiable lead fields and session-linked records can still be sent.','Actual processing and retention need reconciliation with the wording; this is a technical discrepancy, not a legal ruling.')],[100,235,160])
h('What the next measurement phase should deliver')
add('Define inquiry click, accepted lead, qualified lead and won project separately. Preserve source/landing context with minimal necessary data, verify provider acceptance and duplicate handling, then record a controlled test. Review collection purpose, access and retention before expanding IP storage. IP counts do not measure sales and do not increase rankings.')
note('The promise “each inquiry traced to page and search” is too strong. An organic lead can often be attributed to channel and landing page, but GSC’s aggregated query data generally cannot identify that individual’s search phrase. Do not join anonymous query rows to named leads.')

title('Observed keywords to prioritize','US / Sep 29-Oct 17 / all rows below have zero clicks')
wanted=['tree service website design','web design for tree service','tree service web design company','tree service web design agency','tree service web design','website design for handyman centennial','website design for handyman colorado','handyman web design near me','seo company for hvac repair in chicago','local seo for hvac companies']
rows=[]
for q in wanted:
 r=Q[q];target='Tree-service offer' if 'tree' in q else ('National handyman offer' if 'handyman' in q else 'SEO offer + HVAC guide; inspect query/page pairing')
 rows.append((esc(q),r['Impressions'],r['Position'],target))
table(['Observed query','Impr.','Avg. pos.','Recommended destination'],rows,[226,41,58,170])
add('Destination assignments are editorial recommendations, not a claim that these fresh exports join each query to that page. Reopen filtered query/page views before diagnosing cannibalization. [D1, A2]','small')
h('Why tree service and handyman come first')
add('The tree company query has an average position of 2.33, but only three impressions. This is a signal to preserve and strengthen the relevant page, not proof of stable national top-three visibility. The handyman page has 123 US impressions, but much of its disclosed query set uses city names. Serve those owners through a strong national offer without claiming offices in those cities.')
add('The HVAC company query is commercially promising but currently far from the top results. The existing how-to guide should educate and link to a clear SEO service offer. It should not be rewritten into a sales page merely because a buyer phrase appeared in its data.')
note('Exclude ambiguous brand queries such as “embra inc. pricing plans” from buyer-keyword success metrics. Exclude unrelated “que venden” from non-brand top-three wins. The fresh US export contains only one clearly relevant non-brand query with average position at or below 3, on three impressions.')

title('Keywords to add without creating clutter','Proposed targets / demand and difficulty not yet measured')
table(['Intent / page owner','Natural phrases to cover','Content needed to deserve the visit'],[
('Website sales / existing web-design offer','website design for home service businesses; contractor website design; home service web design','Actual scope, preview process, ownership, revision terms, price basis and relevant projects.'),
('Handyman sales / existing niche page','handyman website design; websites for handyman businesses; handyman web design services','National service wording, authentic Alaska/V Vasquez examples, quote/contact flow and buyer FAQs.'),
('Tree sales / existing niche page','tree service website design; tree service web design company; tree service website cost','Keep the approved offer. Add proof only when supported; preserve its query focus and pricing.'),
('SEO sales / existing Local SEO offer','local SEO for home service businesses; SEO for contractors; local SEO services for contractors','Deliverables, exclusions, reporting, onboarding inputs, quote approach and supported examples.'),
('Examples / one distinct supporting resource','tree service website examples; handyman website examples','Annotated real projects, trade-specific decisions and labeled concepts; clear route to the relevant offer.'),
('Educational / existing guides','HVAC local SEO; local SEO for HVAC companies; contractor website cost','Practical instructions and evidence; contextual sales links without turning every paragraph into a pitch.')],[120,180,195])
h('How to add them')
add('Use the primary phrase naturally in a descriptive title, the visible main heading or opening explanation where it fits, and relevant internal-link text. Cover related questions through actual scope and examples. Do not repeat every synonym, add hidden phrases or create one page per keyword variant.')
h('Commercial versus examples intent')
add('The uploaded report is right to consider examples content, but it overstates that this is the single page type Google ranks for the main terms. Public result samples include agencies and inspiration lists. Build an examples resource only where it adds original value and has a distinct intent; retain the commercial pages. [S1-S3]')
add('No paid keyword-volume database, current localized Google top-three census or competitor link-gap dataset was obtained. These proposed phrases are relevant hypotheses, not claimed high-volume or easy keywords. Existing GSC exposure is the strongest first-party prioritization evidence.','small')

title('Authority: useful, but not the only constraint','Fresh Links report / relationship-based growth')
add('The current www Links report reproduces 27 external links from nine root domains, all reported against the homepage. This is a sample, not an exhaustive backlink inventory or a measurement of editorial quality. The assertion “none editorial” is not established. [D5, G4]')
table(['Reported linking domain','Links','Reported linking domain','Links'],[
('bestbreaks.com.au','9','netlify.app','4'),('alaskafastfixhandyman.com','3','trustpilot.com','3'),('tuxfordcollision.com','3','skyhightreeservicechicago.com','2'),('crunchbase.com','1','scamadviser.com','1'),('vvasquezhandymanllc.net','1','Total','27')],[203,44,204,44])
add('Public homepage checks found Embra credits on five client sites pointing to the non-www homepage. No Embra link was found in Pick N Drop’s fetched homepage HTML; that is not proof there is none anywhere on its site. Redirecting all credits to case studies is not automatically an improvement. Choose a useful destination in context, with client permission. [C4]')
h('A practical program running alongside page work')
table(['Work','Reviewable output','Success measure'],[
('Client proof','Two evidence-backed project stories with screenshots, scope and permission.','Useful buyer proof; referral visits and qualified inquiries.'),
('Honest reviews and identity','Accurate profiles and requests to genuine clients, with no reward for positive wording.','Verified identity and credible feedback, not a fixed rank jump.'),
('Original resource','One focused trade-specific checklist, examples article or small reproducible study.','Relevant publishers or partners choose to reference it.'),
('Selective outreach','A short list of relevant trade outlets/partners, with individual rationale and a concrete asset.','Useful conversations and editorial references; no purchased ranking links.')],[114,231,150])
add('The uploaded targets of 20 domains and eight deep links in 90 days can be aspirations, not forecasts or prerequisites. Do not buy placements, demand ranking links, mass-submit directories or force keyword-rich footer anchors. New messages or client-site changes require explicit authorization. [G5]','small')
note('A 1,000-site “real visitor speed” study needs a pilot and sampling plan. CrUX excludes sites without enough eligible traffic; lab tests cannot be relabeled as visitor data. Establish coverage, method, limitations and cost before committing to that scale. [G8]')

title('The revised next-phase plan','First 30 days / deliverables before rank promises')
table(['When / owner','Work and purpose','Acceptance gate / approval'],[
('Days 1-3\nDeveloper + owner','Close the completed project-growth cleanup; review remaining broad speed promises and Local SEO overstatements.','Exact replacement text or dated supporting evidence. Your approval before visible edits.'),
('Days 1-7\nDeveloper','Check the two sales URLs: sitemap discovery, internal links, rendered offer and live-test accessibility.','Record inspection status and next action. No claim that “validation started” means fixed.'),
('Days 1-10\nDeveloper + owner','Verify accepted-lead delivery, existing analytics/Speed Insights collection and privacy mismatch.','Controlled test plan, source fields, provider response checks and minimal-data decision. Approval before new collection/settings or visible policy text.'),
('Days 4-14\nDeveloper','Handyman page proposal: clear national offer, near-top proof, pricing, scope, sample process and FAQs.','Approved exact copy; published checks for links, metadata, desktop/mobile and inquiry flow.'),
('Days 7-21\nDeveloper + owner','Bring the Local SEO offer forward: actual deliverables, exclusions, reporting, quote approach and a supported example.','Owner confirms commercial scope. Approve visible proposal. Avoid rank promises and automatic city-page expansion.'),
('Days 7-21\nDeveloper','Small remaining batch: semantic case-study headings, breadcrumb cleanup, guide links and font preview. Titles are already shortened.','Correct rendered structure and coherent design. Ask for approval of visible changes, including the font correction.'),
('Days 1-30, parallel\nOwner + researcher','Gather client proof and founder details; prepare accurate profiles and a focused authority resource.','Real evidence, client permissions and explicit outreach approval before messages are sent.')],[99,227,169])
note('The uploaded roadmap postpones the Local SEO offer until weeks 9-13. That is too late for a stated goal of selling SEO, especially while its page remains unindexed and its promises need correction. Prepare it early; measure its search impact later.')
add('This is the next-phase recommendation, not implementation already authorized by the attached document. No approval is requested merely to deliver this report.','small')

title('Days 31-90 and the measurement contract','Top three means relevant, repeated and commercially useful')
table(['Window','Output','What determines the next move'],[
('Days 31-45','One original examples/proof resource, relevant contextual links and approved founder/author details.','Distinct intent and useful evidence; no duplicate sales page.'),
('Days 31-60','Selective relationship outreach and a pilot research asset if feasible.','Editorial relevance, verified method and real responses, not link-count milestones alone.'),
('Days 46-90','Refine queries/pages with repeated US buyer exposure; consider auto-body expansion after home-service work.','Qualified inquiries, delivery capacity, recrawl and search evidence.'),
('Every release','Commit/deployment record, exact approval scope, live checks and rollback reference.','No release is reported as a ranking success without subsequent evidence.')],[78,227,190])
h('Use comparable windows')
add('October 28 is an early directional look. For the planned October 19-November 15 post-release window, review once data through November 15 is complete, likely around November 18-19 rather than assuming November 16. The nominal prior window is September 21-October 18, but the current www history starts September 29. Document this missing baseline coverage; do not invent zero activity.')
add('A cleaner later comparison is two complete 28-day windows: September 29-October 26 versus October 27-November 23, reviewed after data settles. Both include changes, so it measures trend, not isolated causality. Keep the US country, Web type, device, property and query cohort consistent. [D1, G1]')
h('A useful monthly dashboard')
table(['Metric','Rule'],[
('US buyer clicks / impressions','Separate branded, irrelevant and educational queries from commercial intent. Keep the same cohort.'),
('Top-three visibility','Track a fixed 10-15 buyer-query set, query/page pairs and consistent US locations/devices. Require repeated observations; three impressions are not a durable win.'),
('Indexing','Track priority sales/proof URLs and Google-selected canonical, not “index every known historical URL.”'),
('Business result','Accepted organic inquiries, qualified businesses, booked conversations and won projects; do not count IPs as leads.'),
('Experience / authority','Normal-route field metrics when available, delivery failures, useful referrals and evidence quality.')],[142,353])
add('Retire the unvalidated 59-to-75 score trajectory and the 30/150-click forecasts. Keep them only as owner-selected aspirations if desired. “Fewer than 20 impressions is provisional” is a reasonable caution, not a statistical confidence threshold.','small')

title('Release verification and scope','Eight named releases / production source reconciled')
release_desc={
'4305277':'Case-study canonicals/titles, sharing images and blog revisions.',
'edce867':'Remote-team, pricing/refund wording and PND case study.',
'2f1b984':'.html redirects and old generator-script changes.',
'6b926a5':'Industry navigation, footer discovery rows and service schema.',
'828402a':'Hero intro timing change. Code/history confirmed; exact two-second improvement not retimed here.',
'8721c96':'Homepage links and clearer home-service service-page introductions.',
'5cf96f5':'Tree-service offer, early project proof, split/full pricing and six FAQs.',
'f543429':'Portfolio Sky High card, case study and guide example. Does not cover homepage featured card.'}
rows=[]
for r in SUP['releases']:
 st=r['statuses'][0];dt=datetime.fromisoformat(st['created_at'].replace('Z','+00:00')).astimezone(timezone(timedelta(hours=5,minutes=30)))
 rows.append((r['commit'],dt.strftime('%d %b %H:%M IST'),release_desc[r['commit']],link(st['target_url'],'Vercel success')))
table(['Commit','Deployment complete','Scope','Evidence'],rows,[66,112,237,80])
add('All eight named commits are in the production checkout’s history, and their Vercel commit statuses report successful deployment. That initial production snapshot was f54342976781e4d0950a2ae5829ca93da50e6e65. The final local checkout is f7b6d18; later live changes are summarized near the front. Live HTML corroborates the current key SEO and copy changes. [R1]','small')
add('The uploaded table appears to mix commit times and deployment times. Above, timestamps consistently mean the successful Vercel status creation time, converted to IST. “All eight are live” means their changes are represented in the current release, not eight simultaneous production sites.')
h('One alleged wording error is not an error')
add('The uploaded report contrasts “free local-visibility review” with the button “Request your local SEO review.” The live surrounding copy explicitly offers a free review of local search visibility. The prior summary describes the offer accurately. Different button wording is not a contradiction. [C1, A3]')
note('The original approved releases were verified in the isolated checkout. The main workspace later changed to f7b6d18. Always identify the deployed revision and observation date before attributing behavior to a source tree.')

ISSUES=[
('AUTH-1','Retain, qualify','27 links / 9 domains confirmed as a GSC sample. “None editorial” and authority as the sole/main proven bottleneck are unsupported. Run relevance-led work alongside page and indexing fixes.'),
('AUTH-2','Modify','Five homepage credits observed; none in fetched PND homepage HTML. Do not redirect all credits automatically. Choose helpful destinations with each client’s permission.'),
('TRUST-1','Named outcomes resolved','Later f7b6d18 removes the named project-growth claims, including homepage Sky High and V Vasquez. Keep remaining performance badges and SEO promises under review; require evidence for new outcomes.'),
('CONT-1','Retain, US baseline','Handyman: 123 US impressions / 21.51, not 138 monthly. Improve offer/proof/FAQs; do not infer AI authorship from word counts.'),
('CONT-2','Method invalid; partial cleanup','Later release makes case copy plainer. Still review buyer usefulness on handyman/plumber/integrations. The stated hype rates do not establish authorship or quality.'),
('TRUST-2','Retain, scope','About lacks a substantive founder profile. Article Person/byline markup already exists. Add an owner-approved bio and genuine credentials, not redundant schema or invented experience.'),
('KW-1','Pilot','No dedicated examples guides among the 38 current URLs. Test distinct examples intent using original work; commercial intent still needs sales pages.'),
('MEAS-1','Reframe, urgent','Tracking code is already deployed. Verify acceptance, source fields, qualification and privacy. Do not imply each lead can be tied to an individual organic query.'),
('TECH-1','Resolved; monitor','Seven blog titles are now 44-59 characters. The original length finding was valid before the later release; fixed-cutoff and guaranteed-CTR claims were not.'),
('TECH-2','Correct description','Cases have three H3s plus a shared-CTA H2. Use semantic H2 section headings; do not call the entire page one-subheading content.'),
('LINK-1','Retain','One unique main-content incoming page per named guide. Add relevant niche/service links; these pages are not literally orphaned.'),
('BRAND-1','Retain cautiously','Worldwide domain query 4.8 and “embra” 24.7 reproduce. Consistent identity helps recognition but cannot guarantee number one for an ambiguous name.'),
('IDX-1','Expand, urgent','October 12 aggregate has 13 discovered examples. Fresh service inspections say unknown to Google. Inspect discovery now; do not reduce this to links and waiting.'),
('SPEED-1','Measure first','Exact 1.2 MB / 520 KB/all-devices not reproduced. Speed Insights component exists. Verify collection and normal-device performance; keep the audit variant.'),
('CONT-3','Evidence, not length','Our PND main-content count is 487 including CTA, versus unspecified 439. Add useful process/results evidence with consent, not a word quota.'),
('TECH-3','Correct count','Seven pages contain two BreadcrumbLists; six pairs identical, niches pair differs. Low-priority consistency cleanup.'),
('TECH-4','Description resolved','Description is now 152 characters. Retain /niches/; jargon alone does not justify URL migration.'),
('KW-2','Retain restriction','Worldwide city averages roughly 36-50; US Chicago/LA/Alaska are 42.71/55.45/51.18. Add real local proof only; no mass city pages.'),
('DOC-1','Unverified history','Three contradictory summary versions were not supplied or located as a complete set. Keep a dated authoritative record; do not delete/archive user files on this assertion.')]
for start in [0,10]:
 title('Decisions on all 19 open issues'+(' - continued' if start else ''),'Uploaded report / page 6 register')
 add('This adjudicates every issue ID from the uploaded register. Proposed work remains subject to the relevant content, account, client and outreach approvals. [U1, C1-C4, D1-D5, R2]','small')
 table(['ID','Decision','Verified correction / action'],ISSUES[start:start+10],[65,100,330])

LEDGER=[]
def claim(id,pages,claimtext,status,finding): LEDGER.append(dict(id=id,pages=pages,claim=claimtext,status=status,finding=finding))
# Repeated claims are consolidated. The issue-register decisions above are part of this ledger.
claim('L01','1-2','59/100, previously 57, first audit 39','Partly verified','Current weighted total is 59.25, rounding to 59; previous values give 56.75, rounding to 57. Original 39 baseline/method not supplied. No rank-predictive validity.')
claim('L02','1-2','Technically clean, honest, consistent; authority is main limit','Overstated','The initial check found indexing, homepage claims, typography, SEO promises and measurement gaps. Later project-claim fixes do not establish backlinks as the main cause of limited rankings.')
claim('L03','1-2,4','1 click, 656 impressions, 180 searches','Verified with scope','www worldwide Sep 29-Oct 17: correct click/impression totals and 180 disclosed query rows. Not US performance or market search volume.')
claim('L04','1-2,4','First Google click','Misleading scope','One www click in selected dates; historical non-www has 11. The www click came from Nicaragua. No US click in the inspected windows.')
claim('L05','1-3','All eight named releases are live','Verified scope','All named commits have successful Vercel statuses and are in current production history; current key changes corroborated. Not proof these are every deployment ever made in that interval.')
claim('L06','2-3','All 38 pages pass status/H1/canonical/indexability checks','Verified limited checks','38 current sitemap URLs pass these HTTP/HTML checks. That does not prove rendering quality, indexing, rich-result eligibility or ranking readiness.')
claim('L07','2-3,5','Tree and Sky High now show no unproven results','Partly true / incomplete','Revised tree offer and three Phase 3 routes use feature-based proof. Homepage still had Sky High +215%, 95/100 and unsupported stack context then. These are now removed by f7b6d18. Zero-hype count remains unverified.')
claim('L08','2,4','Already page one for small tree and handyman-city searches','Qualified','Some query averages are at or below 10 on tiny samples. This is neither stable US national page-one visibility nor a fixed SERP placement.')
claim('L09','2-4,6','9 sites, 27 links, all homepage, none editorial','Partly verified','Fresh Links report reproduces counts and homepage target. It is sampled; link quality and no-editorial conclusion do not follow from these counts.')
claim('L10','2,6-8','Tuxford +280% and Alaska +190% remain; user chose to keep them','Mixed','Claims remained at initial review and were later removed. The referenced October 14 decision was not independently reproduced from an explicit approval record available here; not authorization for this task.')
claim('L11','2,6','Handyman most impressions, 138 / 20.6 and machine-written','Mixed','Worldwide page row 138 / 20.64 confirmed; US 123 / 21.51. AI authorship cannot be established from adjective density.')
claim('L12','2,6','No founder profile; no examples guides; leads untraced','Partly verified','Founder biography and dedicated examples guides absent from reviewed pages. Byline/schema and lead-event plumbing already exist; reliable sales attribution is not established.')
claim('L13','3','Release descriptions and exact times','Mostly verified','Descriptions match history/current outputs. Exact timing labels mix commit and deployment moments; see normalized Vercel completion table. Two-second hero improvement not retimed.')
claim('L14','3','Free-review wording differs from prior summary','Not a contradiction','Surrounding live copy explicitly offers a free local-visibility review. The CTA wording does not invalidate the description.')
claim('L15','3','No Brooklyn street address; menu/footer/PND present','Verified current crawl','No prior street-address string found in 38 crawled pages; remote-team wording and navigation/project elements are present. This is not an exhaustive archive or asset inspection.')
claim('L16','3,6','Seven 67-76 character blog titles are cut off','Partly verified','Seven original lengths confirmed; later shortened to 44-59. No fixed 65-character cutoff or screenshot proving all were cut off. [G2]')
claim('L17','3,6,11','Seven hype rates 10.4-14.8; above 10 means machine-written','Unsupported method','No full dictionary, word boundary or exclusions supplied. Do not use this as an AI detector, originality score or Google penalty threshold.')
claim('L18','3,7','Proxy retained; Google ranks on real-visitor data','Decision correct; rationale oversimplified','Keep it per user. CWV is one component among many ranking signals. Text parity in our UA test does not certify every rendered path or prove no ranking harm.')
claim('L19','3','Remote wording option B; prices/animations unchanged except intro','Historical qualification','Current remote wording and release scope supported. No new broad price/motion change is evidenced; exact historic owner-decision wording outside available records remains unverified.')
claim('L20','4','Data to Oct 17 excludes Oct 18-19 release effects','Verified','Dates precede releases. Delay varies; “2-3 days” is operational guidance, not a fixed reporting SLA.')
claim('L21','4','Since Oct 14 read: 503 to 656, 164 to 180, 0 to 1, 30.8 to 32.3','Historical baseline not reproduced','Current endpoint verified. No matching Oct 14-read export supplied. Oct 17 saved export through Oct 14 shows 574 worldwide impressions, 173 rows, one click; these are different snapshots.')
claim('L22','4','Worse average is normal because Google tests more searches','Plausible hypothesis','Changing query/country mix can alter aggregate position; the specific cause is not proven here. Use fixed query/page cohorts.')
claim('L23','4','23 pages have impressions; listed page metrics','Verified worldwide','23 worldwide page rows; listed homepage, handyman, pricing, about, auto-body and city metrics reproduce. These are not the US-only priorities.')
claim('L24','4','Watch-list query counts/positions','Verified worldwide','Handyman Centennial 16/8.06, Colorado 9/9.78; tree 12/17.17; auto-body marketing 22/35.5; domain 19/4.79; embra 25/24.72; HVAC Chicago 27/47.96.')
claim('L25','4,5,9','21 of 38 indexed; 13+2+1+1 not indexed','Qualified / crosswalk added','Counts are from All known pages last updated Oct 12. All 21 indexed examples match current sitemap; remaining current URLs are not automatically identical to legacy exclusions.')
claim('L26','4','All four fixes validation started','State verified, outcome not','All four issue validations show Started. This does not mean fixes passed or Google indexed the pages. Old-.html example was not freshly reverified.')
claim('L27','5','Technical 9, indexing 6, content 7.5, fit 6.5, trust 5.5','Opinion, not measurement','Underlying selected observations partly verified; ten-point scales and weighting are subjective. No reproducible rubric validates these category scores.')
claim('L28','5','Links 8.5, backlinks 2, speed 6.5, brand 5, UX 6.5','Opinion / missing evidence','Link sample and brand averages are observable. “Real visitor speed” has no field baseline here; scores are not measurements or rank predictors.')
claim('L29','5','Before line means Oct 14 / first audit','Internal inconsistency','Text says the dark line is Oct 14; table header calls it first audit. Clarify the baseline; do not combine a 39 first score with the 57 comparator.')
claim('L30','5','Site work near ceiling; next 10-15 points mainly authority','Unsupported prioritization','Initial missed claims, font, attribution and indexing contradicted “near ceiling.” Project-growth claims are now corrected; other work remains. Point gains derive from the author’s subjective weights, not Google.')
claim('L31','5','60-65 wins long-tail; broad terms usually need 75+','Unsupported threshold','No validated dataset connects this invented score with rankings or keyword difficulty. Remove these thresholds from decisions.')
claim('L32','6','19 issue register, owners and approvals','Reviewed in full','All 19 IDs are adjudicated separately in this report. Owner labels in an attached report do not authorize execution, accounts, messages or client-site edits.')
claim('L33','7','20 domains / 8 deep links brings page-two terms toward page one','Goal, not forecast','Relevant references may help; numerical link targets do not predict rank movement or replace intent, proof and indexing.')
claim('L34','7','Verified case studies improve trust with buyers/raters','Reasonable objective','Supported claims improve credibility. Quality raters do not directly change a page’s rank; a founder or proof section is not an automatic E-E-A-T ranking factor. [G6]')
claim('L35','7','Handyman has 138 monthly impressions','Incorrect period','138 covers 19 observed days worldwide, Sep 29-Oct 17. US count is 123. It is not a monthly rate or a lead estimate.')
claim('L36','7','Examples guides fit what Google ranks for main terms','Overgeneralized','Public samples include commercial pages and listicles. No reproducible localized top-three census supplied. Match each intent rather than replacing sales pages.')
claim('L37','7','Founder page makes journalist/podcast quotes possible','Proposal','A useful identity page may support outreach confidence; media attention and quotes are not assured.')
claim('L38','7','Shorter titles will be fully visible and generate more clicks','Unproven effect','Clarity can improve appeal; Google may rewrite/truncate titles and CTR may not rise. Evaluate actual query/position cohorts after recrawl. [G2]')
claim('L39','7','Consistent profiles take domain from 4.8 to number one','Unsupported outcome','Brand consistency is reasonable; number one cannot be guaranteed, especially for ambiguous “embra.”')
claim('L40','7','Every inquiry traced to page and search','Overpromised','Landing-page/channel attribution is feasible with correct instrumentation. An individual’s organic query generally cannot be reconstructed from aggregate GSC rows.')
claim('L41','7','Visitor performance fixes reduce abandonment','Hypothesis to test','Plausible user benefit, but no measured abandonment or device baseline here. Keep real visitor and lab measurements distinct.')
claim('L42','7','Design, prices, motion and proxy require approval','Standing constraint','Consistent with the user’s instruction for new frontend changes and retaining the proxy. No approval follows from the uploaded document alone.')
claim('L43','8','Page and authority work should run in parallel','Adopt','Useful improvement to the short sequential release summary. Earlier full audit/keyword plan also discussed real relationships and original assets.')
claim('L44','8','Clutch/reviews/HARO/Qwoted/Jobber program','Conditional proposals','Identity, honest reviews and relevant opportunities are useful. Availability, eligibility, cost and terms of every named program were not established; no sign-up or outreach authorized.')
claim('L45','8','Turn on Speed Insights','Correct next step differs','Deployed layout already includes component; normal page loads telemetry scripts. Inspect dashboard collection, settings and samples before adding/reinstalling anything. [R2, G7]')
claim('L46','8','Study real-visitor speed of 1,000 trade sites','Feasibility unproven','CrUX coverage depends on sufficient eligible visits; lab tests are not field data. Pilot the sample and publish methodology before committing. [G8]')
claim('L47','8','Handyman/examples/founder/lead work in weeks 3-8','Modify sequence','Move lead reliability and claims/privacy checks earlier; retain focused handyman and original examples work with approvals.')
claim('L48','8','Local SEO offer waits until weeks 9-13','Not recommended','SEO sales are a stated goal and the page is unindexed with overstatements. Define and improve it in the first month alongside discovery checks.')
claim('L49','9','1 click per 28 days baseline; 30 at 90d / 150 at 6mo','Mixed units / aspiration','Baseline is worldwide over 19 observed days, not 28 and not US. No traffic/conversion forecast supports the targets.')
claim('L50','9','Two non-brand top-three queries','Not two relevant wins','Worldwide second non-brand row is unrelated “que venden,” one impression. Relevant US buyer row is tree service web design company, three impressions.')
claim('L51','9','16 page-one searches baseline; 40 / 80 later','Not reproduced as stated','Fresh worldwide query averages <=10 yield 17 rows; US yields 15. Define cutoff and exclusions; targets are aspirations, not forecasts.')
claim('L52','9','All pages indexed; 20/35 sites; 8/15 deep links','Aspirations, refine','Prioritize worthwhile canonical sales/proof pages. Do not index legacy duplicates/dead URLs or pursue arbitrary link counts at the expense of relevance.')
claim('L53','9','Few Trustpilot reviews; 5 then 10+','Baseline not verified','Three GSC links from Trustpilot is not three reviews. Exact current review count/quality was not established. Seek honest feedback without incentives for positive ratings.')
claim('L54','9','Qualified leads untracked; then tracked and growing','Partly supported','Analytics/lead plumbing exists but reliable qualified-source reporting not established. Tracking completion is a deliverable; monthly growth is not assured.')
claim('L55','9','Oct 28 first look; Nov 16 matched 28-day review','Timing needs correction','Oct 28 directional only. Wait for complete Nov 15 data. Prior window includes dates before visible www history begins; document missing coverage.')
claim('L56','9','Fewer than about 20 impressions provisional','Useful heuristic','Retain as a caution, not a statistical significance threshold. Segment only when sample sizes support interpretation.')
claim('L57','10','Prior summary covers only three releases','Correct scope','The five-page document explicitly covers three approved releases. Earlier 22-page audit and 10-page GSC plan must also be considered in a fair comparison.')
claim('L58','10','Indexing, open issues and privacy not covered in prior summary','Overstated absence','Its pages 4-5 discuss URL discovery, measurement, real experience and unpublished analytics separation; earlier reports cover indexing, capture and privacy in depth.')
claim('L59','10','Prior reports have no competitor results / only generic authority','Scope mismatch','The short summary is not a competitor audit. Prior full audit and GSC plan review named public competitors and evidence-based authority work, with appropriate limits.')
claim('L60','10','Adopted evidence standards and keyword assignments','Supported','Release IDs, matched US/device windows, feature-based proof, no duplicate city expansion and intent mapping agree with the prior plan. They do not resolve the uploaded data errors.')
claim('L61','11','Every finding sourced/dated; sources V1-C1-D1-D3-S1','Partly traceable','Useful source categories, but no attached raw exports, reproducible hype dictionary, study model or dated SERP record. This review preserves its own raw evidence.')
claim('L62','11','Glossary: positions 1-10 mean page one; nofollow little value','Oversimplified','Average position does not guarantee a literal page. GSC Links does not identify nofollow; Google treats qualifying link attributes as hints, not a fixed “little value” quantity. [G9]')
claim('L63','11','No edits/outreach by report author; no top-three guarantee','Mixed verifiability','No guarantee caveat is appropriate. Author’s historical no-action claim not independently auditable here; this review performed no deployment, form submission or outreach.')
(E/'claim-ledger.json').write_text(json.dumps(LEDGER,indent=2,ensure_ascii=False),encoding='utf-8')
for start in range(0,len(LEDGER),8):
 title('Claim-by-claim verification'+(' - '+str(start//8+1)),'Uploaded report / every page covered')
 add('Historical comparison at the initial October 19 verification, before the later f7b6d18 release. Later closures are noted below and in the latest-state section. Page references refer to the uploaded 11-page report; unknowns remain unknown.','small')
 rows=[(x['id']+'<br/>p. '+x['pages'],esc(x['claim']),'<b>'+esc(x['status'])+'</b><br/>'+esc(x['finding'])) for x in LEDGER[start:start+8]]
 table(['ID / page','Claim in uploaded report','Verdict and cross-check'],rows,[55,151,289])

title('Current sitemap inventory - 1','Live crawl / rechecked October 20')
add('All 38 rows: HTTP 200, one H1, self-canonical and no observed noindex. “Indexed list” means matched to the aggregate examples last updated October 12, not a fresh individual inspection. “Discovered list” refers to that older example set. A dash means not matched in either list; it is not a fresh indexing verdict. [C1, D4]','small')
inv=[]
for x in C['pages']:
 u=x['url'].rstrip('/');state='Indexed list' if u in indexed else ('Discovered list' if u in discovered else '-')
 if x['path'] in ['/services/web-design','/services/local-seo']:state='Unknown on Oct 19 inspection'
 inv.append((x['path'],str(x['titleLength']),str(x['breadcrumbCount']),state))
table(['Route','Title chars','BC lists','Index evidence'],inv[:20],[260,50,59,126],True)
title('Current sitemap inventory - 2','Live crawl / October 20 continuation')
table(['Route','Title chars','BC lists','Index evidence'],inv[20:],[260,50,59,126],True)
add('Seven pages have two BreadcrumbList objects. Six exact duplicate pairs occur on services, pricing, contact, about, privacy and terms; the niches pair differs. Title length is an editorial diagnostic, not a Google character limit.','small')
h('Reproducibility boundaries')
add('The crawl covered sitemap HTML, metadata, headings, structured data and link relationships. It is not an exhaustive crawl of every historical URL, PDF, image, authenticated route or JavaScript state. Client-credit checks were homepage HTML checks. Browser inspection covered the normal desktop homepage and authenticated GSC views. No new full mobile performance benchmark, conversion experiment or plagiarism corpus comparison was performed.')

title('Two findings you can see directly','Historical evidence / captured October 19')
add('<b>US search performance:</b> the selected US filter shows zero clicks, 582 impressions and average position 35.5. This is the target-market baseline, not the uploaded report’s worldwide headline. [D1]')
story.append(Image(str(E/'gsc-www-us.png'),width=495,height=495*523/1264))
story.append(Spacer(1,18))
add('<b>Historical homepage claim, now resolved:</b> the October 19 screenshot shows +215% and 95/100 before the later fix. Phase 3 did not include the homepage card; f7b6d18 subsequently corrected it. [C2]')
story.append(Image(str(E/'homepage-skyhigh-live.png'),width=495,height=495*523/1264))
story.append(Spacer(1,12))
add('Screenshots captured October 19. The saved HTML, normal-browser text and computed font evidence accompany these images in the evidence folder. A screenshot establishes visible content, not that the numerical claim is supported.','small')

title('Evidence register and source documents','Local evidence / reproducible working record')
table(['ID','Source and scope'],[
('U1','Uploaded: Embra-Master-SEO-Report-2026-10-19.pdf, 11 pages, Downloads folder. All pages extracted and rendered for review.'),
('A1','Embra-Website-Audit-and-Growth-Plan.pdf, 22 pages, October 16. Original broad audit; current-production tracking corrections identified here.'),
('A2','Embra-Search-Console-Keyword-Plan-2026-10-17.pdf, 10 pages. Both properties, US targeting, keyword CSVs and raw historical exports.'),
('A3','Embra-Changes-and-Next-Phases-2026-10-19.pdf, 5 pages. Three approved releases and next phases; not intended as a fresh full-site audit.'),
('D1-D3','October 19 GSC exports: www-worldwide, www-us and non-www-worldwide. CSVs include Chart, Queries, Pages, Countries, Devices and Filters; non-www US row from Countries.'),
('D4','October 19 indexing/inspection observations recorded in this chat; 21 indexed and 13 discovered URL lists reconstructed after workspace-file loss. No new GSC observation claimed.'),
('D5','GSC Links report and nine-domain list observed October 19 and preserved in the chat record.'),
('C1','Initial October 19 checks recorded in this chat; live-crawl.json and 38 HTML responses restored by a fresh October 20 crawl, plus sitemap, robots and UA comparisons.'),
('C2-C3','Recovered October 19 US-performance and Sky High screenshots; normal October 20 homepage text and computed-font check. Initial and final public script-body measurements exclude dynamic resources.'),
('C4','Public client-homepage credit checks in supplemental-evidence.json.'),
('R3','Later local commits da47749 and f7b6d18; public HTML rechecked October 20; track-handler diff and normal-browser font evidence.'),
('R1-R2','Production commit history and Vercel commit-status evidence. Read-only deployed source review of layout, middleware, contact, DurationTracker, /api/track and /api/lead.')],[55,440])
add('Working evidence folder: <b>output/master-review/2026-10-19</b> under the shared website project. It contains restored raw exports, current-crawl JSON, recovered screenshots and this report’s 63-entry claim ledger. See recovery-note.txt for provenance. The 19 issue decisions add an explicit action-level crosswalk.','small')
note('Unavailable or not independently established: client lead/CRM proof; actual Axiom records and settings; Vercel performance dashboard samples; historical Oct 14-read export behind the uploaded trend; complete link-quality census; localized Google top-three census; exact hype dictionary; all alleged draft versions. These remain unknown, not confirmed defects or successes.')

title('Primary references and final decisions','Source links / accessed 19 October 2026')
refs=[
('G1','Google Search Console performance definitions','https://support.google.com/webmasters/answer/7576553?hl=en','Aggregation, query/page dimensions, geography and position interpretation.'),
('G2','Google: title links','https://developers.google.com/search/docs/appearance/title-link','Concise descriptive titles; no fixed 65-character cutoff.'),
('G3','Google: page experience','https://developers.google.com/search/docs/appearance/page-experience','CWV within broader signals; good scores do not guarantee top ranking.'),
('G4','Google Search Console Links report','https://support.google.com/webmasters/answer/9049606?hl=en','Sample coverage, root domains and historical/nofollow limitations.'),
('G5','Google Search spam policies','https://developers.google.com/search/docs/essentials/spam-policies','Link schemes, distributed footer links and deceptive practices.'),
('G6','Google: helpful, reliable content','https://developers.google.com/search/docs/fundamentals/creating-helpful-content','Trust, evidence and limits of E-E-A-T/rater interpretations.'),
('G7','Vercel Speed Insights setup','https://vercel.com/docs/speed-insights/quickstart','Deployed component/scripts and dashboard verification.'),
('G8','Chrome UX Report methodology','https://developer.chrome.com/docs/crux/methodology','Eligibility and missing field-data coverage.'),
('G9','Google: nofollow link attributes','https://developers.google.com/search/blog/2019/09/evolving-nofollow-new-ways-to-identify','Qualifying link attributes are hints, not a fixed numerical value.'),
('S1','Zarla tree-service inspiration','https://www.zarla.com/inspiration/tree-service','Public examples page; not proof of a specific Google rank.'),
('S2','WebCitz tree-service website examples','https://www.webcitz.com/blog/best-tree-service-websites/','Public examples format; no competitor private analytics.'),
('S3','HandySitePro handyman examples','https://handysitepro.com/blog/handyman-website-examples','Public examples intent; complements the commercial-page research in A2.')]
table(['ID','Reference','Used for'],[(a,link(c,b),d) for a,b,c,d in refs],[35,228,232])
h('The decision to carry forward')
add('Use the uploaded issue-register format, the prior US keyword plan’s evidence standards, and the corrected live findings here. The remaining work is credible/discoverable sales pages, reliable measurement, font/structure improvements and useful authority building in parallel. Preserve the later project-claim and title fixes. Top-three results must be earned and observed for relevant queries; neither an audit score nor a link quota establishes them.')
add('No website changes were made for this review. The audit-only page remains untouched. The next implementation step is an exact approval proposal covering the remaining claims, handyman/SEO offer work and any visible font or structure changes.','small')

def decoration(c,doc):
 w,h=doc.pagesize;c.saveState()
 c.setFillColor(NAVY);c.rect(0,h-10,w,10,fill=1,stroke=0)
 c.setFont('ArialB',8);c.setFillColor(BLUE);c.drawString(50,h-33,'EMBRA / VERIFIED MASTER SEO REVIEW')
 c.setFont('Arial',8);c.setFillColor(MUTED);c.drawRightString(w-50,h-33,'20 OCT 2026')
 c.setStrokeColor(LINE);c.line(50,43,w-50,43)
 c.setFont('Arial',7.5);c.drawString(50,28,'Private working report | US home-service buyers | Evidence, not ranking guarantees')
 c.setFont('ArialB',8);c.drawRightString(w-50,28,str(doc.page));c.restoreState()

class ReportDoc(SimpleDocTemplate):
 def afterFlowable(self,flowable):
  if isinstance(flowable,Paragraph) and flowable.style.name=='h1':
   key='section-'+str(self.page)
   self.canv.bookmarkPage(key)
   self.canv.addOutlineEntry(flowable.getPlainText(),key,level=0,closed=False)

doc=ReportDoc(str(OUT),pagesize=(595,842),leftMargin=50,rightMargin=50,topMargin=58,bottomMargin=57,title='Embra Verified Master SEO Review - 20 October 2026',author='Codex',subject='Independent verification of uploaded SEO report against live website, production source and Google Search Console')
doc.build(story,onFirstPage=decoration,onLaterPages=decoration)
reader=PdfReader(OUT)
manifest={'output':str(OUT),'pages':len(reader.pages),'claimEntries':len(LEDGER),'issueEntries':len(ISSUES),'sitemapURLs':len(C['pages']),'sha256':hashlib.sha256(OUT.read_bytes()).hexdigest(),'sections':sections}
(E/'report-manifest.json').write_text(json.dumps(manifest,indent=2),encoding='utf-8')
print(json.dumps(manifest,indent=2))
