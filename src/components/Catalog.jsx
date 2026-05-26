

const categories = [
  {
    icon: '⚙️',
    title: 'Детали и комплектующие',
    desc: 'Запчасти для станков, промышленные компоненты, метизы, подшипники, шестерни.',
  },
  {
    icon: '📱',
    title: 'Электроника',
    desc: 'Микросхемы, платы, дисплеи, датчики, контроллеры, разъёмы и кабели.',
  },
  {
    icon: '🏗️',
    title: 'Оборудование',
    desc: 'Станки, производственные линии, строительное оборудование, инструменты.',
  },
  {
    icon: '🪑',
    title: 'Мебель и товары для дома',
    desc: 'Корпусная мебель, декор, освещение, сантехника, фурнитура.',
  },
  {
    icon: '👕',
    title: 'Одежда и текстиль',
    desc: 'Готовая одежда, ткани, фурнитура, спортивная форма, спецодежда.',
  },
  {
    icon: '📦',
    title: 'Упаковка и расходники',
    desc: 'Коробки, пакеты, плёнка, этикетки, одноразовая посуда, упаковочное оборудование.',
  },
];

function Catalog() {
  return (
    <section className="catalog" id="catalog">
      <div className="container">
        <h2 className="section-title">Что мы <span className="accent-text">поставляем</span></h2>
        <p className="section-subtitle">
          Работаем с широчайшим спектром товаров. Если это производится в Китае — мы это привезём.
        </p>
        <div className="catalog__grid">
          {categories.map((cat, i) => (
            <div className="catalog__card" key={i}>
              <span className="catalog__icon">{cat.icon}</span>
              <h3 className="catalog__title">{cat.title}</h3>
              <p className="catalog__desc">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Catalog;
