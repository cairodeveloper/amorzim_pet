import { aboutItems } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function About() {
  useReveal()

  return (
    <section id="sobre" className="py-20">
      <div className="container-shell">
        <div className="reveal text-center" data-reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-600">
            Sobre o cuidado
          </p>
          <h2 className="section-title mt-4">Low Stress na pratica, com mais acolhimento</h2>
          <p className="section-copy mx-auto">
            O conceito Low Stress busca reduzir estimulos e desconfortos, tornando o banho
            e a tosa mais leves para o pet. Aqui, cada etapa e conduzida com sensibilidade,
            paciencia e respeito.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
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
    </section>
  )
}

export default About
