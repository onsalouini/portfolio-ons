"""Generates the site's 1200x630 share image (public/og-image.jpg):
name and role on the left, the arched portrait on the right, in the
"rose poudre, mauve & prune" palette.

Run from the project root:  python scripts/make-og-home.py
Needs Pillow and node_modules (for the fonts).
"""
import io
import os
from PIL import Image, ImageDraw, ImageFilter, ImageFont

W, H = 1200, 630
FONTS = 'node_modules/@fontsource'
SERIF = f'{FONTS}/instrument-serif/files/instrument-serif-latin-400-normal.woff2'
SERIF_IT = f'{FONTS}/instrument-serif/files/instrument-serif-latin-400-italic.woff2'
SANS = f'{FONTS}/source-sans-3/files/source-sans-3-latin-600-normal.woff2'
SANS_REG = f'{FONTS}/source-sans-3/files/source-sans-3-latin-400-normal.woff2'

INK = (42, 19, 48)
SOFT = (104, 82, 112)
ROSE = (168, 50, 106)
PRUNE = (109, 34, 87)
MAUVE = (138, 75, 156)
GOLD = (162, 96, 63)


def lerp(a, b, t):
    return tuple(round(x + (y - x) * t) for x, y in zip(a, b))


# soft background: powder pink -> lilac -> peach, with blurred glows
bg = Image.new('RGB', (W, H))
px = bg.load()
c1, c2, c3 = (252, 240, 245), (245, 238, 251), (253, 241, 235)
for y in range(H):
    for x in range(W):
        t = (x * .7 + y * .3) / (W * .7 + H * .3)
        px[x, y] = lerp(c1, c2, t * 2) if t < .5 else lerp(c2, c3, (t - .5) * 2)
img = bg.convert('RGBA')
# each glow on its own layer whose transparent pixels share its color,
# so blurring does not drag in dark fringes
for box, col in [((-200, -260, 420, 300), (246, 207, 224, 170)),
                 ((700, 60, 1260, 620), (230, 212, 245, 190)),
                 ((860, 380, 1260, 760), (251, 220, 205, 170))]:
    layer = Image.new('RGBA', (W, H), col[:3] + (0,))
    ImageDraw.Draw(layer).ellipse(box, fill=col)
    img = Image.alpha_composite(img, layer.filter(ImageFilter.GaussianBlur(80)))

# arched portrait on the right
pw, ph = 330, 412
x0, y0 = 790, 110
r = pw // 2
photo = Image.open('src/assets/photo.jpg').convert('RGB').resize((pw, ph), Image.LANCZOS)


def arch(w, h, bottom_radius):
    m = Image.new('L', (w, h), 0)
    dm = ImageDraw.Draw(m)
    dm.pieslice((0, 0, w - 1, w - 1), 180, 360, fill=255)
    dm.rounded_rectangle((0, w // 2, w - 1, h - 1), radius=bottom_radius, fill=255)
    dm.rectangle((0, w // 2, w - 1, h - 1 - bottom_radius), fill=255)
    return m


mask = arch(pw, ph, 18)

shadow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
ImageDraw.Draw(shadow).rounded_rectangle((x0 + 10, y0 + 40, x0 + pw - 10, y0 + ph + 10), radius=60, fill=(90, 30, 70, 110))
img = Image.alpha_composite(img, shadow.filter(ImageFilter.GaussianBlur(28)))

d = ImageDraw.Draw(img, 'RGBA')
# offset outline
ox, oy = x0 + 18, y0 + 18
d.arc((ox, oy, ox + pw, oy + pw), 180, 360, fill=MAUVE + (150,), width=2)
d.line((ox, oy + r, ox, oy + ph - 18), fill=MAUVE + (150,), width=2)
d.line((ox + pw, oy + r, ox + pw, oy + ph - 18), fill=MAUVE + (150,), width=2)
d.rounded_rectangle((ox, oy + ph - 40, ox + pw, oy + ph), radius=18, outline=MAUVE + (150,), width=2)
# white rim, then the photo
rim = arch(pw + 12, ph + 12, 22)
img.paste((255, 255, 255, 235), (x0 - 6, y0 - 6), rim)
img.paste(photo, (x0, y0), mask)
d = ImageDraw.Draw(img, 'RGBA')


def font(path, size):
    # read into memory with the long-path prefix: FreeType and plain open()
    # both fail on very long Windows paths
    full = os.path.abspath(path)
    if os.name == 'nt':
        full = '\\\\?\\' + full
    with open(full, 'rb') as fh:
        return ImageFont.truetype(io.BytesIO(fh.read()), size)


def star(cx, cy, s, fill):
    pts = [(cx, cy - s), (cx + s * .24, cy - s * .24), (cx + s, cy), (cx + s * .24, cy + s * .24),
           (cx, cy + s), (cx - s * .24, cy + s * .24), (cx - s, cy), (cx - s * .24, cy - s * .24)]
    d.polygon(pts, fill=fill)


star(770, 140, 16, ROSE)
star(1150, 300, 10, (233, 138, 116))
star(1130, 120, 7, MAUVE)

# text block
X = 80
d.line((X, 178, X + 46, 178), fill=ROSE, width=3)
d.text((X + 62, 178), 'Data Science & AI Engineering Student', font=font(SANS, 26), fill=PRUNE, anchor='lm')
f_name = font(SERIF, 112)
d.text((X - 4, 300), 'Ons ', font=f_name, fill=INK, anchor='ls')
wx = X - 4 + d.textlength('Ons ', font=f_name)
d.text((wx, 300), 'Alouini', font=font(SERIF_IT, 112), fill=PRUNE, anchor='ls')
f_body = font(SANS_REG, 30)
d.text((X, 360), 'Machine learning · NLP · Vision · MLOps', font=f_body, fill=SOFT, anchor='ls')
d.text((X, 402), 'Seeking a PFE internship in AI / Data, 2027', font=f_body, fill=SOFT, anchor='ls')

# gradient pill
pill = Image.new('RGBA', (360, 54), (0, 0, 0, 0))
pp = pill.load()
for x in range(360):
    t = x / 359
    col = lerp((176, 55, 111), (138, 79, 168), t * 2) if t < .5 else lerp((138, 79, 168), (168, 90, 68), (t - .5) * 2)
    for y in range(54):
        pp[x, y] = col + (255,)
pm = Image.new('L', (360, 54), 0)
ImageDraw.Draw(pm).rounded_rectangle((0, 0, 359, 53), radius=27, fill=255)
img.paste(pill, (X, 470), pm)
d = ImageDraw.Draw(img, 'RGBA')
d.text((X + 180, 497), 'ESPRIM · Monastir, Tunisia', font=font(SANS, 24), fill='white', anchor='mm')

img.convert('RGB').save('public/og-image.jpg', quality=88, optimize=True, progressive=True)
print('public/og-image.jpg')
