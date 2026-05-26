import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';


// ⚠️ Замени эти ключи после регистрации на https://www.emailjs.com/
const EMAILJS_PUBLIC_KEY = 'JVUnsIBU2Vu-SFNcC';        // получи в Account → API Keys
const EMAILJS_SERVICE_ID = 'service_znfjp6j';        // создай Email Service (Gmail)
const EMAILJS_TEMPLATE_ID = 'template_yh488cn';      // создай Email Template

function ContactForm() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: 'fenrir55omsk@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      console.error('Ошибка отправки:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">
          Оставьте <span className="accent-text">заявку</span>
        </h2>
        <p className="section-subtitle">
          Расскажите, что хотите привезти из Китая — и мы подготовим коммерческое предложение в течение 24 часов.
        </p>

        <form className="contact__form" ref={formRef} onSubmit={handleSubmit}>
          <div className="contact__row">
            <div className="contact__field">
              <label htmlFor="name">Ваше имя *</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Иван Петров"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="ivan@company.ru"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="contact__row">
            <div className="contact__field">
              <label htmlFor="phone">Телефон</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+7 999 123-45-67"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="contact__field">
            <label htmlFor="message">Что хотите заказать? *</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Опишите товар: категория, количество, желаемые сроки, бюджет..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn--primary contact__submit"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Отправляем...' : 'Отправить заявку'}
          </button>

          {status === 'success' && (
            <div className="contact__alert contact__alert--success">
              ✅ Заявка отправлена! Мы свяжемся с вами в ближайшее время.
            </div>
          )}
          {status === 'error' && (
            <div className="contact__alert contact__alert--error">
              ❌ Что-то пошло не так. Попробуйте позже или напишите нам на fenrir55omsk@gmail.com
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
