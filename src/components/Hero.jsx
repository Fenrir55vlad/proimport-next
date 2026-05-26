

function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Локальное фоновое изображение */}
      <div className="hero__bg">
        <img
          src="/images/photo123.avif"
          alt="Контейнерный порт"
          loading="eager"
        />
        <div className="hero__overlay"></div>
      </div>

      <div className="hero__content container">
        <div className="hero__text">
          <span className="hero__badge">
            <svg className="hero__flag-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20">
              <rect width="30" height="20" fill="#DE2910"/>
              <path d="M15 3L16.5 8H22L17.5 11.5L19 17L15 13L11 17L12.5 11.5L8 8H13.5Z" fill="#FFDE00"/>
            </svg>
            Прямые поставки из Китая
          </span>
          <h1 className="hero__title">
            Доставим <span className="accent-text">любые товары</span> и комплектующие из Китая в Россию
          </h1>
          <p className="hero__subtitle">
            Берём на себя полный цикл: поиск поставщика, переговоры, выкуп, логистика и таможня.
            Вам остаётся только получить товар и развивать бизнес.
          </p>
          <div className="hero__cta">
            <button
              className="btn btn--primary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Оставить заявку
            </button>
            <button
              className="btn btn--outline"
              onClick={() => document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' })}
            >
              Смотреть каталог
            </button>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">500+</span>
              <span className="hero__stat-label">компаний-клиентов</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">12 000+</span>
              <span className="hero__stat-label">тонн доставлено</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">7 лет</span>
              <span className="hero__stat-label">на рынке</span>
            </div>
          </div>
        </div>

        <div className="hero__videos">
          <div className="hero__video-card">
            <div className="hero__video-wrapper">
              <iframe
                src="https://rutube.ru/play/embed/028b038303cdb20f6d5dc703492fce1c/?autoplay=1&muted=1"
                title="Как мы работаем с поставщиками в Китае"
                allow="clipboard-write; autoplay"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
            <div className="hero__video-label">
              <span className="hero__video-dot"></span>
              Как мы работаем
            </div>
          </div>
          <div className="hero__video-card">
            <div className="hero__video-wrapper">
              <iframe
                src="https://rutube.ru/play/embed/1307c86aa8876ab6197877d4c226ad9c/?autoplay=1&muted=1"
                title="Обзор логистики из Китая"
                allow="clipboard-write; autoplay"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
            <div className="hero__video-label">
              <span className="hero__video-dot hero__video-dot--live"></span>
              Процесс доставки
            </div>
          </div>
        </div>
      </div>

      <div className="hero__wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C360,120 720,0 1440,60 L1440,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
