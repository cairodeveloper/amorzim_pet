import { differentials, whatsappLink } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function Differentials() {
  useReveal()

  return (
    <section className="py-20">
      <div className="container-shell">
        <div className="grid gap-8 overflow-hidden rounded-[2rem] bg-brand-900 px-6 py-10 text-white shadow-soft lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div className="reveal" data-reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-200">
              Diferenciais
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Mais do que estetica: uma experiencia positiva para o seu pet
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/75">
              Cada atendimento e pensado para reduzir tensao, transmitir seguranca e fazer
              o pet se sentir acolhido do inicio ao fim.
            </p>
          </div>

          <div className="space-y-4">
            {differentials.map((item, index) => (
              <div
                key={item}
                className="reveal flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/8 p-5 backdrop-blur-sm"
                data-reveal
                style={{ transitionDelay: `${index * 110}ms` }}
              >
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-300 text-brand-950">
                  ✓
                </div>
                <p className="text-base leading-7 text-white/85">{item}</p>
              </div>
            ))}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-white px-6 py-3 font-semibold text-brand-900 transition duration-300 hover:-translate-y-1 hover:bg-brand-50"
            >
              Quero agendar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Differentials
