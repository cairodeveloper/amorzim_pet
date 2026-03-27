import { heroStats, whatsappLink } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function Hero() {
  useReveal()

  return (
    <section id="inicio" className="relative bg-hero-glow">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/80 to-transparent" />
      <div className="container-shell grid gap-12 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24">
        <div className="reveal" data-reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-2 text-sm font-medium text-brand-700 shadow-soft">
            <span className="animate-pulseSoft">🐾</span>
            Banho e tosa com cuidado de verdade
          </div>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-brand-950 sm:text-5xl lg:text-6xl">
            Banho e Tosa Low Stress com Amor de Verdade 🐾
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-800/85 sm:text-xl">
            Cuidado especializado para caes e gatos, transformando o momento do banho
            em uma experiencia tranquila e prazerosa.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-brand-700 px-7 py-4 text-center font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:bg-brand-800"
            >
              Agendar pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="rounded-full border border-brand-200 bg-white/80 px-7 py-4 text-center font-semibold text-brand-800 transition duration-300 hover:-translate-y-1 hover:border-brand-300 hover:bg-white"
            >
              Conhecer servicos
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div key={item.value} className="glass-card rounded-3xl p-5">
                <p className="text-base font700 font-semibold text-brand-900">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-brand-800/75">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal relative" data-reveal>
          <div className="absolute -left-4 top-8 hidden h-24 w-24 rounded-full bg-brand-200/60 blur-3xl sm:block" />
          <div className="absolute -right-6 bottom-2 h-28 w-28 rounded-full bg-peach blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-5 shadow-soft backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between rounded-[1.5rem] bg-brand-50 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-brand-700">Amorzim Pet</p>
                <p className="text-sm text-brand-800/70">Estetica animal low stress</p>
              </div>
              <div className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-brand-700 shadow-sm">
                5.0
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
              <img
                className="h-full min-h-[320px] w-full rounded-[1.5rem] object-cover"
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80"
                alt="Cachorro recebendo carinho"
              />
              <div className="flex flex-col gap-4">
                <div className="rounded-[1.5rem] bg-brand-700 p-5 text-white">
                  <p className="text-sm uppercase tracking-[0.24em] text-white/70">Metodo</p>
                  <p className="mt-3 text-2xl font-bold">Low Stress</p>
                  <p className="mt-3 text-sm leading-6 text-white/80">
                    Um cuidado que respeita sinais, pausas e o bem-estar do pet em cada etapa.
                  </p>
                </div>
                <div className="animate-float rounded-[1.5rem] bg-white p-5 shadow-soft">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🐶</span>
                    <span className="text-3xl">🐱</span>
                  </div>
                  <p className="mt-4 text-base font-semibold text-brand-950">
                    Para caes e gatos
                  </p>
                  <p className="mt-2 text-sm leading-6 text-brand-800/75">
                    Atendimento mais gentil para diferentes perfis, portes e sensibilidades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
