function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__image-wrapper">
            <img
              src="/images/photo123.avif"
              alt="PROимпорт — ваш надёжный партнёр по поставкам из Китая"
              loading="lazy"
            />
            <div className="about__badge">
              <span className="about__badge-number">7+</span>
              <span className="about__badge-text">лет опыта</span>
            </div>
          </div>
          <div className="about__text">
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              <span className="accent-text">PROимпорт</span> — ваш надёжный партнёр по поставкам из Китая
            </h2>
            <p className="about__paragraph">
              Мы не просто посредники. Мы — команда экспертов с офисами в Москве, Гуанчжоу и Иу,
              которая ежедневно решает задачи бизнеса: от поиска уникального компонента до
              организации мультимодальной перевозки негабаритного оборудования.
            </p>
            <ul className="about__list">
              <li>✓ Прямые контракты с 200+ фабриками</li>
              <li>✓ Контроль качества на каждом этапе</li>
              <li>✓ Таможенное оформление «под ключ»</li>
              <li>✓ Доставка авто, Ж/Д, морем или авиа</li>
              <li>✓ Финансовая безопасность сделок</li>
            </ul>
            <button
              className="btn btn--primary"
              onClick={() =>
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
              }
            >
              Связаться с нами
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;