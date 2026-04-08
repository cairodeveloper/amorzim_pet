import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import ExtraServices from './components/ExtraServices'
import Animals from './components/Animals'
import Differentials from './components/Differentials'
import VideoShowcase from './components/VideoShowcase'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="relative overflow-hidden bg-transparent">
      <Navbar />
      <main className="bg-gradient-to-b from-brand-500/10 via-brand-600/12 to-brand-700/14">
        <Hero />
        <About />
        <Services />
        <ExtraServices />
        <Animals />
        <Differentials />
        <VideoShowcase />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <WhatsAppButton />
    </div>
  )
}

export default App
