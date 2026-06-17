export const portfolioData = {
  personal: {
    name: "Alouini Ons",
    title: "Étudiante Ingénieure — Data Science & IA",
    email: "onsalouini5@gmail.com",
    phone: "+216 97 739 762",
    location: "Monastir, Tunisie",
    github: "https://github.com/onsalouini",
    linkedin: "https://www.linkedin.com/in/alouini-ons-34137a36b",
    photo: "/assets/photo.jpg",
    about: "Étudiante ingénieure en Data Science & IA, passionnée par le développement web full-stack et l'IA appliquée. Expérience concrète en Angular, Symfony, React et Computer Vision. Recherche un stage pour contribuer à des projets digitaux à fort impact.",
    cv: "/assets/cv.pdf",
  },

  skills: [
    { category: "IA / Computer Vision", items: ["YOLOv8", "OpenCV", "PyTorch"], level: 90 },
    { category: "Machine Learning", items: ["Scikit-learn", "Pandas", "NumPy"], level: 88 },
    { category: "Web & Backend", items: ["Angular", "Symfony", "React", "Node.js", "MongoDB", "API REST"], level: 80 },
    { category: "Langages", items: ["Python", "Java", "C", "C#", ".NET"], level: 85 },
    { category: "Outils", items: ["Git", "Linux", "VS Code", "Trello", "UML", "Docker"], level: 75 },
    { category: "Visualisation", items: ["Power BI", "Matplotlib"], level: 78 },
  ],

  projects: [
    {
      title: "MedVision AI",
      description: "Pipeline Deep Learning pour la détection de tumeurs cérébrales (EfficientNetB4, 95.71% accuracy) et histopathologie mammaire (89.15% accuracy). Déployé via FastAPI + Streamlit.",
      tech: ["PyTorch", "EfficientNetB4", "FastAPI", "Streamlit", "DICOM"],
      github: "https://github.com/onsalouini",
      status: "Complété",
    },
    {
      title: "ForsaTech — AI Recruitment Platform",
      description: "Plateforme RH intelligente utilisant RoBERTa-based NLP pour scorer et classer automatiquement les CVs selon les offres d'emploi.",
      tech: ["RoBERTa", "NLP", "Python", "FastAPI", "React"],
      github: "https://github.com/onsalouini",
      status: "En cours",
    },
    {
      title: "MLOps HeartAI",
      description: "Pipeline MLOps complet : exploration, modularisation, FastAPI, MLflow, Docker, Elasticsearch/Kibana. CI/CD via GitHub Actions.",
      tech: ["MLflow", "Docker", "FastAPI", "GitHub Actions", "Kibana"],
      github: "https://github.com/onsalouini/mlops-heartai",
      status: "Complété",
    },
    {
      title: "Détection d'anomalies dentaires",
      description: "Modèle YOLOv8 entraîné sur radiographies médicales dentaires. Pipeline complet : collecte, annotation, augmentation. mAP ~88–92%.",
      tech: ["YOLOv8", "OpenCV", "PyTorch", "Python"],
      github: "https://github.com/onsalouini",
      status: "Complété",
    },
    {
      title: "A.I.R — Artificial Intelligence Recruitment",
      description: "Système NLP d'extraction automatique d'infos depuis des CVs, scoring de matching candidats/offres. Architecture BERT/Sentence-BERT.",
      tech: ["BERT", "NLP", "FastAPI", "React", "MongoDB"],
      github: "https://github.com/onsalouini",
      status: "60% complété",
    },
    {
      title: "MAKOGpath",
      description: "Application web & mobile de réservation de soins à domicile. Développement full-stack, gestion de sprints avec Trello.",
      tech: ["Symfony", "MySQL", "JavaScript"],
      github: "https://github.com/onsalouini",
      status: "Complété",
    },
  ],

  experience: [
    {
      company: "ForeverMo Groupe",
      location: "Kairouan",
      role: "Stagiaire Développeuse Full-Stack",
      period: "Juin 2025 — 1 mois",
      tasks: [
        "Conception & déploiement d'une app web RH complète pour +20 utilisateurs",
        "Chatbot intégré au tableau de bord via API REST",
        "Livraison en 4 sprints Trello — architecture MVC Angular + Symfony",
        "Modélisation UML complète (classes, séquences, cas d'utilisation)",
      ],
    },
  ],

  education: [
    {
      degree: "Cycle d'Ingénieur — Data Science & IA",
      school: "ESPRIM – École Supérieure Privée d'Ingénierie et de Technologies",
      location: "Monastir, Tunisie",
      period: "Sept. 2024 — Présent",
      highlight: "Admission au Concours National d'entrée aux Écoles d'Ingénieurs 2025",
    },
    {
      degree: "Cycle Préparatoire — Filière Physique-Chimie",
      school: "Faculté des Sciences de Monastir (FSM)",
      location: "Monastir, Tunisie",
      period: "Sept. 2022 — Juin 2024",
    },
    {
      degree: "Baccalauréat Sciences Expérimentales",
      school: "Lycée Ibn Rachik",
      location: "Kairouan, Tunisie",
      period: "2022",
      highlight: "Mention Bien",
    },
  ],

  languages: [
    { lang: "Arabe", level: "Langue maternelle", percent: 100 },
    { lang: "Français", level: "Courant (C1)", percent: 90 },
    { lang: "Anglais", level: "B2 Fluent", percent: 75 },
  ],

  softSkills: ["Travail d'équipe", "Gestion du temps", "Résolution de problèmes", "Adaptabilité"],
};

export default portfolioData;