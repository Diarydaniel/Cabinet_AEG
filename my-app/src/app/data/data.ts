// Données pour la section de navigations
export const navs = [
    {
        id: 1,
        name: 'Home',
        target: 'hero',
        active: true,
    },
    {
        id: 2,
        name: 'À propos',
        target: 'about',
        active: false,
    },
    {
        id: 3,
        name: 'Services',
        target: 'menu',
        active: false,
    },
    {
        id: 4,
        name: 'Événements',
        target: 'events',
        active: false,
    },
    {
        id: 5,
        name: 'Témoignage',
        target: 'testimonials',
        active: false,
    },
    {
        id: 6,
        name: 'Photos',
        target: 'gallery',
        active: false,
    },
    {
        id: 7,
        name: 'Fonctions',
        target: 'chefs',
        active: false,
    },
    {
        id: 8,
        name: 'Contact',
        target: 'contact',
        active: false,
    },
]

// Données pour les avantages
export const whyUs = [
    {
        id: 1,
        title: 'Réduction des coûts',
        content: 'En externalisant vos missions à l\'équipe AEG, vous réduirez vos coûts et gagnerez en efficacité sur les tâches administratives, RH, comptables, et commerciales.'
    },
    {
        id: 2,
        title: 'Gain d\'agilité et d\'efficacité',
        content: 'Vous gagnerez en agilité, en efficacité et pourrez vous recentrer sur vos activités principales, en laissant les tâches chronophages à des experts qualifiés.'
    },
    {
        id: 3,
        title: 'Réduction des risques',
        content: 'Vous réduirez vos risques dans la gestion du personnel, ainsi qu\'en termes de trésorerie, en collaborant avec notre équipe expérimentée dans le domaine RH, comptabilité, et commercial.'
    }
];


