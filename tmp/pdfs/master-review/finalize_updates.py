from pathlib import Path
import json,re
R=Path('C:/website projects/embrav7/kimi2/embra-next');T=R/'tmp/pdfs/master-review';E=R/'output/master-review/2026-10-19'
src=Path('C:/Users/dell/.codex/sessions/2026/10/15/rollout-2026-10-15T21-10-05-01a14038-79bc-7cb0-af52-1ed4f6697506.jsonl')
records=[json.loads(x) for x in src.open(encoding='utf-8')]
texts=[]
for d in records:
 p=d.get('payload',{})
 if p.get('type') not in ['function_call_output','custom_tool_call_output']:continue
 out=p.get('output',[])
 if isinstance(out,list):
  s='\n'.join(x.get('text','') for x in out if x.get('type')=='input_text')
  if 'embratechnologies.org' in s and any(k in s for k in ['URL unknown to Google','Last update: 10/12/26','1-21 of 21','Discovered - currently not indexed','Indexed 21']):texts.append(s)
(E/'gsc-recovered-observations.txt').write_text('\n\n'.join(texts),encoding='utf-8')
discovered=['/blog/local-seo-guide-for-service-businesses','/blog/website-roi-calculator','/blog/why-pagespeed-matters','/niches','/niches/landscaping-website-design','/portfolio/alaska-fast-fix','/portfolio/bestbreaks','/portfolio/tuxford-collision','/portfolio/vvasquez-handyman','/services/care-plan','/services/local-seo','/services/web-design','/terms']
notmatched=discovered+['/niches/hvac-website-design','/portfolio/pnd-laundry','/portfolio/sky-high-tree','/blog/website-cost-for-home-service-businesses']
C=json.loads((E/'live-crawl.json').read_text(encoding='utf-8'))
for filename,paths in [('gsc-discovered-pages.txt',discovered),('gsc-indexed-pages.txt',[p['path'] for p in C['pages'] if p['path'] not in notmatched])]:
 (E/filename).write_text('Reconstructed from the October 19 recorded observations and the verified 21/38 crosswalk; not a new GSC read.\n'+'\n'.join('https://www.embratechnologies.org'+p for p in paths),encoding='utf-8')
f=T/'build_master.py';s=f.read_text(encoding='utf-8')
def replace(a,b):
 global s
 if a not in s:raise RuntimeError('Missing replacement '+a[:90])
 s=s.replace(a,b)
