import { aboutItems, aboutMedia } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function About() {
  useReveal()

  return (
    <section id="sobre" className="py-20">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="reveal" data-reveal>
            <p className="section-kicker">Sobre o cuidado</p>
            <h2 className="section-title mt-4">Low Stress na pratica, com acolhimento real</h2>
            <p className="section-copy">
              O cuidado vai muito alem da estetica. A proposta da Amorzim Pet e criar uma
              experiencia leve, respeitosa e bonita para o pet, valorizando comportamento,
              bem-estar e confianca em cada visita.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3 lg:grid-cols-1">
              {aboutItems.map((item, index) => (
                <article
                  key={item.title}
                  className="reveal glass-card rounded-[2rem] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-glow"
                  data-reveal
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-2xl">
                    {item.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-brand-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-brand-800/80">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="reveal relative" data-reveal>
            <div className="soft-grid absolute inset-6 rounded-[2rem] opacity-60" />
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/70 bg-white/70 p-4 shadow-soft backdrop-blur-xl">
              <img
                src={aboutMedia.image}
                alt={aboutMedia.alt}
                className="h-[520px] w-full rounded-[1.8rem] object-cover"
              />
              <div className="absolute bottom-10 left-10 max-w-xs rounded-[1.5rem] bg-white/90 p-5 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">
                  Experiencia tranquila
                </p>
                <p className="mt-3 text-sm leading-7 text-brand-900/80">
                  Um espaco aconchegante, um ritmo gentil e um atendimento que faz diferenca
                  para o pet e para o tutor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
