// import './App.css'
// import Navbar from './components/Navbar'
// import HeroSection from './components/HeroSection'
// import AboutSection from './components/AboutSection'
// import PracticeAreasSection from './components/PracticeAreasSection'
// import ResultsSection from './components/ResultsSection'
// import ContactSection from './components/ContactSection'

// const sections = [
//   { id: 'home', title: 'Home' },
//   { id: 'about', title: 'About' },
//   { id: 'practice', title: 'Practice Areas' },
//   { id: 'results', title: 'Results' },
//   { id: 'contact', title: 'Contact' },
// ]

// function App() {
//   return (
//     <div className="app">
//       <Navbar sections={sections} />

//       <main>
//         <HeroSection />
//         <AboutSection />
//         <PracticeAreasSection />
//         <ResultsSection />
//         <ContactSection />
//       </main>
//     </div>
//   )
// }

// export default App

import React from 'react';
import { LanguageProvider, useLanguage } from './component/LanguageContext';
import Navigation from './component/portfolio/Navigation';
import Hero from './component/portfolio/Hero';
import About from './component/portfolio/About';
import Services from './component/portfolio/Services';
import Testimonials from './component/portfolio/Testimonials';
import Contact from './component/portfolio/Contact';
import Footer from './component/portfolio/Footer';

function HomeContent() {
  const { t } = useLanguage();

  return (
    <div dir={t.dir} className="min-h-screen bg-white font-sans antialiased">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}