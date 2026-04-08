import { extraServices, extrasMedia } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function ExtraServices() {
  useReveal()

  return (
    <section id="extras" className="py-20">
      <div className="container-shell">
        <div className="grid gap-8 overflow-hidden rounded-[2.4rem] border border-brand-100 bg-gradient-to-br from-white via-brand-50/60 to-peach p-6 shadow-soft lg:grid-cols-[0.92fr_1.08fr] lg:p-8">
          <div className="reveal overflow-hidden rounded-[1.8rem]" data-reveal>
            <img
              src={extrasMedia.image}
              alt={extrasMedia.alt}
              className="h-full min-h-[340px] w-full object-cover"
            />
          </div>

          <div className="reveal" data-reveal>
            <p className="section-kicker">Servicos extras</p>
            <h2 className="section-title mt-4">Detalhes que deixam o atendimento ainda mais especial</h2>
            <p className="section-copy max-w-3xl">
              Uma secao dedicada aos complementos do atendimento, pensada para valorizar o
              acabamento, o conforto e a experiencia final do pet.
            </p>

            <div className="mt-10 grid gap-4">
              {extraServices.map((service, index) => (
                <article
                  key={service.title}
                  className="reveal rounded-[1.6rem] border border-white/70 bg-white/85 p-5 shadow-soft"
                  data-reveal
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
                      0{index + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-brand-950">{service.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-brand-800/80">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExtraServices
