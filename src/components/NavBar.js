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
