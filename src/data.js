// ✏️ Contenu des pages Actualités (articles) et Carrières. L'ordre des articles = l'ordre de t.news dans content.js.
export const EXTRA = {
  fr: {
    all: "Toutes", allNews: "Toutes les actualités", back: "← Toutes les actualités", home: "Accueil",
    newsTitle: "Nos Actualités", newsIntro: "Annonces, lancements et temps forts de Beriverse.",
    others: "À lire aussi", notFound: "Cet article n'existe pas.",
    newsBody: [
      ["Beriverse annonce le lancement de Corance, une plateforme pensée pour simplifier la gestion de l'assurance santé : souscription, suivi des remboursements et relation client réunis au même endroit.",
       "Conçue avec des professionnels du secteur, Corance s'appuie sur l'automatisation et l'intelligence artificielle pour réduire les délais de traitement et améliorer l'expérience des assurés."],
      ["L'édition 2026-2027 d'OpenClass est consacrée à l'intelligence artificielle et à son rôle dans la nouvelle ère du numérique. Ateliers, conférences et démonstrations sont au programme.",
       "Cet événement s'adresse aux étudiants, aux professionnels et aux entreprises qui souhaitent comprendre et adopter l'IA dans leurs métiers."],
      ["Beriverse crée la division English Center pour aider les particuliers et les entreprises à progresser en anglais, avec des parcours en ligne et en présentiel.",
       "Les cours s'adaptent au niveau et au rythme de chacun, y compris sur mobile et avec une connexion limitée."],
    ],
    careersTitle: "Carrières", careersIntro: "Inspirons et transformons le monde. Rejoignez une équipe qui construit la technologie et l'éducation de demain.",
    whyTitle: "Pourquoi nous rejoindre",
    why: 
    [["Impact réel", "Participez à la création de solutions technologiques majeures. Vos projets façonnent directement le quotidien de milliers d'apprenants et transforment les opérations des entreprises à travers le continent."], 
    ["Apprendre en continu", "Développez vos compétences sans interruption. Bénéficiez d'un accès illimité à l'écosystème Beriverse Academy, aux certifications internes et à un accompagnement personnalisé pour propulser votre carrière."], 
    ["Équipe ambitieuse", "Évoluez au sein d'un environnement stimulant axé sur l'excellence. Nous cultivons une culture d'innovation audacieuse, d'entraide constante et d'autonomie pour relever ensemble des défis technologiques complexes."]],
    jobsTitle: "Nos offres", apply: "Postuler",
    email: "hello@beriverse.fr", subject: "Candidature : ",
    jobs: [
      {
        slug: "job1",
        title: "Formateur Data appliquée à la Banque et à l’Assurance (H/F)",
        type: "Consultance",
        place: "Abidjan, Côte d'Ivoire",
        desc: "Concevoir et animer des formations professionnelles permettant aux équipes bancaires et assurantielles d'exploiter les données et les outils de Business Intelligence pour automatiser leurs reportings, accélérer leurs analyses et améliorer la prise de décision.",

        missions: [
          "Concevoir des programmes de formation adaptés aux besoins des banques et compagnies d’assurance.",
          "Former les professionnels à l’analyse, à la structuration et à la visualisation des données.",
          "Former à l’automatisation des reportings et à la production d’indicateurs de performance",
          "Développer des cas pratiques liés aux opérations bancaires, au crédit, aux sinistres et aux risques.",
          "Intégrer les bonnes pratiques de qualité, de confidentialité et de gouvernance des données."
        ],

        profile: [
          "Compréhension des opérations bancaires et/ou assurantielles.",
          "Connaissance des indicateurs liés au crédit, aux risques, aux opérations, aux sinistres ou à la performance commerciale.",
          "Bonne compréhension des enjeux des entreprises",
          "Autonomie, dynamisme et sens du business",
          "Capacité à vulgariser les concepts techniques."
        ]
      },
      {
        slug: "job3",
        title: "Consultant en Transformation Digitale (H/F)",
        type: "Consultance",
        place: "Abidjan, Côte d'Ivoire",
        desc: "Accompagner les entreprises dans l’analyse, la modernisation et la digitalisation de leurs processus métiers afin de réduire les tâches manuelles, limiter les goulots d’étranglement, accélérer les opérations et améliorer la performance organisationnelle.",

        missions: [
          "Réaliser des diagnostics des processus métiers et des pratiques opérationnelles.",
          "Cartographier les processus existants et proposer des processus cibles optimisés.",
          "Identifier les opportunités de digitalisation, d’automatisation et d’intégration de l’intelligence artificielle.",
          "Élaborer des recommandations fonctionnelles et des feuilles de route de transformation.",
          "Accompagner le changement, la prise en main des outils et l’adoption des nouvelles méthodes de travail."
        ],

        profile: [
          "Bac+3 à Bac+5 en systèmes d’information, informatique, gestion de projet, management ou domaine connexe.",
          "Maîtrise des méthodes d’analyse et de cartographie des processus.",
          "Expérience sur des projets de transformation digitale ou de refonte de processus.",
          "Connaissance de BPMN, Lean Management, Agile ou des outils de gestion de projet.",
          "Connaissance des enjeux de cybersécurité, de confidentialité et de gouvernance des données."
        ]
      },
      { slug: "developpement-commercial", title: "Chargé(e) de Développement Commercial", type: "CDI", place: "Abidjan", desc: "Développer le portefeuille d'entreprises clientes et suivre les partenariats.",
        missions: ["Prospecter et présenter nos offres aux entreprises", "Négocier et suivre les contrats et partenariats", "Remonter les besoins du marché aux équipes produit"],
        profile: ["Bac+3 minimum, première expérience commerciale", "Aisance relationnelle et sens du résultat", "Intérêt pour la technologie et l'éducation"] },
    ],
    missions: "Missions", profileTitle: "Profil recherché", backJobs: "← Toutes les offres", viewJob: "Voir l'offre", jobNotFound: "Cette offre n'existe plus.",
    spont: "Aucune offre ne vous correspond ?", spontText: "Envoyez-nous une candidature spontanée.",
  },
  en: {
    all: "All", allNews: "All news", back: "← All news", home: "Home",
    newsTitle: "News", newsIntro: "Announcements, launches and highlights from Beriverse.",
    others: "Also read", notFound: "This article does not exist.",
    newsBody: [
      ["Beriverse announces the launch of Corance, a platform designed to simplify health insurance management: subscription, claims tracking and customer relations in one place.",
       "Built with industry professionals, Corance relies on automation and artificial intelligence to cut processing times and improve the policyholder experience."],
      ["The 2026-2027 OpenClass edition focuses on artificial intelligence and its role in the new digital era. Workshops, talks and demos are on the program.",
       "The event is open to students, professionals and companies who want to understand and adopt AI in their work."],
      ["Beriverse creates the English Center division to help individuals and companies improve their English, with online and in-person programs.",
       "Courses adapt to each learner's level and pace, including on mobile and with a limited connection."],
    ],
    careersTitle: "Careers", careersIntro: "Let's inspire and transform the world. Join a team building the technology and education of tomorrow.",
    whyTitle: "Why join us",
    why: [["Real impact", "Your projects reach thousands of learners and companies."], ["Keep learning", "Access to Beriverse Academy and internal training."], ["Ambitious team", "A culture of innovation, mutual support and ownership."]],
    jobsTitle: "Open positions", apply: "Apply",
    email: "hello@beriverse.fr", subject: "Application: ",
    jobs: [
      {
        slug: "business-developer",
        title: "Business Development Partner",
        type: "Freelance",
        place: "Abidjan",
        desc: "Identify business opportunities and connect Beriverse with companies seeking training and technology solutions.",

        missions: [
          "Identify companies and decision-makers who may benefit from Beriverse's services",
          "Identify and qualify business opportunities within your professional network",
          "Connect Beriverse with qualified prospects",
          "Facilitate initial contact and contribute to opportunity follow-up",
          "Build and maintain a relevant professional network"
        ],

        profile: [
          "Strong professional network in Côte d’Ivoire",
          "Excellent interpersonal skills and ability to identify business opportunities",
          "Good understanding of business challenges and needs",
          "Autonomous, proactive, and business-oriented",
          "Experience in sales, B2B, or business development is a plus"
        ]
      },
      { slug: "formateur-developpement-web", title: "Web Development Trainer", type: "Fixed-term", place: "Abidjan / Online", desc: "Teach coding courses and support Beriverse Academy learners.",
        missions: ["Lead online and in-person training sessions", "Prepare materials and hands-on exercises", "Track learner progress"],
        profile: ["Web development experience (HTML, CSS, JavaScript, React)", "Ability to explain things simply", "Prior training experience is a plus"] },
      { slug: "developpement-commercial", title: "Business Development Officer", type: "Full-time", place: "Abidjan", desc: "Grow our portfolio of business clients and manage partnerships.",
        missions: ["Prospect and present our offers to companies", "Negotiate and follow up contracts and partnerships", "Feed market needs back to product teams"],
        profile: ["Bachelor's degree minimum, first sales experience", "Strong interpersonal skills and drive for results", "Interest in technology and education"] },
    ],
    missions: "Responsibilities", profileTitle: "Your profile", backJobs: "← All positions", viewJob: "View position", jobNotFound: "This position no longer exists.",
    spont: "No position fits?", spontText: "Send us a spontaneous application.",
  },
};
