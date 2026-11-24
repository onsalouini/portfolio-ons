import { projects, experience } from './data/portfolioData';

// Links each skill to the projects and internships that prove it.
// A skill matches when one of its keywords appears in a project's tech list,
// or (for specific terms) anywhere in its texts. Keys are the English labels.
const KEYWORDS = {
  'Transformers (RoBERTa, XLM-R)': ['roberta', 'xlm-roberta', 'xlm-r', 'transformers'],
  EfficientNet: ['efficientnet', 'efficientnetb4'],
  CNN: ['cnn', 'efficientnet', 'efficientnetb4', 'yolov8'],
  'Transfer learning': ['transfer learning', 'efficientnetb4'],
  'Medical imaging (MRI, X-ray, DICOM)': ['dicom', 'mri', 'x-ray'],
  'Object detection': ['yolov8', 'object detection'],
  'Image classification': ['image classification', 'efficientnetb4'],
  'Text classification': ['text classification', 'ticket triage', 'roberta'],
  'LLM APIs (Groq)': ['groq'],
  'Data-leakage detection': ['leakage'],
  'Threshold tuning': ['threshold'],
  'Agile / Scrum': ['scrum', 'agile'],
  'ASP.NET Core': ['asp.net core', 'asp.net core mvc'],
  'Tailwind CSS': ['tailwind'],
  'Node.js': ['node.js', 'node'],
  'Hugging Face': ['hugging face'],
  'GitHub Actions': ['github actions'],
};

// Short or common words: only trusted when they are in the tech list itself
const TECH_ONLY = new Set(['C', 'C#', 'Java', 'REST', 'Git', 'Linux', 'UML', 'Trello', 'Render', 'F1', 'NER', 'CRF', 'React', 'Angular', 'Python', 'JavaScript', 'PHP', 'Docker', 'MySQL', 'SQLite', 'MongoDB', 'Power BI', 'JWT', 'Kibana', 'pytest', 'Streamlit', 'Label Studio', 'TF-IDF', 'OpenCV', 'NumPy', 'pandas', 'TypeScript', 'Laravel', 'Symfony']);

const flat = v => {
  if (v == null) return [];
  if (typeof v === 'string') return [v];
  if (Array.isArray(v)) return v.flatMap(flat);
  if (typeof v === 'object') return Object.values(v).flatMap(flat);
  return [];
};
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const has = (text, kw) => new RegExp(`(^|[^a-z0-9#+])${esc(kw)}(?![a-z0-9#+])`, 'i').test(text);

const entries = [
  ...experience.map(x => ({
    kind: 'xp', id: x.projectId, key: `xp-${x.company}`, title: x.company, logo: x.logo,
    tech: x.tech.join(' | ').toLowerCase(), text: flat([x.role, x.points]).join(' | ').toLowerCase(),
  })),
  ...projects.filter(p => p.tech.length).map(p => ({
    kind: 'project', id: p.id, key: p.id, title: p.title, logo: p.logo,
    tech: p.tech.join(' | ').toLowerCase(),
    text: flat([p.summary, p.description, p.features, p.metric]).join(' | ').toLowerCase(),
  })),
];

const keyOf = item => (typeof item === 'string' ? item : item.en);

export function matchesFor(item) {
  const key = keyOf(item);
  const kws = KEYWORDS[key] || [key.toLowerCase()];
  const techOnly = TECH_ONLY.has(key);
  return entries.filter(e => kws.some(kw => has(e.tech, kw) || (!techOnly && has(e.text, kw))));
}

// Precomputed counts, so the tags can show them without work at render time
export const skillCounts = new Map();
export function countFor(item) {
  const key = keyOf(item);
  if (!skillCounts.has(key)) skillCounts.set(key, matchesFor(item).length);
  return skillCounts.get(key);
}
