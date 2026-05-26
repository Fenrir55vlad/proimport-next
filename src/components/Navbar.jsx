import { useState, useEffect } from 'react';


const navLinks = [
  { id: 'hero', label: 'Главная' },
  { id: 'leasing', label: 'Лизинг' },
  { id: 'catalog', label: 'Каталог' },
  { id: 'partners', label: 'Партнеры' },
  { id: 'about', label: 'О компании' },
  { id: 'contact', label: 'Контакты' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <div className="navbar__logo" onClick={() => scrollTo('hero')}>
          <span className="navbar__logo-icon">🚢</span>
          <span className="navbar__logo-text">
            <span className="logo-pro">PRO</span>
            <span className="logo-import">импорт</span>
          </span>
        </div>

        <ul className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                className="navbar__link"
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={`navbar__burger ${mobileOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
