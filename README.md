Creating comprehensive documentation for your GitHub repository is essential for helping users understand how to use your project, contribute to it, and resolve issues they may encounter. Below is a template for the documentation that covers various sections, including usage examples, configuration, FAQs, and more.

---

# My Preact i18n Library

A lightweight internationalization (i18n) library for Preact applications, designed to provide easy-to-use translation management with minimal dependencies.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Setup](#setup)
  - [Switching Languages](#switching-languages)
  - [Using Translations](#using-translations)
- [Components](#components)
  - [LanguageSwitcher](#languageswitcher)
  - [NavBar](#navbar)
  - [Footer](#footer)
- [Configuration](#configuration)
- [FAQs](#faqs)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [License](#license)

## Features

- Easy setup for Preact internationalization.
- Supports dynamic language switching.
- Provides context-based translation management.
- Includes example components for integration.

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/preact-i18n.git
cd preact-i18n
npm install
```

## Usage

### Setup

1. **Wrap Your Application with `I18nProvider`**

   ```jsx
   // src/components/App.js
   import { h } from 'preact';
   import { I18nProvider } from '../i18n';
   import NavBar from './NavBar';
   import HomePage from './HomePage';
   import Footer from './Footer';
   import LanguageSwitcher from './LanguageSwitcher';

   const App = () => {
     return (
       <I18nProvider>
         <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
           <LanguageSwitcher />
           <NavBar />
           <HomePage />
           <Footer />
         </div>
       </I18nProvider>
     );
   };

   export default App;
   ```

2. **Define Your Translations**

   ```js
   // src/i18n/index.js
   import { h } from 'preact';
   import { useContext, createContext, useMemo, useReducer } from 'preact/hooks';

   const I18nContext = createContext();
   const LanguageContext = createContext();

   const translations = {
     en: {
       welcome: 'Welcome to Our Website',
       // Add more translations
     },
     it: {
       welcome: 'Benvenuto sul nostro sito web',
       // Add more translations
     },
   };

   const defaultLanguage = 'en';

   const languageReducer = (state, action) => {
     switch (action.type) {
       case 'SET_LANGUAGE':
         return action.payload;
       default:
         return state;
     }
   };

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

   export const useTranslation = () => {
     const translations = useContext(I18nContext);
     const t = (key) => translations[key] || `Missing translation for: ${key}`;
     return { t };
   };

   export const useLanguage = () => {
     return useContext(LanguageContext);
   };
   ```

### Switching Languages

Use the `LanguageSwitcher` component to allow users to switch between languages:

```jsx
// src/components/LanguageSwitcher.js
import { h } from 'preact';
import { useLanguage } from '../i18n';

const LanguageSwitcher = () => {
  const { language, dispatch } = useLanguage();

  const switchLanguage = (lang) => {
    dispatch({ type: 'SET_LANGUAGE', payload: lang });
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <p>Current Language: {language.toUpperCase()}</p>
      <button onClick={() => switchLanguage('en')} aria-label="Switch to English" style={{ marginRight: '10px' }}>
        English
      </button>
      <button onClick={() => switchLanguage('it')} aria-label="Switch to Italian">
        Italiano
      </button>
    </div>
  );
};

export default LanguageSwitcher;
```

### Using Translations

In your components, use the `useTranslation` hook to access translations:

```jsx
// src/components/HomePage.js
import { h } from 'preact';
import { useTranslation } from '../i18n';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <header style={{ marginBottom: '20px' }}>
        <h1>{t('welcome')}</h1>
        <p>{t('description')}</p>
      </header>
      {/* More content */}
    </div>
  );
};

export default HomePage;
```

## Components

### `LanguageSwitcher`

Allows users to switch between different languages.

```jsx
import { h } from 'preact';
import { useLanguage } from '../i18n';

const LanguageSwitcher = () => {
  const { language, dispatch } = useLanguage();

  const switchLanguage = (lang) => {
    dispatch({ type: 'SET_LANGUAGE', payload: lang });
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <p>Current Language: {language.toUpperCase()}</p>
      <button onClick={() => switchLanguage('en')}>English</button>
      <button onClick={() => switchLanguage('it')}>Italiano</button>
    </div>
  );
};

export default LanguageSwitcher;
```

### `NavBar`

A navigation bar component.

```jsx
import { h } from 'preact';
import { useTranslation } from '../i18n';

const NavBar = () => {
  const { t } = useTranslation();

  return (
    <nav style={{ padding: '10px 0', borderBottom: '1px solid #ddd' }}>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex' }}>
        <li style={{ marginRight: '20px' }}><a href="#home">{t('navHome')}</a></li>
        <li style={{ marginRight: '20px' }}><a href="#about">{t('navAbout')}</a></li>
        <li style={{ marginRight: '20px' }}><a href="#services">{t('navServices')}</a></li>
        <li style={{ marginRight: '20px' }}><a href="#blog">{t('navBlog')}</a></li>
        <li><a href="#contact">{t('navContact')}</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
```

### `Footer`

A footer component.

```jsx
import { h } from 'preact';
import { useTranslation } from '../i18n';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer style={{ padding: '10px 0', borderTop: '1px solid #ddd', textAlign: 'center' }}>
      <p>{t('footerText')}</p>
    </footer>
  );
};

export default Footer;
```

## Configuration

You can configure the `I18nProvider` to use different sets of translations by updating the `translations` object in `src/i18n/index.js`. Make sure to define translations for all supported languages.

## FAQs

### How do I add new languages?

To add a new language, update the `translations` object in `src/i18n/index.js` with the new language's key and translations.

### How do I handle missing translations?

The `useTranslation` hook provides a fallback text if a translation key is missing. You can customize this behavior in the `t` function.

### Can I use this library with React?

This library is specifically designed for Preact. For React, consider using `react-i18next`.

## Changelog

Keep track of changes and updates to the library in the [CHANGELOG.md](CHANGELOG.md) file.

## Contributing

Contributions are welcome! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for more details on how to contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to adjust and expand the documentation according to the specifics of your project and any additional features or components you include.
