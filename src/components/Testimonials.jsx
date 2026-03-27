import { testimonials } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function Testimonials() {
  useReveal()

  return (
    <section className="py-20">
      <div className="container-shell">
        <div className="reveal flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between" data-reveal>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-600">
              Depoimentos
            </p>
            <h2 className="section-title mt-4">Confianca que se percebe no cuidado</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-brand-800/80">
            Avaliacoes de exemplo para voce substituir depois pelos relatos reais dos seus clientes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="reveal rounded-[2rem] border border-brand-100 bg-white p-7 shadow-soft"
              data-reveal
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 font-semibold text-brand-700">
                  {testimonial.name.slice(0, 1)}
                </div>
                <div>
                  <p className="font-semibold text-brand-950">{testimonial.name}</p>
                  <p className="text-sm text-brand-800/70">{testimonial.pet}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-brand-800/80">"{testimonial.text}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
