import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Leasing from '../components/Leasing';
import Catalog from '../components/Catalog';
import Partners from '../components/Partners';
import About from '../components/About';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Leasing />
        <Catalog />
        <Partners />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}