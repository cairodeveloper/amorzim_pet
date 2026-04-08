import { services } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function Services() {
  useReveal()

  return (
    <section id="servicos" className="py-20">
      <div className="container-shell">
        <div className="section-wash overflow-hidden rounded-[2.5rem] border border-white/70 px-6 py-10 shadow-soft sm:px-8 lg:px-10">
          <div className="reveal flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between" data-reveal>
            <div>
              <p className="section-kicker">Servicos principais</p>
              <h2 className="section-title mt-4">Cuidado completo para diferentes necessidades</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-brand-800/80">
              Banho, tosa e tratamentos pensados para unir beleza, conforto e uma experiencia
              mais calma para o pet.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="reveal group tint-card rounded-[2rem] p-7 transition duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-glow"
                data-reveal
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-brand-50 text-2xl font-bold tracking-[0.14em] text-brand-700 transition duration-300 group-hover:bg-brand-100">
                    {service.icon}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-500">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-brand-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-800/80">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
