import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import Fragrances from './components/Sections/Fragrances';
import About from './components/Sections/About';
import WhyChooseUs from './components/Sections/WhyChooseUs';
import SpecialOffer from './components/Sections/SpecialOffer';
import Testimonials from './components/Sections/Testimonials';
import Contact from './components/Sections/Contact';
import Footer from './components/Footer/Footer';
import CartDrawer from './components/Cart/CartDrawer';

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader onDone={() => setLoading(false)} />;
  }

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen overflow-x-hidden">
          <Navbar />
          <CartDrawer />
          <main>
            <Hero />
            <Products />
            <Fragrances />
            <About />
            <WhyChooseUs />
            <SpecialOffer />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}
