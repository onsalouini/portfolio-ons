// All visible content lives here, in French (fr) and English (en).
// To edit a text, change both languages.

export const personal = {
  name: 'Ons Alouini',
  email: 'onsalouini5@gmail.com',
  phone: '+216 97 739 762',
  github: 'https://github.com/onsalouini',
  linkedin: 'https://www.linkedin.com/in/alouini-ons-34137a36b',
  cv: '/assets/CV_Ons_Alouini.pdf',
  location: { fr: 'Monastir, Tunisie', en: 'Monastir, Tunisia' },
  role: {
    fr: 'Étudiante ingénieure en Data Science & IA',
    en: 'Data Science & AI engineering student',
  },
  headline: {
    fr: "Je conçois, j'évalue et je déploie des systèmes de machine learning, de la donnée brute à l'application en ligne.",
    en: 'I design, evaluate and deploy machine-learning systems, from raw data to a live application.',
  },
  intro: {
    fr: "Étudiante en cycle ingénieur à ESPRIM, je travaille sur la modélisation prédictive, le NLP, la vision par ordinateur et le MLOps. Pendant mon stage chez Anypli, j'ai livré NEXUS AI, une plateforme en production qui intègre trois modèles de ML et un assistant LLM. J'accorde une attention particulière à l'évaluation des modèles, à la qualité des données et à l'explicabilité.",
    en: 'Engineering student at ESPRIM working on predictive modeling, NLP, computer vision and MLOps. During my internship at Anypli, I delivered NEXUS AI, a production platform running three ML models and an LLM assistant. I pay close attention to model evaluation, data quality and explainability.',
  },
  availability: {
    fr: 'Je cherche un stage PFE ou de pré-embauche en IA / Data pour 2027.',
    en: 'Looking for a PFE (end-of-studies) or pre-hire internship in AI / Data for 2027.',
  },
};

export const experience = [
  {
    company: 'Anypli',
    place: { fr: 'Monastir, Tunisie', en: 'Monastir, Tunisia' },
    period: { fr: 'Août 2026 · 1 mois', en: 'Aug 2026 · 1 month' },
    role: { fr: 'Stagiaire développeuse IA & full-stack', en: 'AI & full-stack developer intern' },
    project: 'NEXUS AI',
    projectId: 'nexus-ai',
    points: {
      fr: [
        "Conception de NEXUS AI, plateforme de gestion pour agences digitales qui réunit projets, support client et finances, avec cinq espaces selon le rôle.",
        "Entraînement et mise en service de 3 modèles en microservices FastAPI : santé financière (XGBoost, ROC-AUC 0,932, explications SHAP), risque d'effort projet (Gradient Boosting) et tri multilingue des tickets (FR/EN/AR, 89 % de précision sur l'urgence).",
        "API REST Laravel 12 et front React 19 / TypeScript : Kanban avec affectation automatique, Gantt, portail client, messagerie et assistant LLM (Groq).",
        "Sécurité et mise en production : jetons Sanctum, double authentification TOTP, isolation des données par entreprise, 39 tests PHPUnit ; déploiement sur Vercel, Render (Docker) et Aiven MySQL.",
      ],
      en: [
        'Built NEXUS AI, a management platform for digital agencies that unifies projects, customer support and finances, with five role-based workspaces.',
        'Trained and served 3 ML models as FastAPI microservices: financial health (XGBoost, ROC-AUC 0.932, SHAP explanations), project-effort risk (Gradient Boosting) and multilingual ticket triage (FR/EN/AR, 89% urgency accuracy).',
        'Laravel 12 REST API and React 19 / TypeScript front end: Kanban with automatic task assignment, Gantt planning, client portal, messaging and an LLM assistant (Groq).',
        'Secured and shipped the platform: Sanctum tokens, TOTP two-factor authentication, per-company data isolation, 39 PHPUnit tests; deployed on Vercel, Render (Docker) and Aiven MySQL.',
      ],
    },
    tech: ['Python', 'XGBoost', 'SHAP', 'FastAPI', 'Laravel', 'React', 'TypeScript', 'Docker'],
  },
  {
    company: 'ForeverMo Group',
    place: { fr: 'Kairouan, Tunisie', en: 'Kairouan, Tunisia' },
    period: { fr: 'Juin – juil. 2025', en: 'Jun – Jul 2025' },
    role: { fr: 'Stagiaire développeuse full-stack', en: 'Full-stack developer intern' },
    project: { fr: 'Plateforme RH', en: 'HR platform' },
    projectId: 'rh-platform',
    points: {
      fr: [
        "Conception et déploiement d'une application web RH (employés, départements, projets, présence) utilisée par plus de 20 employés, en remplacement d'un suivi sur Excel.",
        'Architecture REST Angular + Symfony, accès par rôle avec JWT, MySQL (Doctrine ORM), tableau de bord statistique et chatbot intégré.',
        'Livraison en 4 sprints Agile, documentation UML (classes, séquences, cas d’utilisation).',
      ],
      en: [
        'Designed and deployed an HR web app (employees, departments, projects, attendance) used by 20+ employees, replacing manual Excel tracking.',
        'RESTful Angular + Symfony architecture with JWT role-based access on MySQL (Doctrine ORM), an admin statistics dashboard and an integrated chatbot.',
        'Delivered in 4 Agile sprints and documented with UML (class, sequence, use-case diagrams).',
      ],
    },
    tech: ['Angular', 'Symfony', 'TypeScript', 'MySQL', 'JWT', 'UML'],
  },
];

