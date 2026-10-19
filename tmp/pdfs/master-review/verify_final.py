from pathlib import Path
from PIL import Image, ImageOps, ImageDraw
import pdfplumber, json

root=Path('C:/website projects/embrav7/kimi2/embra-next')
tmp=root/'tmp/pdfs/master-review'
pdf=root/'output/pdf/Embra-Verified-Master-SEO-Report-2026-10-20.pdf'
checks=[]
with pdfplumber.open(pdf) as doc:
    for n,p in enumerate(doc.pages,1):
        chars=p.chars
        out=[c['text'] for c in chars if c['x0']<40 or c['x1']>p.width-40 or c['top']<15 or c['bottom']>p.height-15]
        body=[c for c in chars if c['top']>48 and c['bottom']<790]
        checks.append({'page':n,'chars':len(chars),'outsideMargins':out,'bodyBottom':round(max(c['bottom'] for c in body),1)})
for start in range(1,31,4):
    sheet=Image.new('RGB',(1520,2240),'#dce4ea')
    draw=ImageDraw.Draw(sheet)
    for offset in range(4):
        page=start+offset
        if page>30: break
        img=Image.open(tmp/f'final-{page:02}.png').convert('RGB')
        img.thumbnail((730,1050))
        x=15+(offset%2)*760; y=35+(offset//2)*1120
        draw.text((x,y-22),f'Page {page}',fill='#11273c')
        sheet.paste(img,(x,y))
    sheet.save(tmp/f'contact-{start:02}.png')
assert len(checks)==30
assert all(not c['outsideMargins'] for c in checks),checks
(root/'output/master-review/2026-10-19/final-pdf-checks.json').write_text(json.dumps(checks,indent=2))
print(json.dumps({'pages':len(checks),'minimumChars':min(c['chars'] for c in checks),'maxBodyBottom':max(c['bodyBottom'] for c in checks),'outsideMargins':sum(len(c['outsideMargins']) for c in checks),'contactSheets':8}))
