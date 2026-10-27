// Runs after `react-scripts build`. Link previews (LinkedIn, WhatsApp, Slack…) don't run
// JavaScript, so each project gets its own build/projet/<id>/index.html: the same app,
// with that project's title, description and share image in the <head>.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';

const SITE = 'https://portfolio-ons-dy34.vercel.app';
const src = readFileSync('src/data/portfolioData.js', 'utf8');
const { projects } = await import(`data:text/javascript,${encodeURIComponent(src)}`);
const html = readFileSync('build/index.html', 'utf8');

const fr = v => (typeof v === 'string' ? v : v.fr);
const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const setMeta = (doc, attr, key, value) => {
  const re = new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`);
  if (!re.test(doc)) throw new Error(`meta ${key} not found in build/index.html`);
  return doc.replace(re, `$1${esc(value)}$2`);
};

let count = 0;
for (const p of projects) {
  const title = `${fr(p.title)} — Ons Alouini`;
  const description = fr(p.summary);
  const image = existsSync(`public/og/${p.id}.jpg`) ? `${SITE}/og/${p.id}.jpg` : `${SITE}/og-image.jpg`;
  let doc = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);
  doc = setMeta(doc, 'name', 'description', description);
  doc = setMeta(doc, 'property', 'og:title', title);
  doc = setMeta(doc, 'property', 'og:description', description);
  doc = setMeta(doc, 'property', 'og:url', `${SITE}/projet/${p.id}`);
  doc = setMeta(doc, 'property', 'og:image', image);
  doc = setMeta(doc, 'property', 'og:image:alt', `${fr(p.title)} : ${fr(p.tagline || p.summary)}`);
  doc = setMeta(doc, 'name', 'twitter:image', image);
  mkdirSync(`build/projet/${p.id}`, { recursive: true });
  writeFileSync(`build/projet/${p.id}/index.html`, doc);
  count += 1;
}
console.log(`Share metadata written for ${count} project pages.`);
