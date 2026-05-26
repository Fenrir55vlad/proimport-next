

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <span className="footer__logo">
              🚢 <span className="logo-pro">PRO</span>
              <span className="logo-import">импорт</span>
            </span>
            <p className="footer__desc">
              Профессиональные поставки товаров, деталей и комплектующих из Китая для вашего бизнеса.
            </p>
          </div>
          <div className="footer__links-col">
            <h4>Навигация</h4>
            {['Главная', 'Лизинг', 'Каталог', 'Партнеры', 'О компании'].map((l) => (
              <a
                key={l}
                href={`#${l === 'Главная' ? 'hero' : l === 'О компании' ? 'about' : l.toLowerCase()}`}
              >
                {l}
              </a>
            ))}
          </div>
          <div className="footer__links-col">
            <h4>Контакты</h4>
            <a href="mailto:fenrir55omsk@gmail.com">fenrir55omsk@gmail.com</a>
            <a href="tel:+70000000000">+7 (000) 000-00-00</a>
            <span>Москва — Гуанчжоу — Иу</span>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} PROимпорт. Все права защищены.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
