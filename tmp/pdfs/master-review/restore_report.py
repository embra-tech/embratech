import json,re,base64,csv,zipfile,shutil
from pathlib import Path
from PIL import Image
from io import BytesIO
R=Path('C:/website projects/embrav7/kimi2/embra-next')
T=R/'tmp/pdfs/master-review';E=R/'output/master-review/2026-10-19'
T.mkdir(parents=True,exist_ok=True);E.mkdir(parents=True,exist_ok=True)
src=Path('C:/Users/dell/.codex/sessions/2026/10/15/rollout-2026-10-15T21-10-05-01a14038-79bc-7cb0-af52-1ed4f6697506.jsonl')
records=[json.loads(x) for x in src.open(encoding='utf-8')]
allowed={'build_master.py','crawl_site.py','supplement.py'}
restored=[]
for d in records:
 p=d.get('payload',{}); code=p.get('input',p.get('arguments',''))
 if p.get('type') not in ['function_call','custom_tool_call'] or not isinstance(code,str):continue
 for m in re.finditer(r'tools\.apply_patch\(("(?:\\.|[^"\\])*")\)',code):
  patch=json.loads(m.group(1)); lines=patch.splitlines(); target=None
  for line in lines:
   if line.startswith('*** Add File: ') or line.startswith('*** Update File: '):
    target=Path(line.split(': ',1)[1])
    if target.name not in allowed or target.parent!=T:target=None
    break
  if target is None:continue
  if lines[1].startswith('*** Add File: '):
   content='\n'.join(x[1:] for x in lines[2:] if x.startswith('+'))+'\n';target.write_text(content,encoding='utf-8');restored.append(target.name)
  elif target.exists():
   content=target.read_text(encoding='utf-8'); chunks=[]; cur=[]
   for line in lines[2:]:
    if line.startswith('@@'):
     if cur:chunks.append(cur)
     cur=[]
    elif line=='*** End Patch':
     if cur:chunks.append(cur)
     cur=[]
    else:cur.append(line)
   for chunk in chunks:
    old='\n'.join(x[1:] for x in chunk if x.startswith((' ','-')))
    new='\n'.join(x[1:] for x in chunk if x.startswith((' ','+')))
    if old not in content: raise RuntimeError('Patch mismatch '+str(target))
    content=content.replace(old,new,1)
   target.write_text(content,encoding='utf-8')
for label,filename in [('www-worldwide','https___www.embratechnologies.org_-Performance-on-Search-2026-10-19.zip'),('www-us','https___www.embratechnologies.org_-Performance-on-Search-2026-10-19 (1).zip'),('non-www-worldwide','https___embratechnologies.org_-Performance-on-Search-2026-10-19.zip')]:
 folder=E/label;folder.mkdir(exist_ok=True);data={}
 with zipfile.ZipFile(Path('C:/Users/dell/Downloads')/filename) as z:
  for name in z.namelist():
   if not name.endswith('.csv'):continue
   file=folder/Path(name).name;file.write_bytes(z.read(name));data[file.stem]=list(csv.DictReader(file.open(encoding='utf-8-sig')))
 (E/(label+'.json')).write_text(json.dumps(data,indent=2,ensure_ascii=False),encoding='utf-8')
# Recover only screenshots displayed by this chat, never credentials or unrelated sessions.
image_calls={}
for d in records:
 p=d.get('payload',{});code=p.get('input',p.get('arguments',''))
 if p.get('type') in ['function_call','custom_tool_call'] and isinstance(code,str):
  if 'homepage project evidence visually' in code:image_calls[p['call_id']]='homepage-skyhigh-live.png'
  if p.get('call_id')=='call_d67a97cdff7646748a2e6889292dd5b3':image_calls[p['call_id']]='gsc-www-us.png'
for d in records:
 p=d.get('payload',{}); name=image_calls.get(p.get('call_id'))
 if name and p.get('type') in ['function_call_output','custom_tool_call_output']:
  out=p.get('output',[])
  if isinstance(out,list):
   for item in out:
    if item.get('type')=='input_image' and item.get('image_url','').startswith('data:image/'):
     b=base64.b64decode(item['image_url'].split(',',1)[1]);Image.open(BytesIO(b)).save(E/name);break
(E/'recovery-note.txt').write_text('The output/tmp report files were missing after the workspace changed on October 19-20. Report source and displayed screenshots were recovered from this exact chat record; original October 19 CSV exports were restored from Downloads. Public HTML evidence is re-fetched on October 20. No historical evidence is claimed to be a new GSC observation.\n',encoding='utf-8')
print('Restored scripts:',restored)
print('Images:',[x.name for x in E.glob('*.png')])
