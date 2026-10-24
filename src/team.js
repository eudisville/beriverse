// ✏️ Pour ajouter un membre : copiez un bloc dans MEMBERS et modifiez-le.
// Photo (facultative) : placez l'image dans public/team/ puis écrivez photo: "/team/prenom-nom.jpg".
// Sans photo, les initiales du membre s'affichent. dept doit être une clé de depts ci-dessous.
import Eudes from "./assets/eudes.png"
import Kra from "./assets/Kra.png"
import Manu from "./assets/Manu.png"

export const MEMBERS = [
  { name: "Eudes M. Koffi", dept: "direction", photo: Eudes, linkedin: "https://www.linkedin.com/in/eudes-m-koffi-163a46203/",
    role: { fr: "Executive Manager", en: "Executive Manager" },
    bio: { fr: "Présentez ici le parcours et la vision de la personne en deux phrases.", en: "Describe this person's background and vision in two sentences." } },
  { name: "Aman Kirihoua", dept: "tech", photo: Manu , linkedin: "https://www.linkedin.com/in/aman-kirihoua-857099232/",
    role: { fr: "Head of Opérations", en: "Head of Operations" },
    bio: { fr: "Responsable de l'architecture, de l'IA et des produits numériques.", en: "In charge of architecture, AI and digital products." } },
  { name: "Daniel Kra", dept: "edu", photo: Kra, linkedin: "https://www.linkedin.com/in/daniel-kra-58813b225/",
    role: { fr: "Project Coordinator", en: "Project Coordinator" },
    bio: { fr: "Conçoit les parcours d'apprentissage de l'anglais.", en: "Designs English learning paths." } },
];

export const TEAM_TEXT = {
  fr: { nav: "Équipe", title: "Équipe", intro: "Les personnes qui font vivre la mission de Beriverse : accroître les capacités de tous.",
        all: "All", depts: { direction: "Direction", tech: "Technologie", edu: "Éducation" } },
  en: { nav: "Our Team", title: "Our Team", intro: "The people behind Beriverse's mission: enhancing everyone's capabilities.",
        all: "All", depts: { direction: "Leadership", tech: "Technology", edu: "Education" } },
};
