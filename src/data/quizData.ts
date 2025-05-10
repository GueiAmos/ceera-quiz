
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
        text: "En quelle année a été fondé le CEERA ?",
        options: ["2005", "2010", "2015", "2020"],
        correctAnswer: 1,
        explanation: "Le CEERA a été fondé en 2010 par un groupe d'étudiants originaires d'Agnibilékrou."
      },
      {
        id: 2,
        text: "Qui a été le premier président du CEERA ?",
        options: ["Kouassi Aimé", "Konan Paul", "Yao Michel", "Kouamé Pierre"],
        correctAnswer: 2,
        explanation: "Yao Michel a été le premier à présider l'association lors de sa création."
      },
      {
        id: 3,
        text: "Quelle est la ville d'origine des membres du CEERA ?",
        options: ["Abidjan", "Bouaké", "Agnibilékrou", "Yamoussoukro"],
        correctAnswer: 2,
        explanation: "Le CEERA regroupe les élèves et étudiants originaires d'Agnibilékrou."
      },
      {
        id: 4,
        text: "Quel est le premier événement majeur organisé par le CEERA ?",
        options: ["Un tournoi sportif", "Une conférence académique", "Une journée culturelle", "Une collecte de fonds"],
        correctAnswer: 2,
        explanation: "La première journée culturelle du CEERA a marqué les débuts de l'association."
      },
      {
        id: 5,
        text: "Combien de sections régionales compte le CEERA ?",
        options: ["3 sections", "5 sections", "7 sections", "10 sections"],
        correctAnswer: 1,
        explanation: "Le CEERA compte 5 sections réparties dans différentes régions."
      }
    ]
  },
  {
    id: 2,
    title: "Objectifs et Valeurs du CEERA",
    description: "Découvrez à quel point vous connaissez les objectifs et les valeurs fondamentales de notre association",
    questions: [
      {
        id: 1,
        text: "Quelle est la principale mission du CEERA ?",
        options: [
          "Organiser des événements festifs", 
          "Promouvoir l'excellence académique", 
          "Développer des entreprises", 
          "Collecter des fonds"
        ],
        correctAnswer: 1,
        explanation: "La promotion de l'excellence académique est au cœur de la mission du CEERA."
      },
      {
        id: 2,
        text: "Quelle valeur n'est PAS associée au CEERA ?",
        options: ["Solidarité", "Compétition individuelle", "Entraide", "Respect"],
        correctAnswer: 1,
        explanation: "Le CEERA valorise la collaboration plutôt que la compétition individuelle."
      },
      {
        id: 3,
        text: "Quel programme le CEERA a-t-il lancé pour les nouveaux étudiants ?",
        options: ["Programme Sport-Études", "Programme Mentorat", "Programme Entrepreneuriat", "Programme Logement"],
        correctAnswer: 1,
        explanation: "Le programme de mentorat aide les nouveaux étudiants à s'intégrer."
      },
      {
        id: 4,
        text: "Quelle activité le CEERA organise-t-il annuellement pour ses membres ?",
        options: ["Voyage à l'étranger", "Stage en entreprise", "Journée d'intégration", "Concours de talents"],
        correctAnswer: 2,
        explanation: "La journée d'intégration est un événement annuel majeur du CEERA."
      },
      {
        id: 5,
        text: "Quel objectif à long terme poursuit le CEERA ?",
        options: [
          "Devenir une entreprise privée", 
          "Créer une université", 
          "Contribuer au développement d'Agnibilékrou", 
          "S'étendre internationalement"
        ],
        correctAnswer: 2,
        explanation: "Le CEERA vise à contribuer activement au développement de sa région d'origine."
      }
    ]
  }
];

export const aboutCeera = {
  name: "Collectif des Élèves et Étudiants Ressortissants d'Agnibilékrou",
  shortName: "CEERA",
  founded: "2010",
  mission: "Promouvoir l'excellence académique et l'entraide entre les élèves et étudiants originaires d'Agnibilékrou",
  values: [
    "Excellence académique",
    "Solidarité",
    "Entraide",
    "Engagement communautaire",
    "Respect de la diversité"
  ],
  activities: [
    "Tutorat et soutien scolaire",
    "Organisation de conférences et débats",
    "Journées culturelles",
    "Programme de mentorat",
    "Actions sociales et communautaires"
  ],
  contact: {
    email: "contact@ceera.org",
    phone: "+225 07 XX XX XX XX",
    socialMedia: {
      facebook: "CEERA.Officiel",
      twitter: "@CEERA_Officiel"
    }
  },
  description: "Le Collectif des Élèves et Étudiants Ressortissants d'Agnibilékrou (CEERA) est une association à but non lucratif regroupant les élèves et étudiants originaires de la région d'Agnibilékrou en Côte d'Ivoire. Fondé en 2010, le CEERA œuvre pour la promotion de l'excellence académique, l'entraide et la solidarité entre ses membres, ainsi que pour le développement socio-économique et culturel de la région d'Agnibilékrou. À travers diverses activités et initiatives, le CEERA contribue à renforcer les liens entre ses membres et à valoriser leur potentiel académique et professionnel."
};
