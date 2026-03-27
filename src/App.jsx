import Navbar from './components/Navbar'
import NavbarMobile from './components/NavbarMobile'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot'

export default function App() {
  return (
    <div className="min-h-screen bg-dark-base text-slate-300 overflow-x-hidden">
      {/* Show NavbarMobile on mobile, Navbar on sm+ */}
      <div className="block sm:hidden">
        <NavbarMobile />
      </div>
      <div className="hidden sm:block">
        <Navbar />
      </div>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Certifications />
      <Footer />
      <ChatBot />
    </div>
  )
}
