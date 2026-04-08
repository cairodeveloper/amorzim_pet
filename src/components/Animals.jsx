import { animalsSection } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function Animals() {
  useReveal()

  return (
    <section id="animais" className="py-20">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="reveal" data-reveal>
            <p className="section-kicker">{animalsSection.title}</p>
            <h2 className="section-title mt-4">Cuidado sensivel para caes e gatos</h2>
            <p className="section-copy">{animalsSection.description}</p>
            <div className="mt-5 inline-flex rounded-full bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700">
              Atendimento com respeito ao ritmo de cada pet
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {animalsSection.items.map((item, index) => (
                <article
                  key={item.title}
                  className="reveal rounded-[1.8rem] border border-brand-100 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-glow"
                  data-reveal
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <h3 className="text-xl font-semibold text-brand-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-brand-800/80">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="reveal relative" data-reveal>
            <div className="absolute -left-4 bottom-12 h-28 w-28 rounded-full bg-aqua/20 blur-3xl" />
            <div className="overflow-hidden rounded-[2.2rem] border border-white/60 bg-white/70 p-4 shadow-soft backdrop-blur-xl">
              <img
                src={animalsSection.image}
                alt={animalsSection.alt}
                className="h-[460px] w-full rounded-[1.8rem] object-cover"
              />
              <div className="absolute bottom-8 right-8 rounded-[1.4rem] bg-white/92 px-5 py-4 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
                  Caes e gatos
                </p>
                <p className="mt-2 text-sm leading-6 text-brand-900/80">
                  Manejo gentil para perfis, portes e sensibilidades diferentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Animals
