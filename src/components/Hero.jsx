import { brandAssets, heroContent, heroStats, instagramLink, whatsappLink } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function Hero() {
  useReveal()

  return (
    <section id="inicio" className="relative overflow-hidden bg-hero-glow">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/80 to-transparent" />
      <div className="absolute left-8 top-24 hidden h-24 w-24 rounded-full bg-sunshine/30 blur-3xl md:block" />
      <div className="absolute right-0 top-20 h-40 w-40 rounded-full bg-lavender/20 blur-3xl" />

      <div className="container-shell grid gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-24">
        <div className="reveal" data-reveal>
          <a
            href={instagramLink}
            target="_blank"
            rel="noreferrer"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/90 px-4 py-2 text-sm font-medium text-brand-700 shadow-soft transition hover:-translate-y-0.5 hover:border-pink hover:text-pink"
          >
            <span className="animate-pulseSoft">Instagram</span>
            @amorzim_pet
          </a>

          <div className="mb-6 flex items-center gap-4">
            <img
              src={brandAssets.logo}
              alt="Logo Amorzim Pet"
              className="h-16 w-16 rounded-[1.6rem] border border-white/70 object-cover shadow-soft"
            />
            <p className="section-kicker">{heroContent.eyebrow}</p>
          </div>

          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-brand-950 sm:text-5xl lg:text-6xl">
            {heroContent.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-800/85 sm:text-xl">
            {heroContent.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {heroContent.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-brand-100 bg-white/75 px-4 py-2 text-sm font-medium text-brand-800 shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>

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
              className="rounded-full border border-brand-200 bg-white/80 px-7 py-4 text-center font-semibold text-brand-800 transition duration-300 hover:-translate-y-1 hover:border-aqua hover:bg-white"
            >
              Conhecer servicos
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div key={item.value} className="glass-card rounded-3xl p-5">
                <p className="text-base font-semibold text-brand-900">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-brand-800/75">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal relative" data-reveal>
          <div className="absolute -left-4 top-8 hidden h-24 w-24 rounded-full bg-aqua/35 blur-3xl sm:block" />
          <div className="absolute -right-6 bottom-2 h-28 w-28 rounded-full bg-pink/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/75 p-5 shadow-soft backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between rounded-[1.5rem] bg-brand-50 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-brand-700">Amorzim Pet</p>
                <p className="text-sm text-brand-800/70">Rua das Canarias 130, Santa Branca</p>
              </div>
              <div className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-brand-700 shadow-sm">
                5.0
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
              <div className="relative">
                <img
                  className="h-full min-h-[320px] w-full rounded-[1.5rem] object-cover"
                  src={heroContent.featuredImages[0].src}
                  alt={heroContent.featuredImages[0].alt}
                />
                <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-700 shadow-soft">
                  Amorzim Pet
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <img
                  className="h-40 w-full rounded-[1.5rem] object-cover"
                  src={heroContent.featuredImages[1].src}
                  alt={heroContent.featuredImages[1].alt}
                />
                <div className="animate-float rounded-[1.5rem] bg-brand-700 p-5 text-white shadow-glow">
                  <p className="text-sm uppercase tracking-[0.24em] text-white/70">Metodo</p>
                  <p className="mt-3 text-2xl font-bold">Low Stress</p>
                  <p className="mt-3 text-sm leading-6 text-white/80">
                    Um cuidado que respeita sinais, pausas e o bem-estar do pet em cada etapa.
                  </p>
                </div>
                <img
                  className="h-32 w-full rounded-[1.5rem] object-cover"
                  src={heroContent.featuredImages[2].src}
                  alt={heroContent.featuredImages[2].alt}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
