// ✏️ Modifiez ici le nom et les textes de votre entreprise.
export const BRAND = "Beriverse";

import afribank from "./assets/afribank.png";
import afrolink from "./assets/afrolink.png";
import civ from "./assets/civ.png";
import corance from "./assets/co.png";
import beh from "./assets/BeH.png";
import moven from "./assets/moven.png";

// EVENT IMPORTS
import eventsPhoto from "./assets/suite.jpg";
import event1 from "./assets/camp.png";
import event2 from "./assets/tremplin.png";


export const PARTNERS = [
  { name: "CIV", logo: civ },
  { name: "Afribank", logo: afribank },
  { name: "Afrolink", logo: afrolink },
  { name: "Corance", logo: corance },
  { name: "beH", logo: beh },
  { name: "Moven", logo: moven },
];

// EVENT DATA
export const EVENTS_PHOTO = eventsPhoto;

export const EVENTS = [
  {
    logo: event1,
    name: "Camp National du Numérique",
    year: "2025",
    title: { fr: "Partenaire Pédagogique", en: "Training Partner" },
  },
  {
    logo: event2,
    name: "Tremplin Digital",
    year: "2025",
    title: { fr: "Partenaire Pédagogique Officiel", en: "Official Training Partner" },
  },
];

export const T = {
  fr: {
    top: { biz: "Beriverse Incorporation", sites: "Tous nos sites", pub: "Contactez-nous", media: "" },
    nav: ["A Propos", "Notre impact", "Notre expertise", "Actualités & Insights"],
    navRight: ["Carrières"],
    pause: "Mettre en pause", play: "Lecture", slide: "Diapositive",
    discover: "Découvrir →",
    slides: [
      { title: "IA Agentique : Beriverse forme les entreprises dans l'automatisation de leurs processus", color: "a" },
      { title: "Beriverse lance Corance, une plateforme innovante pour l'assurance santé", color: "b" },
      { title: "Beriverse Academy : apprendre le code, l'IA et les métiers du numérique pour tous", color: "c" },
    ],
    about: "est un groupe dédié à la transformation technologique et au développement des compétences. Nous vous aidons à améliorer votre performance, à gagner en productivité et à saisir de nouvelles opportunités grâce à des solutions technologiques adaptées et des formations axées sur des résultats concrets. Que vous soyez une entreprise ou un professionnel, bénéficiez des outils et des compétences nécessaires pour relever vos défis, accélérer votre évolution et construire votre avenir.",
    expTitle: "Notre expertise",
    tabs: ["Entreprises", "Grand public"],
    // Exemple pour biz
    biz: [
      ["Formation Entreprise", "Développez les compétences de vos équipes pour gagner en efficacité, améliorer vos performances et accélérer la transformation de votre organisation.", "card-formation"],
      ["Consulting IT", "Modernisez vos processus, adoptez les technologies adaptées à vos enjeux et gagnez en productivité grâce à des solutions numériques concrètes.", "card-tech"],
      ["Edge AI", "Transformez vos données en intelligence exploitable et automatisez vos processus grâce à des technologies avancées qui renforcent votre performance et votre capacité d’innovation.", "card-ai"],
    ],
    partnersLabel: "Ils nous font confiance",
    partnersTitle: "Les entreprises font confiance à Beriverse pour développer leurs compétences et accélérer leur transformation technologique.",  

    // Exemple pour pub
    pub: [
      ["Beriverse Academy", "Développez des compétences concrètes, immédiatement applicables pour gagner en efficacité, évoluer professionnellement et saisir de nouvelles opportunités.", "card-academy"],
      // ["English Center", "Permettre aux apprenants de développer un anglais réellement utilisable dans leur vie professionnelle, leurs études et leurs projets internationaux.", "card-english"],
    ],
    figTitle: "Notre impact en chiffres",
    figs: [["1000+", "Apprenants formés"], ["35+", "Entreprises accompagnées"], ["3", "Années d'existence"], ["150+", "Projets Réalisés"]],
    newsTitle: "Actualités & Insights",
    news: [
      ["Technologie", "Lancement de la plateforme Corance pour les assurances", "12 Septembre 2026"],
      ["Education", "OpenClass 2026-2027 : L'IA la nouvelle ère du numérique", "28 août 2026"],
      ["Entreprises", "Lancement de la division English Center", "05 Octobre 2026"],
    ],
    more: "Lire la suite",
    careersTitle: "Rejoignez Beriverse",
    careersText: "Ingénieurs, formateurs, commerciaux : Inspirons et Tranformons le monde.",
    careersBtn: "Voir les offres",
    contactTitle: "Une question ? Écrivez-nous",
    name: "Votre nom", email: "Votre e-mail", msg: "Votre message", send: "Envoyer", sent: "Message envoyé. Nous vous répondons sous 48 h.",
    foot: ["Notre groupe", "Notre impact", "Notre expertise", "Actualités", "Carrières"],
    rights: "Tous droits réservés.",

    eventsLabel: "Quelques Références",
    eventsText: "Beriverse participe à ces du numérique et de la formation pour faire avancer l'adoption de l'IA et des compétences digitales.",
  },
  en: {
    top: { biz: "Beriverse Inc.", pub: "Beriverse Consumer", sites: "All our sites", media: "Media library", conf: "Academy" },
    nav: ["About", "Our impact", "Our expertise", "Our news"],
    navRight: ["Team", "Careers"],
    pause: "Pause", play: "Play", slide: "Slide",
    discover: "Discover",
    slides: [
      { title: "Beriverse launches Corance, a innovative platform for health insurances", color: "a" },
      { title: "Agentic AI: Beriverse trains companies in process automation.", color: "b" },
      { title: "Beriverse Academy: learning coding, AI, and digital careers for everyone.", color: "c" },
    ],
    about: "is a company in the technology and education sectors whose mission is to enhance everyone's capabilities. We offer services to businesses and the general public, particularly in the fields of artificial intelligence, training, and application development. Our goal is to create a positive and lasting impact in society through innovation and education.",
    expTitle: "Our expertise",
    tabs: ["Business", "Consumers"],
    biz: [
      ["Consulting", "Strategic guidance for your company's digital transformation.", "card-tech"],
      ["Edge AI", "Leverage your data to make faster decisions and automate your processes.", "card-formation"],
      ["Professional training", "Tailor-made programs to develop your teams' skills.", "card-ai"],
    ],
    pub: [
      ["Beriverse Academy", "Online and in-person courses, from beginner to professional.", "card-academy"],
      ["English Center", "Learn English at your own pace, on mobile, even with a low connection.", "card-english"],
      ["Apps", "Mobile and web applications to make everyday life easier for families.", "card-apps"],
    ],
    partnersLabel: "Our partners",
    partnersTitle: "Companies and institutions rely on Beriverse to build their AI, Data and Cybersecurity skills.",
    figTitle: "Our impact in numbers",
    figs: [["1,000+", "learners trained"], ["25+", "companies supported"], ["3", "Years of existence"], ["100", "employees"]],
    newsTitle: "Latest news",
    news: [
      ["Technology", "Launch of the Corance platform for the insurance sector", "Sep 12, 2026"],
      ["Education", "OpenClass 2026-2027: AI – The New Digital Era", "Aug 28, 2026"],
      ["Business", "Launch of the English Center division", "Oct 5, 2026"],
    ],
    eventsLabel: "Recognized by national leaders",
  eventsText: "Beriverse takes part in major national events on digital skills and education to advance the adoption of AI.",
    more: "Read more",
    careersTitle: "Join Beriverse",
    careersText: "Engineers, trainers, sales: let's build the technology and education of tomorrow together.",
    careersBtn: "See openings",
    contactTitle: "Questions? Write to us",
    name: "Your name", email: "Your email", msg: "Your message", send: "Send", sent: "Message sent. We will reply within 48 hours.",
    foot: ["Our Group", "Our impact", "Our expertise", "Our news", "Finance", "Press", "Careers"],
    rights: "All rights reserved.",
  },
};