//Données Des differents types des activites
export const menu = [
    //Professionell
    {
        id: 1,
        name: 'Administratif Digital, direction généraux',
        botton: 'Voir detaile',
        preview: '/assets/images/menu/Menu-1.jpg',
        subname: 'accueil téléphonique - gestion d\'agenda & organisation de réunion , Gestion RH, Recrutement & sourcing - achat de fournitures, d\'équipements & des services - suivi des contrats & des engagements - réponse aux appels d\'offres',
        category: 'professionel',
        description: 'Nous gérons vos appels entrants et sortants avec professionnalisme pour garantir une communication fluide avec vos clients et partenaires. De plus, nous assurons l\'optimisation de vos agendas et la planification efficace de vos réunions, afin d’améliorer l\'organisation de votre équipe. Notre service propose également une gestion complète des ressources humaines, allant du recrutement à la gestion administrative, en vous aidant à trouver les meilleurs talents. En ce qui concerne l\'achat de fournitures et d\'équipements, nous prenons en charge ce processus en vous garantissant des coûts optimisés et des produits de qualité. Nous vous assistons également dans la gestion et le suivi de vos contrats pour assurer la conformité légale et maintenir de bonnes relations avec vos partenaires. Enfin, nous vous accompagnons dans la préparation et la soumission de réponses compétitives et adaptées aux appels d’offres stratégiques pour votre entreprise.',
    },
    {
        id: 2,
        name: 'Gestion des ressources humaines',
        botton: 'Voir detaile',
        preview: '/assets/images/menu/Menu-2.jpg',
        subname: 'gestion des dossiers des salariés - gestion des salaires, des cotisations sociales et de la paie -  gestion des déclarations périodiques administratives obligatoires - gestion des temps de travail et des absences',
        category: 'professionel',
        description: 'Pour la gestion des dossiers des salariés, nous nous assurons que toutes les informations relatives à chaque employé sont à jour, organisées et accessibles, garantissant ainsi une gestion efficace des ressources humaines.Concernant la gestion des salaires, des cotisations sociales et de la paie, nous prenons en charge le calcul précis des rémunérations et des contributions, afin d\'assurer une rémunération conforme aux normes en vigueur et de faciliter la tranquillité d\'esprit des employés. Dans le cadre de la gestion des déclarations périodiques administratives obligatoires, nous veillons à ce que toutes les déclarations requises soient réalisées dans les délais impartis, garantissant ainsi la conformité légale de votre entreprise.Enfin, pour la gestion des temps de travail et des absences, nous mettons en place des outils permettant de suivre et d\'optimiser les horaires de travail, ainsi que de gérer les congés et les absences, afin de maintenir un équilibre entre performance et bien-être des employés.',
    },
    {
        id: 3,
        name: 'Gestoin comptable, financier',
        botton: 'Voir detaile',
        preview: '/assets/images/menu/Menu-3.jpg',
        subname: 'Suivi de trésorerie - Préparation de budget & contrôle budgétaire - Tenue de compte, saisie comptable, lettrage, rapprochement bancaire- Facturation & recouvrement des créances clients - Suivi d\'indicateurs et tableaux de bord financiers - État et suivi des comptes',
        category: 'professionel',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repellat nisi provident tenetur molestias aliquam quae nemo exercitationem inventore ipsum minus ab voluptatum, modi, eos fuga praesentium vitae iusto sunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repellat nisi provident tenetur molestias aliquam quae nemo exercitationem inventore ipsum minus ab voluptatum, modi, eos fuga praesentium vitae iusto sunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repellat nisi provident tenetur molestias aliquam quae nemo exercitationem inventore ipsum minus ab voluptatum, modi, eos fuga praesentium vitae iusto sunt!.',
    },
    {
        id: 4,
        name: 'Gestoin commercial, prospection & marketing',
        botton: 'Voir detaile',
        preview: '/assets/images/menu/Menu-3.jpg',
        subname: 'Animation des réseaux sociaux - Prospection, prises de rendez- vous téléphonique - Présentation des produits et des services - Renseignement clients et service après-vente - Création identité graphique, logo - Création site internet  avec accompagnement',
        description: 'L’animation des réseaux sociaux engage votre communauté en créant du contenu attrayant et pertinent, renforçant ainsi la présence en ligne de votre marque. La prospection et les prises de rendez- vous téléphoniques facilitent l\'établissement de nouveaux contacts commerciaux, vous permettant d\'élargir votre réseau et d\'augmenter vos opportunités d\'affaires. La présentation des produits et des services met en valeur vos offres, assurant que vos clients comprennent pleinement les bénéfices et les caractéristiques qui répondent à leurs besoins. Le renseignement des clients et le service après - vente garantissent une expérience client positive en répondant rapidement à leurs questions et en résolvant leurs préoccupations. La création de l\'identité graphique et du logo établit une image de marque cohérente et mémorable qui reflète les valeurs et la mission de votre entreprise. La création de sites internet avec accompagnement offre une solution complète pour établir votre présence en ligne, tout en vous guidant dans les étapes nécessaires pour maximiser l\'impact de votre site.',
    },

    // Particulier
    {
        id: 4,
        name: 'Accompagnement personnel et professionnel ',
        botton: 'Voir detaile',
        preview: '/assets/images/menu/Menu-4.jpg',
        subname: 'rédaction de curriculum vitae - coaching pour entretien d\'embauche - aide à l\'insertion professionnel - adaptation selon besoins du client - gestion de toutes démarches administratives professionnels et personnels',
        category: 'particulier',
        description: 'La rédaction de curriculum vitae vous permet de présenter efficacement vos compétences et expériences, augmentant ainsi vos chances d\'attirer l\'attention des recruteurs. Le coaching pour entretien d\'embauche vous aide à vous préparer de manière optimale, en développant votre confiance et en affinant vos réponses pour faire une impression positive. L\'aide à l\'insertion professionnelle vous accompagne dans votre parcours de recherche d\'emploi, en vous fournissant des conseils adaptés à votre situation et à vos objectifs de carrière. L\'adaptation selon les besoins du client garantit que chaque service est personnalisé, répondant spécifiquement aux exigences et aspirations de chacun. La gestion de toutes démarches administratives, tant professionnelles que personnelles, allège votre charge mentale en s\'assurant que tous les documents et processus nécessaires sont correctement traités.',
    },
    {
        id: 5,
        name: 'gestion de toutes démarches administratives',
        botton: 'Voir detaile',
        preview: '/assets/images/menu/Menu-5.jpg',
        subname: 'CAF, préfecture, France travail',
        category: 'particulier',
        description: 'Nous vous assistons dans toutes vos démarches administratives auprès d\'organismes tels que la CAF, la préfecture ou France Travail, en garantissant un suivi rigoureux et une gestion efficace de vos dossiers pour simplifier vos formalités.',
    },
]

//Données des filtrage des activites
export const filters = [
    {
        id: 1,
        name: 'Tous',
        category: 'all',
        active: true,
    },
    {
        id: 2,
        name: 'Profesionnels',
        category: 'professionel',
        active: false,
    },
    {
        id: 3,
        name: 'Particuliers',
        category: 'particulier',
        active: false,
    },
]