replace("OUT=ROOT/'output/pdf/Embra-Verified-Master-SEO-Report-2026-10-19.pdf'","OUT=ROOT/'output/pdf/Embra-Verified-Master-SEO-Report-2026-10-20.pdf'")
replace("'19 OCT 2026'","'20 OCT 2026'")
replace("'Embra Verified Master SEO Review - 19 October 2026'","'Embra Verified Master SEO Review - 20 October 2026'")
replace("Embra Technologies / Verification snapshot: 19 October 2026","Embra Technologies / Verified 19-20 October 2026")
replace('Prepared October 20, 2026 from the October 19 verification. Search performance ends October 17.','Prepared October 20. GSC was read October 19 (search data through October 17); the website was rechecked after a later release. Closed issues are marked below.')
replace('Two important sales pages are still reported as not indexed; unsupported results remain on the homepage and other project pages; the normal desktop experience uses a serif fallback font; and accepted-lead measurement needs verification.','Two important sales pages were not indexed at the last inspection; broad performance and SEO promises still need substantiation; the normal desktop experience uses a serif fallback font; and accepted-lead measurement needs verification. The newer release has removed the named project-growth claims.')
replace('Correct the complete set of unsupported claims and inspect service-page discovery.','Review remaining speed/SEO promises and inspect service-page discovery. Keep the completed project-claim cleanup.')
replace('Both missed the remaining homepage Sky High claim as a follow-up. The uploaded “honest and consistent” conclusion is too broad.','Both missed the homepage Sky High claim in the initial October 19 snapshot. A later release fixed it; the original conclusion was still too broad for its evidence.')
replace('The October 19 release summary accurately limits Phase 3 to three routes, but should have highlighted the homepage inconsistency that remained.','The October 19 release summary accurately limits Phase 3 to three routes, but should have highlighted the homepage inconsistency that remained then. That gap is now fixed in the later release.')
needle="title('The corrected search baseline','Search Console / fresh exports from both properties')"
insert="""title('What changed before this report was delivered','Latest state / rechecked October 20')
add('Two later commits appeared after the initial comparison: da47749 adds a DesignRush listing link, and f7b6d18 removes project-growth claims, revises case-study copy, shortens titles, truncates visitor IPs and changes the hero fallback. The public page output and source were rechecked. These changes were not made by this report task. [R3]')
table(['Item','Latest verified state','Remaining work'],[
('Project outcomes','Named +215%, +280%, +190% and 3.4x claims are absent from the rechecked homepage, portfolio and case presentations. Sky High homepage now uses features.','Do not schedule the same cleanup again. Verify any future outcome claims with dated client evidence.'),
('Titles / description','All seven blog SEO titles are now 44-59 characters; niches description is 152, previously 179.','Maintain useful titles. Truncation or CTR improvement is not guaranteed.'),
('Project count / case copy','Homepage now says six projects. Several case descriptions are plainer.','Case sections still need semantic heading cleanup; originality is not proved by adjective counts.'),
('Visitor IP','New track handler truncates IPv4 to x.y.z.0 and attempts IPv6-prefix shortening.','This alone does not prove anonymity. Session IDs, location, user-agent and conditional lead records still need accurate disclosure and retention controls.'),
('Hero fallback','Failure fallback changed from 10 seconds to 4 in source.','Normal-device speed gains were not benchmarked; Times New Roman fallback remains in the normal browser.'),
('Other open work','Lead acceptance checks, contextual guide links, breadcrumb duplication, Local SEO overstatements and substantive founder proof remain.','Prioritize these plus the handyman offer and sales-page discovery.')],[100,223,172])
note('The claim ledger reviews what was true at the original October 19 verification and explicitly notes later resolutions. GSC dates have not been advanced: no ranking benefit can yet be attributed to the later release. Latest crawl and source details are kept separately from the historical observations.')

"""
replace(needle,insert+needle)
start=s.index("title('The claim cleanup is not finished'")
end=s.index("title('Technical checks:",start)
s=s[:start]+"""title('Claim cleanup: resolved and remaining','Live content / rechecked October 20')
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

"""+s[end:]
replace('38 current sitemap URLs / normal HTTP crawl','38 current sitemap URLs / recheck October 20')
replace("('Blog title lengths','Seven titles are 67-76 characters.','Review clarity; 65 is not Google’s fixed truncation limit. Display depends on width and generated title.'),","('Blog title lengths','Resolved: seven titles changed from 67-76 to 44-59 characters.','Keep concise meaning. The earlier fixed 65-character truncation claim was still incorrect.'),")
replace("('Niches description / URL','Description is 179 characters; /niches/ remains the address.'","('Niches description / URL','Description is now 152 characters; /niches/ remains the address.'")
replace('Use a small technical batch: concise descriptive titles, the correct heading hierarchy, one consistent breadcrumb graph and contextual guide links.','Use a small remaining technical batch: the correct heading hierarchy, one consistent breadcrumb graph and contextual guide links. The title-shortening batch is already published.')
replace('Initial script bodies totaled 664,535 uncompressed bytes in our fetch.','Initial script bodies totaled 664,535 uncompressed bytes in the initial fetch and 665,066 in the final recheck.')
replace('Pageview and visible-duration events use a session ID. /api/track adds raw forwarded IP, country, city and user-agent; sends to Axiom if configured.','Pageview and visible-duration events use a session ID. The new /api/track shortens IPs; country, city and user-agent remain. It sends to Axiom if configured.')
replace('Live page says Axiom data is anonymized with no personal identifiers. Deployed code can send raw IP and lead data.','Live page says Axiom data is anonymized with no personal identifiers. IPs are now shortened; identifiable lead fields and session-linked records can still be sent.')
replace('Complete claims register: homepage Sky High, Tuxford, Alaska, V Vasquez, broad speed promises and Local SEO overstatements.','Close the completed project-growth cleanup; review remaining broad speed promises and Local SEO overstatements.')
replace('Small technical batch: titles, semantic case-study headings, breadcrumb cleanup, guide links; font preview.','Small remaining batch: semantic case-study headings, breadcrumb cleanup, guide links and font preview. Titles are already shortened.')
replace("('TRUST-1','Expand, urgent','Include homepage Sky High and V Vasquez alongside Tuxford/Alaska. GSC alone cannot prove lead-growth claims. Require dates, definitions, CRM evidence and permission or approved replacement.'),","('TRUST-1','Named outcomes resolved','Later f7b6d18 removes the named project-growth claims, including homepage Sky High and V Vasquez. Keep remaining performance badges and SEO promises under review; require evidence for new outcomes.'),")
replace("('CONT-2','Replace method','Seven listed pages can receive editorial review, but 10.4-14.8 “hype words” per 1,000 is not reproducible without a dictionary and is not an AI or ranking classifier.'),","('CONT-2','Method invalid; partial cleanup','Later release makes case copy plainer. Still review buyer usefulness on handyman/plumber/integrations. The stated hype rates do not establish authorship or quality.'),")
replace("('TECH-1','Retain, lower claim','Seven titles exceed 65 characters; no fixed Google 65-character limit or proof all are cut off. Edit for useful concise meaning.'),","('TECH-1','Resolved; monitor','Seven blog titles are now 44-59 characters. The original length finding was valid before the later release; fixed-cutoff and guaranteed-CTR claims were not.'),")
replace("('TECH-4','Avoid URL churn','179-character description confirmed. Clarify if helpful; /niches/ alone does not justify an /industries/ migration.'),","('TECH-4','Description resolved','Description is now 152 characters. Retain /niches/; jargon alone does not justify URL migration.'),")
replace('The current checkout is f54342976781e4d0950a2ae5829ca93da50e6e65.','That initial production snapshot was f54342976781e4d0950a2ae5829ca93da50e6e65. The final local checkout is f7b6d18; later live changes are summarized near the front.')
replace('The approved changes were implemented in the isolated production checkout. The main workspace contains separate unpublished tracking work. Auditing that workspace alone would produce an inaccurate account of the live site.','The original approved releases were verified in the isolated checkout. The main workspace later changed to f7b6d18. Always identify the deployed revision and observation date before attributing behavior to a source tree.')
replace('Repeated assertions are grouped. “Verified” refers to the stated scope; proposals and historical statements are not converted into established facts. Page references below refer to the uploaded 11-page report. The 19 issue IDs have their own complete decisions above.','Historical comparison at the initial October 19 verification, before the later f7b6d18 release. Later closures are noted below and in the latest-state section. Page references refer to the uploaded 11-page report; unknowns remain unknown.')
replace('Homepage still has Sky High +215%, 95/100 and unsupported stack context. Zero-hype count is unverified.','Homepage still had Sky High +215%, 95/100 and unsupported stack context then. These are now removed by f7b6d18. Zero-hype count remains unverified.')
replace('Claims remain. The referenced October 14 decision','Claims remained at initial review and were later removed. The referenced October 14 decision')
replace('Seven lengths confirmed. No fixed 65-character cutoff; displayed Google title and truncation vary. No current screenshot proves all seven cut off. [G2]','Seven original lengths confirmed; later shortened to 44-59. No fixed 65-character cutoff or screenshot proving all were cut off. [G2]')
replace('Current missed claims, font, source attribution and service indexing contradict “near ceiling.”','Initial missed claims, font, attribution and indexing contradicted “near ceiling.” Project-growth claims are now corrected; other work remains.')
replace('Current sitemap inventory - 1\',\'Live crawl / 19 October 2026','Current sitemap inventory - 1\',\'Live crawl / rechecked October 20')
replace('Live crawl / continuation','Live crawl / October 20 continuation')
replace('Remaining homepage claim:</b> Sky High still displays +215% Emergency Leads and PageSpeed 95/100 in the normal visitor experience. The approved Phase 3 scope did not include this homepage card.','Historical homepage claim, now resolved:</b> the October 19 screenshot shows +215% and 95/100 before the later fix. Phase 3 did not include the homepage card; f7b6d18 subsequently corrected it.')
replace('Captured evidence / normal Chrome and Search Console','Historical evidence / captured October 19')
replace('live-crawl.json, 38 saved HTML responses, sitemap, robots and normal/Googlebot/Lighthouse user-agent comparisons.','Initial October 19 checks recorded in this chat; live-crawl.json and 38 HTML responses restored by a fresh October 20 crawl, plus sitemap, robots and UA comparisons.')
replace('GSC aggregate indexing screenshot/text, all 21 indexed examples, 13 discovered examples and two fresh service URL inspections. Dates distinguished in this report.','October 19 indexing/inspection observations recorded in this chat; 21 indexed and 13 discovered URL lists reconstructed after workspace-file loss. No new GSC observation claimed.')
replace('GSC Links screenshot/text and nine-domain list, read October 19.','GSC Links report and nine-domain list observed October 19 and preserved in the chat record.')
replace('It contains raw exports, JSON, screenshots and this report’s 63-entry claim ledger.','It contains restored raw exports, current-crawl JSON, recovered screenshots and this report’s 63-entry claim ledger. See recovery-note.txt for provenance.')
replace("('R1-R2','Production commit history", "('R3','Later local commits da47749 and f7b6d18; public HTML rechecked October 20; track-handler diff and normal-browser font evidence.'),\n+('R1-R2','Production commit history".replace('\n+','\n'))
replace('The immediate work is supported claims, discoverable and credible sales pages, reliable measurement and useful authority building in parallel.','The remaining work is credible/discoverable sales pages, reliable measurement, font/structure improvements and useful authority building in parallel. Preserve the later project-claim and title fixes.')
f.write_text(s,encoding='utf-8')
print('Applied latest-state updates; restored GSC crosswalk evidence.')