// domain keys are used by the project filter
export const domains = {
  all: { fr: 'Tous', en: 'All' },
  ml: { fr: 'ML & données', en: 'ML & data' },
  nlp: { fr: 'NLP', en: 'NLP' },
  cv: { fr: 'Vision', en: 'Vision' },
  mlops: { fr: 'MLOps', en: 'MLOps' },
  web: { fr: 'Full-stack', en: 'Full-stack' },
};

export const projects = [
  {
    id: 'nexus-ai',
    logo: '/projects/nexus-ai-logo.jpg',
    title: 'NEXUS AI',
    domains: ['ml', 'nlp', 'web'],
    context: { fr: 'Stage chez Anypli · 2026', en: 'Internship at Anypli · 2026' },
    metric: { value: { fr: '0,932', en: '0.932' }, label: { fr: 'ROC-AUC, santé financière', en: 'ROC-AUC, financial health' } },
    summary: {
      fr: "Plateforme de gestion pour agences digitales, pilotée par 3 modèles de ML et un assistant LLM.",
      en: 'Management platform for digital agencies, driven by 3 ML models and an LLM assistant.',
    },
    description: {
      fr: "NEXUS AI réunit la gestion de projets, le support client et les finances d'une agence digitale dans une seule plateforme, avec cinq espaces selon le rôle. Trois modèles servis en microservices FastAPI alimentent les décisions : la santé financière des clients (XGBoost avec explications SHAP), le risque d'effort des projets (Gradient Boosting) et le tri multilingue des tickets, réentraîné à partir des retours des agents.",
      en: "NEXUS AI brings a digital agency's project management, customer support and finances into one platform, with five role-based workspaces. Three models served as FastAPI microservices drive decisions: client financial health (XGBoost with SHAP explanations), project-effort risk (Gradient Boosting) and multilingual ticket triage, retrained from agent feedback.",
    },
    features: {
      fr: [
        'Santé financière : XGBoost, ROC-AUC 0,932, explications SHAP',
        'Tri des tickets FR/EN/AR : 89 % de précision sur l’urgence',
        'Kanban avec affectation automatique, Gantt et alertes de risque',
        'Assistant LLM (Groq) et portail client',
        'Double authentification TOTP et isolation des données par entreprise',
        '39 tests PHPUnit, déploiement Vercel, Render (Docker) et Aiven MySQL',
      ],
      en: [
        'Financial health: XGBoost, ROC-AUC 0.932, SHAP explanations',
        'FR/EN/AR ticket triage: 89% urgency accuracy',
        'Kanban with automatic assignment, Gantt planning and risk alerts',
        'LLM assistant (Groq) and client portal',
        'TOTP two-factor authentication and per-company data isolation',
        '39 PHPUnit tests, deployed on Vercel, Render (Docker) and Aiven MySQL',
      ],
    },
    tech: ['Python', 'scikit-learn', 'XGBoost', 'SHAP', 'FastAPI', 'Laravel 12', 'React 19', 'TypeScript', 'MySQL', 'Docker'],
    github: 'https://github.com/onsalouini/nexus-ai',
    video: 'rdG9o6cFJJs',
  },
  {
    id: 'saferoad-ai',
    logo: '/projects/saferoad-ai-logo.png',
    title: 'SafeRoad AI',
    domains: ['ml', 'web'],
    context: { fr: 'Projet personnel · 2026', en: 'Personal project · 2026' },
    metric: { value: { fr: '0,89', en: '0.89' }, label: { fr: 'ROC-AUC sur 300 000 trajets tests', en: 'ROC-AUC on 300K held-out records' } },
    summary: {
      fr: "Évalue le risque d'un trajet routier et recommande l'itinéraire et l'heure de départ les plus sûrs sur 24 h.",
      en: 'Scores the risk of a road trip and recommends the safest route and departure time over the next 24 hours.',
    },
    description: {
      fr: "SafeRoad AI calcule le risque d'accident d'un trajet à partir d'itinéraires réels (OSRM), des prévisions météo horaires (Open-Meteo) et d'un risque estimé segment par segment, affiché sur une carte interactive. Le modèle LightGBM est entraîné sur le jeu US Accidents (7,7 millions d'enregistrements, 94 variables construites). Il a été audité de bout en bout : calibration, stabilité par année et par État, compromis de seuil, et détection d'une variable qui provoquait une fuite de données.",
      en: 'SafeRoad AI computes the accident risk of a trip from real routes (OSRM), hourly weather forecasts (Open-Meteo) and segment-by-segment risk shown on an interactive map. The LightGBM model is trained on the US Accidents dataset (7.7M records, 94 engineered features). It was audited end to end: calibration, stability by year and state, threshold trade-offs, and detection of a feature that caused data leakage.',
    },
    features: {
      fr: [
        'LightGBM sur 7,7 M d’accidents et 94 variables, ROC-AUC 0,89',
        'Explication SHAP de chaque prédiction',
        'Fuite de données détectée et neutralisée, rapport d’évaluation publié',
        'Meilleur itinéraire et meilleure heure de départ sur 24 h',
        'Carte Leaflet segment par segment et simulateur « et si »',
        'Back FastAPI (JWT, MongoDB, historique) et front React 19',
      ],
      en: [
        'LightGBM on 7.7M accidents and 94 features, ROC-AUC 0.89',
        'SHAP explanation for every prediction',
        'Data-leakage feature detected and neutralized, published evaluation report',
        'Safest route and departure time over the next 24 hours',
        'Segment-by-segment Leaflet map and what-if simulator',
        'FastAPI back end (JWT, MongoDB, history) and React 19 front end',
      ],
    },
    tech: ['Python', 'LightGBM', 'SHAP', 'pandas', 'FastAPI', 'MongoDB', 'React', 'Leaflet', 'OpenStreetMap'],
    github: 'https://github.com/onsalouini/saferoad-ai',
    video: 'Lxh-PL0BlS8',
  },
  {
    id: 'medvision-ai',
    logo: '/projects/medvision-ai-logo.jpg',
    title: 'MedVision AI',
    domains: ['cv'],
    context: { fr: 'Projet académique', en: 'Academic project' },
    metric: { value: { fr: '95,71 %', en: '95.71%' }, label: { fr: 'accuracy, tumeurs cérébrales (IRM)', en: 'accuracy, brain-tumor MRI' } },
    summary: {
      fr: 'Diagnostic par imagerie médicale : tumeurs cérébrales sur IRM et cancer du sein en histopathologie.',
      en: 'Medical image diagnosis: brain tumors on MRI and breast cancer on histopathology.',
    },
    description: {
      fr: "MedVision AI comprend deux modules. Le premier classe les tumeurs cérébrales sur IRM avec EfficientNetB4 (transfer learning), avec une accuracy de 95,71 %, un ROC-AUC de 0,98 et des cartes Grad-CAM pour montrer les zones décisives. Le second détecte le carcinome mammaire en histopathologie avec un CNN résiduel conçu sur mesure (89,15 % d'accuracy). L'ensemble est servi par FastAPI avec une interface Streamlit compatible DICOM / PACS.",
      en: 'MedVision AI has two modules. The first classifies brain tumors on MRI with EfficientNetB4 (transfer learning), reaching 95.71% accuracy, 0.98 ROC-AUC and Grad-CAM maps that show the decisive regions. The second detects breast carcinoma on histopathology with a custom residual CNN (89.15% accuracy). Both are served by FastAPI with a Streamlit interface compatible with DICOM / PACS.',
    },
    features: {
      fr: [
        'Tumeurs cérébrales : 95,71 % d’accuracy, ROC-AUC 0,98',
        'Explicabilité Grad-CAM',
        'Histopathologie mammaire : CNN résiduel, 89,15 % d’accuracy',
        'API FastAPI et interface Streamlit',
        'Compatibilité DICOM / PACS',
      ],
      en: [
        'Brain tumors: 95.71% accuracy, 0.98 ROC-AUC',
        'Grad-CAM explainability',
        'Breast histopathology: residual CNN, 89.15% accuracy',
        'FastAPI backend and Streamlit interface',
        'DICOM / PACS compatibility',
      ],
    },
    tech: ['PyTorch', 'EfficientNetB4', 'Grad-CAM', 'FastAPI', 'Streamlit', 'DICOM'],
    github: 'https://github.com/onsalouini/Tumeurs_Detection',
    video: '6nfTJmsfdu0',
  },
  {
    id: 'fardi-caseforge',
    title: 'FARDI CaseForge',
    domains: ['nlp'],
    context: { fr: 'Projet d’équipe NLP · en cours', en: 'Team NLP project · ongoing' },
    metric: { value: { fr: 'κ 0,745', en: 'κ 0.745' }, label: { fr: 'accord inter-annotateurs', en: 'inter-annotator agreement' } },
    summary: {
      fr: 'Reconnaissance d’entités et anonymisation de textes industriels en français, arabe et anglais.',
      en: 'Named-entity recognition and anonymization of industrial texts in French, Arabic and English.',
    },
    description: {
      fr: "CaseForge transforme des textes industriels en cas pédagogiques anonymisés. J'ai construit un jeu de données NER prêt pour l'entraînement : 864 passages et 2 486 entités sur 9 étiquettes métier, enrichi de 4 corpus publics annotés à la main (plus de 12 300 entités). Le pipeline couvre la génération synthétique, la pré-annotation, la double annotation dans Label Studio, des splits figés sans fuite et les exports CoNLL, BIO et Hugging Face.",
      en: 'CaseForge turns industrial texts into anonymized teaching cases. I built a training-ready NER dataset: 864 passages and 2,486 entities over 9 business labels, enriched with 4 hand-annotated public corpora (12,300+ entities). The pipeline covers synthetic generation, pre-labeling, double annotation in Label Studio, leak-free frozen splits and CoNLL, BIO and Hugging Face exports.',
    },
    features: {
      fr: [
        '864 passages, 2 486 entités, 9 étiquettes métier (FR/AR/EN)',
        'Double annotation Label Studio, kappa de Cohen 0,745',
        'Splits figés sans fuite, exports CoNLL / BIO / Hugging Face',
        'Baseline CRF avec études d’ablation et courbes d’apprentissage',
        'Fine-tuning XLM-RoBERTa en préparation',
        '114 fiches de cas pédagogiques anonymisées',
      ],
      en: [
        '864 passages, 2,486 entities, 9 business labels (FR/AR/EN)',
        "Double annotation in Label Studio, Cohen's kappa 0.745",
        'Leak-free frozen splits, CoNLL / BIO / Hugging Face exports',
        'CRF baseline with ablation studies and learning curves',
        'XLM-RoBERTa fine-tuning in preparation',
        '114 anonymized teaching case sheets',
      ],
    },
    tech: ['Python', 'NER', 'CRF', 'XLM-RoBERTa', 'Hugging Face', 'Label Studio'],
    github: 'https://github.com/onsalouini/fardi-caseforge',
  },
  {
    id: 'forsatech',
    logo: '/projects/forsatech-logo.png',
    title: 'ForsaTech',
    domains: ['nlp', 'web'],
    context: { fr: "Projet d'équipe · Bal des Projets ESPRIM 2026", en: "Team project · ESPRIM's Bal des Projets 2026" },
    metric: { value: 'RoBERTa', label: { fr: 'analyse et scoring des CV', en: 'CV parsing and scoring' } },
    summary: {
      fr: 'Plateforme de recrutement qui analyse les CV et classe les candidats selon les offres.',
      en: 'Recruitment platform that parses CVs and ranks candidates against job offers.',
    },
    description: {
      fr: "ForsaTech est une plateforme de recrutement présentée au Bal des Projets 2026 d'ESPRIM. Un pipeline NLP basé sur RoBERTa extrait les informations des CV, puis note et classe les candidats par rapport aux offres d'emploi, avec des rapports de compatibilité détaillés.",
      en: "ForsaTech is a recruitment platform presented at ESPRIM's Bal des Projets 2026. A RoBERTa-based NLP pipeline extracts information from CVs, then scores and ranks candidates against job offers with detailed compatibility reports.",
    },
    features: {
      fr: [
        'Extraction d’informations des CV avec RoBERTa',
        'Score et classement des candidats par offre',
        'Rapports de compatibilité détaillés',
        'API REST FastAPI et interface recruteur React',
      ],
      en: [
        'CV information extraction with RoBERTa',
        'Candidate scoring and ranking per job offer',
        'Detailed compatibility reports',
        'FastAPI REST API and React recruiter interface',
      ],
    },
    tech: ['Python', 'RoBERTa', 'NLP', 'FastAPI', 'React'],
    github: 'https://github.com/BoutheinaRj/forsatech',
    video: 'FDS1YpegrzE',
  },
  {
    id: 'mlops-heartai',
    logo: '/projects/mlops-heartai-logo.svg',
    title: 'MLOps HeartAI',
    domains: ['mlops'],
    context: { fr: 'Projet académique', en: 'Academic project' },
    metric: { value: 'CI/CD', label: { fr: 'pipeline ML industrialisé', en: 'industrialized ML pipeline' } },
    summary: {
      fr: "Industrialisation d'un modèle de prédiction des maladies cardiaques, du notebook à la production surveillée.",
      en: 'Industrializing a heart-disease model, from notebook to monitored production.',
    },
    description: {
      fr: "HeartAI fait passer un modèle de prédiction des maladies cardiaques du notebook à un service industrialisé : code modulaire, API FastAPI, suivi des expériences avec MLflow, conteneurisation Docker, intégration continue avec GitHub Actions et pytest, et supervision avec Elasticsearch et Kibana.",
      en: 'HeartAI takes a heart-disease model from a notebook to an industrialized service: modular code, FastAPI serving, experiment tracking with MLflow, Docker containers, continuous integration with GitHub Actions and pytest, and monitoring with Elasticsearch and Kibana.',
    },
    features: {
      fr: [
        'Code modulaire et Makefile',
        'Suivi des expériences avec MLflow',
        'API FastAPI conteneurisée avec Docker',
        'CI/CD GitHub Actions et tests pytest',
        'Supervision Elasticsearch / Kibana',
      ],
      en: [
        'Modular code and Makefile',
        'Experiment tracking with MLflow',
        'FastAPI service containerized with Docker',
        'GitHub Actions CI/CD and pytest tests',
        'Elasticsearch / Kibana monitoring',
      ],
    },
    tech: ['MLflow', 'Docker', 'FastAPI', 'GitHub Actions', 'pytest', 'Kibana'],
    github: 'https://github.com/onsalouini/mlops-heartai',
    video: 'rIqEtz8OiZg',
  },
  {
    id: 'dental-vision',
    title: { fr: 'Détection d’anomalies dentaires', en: 'Dental anomaly detection' },
    domains: ['cv'],
    context: { fr: 'Projet académique', en: 'Academic project' },
    metric: { value: { fr: '88–92 %', en: '88–92%' }, label: { fr: 'mAP, détection YOLOv8', en: 'mAP, YOLOv8 detection' } },
    summary: {
      fr: 'Détection d’anomalies sur radiographies dentaires avec YOLOv8.',
      en: 'Anomaly detection on dental X-rays with YOLOv8.',
    },
    description: {
      fr: "Pipeline complet sur radiographies dentaires : collecte, annotation, augmentation des données et entraînement d'un détecteur YOLOv8, qui atteint un mAP de 88 à 92 % sur le jeu de test.",
      en: 'End-to-end pipeline on dental X-rays: collection, annotation, data augmentation and training of a YOLOv8 detector reaching 88–92% mAP on the test set.',
    },
    features: {
      fr: [
        'Pipeline collecte, annotation, augmentation, entraînement',
        'Détecteur YOLOv8, mAP de 88 à 92 %',
        'Prétraitement avec OpenCV',
      ],
      en: [
        'Collection, annotation, augmentation and training pipeline',
        'YOLOv8 detector, 88–92% mAP',
        'OpenCV preprocessing',
      ],
    },
    tech: ['YOLOv8', 'OpenCV', 'PyTorch', 'Python'],
    github: 'https://github.com/onsalouini/Diagnostic_Dentaire',
    video: 'XqJ1CWEX7u0',
  },
  {
    id: 'rh-platform',
    title: { fr: 'Plateforme RH', en: 'HR platform' },
    domains: ['web'],
    context: { fr: 'Stage chez ForeverMo Group · 2025', en: 'Internship at ForeverMo Group · 2025' },
    metric: { value: '20+', label: { fr: 'employés utilisateurs', en: 'employees using it' } },
    summary: {
      fr: 'Application web de gestion RH qui remplace le suivi sur Excel.',
      en: 'HR management web app replacing manual Excel tracking.',
    },
    description: {
      fr: "Pendant mon stage chez ForeverMo Group, j'ai conçu une plateforme RH qui remplace la gestion sur Excel : employés, départements, projets et pointage, avec un tableau de bord administrateur et un espace employé. L'architecture sépare le front Angular et l'API REST Symfony, sécurisée par JWT.",
      en: 'During my internship at ForeverMo Group, I built an HR platform that replaces Excel tracking: employees, departments, projects and attendance, with an admin dashboard and an employee space. The architecture separates the Angular front end from a JWT-secured Symfony REST API.',
    },
    features: {
      fr: [
        'Authentification JWT, rôles administrateur et employé',
        'Gestion des employés, départements et projets',
        'Pointage quotidien horodaté',
        'Tableau de bord statistique (présence, effectifs, projets)',
        'Chatbot intégré au tableau de bord',
      ],
      en: [
        'JWT authentication with admin and employee roles',
        'Employee, department and project management',
        'Time-stamped daily attendance',
        'Statistics dashboard (attendance, headcount, projects)',
        'Chatbot integrated into the dashboard',
      ],
    },
    tech: ['Angular', 'Symfony', 'TypeScript', 'MySQL', 'Doctrine ORM', 'JWT'],
    github: 'https://github.com/onsalouini/projet_stage',
  },
  {
    id: 'livraisonapp',
    title: 'LivraisonApp',
    domains: ['web'],
    context: { fr: "Projet d'équipe", en: 'Team project' },
    summary: {
      fr: 'Gestion de livraisons en ASP.NET Core MVC : colis, clients, livreurs et revenus.',
      en: 'Delivery management in ASP.NET Core MVC: parcels, clients, couriers and revenue.',
    },
    description: {
      fr: "Application de gestion d'un service de livraison : colis, clients, livreurs et véhicules, accès par rôle avec ASP.NET Core Identity et tableau de bord des revenus.",
      en: 'Delivery-service management app: parcels, clients, couriers and vehicles, role-based access with ASP.NET Core Identity and a revenue dashboard.',
    },
    features: {
      fr: ['CRUD colis, clients, livreurs, véhicules', 'Rôles Admin / User avec Identity', 'Tableau de bord des revenus'],
      en: ['CRUD for parcels, clients, couriers, vehicles', 'Admin / User roles with Identity', 'Revenue dashboard'],
    },
    tech: ['ASP.NET Core MVC', 'C#', 'EF Core', 'Identity', 'SQLite', 'Bootstrap'],
    github: 'https://github.com/onsalouini/Livraison',
  },
  {
    id: 'invoice-platform',
    title: { fr: 'Plateforme de gestion de factures fournisseurs', en: 'Supplier-invoice management platform' },
    domains: ['web'],
    context: { fr: 'Application soutenue devant jury', en: 'Application defended before a jury' },
    summary: {
      fr: 'Application de bout en bout pour la gestion intelligente des factures fournisseurs.',
      en: 'End-to-end application for intelligent supplier-invoice management.',
    },
    description: {
      fr: 'Application complète de gestion intelligente des factures fournisseurs, présentée et soutenue devant un jury.',
      en: 'Complete application for intelligent supplier-invoice management, presented and defended before a jury.',
    },
    features: { fr: [], en: [] },
    tech: [],
  },
  {
    id: 'makogpath',
    title: 'MAKOGpath',
    domains: ['web'],
    context: { fr: "Projet d'équipe · 2024–2025", en: 'Team project · 2024–2025' },
    summary: {
      fr: 'Application web et mobile de réservation de soins à domicile.',
      en: 'Web and mobile app for booking home healthcare.',
    },
    description: {
      fr: 'Application web et mobile de réservation de soins à domicile, développée en Symfony et MySQL et livrée en sprints Agile.',
      en: 'Web and mobile app for booking home healthcare, built with Symfony and MySQL and delivered in Agile sprints.',
    },
    features: {
      fr: ['Réservation de soins à domicile', 'Gestion des prestataires et des clients', 'Interface mobile responsive'],
      en: ['Home-care booking', 'Provider and client management', 'Responsive mobile interface'],
    },
    tech: ['Symfony', 'MySQL', 'JavaScript'],
  },
];

