// ✏️ Pour ajouter un membre : copiez un bloc dans MEMBERS et modifiez-le.
// Photo (facultative) : placez l'image dans public/team/ puis écrivez photo: "/team/prenom-nom.jpg".
// Sans photo, les initiales du membre s'affichent. dept doit être une clé de depts ci-dessous.
export const MEMBERS = [
  { name: "Eudes M. Koffi", dept: "direction", photo: "", linkedin: "https://www.linkedin.com/in/eudes-m-koffi-163a46203/",
    role: { fr: "Manager & Responsable Technique", en: "Executve Manager & Head of Technology" },
    bio: { fr: "Présentez ici le parcours et la vision de la personne en deux phrases.", en: "Describe this person's background and vision in two sentences." } },
  { name: "Aman Kirihoua", dept: "tech", photo: "", linkedin: "https://www.linkedin.com/in/aman-kirihoua-857099232/",
    role: { fr: "Responsable Opérations", en: "Head of Operations" },
    bio: { fr: "Responsable de l'architecture, de l'IA et des produits numériques.", en: "In charge of architecture, AI and digital products." } },
  { name: "Prénom Nom", dept: "edu", photo: "", linkedin: "",
    role: { fr: "Responsable Beriverse Academy", en: "Head of Beriverse Academy" },
    bio: { fr: "Pilote les programmes de formation pour le grand public et les entreprises.", en: "Leads training programs for the public and businesses." } },
  { name: "Prénom Nom", dept: "edu", photo: "", linkedin: "",
    role: { fr: "Responsable English Center", en: "Head of English Center" },
    bio: { fr: "Conçoit les parcours d'apprentissage de l'anglais.", en: "Designs English learning paths." } },
];

export const TEAM_TEXT = {
  fr: { nav: "Équipe", title: "Équipe", intro: "Les personnes qui font vivre la mission de Beriverse : accroître les capacités de tous.",
        all: "Toute l'équipe", depts: { direction: "Direction", tech: "Technologie", edu: "Éducation" } },
  en: { nav: "Our Team", title: "Our Team", intro: "The people behind Beriverse's mission: enhancing everyone's capabilities.",
        all: "Everyone", depts: { direction: "Leadership", tech: "Technology", edu: "Education" } },
};
