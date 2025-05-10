export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Quiz {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

export const quizzes: Quiz[] = [
  {
    id: 1,
    title: "Histoire du CEERA",
    description: "Testez vos connaissances sur l'histoire du Collectif des Élèves et Étudiants Ressortissants d'Agnibilékrou",
    questions: [
      {
        id: 1,
        text: "En quelle année a été officiellement fondé le CEERA ?",
        options: ["2020", "2021", "2022", "2023"],
        correctAnswer: 3,
        explanation: "Le CEERA a été officiellement reconnu et fondé le 03 février 2023."
      },
      {
        id: 2,
        text: "Quelle est la nature du CEERA ?",
        options: [
          "Une organisation politique", 
          "Une association apolitique et laïque", 
          "Un groupe religieux", 
          "Une entreprise commerciale"
        ],
        correctAnswer: 1,
        explanation: "Le CEERA est une association apolitique, laïque et à but non lucratif."
      },
      {
        id: 3,
        text: "Où se trouve la base principale du CEERA ?",
        options: ["Agnibilékrou", "Abidjan", "Yamoussoukro", "Bouaké"],
        correctAnswer: 1,
        explanation: "Le CEERA a sa base principale à Abidjan, avec une section déjà opérationnelle à Bouaké."
      },
      {
        id: 4,
        text: "Quel est l'objectif principal du CEERA après le baccalauréat ?",
        options: [
          "Trouver des emplois aux étudiants",
          "Organiser des événements festifs",
          "Rassembler les étudiants dispersés dans différentes universités",
          "Financer les études"
        ],
        correctAnswer: 2,
        explanation: "Le CEERA vise à rassembler la jeunesse d'Agnibilékrou, notamment après le baccalauréat, lorsque les étudiants se dispersent vers diverses universités."
      },
      {
        id: 5,
        text: "Combien de sections du CEERA sont actuellement opérationnelles ?",
        options: [
          "Une seule section à Abidjan",
          "Deux sections (Abidjan et Bouaké)",
          "Trois sections",
          "Quatre sections"
        ],
        correctAnswer: 1,
        explanation: "Le CEERA compte actuellement deux sections : la base à Abidjan et le CEERA-BOUAKÉ."
      }
    ]
  },
  {
    id: 2,
    title: "Missions et Valeurs du CEERA",
    description: "Découvrez à quel point vous connaissez les missions et les valeurs fondamentales de notre association",
    questions: [
      {
        id: 1,
        text: "Quel type de réseau le CEERA cherche-t-il à créer ?",
        options: [
          "Un réseau uniquement professionnel",
          "Un réseau d'entraide intellectuel, social et professionnel",
          "Un réseau uniquement académique",
          "Un réseau politique"
        ],
        correctAnswer: 1,
        explanation: "Le CEERA œuvre pour créer un véritable réseau d'entraide intellectuel, social et professionnel."
      },
      {
        id: 2,
        text: "Dans quels moments le CEERA accompagne-t-il ses membres ?",
        options: [
          "Uniquement pendant les études",
          "Uniquement lors des difficultés",
          "Lors des naissances, mariages, maladies et décès",
          "Uniquement pendant les vacances"
        ],
        correctAnswer: 2,
        explanation: "Le CEERA accompagne ses membres lors des moments importants de leur vie : naissance, mariage, maladie ou décès."
      },
      {
        id: 3,
        text: "Quelle est l'ambition du CEERA concernant son développement ?",
        options: [
          "Rester uniquement à Abidjan",
          "S'étendre dans d'autres villes universitaires",
          "Devenir une entreprise",
          "Se limiter à deux sections"
        ],
        correctAnswer: 1,
        explanation: "Le CEERA prépare l'extension de ses activités dans d'autres villes universitaires."
      },
      {
        id: 4,
        text: "Quel aspect caractérise l'esprit du CEERA ?",
        options: [
          "La compétition individuelle",
          "L'esprit d'équipe et le sérieux",
          "L'exclusivité",
          "L'orientation politique"
        ],
        correctAnswer: 1,
        explanation: "Le CEERA est animé par l'esprit d'équipe et le sérieux qui caractérise le collectif."
      },
      {
        id: 5,
        text: "Quelle est la promesse du CEERA à ses membres ?",
        options: [
          "Garantir un emploi",
          "Assurer le succès académique",
          "Ne jamais être seul dans son parcours",
          "Fournir un logement"
        ],
        correctAnswer: 2,
        explanation: "Rejoindre le CEERA, c'est faire le choix de ne jamais être seul dans son parcours."
      }
    ]
  },
  {
    id: 3,
    title: "Actions et Soutien du CEERA",
    description: "Testez vos connaissances sur les différentes formes de soutien offertes par le CEERA",
    questions: [
      {
        id: 1,
        text: "Quel type de projets le CEERA soutient-il ?",
        options: [
          "Uniquement les projets académiques",
          "Les projets personnels et académiques",
          "Uniquement les projets professionnels",
          "Uniquement les projets associatifs"
        ],
        correctAnswer: 1,
        explanation: "Le CEERA soutient activement ses membres dans la réalisation de leurs projets personnels et académiques."
      },
      {
        id: 2,
        text: "Comment le CEERA contribue-t-il au développement d'Agnibilékrou ?",
        options: [
          "Par des actions sociales et culturelles",
          "Uniquement par des dons financiers",
          "Par la construction d'infrastructures",
          "Par l'organisation d'événements sportifs"
        ],
        correctAnswer: 0,
        explanation: "Le CEERA promeut des actions en faveur du développement social et culturel d'Agnibilékrou."
      },
      {
        id: 3,
        text: "Quel type d'environnement le CEERA crée-t-il pour ses membres ?",
        options: [
          "Un environnement compétitif",
          "Un environnement d'accueil et de valorisation",
          "Un environnement strictement académique",
          "Un environnement politique"
        ],
        correctAnswer: 1,
        explanation: "Le CEERA se veut être un lieu où chaque étudiant se sent accueilli et valorisé."
      },
      {
        id: 4,
        text: "Comment le CEERA aide-t-il les étudiants éloignés ?",
        options: [
          "Par un soutien financier uniquement",
          "En maintenant le lien avec leur ville natale",
          "En leur trouvant un logement",
          "En organisant leur transport"
        ],
        correctAnswer: 1,
        explanation: "Le CEERA aide les étudiants à maintenir un lien fort même lorsqu'ils évoluent loin de leur ville natale."
      },
      {
        id: 5,
        text: "Quelle est la vision du CEERA pour ses membres ?",
        options: [
          "La réussite individuelle uniquement",
          "La contribution collective au développement",
          "La compétition académique",
          "L'enrichissement personnel"
        ],
        correctAnswer: 1,
        explanation: "Le CEERA encourage ses membres à contribuer ensemble au développement d'Agnibilékrou."
      }
    ]
  }
];

export const aboutCeera = {
  name: "Collectif des Élèves et Étudiants Ressortissants d'Agnibilékrou",
  shortName: "CEERA",
  founded: "2023",
  mission: "Rassembler et soutenir les élèves et étudiants d'Agnibilékrou dans leur épanouissement académique et personnel, tout en contribuant au développement de notre région.",
  values: [
    "Solidarité",
    "Entraide",
    "Esprit d'équipe",
    "Sérieux",
    "Engagement communautaire"
  ],
  activities: [
    "Accompagnement académique",
    "Soutien lors des événements de vie",
    "Actions de développement social",
    "Activités culturelles",
    "Réseautage professionnel"
  ],
  contact: {
    email: "contact@ceera.org",
    phone: "+225 07 XX XX XX XX",
    socialMedia: {
      facebook: "CEERA.Officiel",
      twitter: "@CEERA_Officiel"
    }
  },
  description: "Le Collectif des Élèves et Étudiants Ressortissants d'Agnibilékrou (CEERA) est une association apolitique, laïque et à but non lucratif, créée pour le bien-être et l'épanouissement des élèves et étudiants d'Agnibilékrou. Officiellement reconnue par les autorités et fondée le 03 février 2023, notre association a pour ambition première de rassembler la jeunesse de notre ville, notamment après le baccalauréat, lorsque les étudiants se dispersent vers diverses universités et grandes écoles à travers le pays. Nous œuvrons pour établir des liens solides de solidarité et créer un véritable réseau d'entraide intellectuel, social et professionnel. Notre mission est de soutenir activement nos membres dans la réalisation de leurs projets personnels et académiques, de les accompagner lors de moments importants de leur vie (naissance, mariage, maladie ou décès) et de promouvoir des actions en faveur du développement social et culturel d'Agnibilékrou."
};