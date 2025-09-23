import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import Highlights from './sections/Highlights';
import Services from './sections/Services';
import Team from './sections/Team';
import Testimonials from './sections/Testimonials';
import Gallery from './sections/Gallery';
import FAQ from './sections/FAQ';
import Blog from './sections/Blog';
import Contact from './sections/Contact';
import Address from './sections/Address';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Services />
        <Team />
        <Testimonials />
        <Gallery />
        <FAQ />
        <Blog />
        <Contact />
        <Address />
      </main>
      <Footer />
    </div>
  );
}

export default App;
