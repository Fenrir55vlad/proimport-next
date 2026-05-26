

const partners = [
  'Alibaba Group',
  'Made-in-China',
  'Global Sources',
  'DHL Express',
  'China Railway',
  'COSCO Shipping',
];

function Partners() {
  return (
    <section className="partners" id="partners">
      <div className="container">
        <h2 className="section-title">
          Наши <span className="accent-text">партнеры</span>
        </h2>
        <p className="section-subtitle">
          Работаем напрямую с крупнейшими площадками и логистическими операторами Китая.
        </p>
        <div className="partners__grid">
          {partners.map((partner, idx) => (
            <div className="partners__item" key={idx}>
              <span className="partners__name">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
