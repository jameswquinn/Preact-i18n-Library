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

      <section id="contact" style={{ marginBottom: '20px' }}>
        <h2>{t('contact')}</h2>
        <form>
          <label>
            {t('name')}:
            <input type="text" name="name" placeholder={t('name')} />
          </label>
          <br />
          <label>
            {t('email')}:
            <input type="email" name="email" placeholder={t('email')} />
          </label>
          <br />
          <label>
            {t('message')}:
            <textarea name="message" placeholder={t('message')} />
          </label>
          <br />
          <button type="submit">{t('submit')}</button>
        </form>
      </section>

      <section id="products" style={{ marginBottom: '20px' }}>
        <h2>{t('listTitle')}</h2>
        <ul>
          <li>{t('item1')}</li>
          <li>{t('item2')}</li>
          <li>{t('item3')}</li>
        </ul>
      </section>

      <section id="testimonials" style={{ marginBottom: '20px' }}>
        <h2>{t('testimonials')}</h2>
        <blockquote>{t('testimonial1')}</blockquote>
        <blockquote>{t('testimonial2')}</blockquote>
        <blockquote>{t('testimonial3')}</blockquote>
      </section>

      <section id="blog">
        <h2>{t('blogTitle')}</h2>
        <article>
          <h3>{t('blogPost1Title')}</h3>
          <p>{t('blogPost1Summary')}</p>
        </article>
        <article>
          <h3>{t('blogPost2Title')}</h3>
          <p>{t('blogPost2Summary')}</p>
        </article>
        <article>
          <h3>{t('blogPost3Title')}</h3>
          <p>{t('blogPost3Summary')}</p>
        </article>
      </section>
    </div>
  );
};

export default HomePage;
