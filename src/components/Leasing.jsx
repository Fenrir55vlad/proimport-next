

function Leasing() {
  return (
    <section className="leasing" id="leasing">
      <div className="container">
        <div className="leasing__header">
          <h2 className="leasing__title">
            <span className="leasing__title-accent">Лизинг</span> для вашего бизнеса
          </h2>
          <p className="leasing__intro">
            Выгодные условия от надёжных партнёров — мы сопровождаем сделку от заявки до договора
          </p>
        </div>

        <div className="leasing__body">
          <div className="leasing__text">
            <p className="leasing__lead">
              Являясь лизинговым агентством, мы помогаем предприятиям получить необходимое
              оборудование, технику и транспорт. Сотрудничаем напрямую с крупнейшими
              лизингодателями страны — это быстрое одобрение и минимальные ставки.
            </p>

            <div className="leasing__partners">
              <h3 className="leasing__partners-title">Наши партнёры по лизингу</h3>
              <ul className="leasing__list">
                {['Балтийский лизинг', 'Сбербанк Лизинг', 'Альфа-Банк Лизинг', 'ВТБ Лизинг', 'Газпромбанк Автолизинг'].map(name => (
                  <li key={name} className="leasing__list-item">
                    <span className="leasing__list-icon">✔</span> {name}
                  </li>
                ))}
              </ul>
            </div>

            <p className="leasing__details">
              Мы берём на себя полное сопровождение сделки: от подбора оптимальной программы
              до подписания договора. Наши клиенты получают финансирование в среднем на 15–20%
              быстрее рынка. Работаем с суммами от 1 млн до 500 млн рублей.
            </p>

            <button
              className="btn btn--primary leasing__cta"
              onClick={() =>
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
              }
            >
              Получить консультацию
            </button>
          </div>

          <div className="leasing__media">
            <div className="leasing__image-wrapper">
              <img
                src="/images/diting_result.jpeg"
                alt="Сотрудник компании"
                className="leasing__image"
                loading="lazy"
              />
              <div className="leasing__image-badge">Опыт 7+ лет</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Leasing;
