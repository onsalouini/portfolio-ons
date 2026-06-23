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
      github: "https://github.com/onsalouini/Tumeurs_Detection",
      video: "6nfTJmsfdu0",  // ← juste l'ID YouTube
    
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
      github: "https://github.com/BoutheinaRj/forsatech",
      video: "",  // ← juste l'ID YouTube
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
      video: "rIqEtz8OiZg",
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
      github: "https://github.com/onsalouini/Diagnostic_Dentaire",
      video: "",
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
  "id": "rh-platform",
  "title": "Plateforme RH - Gestion des Ressources Humaines",
  "description": "Application web full-stack de gestion RH centralisée (employés, départements, projets, présence) développée avec Symfony + Angular.",
  "longDescription": "Dans le cadre de mon stage ouvrier chez FORVERMO Group, j'ai conçu et développé une plateforme web complète de gestion des ressources humaines. L'objectif était de remplacer la gestion manuelle sur Excel par une solution digitalisée, sécurisée et centralisée. L'application permet aux administrateurs de gérer les employés, départements, projets et présences via un tableau de bord intuitif, et aux employés de gérer leur profil, leurs projets et leur pointage quotidien. L'architecture repose sur une séparation frontend/backend avec Angular pour l'interface et Symfony pour l'API REST, sécurisée par authentification JWT.",
  "tech": ["Symfony", "Angular", "MySQL", "JWT", "Doctrine ORM", "WAMP", "TypeScript", "REST API"],
  "github": "https://github.com/onsalouini/projet_stage",
  "video": "",
  "status": "Complété",
  "features": [
    "Authentification sécurisée JWT (rôles admin/employé)",
    "Gestion complète des employés, départements et projets (CRUD)",
    "Système de pointage quotidien avec horodatage automatique",
    "Tableau de bord administrateur avec statistiques globales (taux de présence, effectifs, projets)",
    "Interface employé : modification de profil, dépôt de projet, pointage",
    "Architecture RESTful Angular ↔ Symfony avec gestion des CORS",
    "Base de données relationnelle MySQL avec Doctrine ORM"
  ]
},
{
  "id": "livraisonapp",
  "title": "LivraisonApp - Système de Gestion de Livraison",
  "description": "Plateforme web de gestion de livraisons avec suivi des colis, gestion des clients/livreurs et tableau de bord administrateur.",
  "longDescription": "LivraisonApp est une application web développée en ASP.NET Core MVC pour la gestion complète d'un service de livraison. La plateforme permet aux administrateurs de gérer les colis, les clients, les livreurs et les véhicules via une interface intuitive. Le système intègre un système d'authentification par rôles (Admin/User), un tableau de bord avec des statistiques de revenus et le suivi en temps réel des colis. Ce projet d'équipe m'a permis de mettre en pratique les principes du développement full-stack avec le framework .NET et une architecture MVC robuste.",
  "tech": ["ASP.NET Core MVC", "C#", "Entity Framework Core", "Identity", "SQLite", "Bootstrap", "HTML", "CSS", "JavaScript"],
  "github": "https://github.com/onsalouini/Livraison",
  "video": "",
  "status": "Complété",
  "features": [
    "Opérations CRUD complètes pour les colis, clients, livreurs et véhicules",
    "Authentification sécurisée avec ASP.NET Core Identity et gestion des rôles (Admin/User)",
    "Tableau de bord administrateur avec statistiques et visualisation des revenus",
    "Upload d'images pour les colis",
    "Architecture MVC avec Entity Framework Core pour l'accès aux données",
    "Base de données SQLite pour un déploiement léger",
    "Interface responsive avec Bootstrap"
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
      period: "Sept. 2024 — Présent",highlight: "Majeur de promotion",
      
    },
    {
      degree: "Cycle Préparatoire — Filière Physique-Chimie",
      school: "Faculté des Sciences de Monastir (FSM)",
      location: "Monastir, Tunisie",
      period: "Sept. 2022 — Juin 2024",
      highlight: "Admission au Concours National d'entrée aux Écoles d'Ingénieurs 2025",
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
    {
  "title": "Insight Cybersecurity Hackathon — Certificate of Participation",
  "issuer": "IEEE ESPRIM Student Branch",
  "date": "Novembre 2025",
  "image": null,
  "pdf": "/certifs/insight-cybersecurity-hackathon.pdf",
  "link": "https://ieee-esprim.org",
  "badge": "🛡️",
  "duration": "2 jours",
  "description": "Participation au hackathon dédié à la cybersécurité organisé par la branche étudiante IEEE ESPRIM, axé sur la résolution de défis pratiques en sécurité informatique et le travail en équipe.",
  "skills": ["Cybersécurité", "Sécurité informatique", "Travail d'équipe", "Résolution de problèmes"],
  "nft": false
}
  ],
};