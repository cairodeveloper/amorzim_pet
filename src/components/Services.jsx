import { services } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function Services() {
  useReveal()

  return (
    <section id="servicos" className="py-20">
      <div className="container-shell">
        <div className="reveal flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between" data-reveal>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-600">
              Servicos
            </p>
            <h2 className="section-title mt-4">Cuidado completo para diferentes necessidades</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-brand-800/80">
            Banho, tosa e atendimento personalizado para caes e gatos, sempre com foco em
            conforto, carinho e seguranca emocional.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="reveal group rounded-[2rem] border border-brand-100 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-glow"
              data-reveal
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-brand-50 text-3xl transition duration-300 group-hover:bg-brand-100">
                {service.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-brand-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-brand-800/80">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
