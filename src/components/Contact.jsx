import { contactInfo, whatsappLink } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function Contact() {
  useReveal()

  return (
    <section id="contato" className="pb-10 pt-20">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-100 via-white to-peach p-8 shadow-soft sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="reveal" data-reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-600">
                CTA final
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
                Seu pet merece esse cuidado 🐾
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-brand-800/80">
                Fale com a Amorzim Pet e agende um horario para oferecer uma experiencia
                mais tranquila, afetuosa e segura para o seu melhor amigo.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full bg-brand-700 px-7 py-4 font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:bg-brand-800"
              >
                Agendar pelo WhatsApp
              </a>
            </div>

            <div className="reveal rounded-[2rem] bg-white/80 p-6 shadow-soft backdrop-blur-xl" data-reveal>
              <h3 className="text-2xl font-semibold text-brand-950">Contato</h3>
              <div className="mt-6 space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="rounded-[1.25rem] border border-brand-100 bg-white p-4">
                    <p className="text-sm uppercase tracking-[0.18em] text-brand-600">{item.label}</p>
                    <p className="mt-2 text-base font-medium text-brand-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-10 border-t border-brand-200/70 py-6 text-center text-sm text-brand-800/70">
          Amorzim Pet | Estetica Animal. Banho e tosa low stress para caes e gatos.
        </footer>
        <div className="pb-2 text-center">
          <a
            href="https://cairoportfolio.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-brand-700/75 transition hover:text-brand-900"
          >
            Desenvolvido por Cairo @cairo_dev
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
