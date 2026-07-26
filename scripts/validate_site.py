from pathlib import Path
import json, re
ROOT=Path(__file__).resolve().parents[1]
required=['index.html','404.html','manifest.webmanifest','sw.js','assets/css/styles.css','assets/js/data.js','assets/js/charts.js','assets/js/app.js']
missing=[p for p in required if not (ROOT/p).is_file()]
if missing: raise SystemExit(f'Missing: {missing}')
html=(ROOT/'index.html').read_text()
data=(ROOT/'assets/js/data.js').read_text()
routes=set(re.findall(r'data-route="([^"]+)"',html)); views=set(re.findall(r'data-view="([^"]+)"',html))
versions=re.findall(r"\{v:'([^']+)'",data)
assert routes==views and len(routes)==12
assert len(versions)==34 and versions[0]=='0.1' and versions[-1]=='3.1'
json.loads((ROOT/'manifest.webmanifest').read_text())
print('PASS: static site, 12 routes, 34 releases')
