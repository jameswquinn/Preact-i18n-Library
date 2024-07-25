import { h } from 'preact';
import { useContext, createContext, useMemo, useReducer } from 'preact/hooks';

// Create contexts
const I18nContext = createContext();
const LanguageContext = createContext();

// Define translations
const translations = {
  en: {
    welcome: 'Welcome to Our Website',
    description: 'We are glad to have you here. Explore our features and offerings.',
    contact: 'Contact Us',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    submit: 'Submit',
    listTitle: 'Popular Products',
    item1: 'Product A',
    item2: 'Product B',
    item3: 'Product C',
    testimonials: 'What Our Customers Say',
    testimonial1: 'This is the best service I have ever used!',
    testimonial2: 'Fantastic quality and excellent customer support.',
    testimonial3: 'I am extremely satisfied with my purchase.',
    blogTitle: 'Latest Blog Posts',
    blogPost1Title: 'How to Get Started with Our Service',
    blogPost1Summary: 'A comprehensive guide to help you get started with our service.',
    blogPost2Title: 'Top 10 Tips for Maximizing Your Experience',
    blogPost2Summary: 'Useful tips and tricks to make the most of our features.',
    blogPost3Title: 'Upcoming Features We’re Excited About',
    blogPost3Summary: 'An overview of the new features we will be introducing soon.',
    navHome: 'Home',
    navAbout: 'About Us',
    navServices: 'Services',
    navBlog: 'Blog',
    navContact: 'Contact',
    footerText: '© 2024 Our Website. All rights reserved.',
  },
  it: {
    welcome: 'Benvenuto sul nostro sito web',
    description: 'Siamo felici di averti qui. Esplora le nostre funzionalità e offerte.',
    contact: 'Contattaci',
    name: 'Nome',
    email: 'Email',
    message: 'Messaggio',
    submit: 'Invia',
    listTitle: 'Prodotti Popolari',
    item1: 'Prodotto A',
    item2: 'Prodotto B',
    item3: 'Prodotto C',
    testimonials: 'Cosa Dicono i Nostri Clienti',
    testimonial1: 'Questo è il miglior servizio che abbia mai usato!',
    testimonial2: 'Qualità fantastica e supporto clienti eccellente.',
    testimonial3: 'Sono estremamente soddisfatto del mio acquisto.',
    blogTitle: 'Ultimi Articoli del Blog',
    blogPost1Title: 'Come Iniziare con il Nostro Servizio',
    blogPost1Summary: 'Una guida completa per aiutarti a iniziare con il nostro servizio.',
    blogPost2Title: 'I 10 Migliori Consigli per Massimizzare la Tua Esperienza',
    blogPost2Summary: 'Consigli e trucchi utili per sfruttare al massimo le nostre funzionalità.',
    blogPost3Title: 'Nuove Funzionalità di Cui Siamo Entusiasti',
    blogPost3Summary: 'Una panoramica delle nuove funzionalità che introdurremo presto.',
    navHome: 'Home',
    navAbout: 'Chi Siamo',
    navServices: 'Servizi',
    navBlog: 'Blog',
    navContact: 'Contatto',
    footerText: '© 2024 Il Nostro Sito Web. Tutti i diritti riservati.',
  },
};

// Default fallback language
const defaultLanguage = 'en';

// Language reducer
const languageReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return action.payload;
    default:
      return state;
  }
};

// I18nProvider component
export const I18nProvider = ({ children }) => {
  const [language, dispatch] = useReducer(languageReducer, defaultLanguage);
  const currentTranslations = useMemo(() => translations[language] || translations[defaultLanguage], [language]);

  return (
    <LanguageContext.Provider value={{ language, dispatch }}>
      <I18nContext.Provider value={currentTranslations}>
        {children}
      </I18nContext.Provider>
    </LanguageContext.Provider>
  );
};

// useTranslation hook
export const useTranslation = () => {
  const translations = useContext(I18nContext);
  const t = (key) => translations[key] || `Missing translation for: ${key}`;
  return { t };
};

// useLanguage hook
export const useLanguage = () => {
  return useContext(LanguageContext);
};
