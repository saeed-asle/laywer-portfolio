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
import { LanguageProvider, useLanguage } from './components/LanguageContext';
import Navigation from './components/portfolio/Navigation';
import Hero from './components/portfolio/Hero';
import About from './components/portfolio/About';
import Services from './components/portfolio/Services';
import Testimonials from './components/portfolio/Testimonials';
import Contact from './components/portfolio/Contact';
import Footer from './components/portfolio/Footer';
import ExperienceSection from './components/portfolio/ExperienceSection';


function HomeContent() {
  const { t } = useLanguage();

  return (
    <div dir={t.dir} className="min-h-screen bg-white font-sans antialiased">
      <Navigation />
      <Hero />
      <About />
      <Services />
            <ExperienceSection />

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