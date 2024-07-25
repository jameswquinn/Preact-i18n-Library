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
