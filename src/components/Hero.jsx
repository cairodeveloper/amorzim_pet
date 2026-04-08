import { brandAssets, heroContent, heroStats, instagramLink, whatsappLink } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function Hero() {
  useReveal()

  return (
    <section id="inicio" className="relative overflow-hidden bg-transparent">
      <div className="container-shell py-16 lg:py-24">
        <div className="grid gap-12 rounded-[1.8rem] border border-brand-800/20 bg-brand-500/58 p-6 shadow-soft backdrop-blur-sm lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:p-8">
          <div className="reveal" data-reveal>
            <a
              href={instagramLink}
              target="_blank"
              rel="noreferrer"
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-800/20 bg-brand-100/28 px-4 py-2 text-sm font-medium text-brand-950 shadow-soft transition hover:-translate-y-0.5 hover:border-pink hover:text-pink"
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
                  className="rounded-full border border-brand-800/15 bg-brand-100/28 px-4 py-2 text-sm font-medium text-brand-950 shadow-sm"
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
                className="rounded-full border border-brand-800/20 bg-brand-100/28 px-7 py-4 text-center font-semibold text-brand-950 transition duration-300 hover:-translate-y-1 hover:border-aqua hover:bg-brand-100/40"
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
            <div className="photo-shell relative rounded-[1.6rem] p-5">
              <div className="mb-4 flex items-center justify-between rounded-2xl bg-brand-200/45 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-brand-700">Amorzim Pet</p>
                  <p className="text-sm text-brand-800/70">Rua das Canarias 130, Santa Branca</p>
                </div>
                <div className="rounded-full bg-brand-100/55 px-3 py-1 text-sm font-semibold text-brand-900 shadow-sm">
                  5.0
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
                <div className="photo-frame relative min-h-[400px]">
                  <img
                    className="photo-image min-h-[400px]"
                    src={heroContent.featuredImages[0].src}
                    alt={heroContent.featuredImages[0].alt}
                    style={{ objectPosition: heroContent.featuredImages[0].position }}
                  />
                  <div className="absolute bottom-5 left-5 rounded-full bg-brand-100/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-900 shadow-soft">
                    Amorzim Pet
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="photo-frame h-52">
                    <img
                      className="photo-image h-52"
                      src={heroContent.featuredImages[1].src}
                      alt={heroContent.featuredImages[1].alt}
                      style={{ objectPosition: heroContent.featuredImages[1].position }}
                    />
                  </div>
                  <div className="animate-float rounded-[1.5rem] bg-brand-700 p-5 text-white shadow-glow">
                    <p className="text-sm uppercase tracking-[0.24em] text-white/70">Metodo</p>
                    <p className="mt-3 text-2xl font-bold">Low Stress</p>
                    <p className="mt-3 text-sm leading-6 text-white/80">
                      Um cuidado que respeita sinais, pausas e o bem-estar do pet em cada etapa.
                    </p>
                  </div>
                  <div className="photo-frame h-65">
                    <img
                      className="photo-image h-65"
                      src={heroContent.featuredImages[2].src}
                      alt={heroContent.featuredImages[2].alt}
                      style={{ objectPosition: heroContent.featuredImages[2].position }}
                    />
                  </div>
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
