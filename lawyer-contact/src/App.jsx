import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import PracticeAreasSection from './components/PracticeAreasSection'
import ResultsSection from './components/ResultsSection'
import ContactSection from './components/ContactSection'

const sections = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'practice', title: 'Practice Areas' },
  { id: 'results', title: 'Results' },
  { id: 'contact', title: 'Contact' },
]

function App() {
  return (
    <div className="app">
      <Navbar sections={sections} />

      <main>
        <HeroSection />
        <AboutSection />
        <PracticeAreasSection />
        <ResultsSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
