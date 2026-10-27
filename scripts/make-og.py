"""Generates the 1200x630 share image of each featured project (public/og/<id>.jpg)
from its banner data: brand colors, logo, title and tagline.

Run from portfolio-ons1/:  python scripts/make-og.py
Needs Pillow, Node (to read portfolioData.js) and Chrome (to rasterize SVG logos).
"""
import json, os, subprocess, tempfile
from PIL import Image, ImageDraw, ImageFilter, ImageFont

W, H = 1200, 630
FONT = 'node_modules/@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2'
CHROME = r'C:\Program Files\Google\Chrome\Application\chrome.exe'

def font(size, weight):
    f = ImageFont.truetype(FONT, size)
    f.set_variation_by_axes([weight])
    return f

def hex_rgb(h):
    h = h.lstrip('#')
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))

def mix(a, b, t):
    return tuple(round(x + (y - x) * t) for x, y in zip(a, b))

def load_projects():
    js = ("import('data:text/javascript,'+encodeURIComponent(require('fs').readFileSync('src/data/portfolioData.js','utf8')))"
          ".then(m=>console.log(JSON.stringify(m.projects.filter(p=>p.brand&&p.logo))))")
    return json.loads(subprocess.check_output(['node', '-e', js], text=True, encoding='utf-8'))

def load_logo(path, size):
    src = 'public' + path
    if src.endswith('.svg'):
        out = os.path.join(tempfile.gettempdir(), os.path.basename(src) + '.png')
        url = 'file:///' + os.path.abspath(src).replace(os.sep, '/')
        subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--hide-scrollbars', '--default-background-color=00000000',
                        '--window-size=600,600', f'--screenshot={out}', url], capture_output=True)
        im = Image.open(out).convert('RGBA').crop((0, 0, 512, 512))
    else:
        im = Image.open(src).convert('RGBA')
    im = im.resize((size, size), Image.LANCZOS)
    mask = Image.new('L', (size, size), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, size - 1, size - 1), radius=int(size * .23), fill=255)
    im.putalpha(mask)
    return im

def wrap(draw, text, f, width):
    words, lines, line = text.split(), [], ''
    for w in words:
        test = (line + ' ' + w).strip()
        if draw.textlength(test, font=f) <= width or not line:
            line = test
        else:
            lines.append(line); line = w
    return lines + [line]

def make(p):
    b1, b2, acc = (hex_rgb(c) for c in p['brand'])
    img = Image.new('RGB', (W, H))
    px = img.load()
    for y in range(H):
        for x in range(0, W):
            t = min(1, max(0, (x * .8 + y * .6) / (W * .8 + H * .6)))
            px[x, y] = mix(b1, b2, t)
    over = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(over)
    d.ellipse((-260, 330, 520, 1010), fill=acc + (40,))
    over = over.filter(ImageFilter.GaussianBlur(90))
    d = ImageDraw.Draw(over)
    d.ellipse((W - 330, -250, W + 170, 250), fill=acc + (52,))
    d.ellipse((W - 330, H - 150, W - 30, H + 150), fill=(255, 255, 255, 16))
    # Draw(..., 'RGBA') only blends translucent fills onto an RGB image
    img = Image.alpha_composite(img.convert('RGBA'), over).convert('RGB')
    d = ImageDraw.Draw(img, 'RGBA')

    title = p['title']['fr'] if isinstance(p['title'], dict) else p['title']
    ctx = p['context']['fr']
    tag = p['tagline']['fr']

    f_ctx = font(26, 600)
    cw = d.textlength(ctx, font=f_ctx)
    d.rounded_rectangle((80, 64, 80 + cw + 44, 64 + 50), radius=25, fill=(255, 255, 255, 30), outline=(255, 255, 255, 46), width=2)
    d.text((102, 89), ctx, font=f_ctx, fill='white', anchor='lm')

    size = 200
    logo = load_logo(p['logo'], size)
    shadow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(shadow).rounded_rectangle((80, 225, 80 + size, 225 + size), radius=46, fill=mix(acc, (0, 0, 0), .4) + (150,))
    img = Image.alpha_composite(img.convert('RGBA'), shadow.filter(ImageFilter.GaussianBlur(26)))
    img.alpha_composite(logo, (80, 205))
    img = img.convert('RGB')
    d = ImageDraw.Draw(img, 'RGBA')

    x = 330
    f_title = font(78 if len(title) < 22 else 64, 700)
    lines = wrap(d, title, f_title, W - x - 80)
    f_tag = font(30, 600)
    lh = f_title.size * 1.08
    block = lh * len(lines) + 18 + 40 + 22 + 6
    y = 305 - block / 2
    for line in lines:
        d.text((x, y), line, font=f_title, fill='white')
        y += lh
    y += 18
    d.text((x, y), tag, font=f_tag, fill=mix(acc, (255, 255, 255), .7))
    y += 40 + 22
    d.rounded_rectangle((x, y, x + 84, y + 6), radius=3, fill=acc)

    d.line((80, H - 92, W - 80, H - 92), fill=(255, 255, 255, 40), width=2)
    d.text((80, H - 52), 'Ons Alouini', font=font(30, 700), fill='white', anchor='lm')
    d.text((W - 80, H - 52), 'Data Science & IA · Portfolio', font=font(26, 500), fill=(255, 255, 255, 180), anchor='rm')

    os.makedirs('public/og', exist_ok=True)
    img.convert('RGB').save(f"public/og/{p['id']}.jpg", quality=88, optimize=True, progressive=True)
    print('og', p['id'])

if __name__ == '__main__':
    for p in load_projects():
        make(p)
