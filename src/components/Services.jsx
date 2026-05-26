

const services = [
  {
    icon: '🚚',
    title: 'Логистика',
    desc: 'Организуем доставку грузов из Китая автомобильным, железнодорожным, морским или авиатранспортом. Отслеживание на каждом этапе и таможенное оформление.',
  },
  {
    icon: '🔍',
    title: 'Поиск и выкуп товара',
    desc: 'Находим лучших поставщиков под ваш запрос, проверяем благонадёжность, выкупаем товар напрямую с фабрик. Вы получаете только проверенные позиции.',
  },
  {
    icon: '💱',
    title: 'Денежные переводы в Китай',
    desc: 'Помогаем с конвертацией и переводом средств поставщикам. Работаем без скрытых комиссий, по прозрачному курсу.',
  },
  {
    icon: '📋',
    title: 'Консалтинговые услуги',
    desc: 'Анализируем рынок, рассчитываем себестоимость, даём рекомендации по ассортименту и стратегии импорта. Персональный менеджер на связи.',
  },
  {
    icon: '📦',
    title: 'Заказ образцов',
    desc: 'Организуем доставку пробных партий и образцов, чтобы вы могли оценить качество перед крупным заказом.',
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="services__title">
          Мы делаем импорт <span className="services__accent">проще</span>
        </h2>
        <p className="services__subtitle">
          Полный цикл услуг: от первой консультации до финальной доставки на ваш склад
        </p>
        <div className="services__grid">
          {services.map((s, idx) => (
            <div className="services__card" key={idx}>
              <span className="services__icon">{s.icon}</span>
              <h3 className="services__card-title">{s.title}</h3>
              <p className="services__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
