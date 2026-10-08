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
    why: [["Impact réel", "Vos projets touchent des milliers d'apprenants et d'entreprises."], ["Apprendre en continu", "Accès à Beriverse Academy et à des formations internes."], ["Équipe ambitieuse", "Une culture d'innovation, d'entraide et de responsabilité."]],
    jobsTitle: "Nos offres", apply: "Postuler",
    email: "hello@beriverse.fr", subject: "Candidature : ",
    jobs: [
      {
        slug: "apporteur",
        title: "Apporteur d’Affaires",
        type: "Freelance",
        place: "Abidjan, Côte d'Ivoire",
        desc: "Identifiez des opportunités commerciales et mettez Beriverse en relation avec des entreprises ayant des besoins en formation et en technologie.",

        missions: [
          "Identifier des entreprises et décideurs susceptibles d’avoir besoin des services de Beriverse",
          "Détecter et qualifier des opportunités commerciales dans son réseau",
          "Mettre Beriverse en relation avec les prospects qualifiés",
          "Faciliter la prise de contact et contribuer au suivi des opportunités",
          "Développer et entretenir un réseau professionnel pertinent"
        ],

        profile: [
          "Excellent réseau professionnel en Côte d’Ivoire",
          "Aisance relationnelle et capacité à identifier des opportunités",
          "Bonne compréhension des enjeux des entreprises",
          "Autonomie, dynamisme et sens du business",
          "Une expérience commerciale, B2B ou en développement d’affaires est un plus"
        ]
      },
      {
        slug: "consultant-formateur-analyse-donnees",
        title: "Consultant Formateur / Formatrice en Analyse de Données",
        type: "Freelance",
        place: "Abidjan, Côte d'Ivoire",
        desc: "Former les professionnels et les équipes à l’analyse, la visualisation et l’exploitation des données pour améliorer leur performance.",

        missions: [
          "Animer des sessions de formation en analyse de données en ligne et en présentiel",
          "Concevoir des supports, exercices et cas pratiques adaptés aux besoins des apprenants",
          "Former aux outils d’analyse et de visualisation tels qu’Excel et Power BI",
          "Accompagner les apprenants dans la réalisation de projets et l’analyse de données réelles",
          "Évaluer la progression des apprenants et proposer des axes d’amélioration"
        ],

        profile: [
          "Expérience en analyse de données et maîtrise d’Excel et/ou Power BI",
          "Bonne capacité à vulgariser les concepts liés aux données",
          "Aisance dans l’animation de formations professionnelles",
          "Esprit pédagogique et orientation pratique",
          "Une expérience en entreprise ou en conseil est un plus"
        ]
      },
      { slug: "developpement-commercial", title: "Chargé(e) de développement commercial", type: "CDI", place: "Abidjan", desc: "Développer le portefeuille d'entreprises clientes et suivre les partenariats.",
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
