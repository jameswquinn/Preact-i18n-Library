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
