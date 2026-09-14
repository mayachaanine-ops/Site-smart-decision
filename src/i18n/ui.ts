/* ==========================================================================
   TOUS LES TEXTES DU SITE, EN FRANÇAIS ET EN ANGLAIS.
   C'est le SEUL fichier à modifier pour changer un texte de la page.
   Chaque ligne existe en double : une fois dans `fr`, une fois dans `en`.
   ========================================================================== */

export const languages = { fr: 'Français', en: 'English' };
export type Lang = 'fr' | 'en';

export const ui = {
  fr: {
    meta: {
      title: 'Smart Decision — Technologie, Cloud & Finance',
      description:
        "Smart Decision réunit technologie, infrastructure cloud et stratégie financière dans une seule équipe de conseil. Des solutions concrètes, des résultats mesurables."
    },
    nav: { home: 'Accueil', about: 'À propos', services: 'Services', portfolio: 'Réalisations', blog: 'Blog', contact: 'Contact', demo: 'Réserver une démo' },
    hero: {
      badge: 'Conseil hybride : tech, cloud & finance',
      title1: 'Transformez votre entreprise',
      title2: 'avec des',
      titleAccent: 'solutions intelligentes',
      text: "Technologie, infrastructure cloud et stratégie financière réunies dans une seule équipe. Nous concevons, déployons et finançons les projets qui font avancer votre activité.",
      cta1: 'Démarrer un projet',
      cta2: 'Voir nos réalisations',
      stats: [
        { n: '500+', l: 'Projets livrés' },
        { n: '300+', l: 'Clients accompagnés' },
        { n: '98%', l: 'Taux de satisfaction' }
      ],
      panel: {
        title: 'Traitement IA', sub: 'Analyse en temps réel', status: 'Actif',
        bars: [
          { l: 'Développement web', v: '65%' },
          { l: 'Applications mobiles', v: '85%' },
          { l: 'Automatisation IA', v: '92%' }
        ],
        tile1: 'Code propre', tile2: 'Innovation'
      }
    },
    about: {
      badge: 'À propos',
      title1: "L'excellence digitale", title2: 'depuis 2018',
      text: "Smart Decision est un cabinet de conseil hybride qui réunit expertise technologique, opérationnelle et financière. Nous concevons des solutions sur mesure pour les entreprises qui veulent transformer leur activité en profondeur.",
      missionTitle: 'Notre mission',
      missionText: 'Donner aux entreprises les moyens technologiques de leurs ambitions.',
      visionTitle: 'Notre vision',
      visionText: 'Devenir le partenaire de référence de la transformation digitale.',
      cards: [
        { icon: '◍', n: '50+', l: 'Collaborateurs' },
        { icon: '✧', n: '8+', l: "Ans d'expérience" },
        { icon: '◎', n: '500+', l: 'Projets livrés' },
        { icon: '✚', n: '24/7', l: 'Support disponible' }
      ]
    },
    services: {
      badge: 'Nos trois piliers',
      title: 'Une offre complète',
      subtitle: 'Des solutions concrètes. Des résultats mesurables.',
      view: 'Voir les services',
      pillars: [
        {
          icon: '</>', title: 'Technologie & IT', text: 'Des logiciels sur mesure, taillés pour votre métier.',
          items: [
            { icon: '◈', name: 'Développement web', desc: 'Sites et applications métier' },
            { icon: '▤', name: 'Applications mobiles', desc: 'iOS, Android, Flutter' },
            { icon: '✦', name: 'Automatisation IA', desc: 'Agents et workflows' },
            { icon: '◍', name: 'Logiciels sur mesure', desc: 'Outils internes' }
          ]
        },
        {
          icon: '☁', title: 'Cloud & Infrastructure', text: 'Une infrastructure robuste, prête à monter en charge.',
          items: [
            { icon: '↑', name: 'Déploiement', desc: 'Mise en production continue' },
            { icon: '◫', name: 'Hébergement & domaine', desc: 'Gestion complète' },
            { icon: '⚙', name: "Mise en place d'infrastructure", desc: 'Réseau et sécurité' },
            { icon: '◈', name: 'Architecture évolutive', desc: 'Prête pour la croissance' }
          ]
        },
        {
          icon: '$', title: 'Finance & Stratégie', text: "L'expertise financière au service de votre croissance.",
          items: [
            { icon: '↗', name: 'Capital-risque', desc: 'Financement de croissance' },
            { icon: '$', name: 'Dette & fonds propres', desc: 'Montages sur mesure' },
            { icon: '✦', name: 'Grands projets', desc: "Financement d'envergure" },
            { icon: '▤', name: 'Planification financière', desc: 'Pilotage stratégique' }
          ]
        }
      ]
    },
    portfolio: {
      badge: 'Réalisations',
      title: 'Nos projets récents',
      subtitle: 'Comment nous avons aidé nos clients à transformer leur présence digitale.',
      items: [
        { tag: 'Automatisation IA', name: 'AI Voice Agent Automation', text: "Assistant vocal intelligent qui automatise les appels du service client et traite les demandes en langage naturel.", tech: ['AI/ML', 'NLP', 'Python'] },
        { tag: 'AI SaaS', name: 'Enterprise AI SaaS Platform', text: "Plateforme cloud d'analyse prédictive et de reporting automatisé pour la business intelligence.", tech: ['React', 'TensorFlow', 'AWS'] },
        { tag: 'Mobile', name: 'HeartMatch — Dating App', text: 'Application de rencontres avec algorithme de matching, appels vidéo et suggestions géolocalisées.', tech: ['React Native', 'Firebase'] }
      ]
    },
    blog: {
      badge: 'Blog', title: 'Nos analyses', all: 'Tous les articles', read: 'Lire',
      items: [
        { tag: 'Mobile', title: 'Le développement mobile-first en 2026', text: "Pourquoi l'approche mobile-first est devenue incontournable, et comment la mettre en œuvre concrètement.", author: 'Emily Rodriguez', date: '10 avril 2026' },
        { tag: 'Sécurité', title: 'Sécuriser vos actifs numériques', text: 'Les pratiques de cybersécurité essentielles que toute entreprise devrait mettre en place.', author: 'David Park', date: '8 avril 2026' }
      ]
    },
    contact: {
      badge: 'Contact', title: 'Parlons de votre projet',
      subtitle: 'Décrivez-nous votre besoin, nous revenons vers vous sous 24 h.',
      formTitle: 'Envoyez-nous un message',
      name: 'Votre nom', email: 'Adresse e-mail', phone: 'Téléphone', message: 'Votre message',
      send: 'Envoyer le message', bot: 'Poser une question au bot',
      infoTitle: 'Nos coordonnées', labelMail: 'E-mail', labelPhone: 'Téléphone', labelAddress: 'Adresse',
      ctaTitle: 'Prêt à démarrer ?',
      ctaText: 'Réservez 30 minutes de consultation gratuite avec nos experts.',
      ctaBtn: 'Planifier un appel'
    },
    footer: {
      tagline: 'Nous accompagnons les décisions éclairées et transformons les entreprises par la technologie.',
      services: 'Services', company: 'Entreprise', follow: 'Nous suivre',
      serviceList: ['Développement web', 'Applications mobiles', 'Cloud & Infrastructure', 'Finance & Stratégie'],
      companyList: ['À propos', 'Réalisations', 'Blog', 'Contact'],
      rights: 'Tous droits réservés.',
      legal: ['Confidentialité', 'Mentions légales', 'Cookies']
    }
  },

  en: {
    meta: {
      title: 'Smart Decision — Technology, Cloud & Finance',
      description:
        'Smart Decision brings technology, cloud infrastructure and financial strategy together in a single consulting team. Real solutions, measurable results.'
    },
    nav: { home: 'Home', about: 'About us', services: 'Services', portfolio: 'Portfolio', blog: 'Blog', contact: 'Contact', demo: 'Book a demo' },
    hero: {
      badge: 'Hybrid consulting: tech, cloud & finance',
      title1: 'Transform your business',
      title2: 'with',
      titleAccent: 'smart solutions',
      text: 'Technology, cloud infrastructure and financial strategy brought together in a single team. We design, deploy and fund the projects that move your business forward.',
      cta1: 'Start a project',
      cta2: 'View portfolio',
      stats: [
        { n: '500+', l: 'Projects delivered' },
        { n: '300+', l: 'Happy clients' },
        { n: '98%', l: 'Satisfaction rate' }
      ],
      panel: {
        title: 'AI processing', sub: 'Real-time analysis', status: 'Active',
        bars: [
          { l: 'Web development', v: '65%' },
          { l: 'Mobile apps', v: '85%' },
          { l: 'AI automation', v: '92%' }
        ],
        tile1: 'Clean code', tile2: 'Innovation'
      }
    },
    about: {
      badge: 'About us',
      title1: 'Building digital', title2: 'excellence since 2018',
      text: 'Smart Decision is a hybrid consulting firm combining technology, operations and financial expertise. We build tailored solutions for businesses looking to transform how they work.',
      missionTitle: 'Our mission',
      missionText: 'Empower businesses with technology that drives real growth.',
      visionTitle: 'Our vision',
      visionText: 'Become the reference partner for digital transformation.',
      cards: [
        { icon: '◍', n: '50+', l: 'Team members' },
        { icon: '✧', n: '8+', l: 'Years experience' },
        { icon: '◎', n: '500+', l: 'Projects delivered' },
        { icon: '✚', n: '24/7', l: 'Support available' }
      ]
    },
    services: {
      badge: 'Core service pillars',
      title: 'Comprehensive solutions',
      subtitle: 'Real solutions. Real results.',
      view: 'View services',
      pillars: [
        {
          icon: '</>', title: 'Technology & IT', text: 'Custom software tailored to your business needs.',
          items: [
            { icon: '◈', name: 'Web development', desc: 'Sites and business apps' },
            { icon: '▤', name: 'Mobile apps', desc: 'iOS, Android, Flutter' },
            { icon: '✦', name: 'AI automation', desc: 'Agents and workflows' },
            { icon: '◍', name: 'Custom software', desc: 'Internal tools' }
          ]
        },
        {
          icon: '☁', title: 'Cloud & Infrastructure', text: 'Robust, scalable infrastructure for modern businesses.',
          items: [
            { icon: '↑', name: 'Deployment', desc: 'Continuous delivery' },
            { icon: '◫', name: 'Hosting & domain', desc: 'Fully managed' },
            { icon: '⚙', name: 'Infrastructure setup', desc: 'Network and security' },
            { icon: '◈', name: 'Scalable architecture', desc: 'Built to grow' }
          ]
        },
        {
          icon: '$', title: 'Finance & Strategy', text: 'Financial expertise to fuel your business growth.',
          items: [
            { icon: '↗', name: 'Venture capital', desc: 'Growth funding' },
            { icon: '$', name: 'Debt & equity', desc: 'Flexible financing' },
            { icon: '✦', name: 'Large-scale projects', desc: 'Enterprise funding' },
            { icon: '▤', name: 'Financial planning', desc: 'Strategic guidance' }
          ]
        }
      ]
    },
    portfolio: {
      badge: 'Portfolio',
      title: 'Our recent work',
      subtitle: 'How we helped businesses transform their digital presence.',
      items: [
        { tag: 'AI automation', name: 'AI Voice Agent Automation', text: 'Intelligent voice assistant automating customer service calls with natural language processing.', tech: ['AI/ML', 'NLP', 'Python'] },
        { tag: 'AI SaaS', name: 'Enterprise AI SaaS Platform', text: 'Cloud-based AI platform for predictive analytics and automated reporting.', tech: ['React', 'TensorFlow', 'AWS'] },
        { tag: 'Mobile', name: 'HeartMatch — Dating App', text: 'Dating app with smart matching, video calls and location-based suggestions.', tech: ['React Native', 'Firebase'] }
      ]
    },
    blog: {
      badge: 'Blog', title: 'Industry insights', all: 'View all articles', read: 'Read more',
      items: [
        { tag: 'Mobile', title: 'Mobile-first development in 2026', text: 'Why mobile-first matters for modern web apps, and how to implement it well.', author: 'Emily Rodriguez', date: 'April 10, 2026' },
        { tag: 'Security', title: 'Securing your digital assets', text: 'Essential cybersecurity practices every business should implement.', author: 'David Park', date: 'April 8, 2026' }
      ]
    },
    contact: {
      badge: 'Contact', title: "Let's build something amazing",
      subtitle: 'Tell us about your project — we reply within 24 hours.',
      formTitle: 'Send us a message',
      name: 'Your name', email: 'Email address', phone: 'Phone number', message: 'Your message',
      send: 'Send message', bot: 'Try the bot',
      infoTitle: 'Contact information', labelMail: 'Email', labelPhone: 'Phone', labelAddress: 'Address',
      ctaTitle: 'Ready to get started?',
      ctaText: 'Book a free 30-minute consultation with our experts.',
      ctaBtn: 'Schedule a call'
    },
    footer: {
      tagline: 'Empowering knowledge-based decisions and transforming businesses through technology.',
      services: 'Services', company: 'Company', follow: 'Follow us',
      serviceList: ['Web development', 'Mobile apps', 'Cloud & Infrastructure', 'Finance & Strategy'],
      companyList: ['About us', 'Portfolio', 'Blog', 'Contact'],
      rights: 'All rights reserved.',
      legal: ['Privacy', 'Terms', 'Cookies']
    }
  }
} as const;

/* Coordonnées de l'entreprise — modifiables ici une seule fois */
export const company = {
  name: 'Smart Decision',
  email: 'contact@smart-decision.net',
  phone: '06.33.37.84.10',
  address: 'Paris, France',
  domain: 'https://smart-decision.net'
};