//Données des evenements
export const events = [
    {
        id: 1,
        image: './assets/images/events/events-1.jpg',
        title: 'Conférence sur l\'Innovation',
        price: 189,
        content: `Participez à notre conférence sur l'innovation, où des experts de l'industrie partageront leurs idées et
    stratégies sur les dernières tendances technologiques et les meilleures pratiques.`,
        details: [
            'Découvrez les dernières avancées technologiques.',
            'Interagissez avec des leaders d\'opinion du secteur.',
            'Participez à des ateliers pratiques et à des sessions de questions-réponses.'
        ],
        summary: `Une occasion unique d\'apprendre et de réseauter avec des professionnels du secteur. Ne manquez pas cette
    chance de rester à jour sur les tendances de l\'innovation!`,
    },
    {
        id: 2,
        image: './assets/images/events/events-2.jpg',
        title: 'Partage de Connaissances',
        price: 290,
        content: `Rejoignez-nous pour une journée de partage de connaissances où vous pourrez échanger des idées,
    expériences et pratiques avec d'autres professionnels du secteur.`,
        details: [
            'Ateliers interactifs sur divers sujets professionnels.',
            'Sessions de discussion en petits groupes.',
            'Opportunités de mentorat et de coaching.'
        ],
        summary: `Un événement enrichissant qui favorise la collaboration et le développement personnel. Inscrivez-vous dès
    maintenant pour élargir vos horizons!`,
    },
    {
        id: 3,
        image: './assets/images/events/events-3.jpg',
        title: 'Réunion de Réseautage',
        price: 99,
        content: `Participez à notre réunion de réseautage pour établir des connexions avec d'autres professionnels et
    découvrir des opportunités de collaboration.`,
        details: [
            'Présentations courtes d\'entreprises locales.',
            'Temps de réseautage informel pour échanger des cartes de visite.',
            'Café et collations fournis pour une ambiance conviviale.'
        ],
        summary: `Ne manquez pas cette occasion de rencontrer de nouveaux partenaires et d\'élargir votre réseau. Réservez
    votre place aujourd'hui!`,
    },
]

//Données des Temoigniages
export const testimonials = [
    {
        id: 1,
        content: `La collaboration avec l'équipe AEG a été déterminante pour notre entreprise. Leur professionnalisme
        et leur attention aux détails ont fait toute la différence dans notre gestion de projet.`,
        avatar: './assets/images/testimonials/testimonials-1.jpg',
        client: 'Saul Goodman',
        position: 'PDG',
    },
    {
        id: 2,
        content: `J'ai été impressionnée par l'expertise de l'équipe AEG. Leur approche proactive et leur capacité à 
        s'adapter à nos besoins spécifiques ont grandement contribué à la réussite de notre projet.`,
        avatar: './assets/images/testimonials/testimonials-2.jpg',
        client: 'Sara Wilsson',
        position: 'Consultante',
    },
    {
        id: 3,
        content: `Travailler avec AEG a été un véritable plaisir. Leur compréhension des enjeux du secteur et leur
        disponibilité font d'eux des partenaires de confiance sur lesquels nous pouvons compter.`,
        avatar: './assets/images/testimonials/testimonials-3.jpg',
        client: 'Jena Karlis',
        position: 'Propriétaire de magasin',
    },
    {
        id: 4,
        content: `AEG a su répondre à nos attentes tout en dépassant nos objectifs. Leur approche personnalisée et 
        leur soutien constant sont inestimables pour notre entreprise.`,
        avatar: './assets/images/testimonials/testimonials-4.jpg',
        client: 'Matt Brandon',
        position: 'Freelance',
    },
    {
        id: 5,
        content: `Je recommande vivement AEG pour toute entreprise cherchant à optimiser ses processus. Leur 
        professionnalisme et leur engagement à la qualité sont remarquables.`,
        avatar: './assets/images/testimonials/testimonials-5.jpg',
        client: 'John Larson',
        position: 'Entrepreneur',
    },
];


// Données des Gallery
export const gallery = [
    {
        id: 1,
        image: '/assets/images/gallery/gallery-1.jpg',
    },
    {
        id: 2,
        image: '/assets/images/gallery/gallery-2.jpg',
    },
    {
        id: 3,
        image: '/assets/images/gallery/gallery-3.jpg',
    },
    {
        id: 4,
        image: '/assets/images/gallery/gallery-4.jpg',
    },
    {
        id: 5,
        image: '/assets/images/gallery/gallery-5.jpg',
    },
    {
        id: 6,
        image: '/assets/images/gallery/gallery-6.jpg',
    },
    {
        id: 7,
        image: '/assets/images/gallery/gallery-7.jpg',
    },
    {
        id: 8,
        image: '/assets/images/gallery/gallery-8.jpg',
    },
];


//Données des Directions
export const chefs = [
    {
        id: 1,
        name: 'Walter White',
        photo: './assets/images/chefs/chefs-1.jpg',
        position: 'Président',
        delay: '100',
    },
    {
        id: 2,
        name: 'Sarah Jhonson',
        photo: './assets/images/chefs/chefs-2.jpg',
        position: 'Directeur Génerale',
        delay: '200',
    },
    {
        id: 3,
        name: 'Jackson Rid',
        photo: './assets/images/chefs/chefs-5.jpg',
        position: 'Managere',
        delay: '300',
    },
];