import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Differentials from './components/Differentials'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <WhatsAppButton />
    </div>
  )
}

export default App
