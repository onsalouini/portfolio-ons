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
      id: "medvision-ai",
      title: "MedVision AI",
      description: "Pipeline Deep Learning pour la détection de tumeurs cérébrales (EfficientNetB4, 95.71% accuracy) et histopathologie mammaire (89.15% accuracy). Déployé via FastAPI + Streamlit.",
      longDescription: "MedVision AI est un système de détection médicale basé sur le Deep Learning. Il comprend deux modules : la classification de tumeurs cérébrales avec EfficientNetB4 atteignant 95.71% de précision et un ROC-AUC de 0.98, et la détection histopathologique mammaire avec un CNN résiduel personnalisé atteignant 89.15% de précision. Déployé via FastAPI avec interface Streamlit et compatibilité DICOM/PACS.",
      tech: ["PyTorch", "EfficientNetB4", "FastAPI", "Streamlit", "DICOM"],
      github: "https://github.com/onsalouini",
      video: "/videos/medvision-ai.mp4",
      status: "Complété",
      features: [
        "Classification de tumeurs cérébrales — 95.71% accuracy",
        "Détection histopathologique mammaire — 89.15% accuracy",
        "ROC-AUC score de 0.98",
        "Interface Streamlit interactive",
        "Compatibilité DICOM/PACS",
        "Déploiement FastAPI"
      ]
    },
    {
      id: "forsatech",
      title: "ForsaTech — AI Recruitment",
      description: "Plateforme RH intelligente utilisant RoBERTa-based NLP pour scorer et classer automatiquement les CVs.",
      longDescription: "ForsaTech est une plateforme de recrutement intelligente présentée au Bal des Projets 2026 à ESPRIM. Elle utilise RoBERTa pour analyser et scorer automatiquement les CVs des candidats, les classer selon les offres d'emploi, et générer des rapports de compatibilité détaillés.",
      tech: ["RoBERTa", "NLP", "Python", "FastAPI", "React"],
      github: "https://github.com/onsalouini",
      video: "/videos/forsatech.mp4",
      status: "Prêt",
      features: [
        "Scoring automatique des CVs avec RoBERTa",
        "Classement candidats / offres d'emploi",
        "Interface recruteur intuitive",
        "Rapports de compatibilité détaillés",
        "API REST FastAPI"
      ]
    },
    {
      id: "mlops-heartai",
      title: "MLOps HeartAI",
      description: "Pipeline MLOps complet : exploration, modularisation, FastAPI, MLflow, Docker, Elasticsearch/Kibana.",
      longDescription: "MLOps HeartAI couvre un pipeline MLOps complet en 7 ateliers : exploration Jupyter, modularisation du code, Makefile, FastAPI, MLflow pour le tracking, Docker pour la conteneurisation, et Elasticsearch/Kibana pour le monitoring. Étendu avec pytest et CI/CD via GitHub Actions.",
      tech: ["MLflow", "Docker", "FastAPI", "GitHub Actions", "Kibana"],
      github: "https://github.com/onsalouini/mlops-heartai",
      video: "",
      status: "Complété",
      features: [
        "Pipeline MLOps en 7 ateliers",
        "Tracking des expériences avec MLflow",
        "Conteneurisation Docker",
        "CI/CD GitHub Actions",
        "Monitoring Elasticsearch/Kibana",
        "Tests avec pytest"
      ]
    },
    {
      id: "dental-vision",
      title: "Détection d'anomalies dentaires",
      description: "Modèle YOLOv8 entraîné sur radiographies médicales dentaires. mAP ~88–92%.",
      longDescription: "Système de détection d'anomalies dentaires basé sur YOLOv8, entraîné sur des radiographies médicales. Pipeline complet incluant collecte, annotation, augmentation et entraînement. Le modèle atteint un mAP de 88-92% sur le jeu de test.",
      tech: ["YOLOv8", "OpenCV", "PyTorch", "Python"],
      github: "https://github.com/onsalouini",
      video: "/videos/dental-vision.mp4",
      status: "Complété",
      features: [
        "Détection en temps réel sur radiographies",
        "mAP de 88-92% sur jeu de test",
        "Pipeline complet : collecte → annotation → entraînement",
        "Augmentation de données avancée",
        "Export vers formats déployables"
      ]
    },
    
    {
      id: "makogpath",
      title: "MAKOGpath",
      description: "Application web & mobile de réservation de soins à domicile. Full-stack Symfony + MySQL.",
      longDescription: "MAKOGpath est une application web et mobile de réservation de soins à domicile développée en full-stack avec Symfony et MySQL. Gestion complète des rendez-vous, prestataires et clients, avec interface mobile responsive et gestion de sprints Trello.",
      tech: ["Symfony", "MySQL", "JavaScript"],
      github: "https://github.com/onsalouini",
      video: "",
      status: "Complété",
      features: [
        "Réservation de soins à domicile",
        "Gestion des prestataires et clients",
        "Interface mobile responsive",
        "Gestion de sprints avec Trello",
        "Architecture MVC Symfony"
      ]
    },
  ],

  experience: [
    {
      company: "ForeverMo Groupe",
      location: "Kairouan",
      role: "Stagiaire Développeuse Full-Stack",
      period: "Juin 2025 — 1 mois",
      tasks: [
        "Conception & déploiement d'une application web RH complète pour +20 utilisateurs",
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
  
  certifications: [
    {
      title: "Hedera Certified Foundation — Technique (HCF)",
      issuer: "Hedera Hashgraph",
      date: "2024",
      image: null,
      pdf: "/certifs/hedera-hcf.pdf",
      link: "https://hedera.com",
      badge: "🔷",
      duration: "5 heures",
      description: "Fondamentaux de Hedera Hashgraph, architecture réseau, mécanisme de consensus, comptes et clés, rôle du HBAR, création de transactions et cas d'utilisation techniques.",
      skills: ["Hedera Hashgraph", "DLT", "Blockchain", "HBAR", "Web3"],
      nft: true,
    },
    {
      title: "Hedera Business Foundation — Métier (HBF)",
      issuer: "Hedera Hashgraph",
      date: "2024",
      image: null,
      pdf: "/certifs/hedera-hbf.pdf",
      link: "https://hedera.com",
      badge: "💼",
      duration: "4 heures",
      description: "Introduction à Web3 et Hedera, services de consensus, tokens HTS, cas d'usage réels dans les paiements, supply chain et applications business.",
      skills: ["Web3", "HTS Tokens", "Supply Chain", "Consensus", "DLT Business"],
      nft: true,
    },
  ],
};