export const skills = [
  { name: { fr: 'Machine & deep learning', en: 'Machine & deep learning' },
    items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'XGBoost', 'LightGBM', 'CNN', 'EfficientNet', 'Transfer learning', 'pandas', 'NumPy'] },
  { name: { fr: 'Évaluation & explicabilité', en: 'Evaluation & explainability' },
    items: ['ROC-AUC', 'PR-AUC', 'F1', { fr: 'Calibration', en: 'Calibration' }, { fr: 'Choix du seuil', en: 'Threshold tuning' }, { fr: 'Détection de fuite de données', en: 'Data-leakage detection' }, 'SHAP', 'Grad-CAM'] },
  { name: { fr: 'Vision par ordinateur', en: 'Computer vision' },
    items: ['YOLOv8', 'OpenCV', { fr: 'Détection d’objets', en: 'Object detection' }, { fr: 'Classification d’images', en: 'Image classification' }, { fr: 'Imagerie médicale (IRM, radio, DICOM)', en: 'Medical imaging (MRI, X-ray, DICOM)' }] },
  { name: { fr: 'NLP & LLM', en: 'NLP & LLMs' },
    items: ['Transformers (RoBERTa, XLM-R)', 'NER', 'CRF', 'Hugging Face', 'TF-IDF', { fr: 'Classification de texte', en: 'Text classification' }, 'Label Studio', { fr: 'API LLM (Groq)', en: 'LLM APIs (Groq)' }] },
  { name: { fr: 'MLOps & cloud', en: 'MLOps & cloud' },
    items: ['MLflow', 'Docker', 'FastAPI', 'GitHub Actions', 'pytest', 'Streamlit', 'Kibana', 'Vercel', 'Render'] },
  { name: { fr: 'Développement web', en: 'Web development' },
    items: ['React', 'Angular', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Laravel', 'Symfony', 'ASP.NET Core', 'REST', 'JWT'] },
  { name: { fr: 'Langages & bases de données', en: 'Languages & databases' },
    items: ['Python', 'Java', 'C', 'C#', 'PHP', 'JavaScript', 'MySQL', 'MongoDB', 'SQLite', 'Power BI'] },
  { name: { fr: 'Outils & méthodes', en: 'Tools & methods' },
    items: ['Git', 'Linux', 'UML', 'Agile / Scrum', 'Trello'] },
];

export const education = [
  {
    degree: { fr: "Cycle d'ingénieur en informatique — Data Science & IA", en: 'Engineering degree in computer science — Data Science & AI' },
    school: 'ESPRIM — École Supérieure Privée d’Ingénierie et de Technologies',
    place: 'Monastir',
    period: { fr: 'Sept. 2024 – 2027', en: 'Sep 2024 – 2027' },
    note: {
      fr: 'Parmi les meilleurs étudiants de la promotion. Machine learning, deep learning, NLP, vision par ordinateur, MLOps, génie logiciel.',
      en: 'Consistently among the top students of my class. Machine learning, deep learning, NLP, computer vision, MLOps, software engineering.',
    },
  },
  {
    degree: { fr: 'Cycle préparatoire — Physique-Chimie', en: 'Preparatory cycle — Physics & Chemistry' },
    school: { fr: 'Faculté des Sciences de Monastir (FSM)', en: 'Faculty of Sciences of Monastir (FSM)' },
    place: 'Monastir',
    period: { fr: 'Sept. 2022 – juin 2024', en: 'Sep 2022 – Jun 2024' },
    note: {
      fr: "Admise au concours national d'entrée aux écoles d'ingénieurs.",
      en: 'Passed the National Competitive Exam for Engineering Schools.',
    },
  },
  {
    degree: { fr: 'Baccalauréat Sciences expérimentales — mention Bien', en: 'Baccalaureate in Experimental Sciences — with honors' },
    school: 'Lycée Ibn Rachik',
    place: 'Kairouan',
    period: { fr: '2022', en: '2022' },
  },
];

export const certifications = [
  {
    title: 'Hedera Certified Developer Associate (HCDA)',
    issuer: 'The Hashgraph Association',
    date: { fr: 'Juin 2026', en: 'Jun 2026' },
    pdf: '/certifs/hedera-hcda.pdf',
    thumb: '/certifs/thumbs/hcda.jpg',
    featured: true,
  },
  {
    title: 'Hedera Certified Foundation — Technical (HCF)',
    issuer: 'The Hashgraph Association',
    date: { fr: 'Juin 2026', en: 'Jun 2026' },
    pdf: '/certifs/hedera-hcf.pdf',
    thumb: '/certifs/thumbs/hcf.jpg',
    featured: true,
  },
  {
    title: 'Hedera Business Foundation (HBF)',
    issuer: 'The Hashgraph Association',
    date: { fr: 'Juin 2026', en: 'Jun 2026' },
    pdf: '/certifs/hedera-hbf.pdf',
    thumb: '/certifs/thumbs/hbf.jpg',
    featured: true,
  },
  { title: 'Getting Started with AI on Jetson Nano', issuer: 'NVIDIA Deep Learning Institute' },
  { title: 'AI Fluency: Framework & Foundations', issuer: 'Anthropic' },
  { title: 'AI Fundamentals: Foundations for Understanding AI', issuer: { fr: 'Formation en ligne', en: 'Online course' } },
];

export const activities = [
  {
    title: { fr: 'Bal des Projets ESPRIM 2026', en: "ESPRIM's Bal des Projets 2026" },
    role: { fr: 'Projet sélectionné et présenté : ForsaTech', en: 'Selected and presented project: ForsaTech' },
    text: {
      fr: "ForsaTech, notre plateforme de recrutement qui analyse les CV avec RoBERTa, a été sélectionnée pour le Bal des Projets ESPRIM 2026, où nous l'avons présentée en équipe.",
      en: "ForsaTech, our recruitment platform that parses CVs with RoBERTa, was selected for ESPRIM's Bal des Projets 2026, where we presented it as a team.",
    },
    projectId: 'forsatech',
  },
  {
    title: 'Insight Cybersecurity Hackathon',
    role: { fr: 'Participante · IEEE ESPRIM Student Branch · nov. 2025', en: 'Participant · IEEE ESPRIM Student Branch · Nov 2025' },
    text: {
      fr: 'Deux jours de défis pratiques en sécurité informatique, résolus en équipe.',
      en: 'Two days of hands-on security challenges, solved as a team.',
    },
  },
];

export const languages = [
  { name: { fr: 'Arabe', en: 'Arabic' }, level: { fr: 'langue maternelle', en: 'native' } },
  { name: { fr: 'Français', en: 'French' }, level: { fr: 'courant (C1)', en: 'fluent (C1)' } },
  { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'professionnel (B2)', en: 'professional (B2)' } },
];

export const softSkills = {
  fr: ["Travail d'équipe", 'Gestion du temps', 'Résolution de problèmes', 'Adaptabilité'],
  en: ['Teamwork', 'Time management', 'Problem solving', 'Adaptability'],
};
