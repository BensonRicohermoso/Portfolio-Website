import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-dark-base text-slate-300 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Certifications />
      <Footer />
    </div>
  )
}
