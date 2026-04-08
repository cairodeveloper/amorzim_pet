import { brandAssets, contactInfo, instagramLink, whatsappLink } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function Contact() {
  useReveal()

  return (
    <section id="contato" className="pb-10 pt-20">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-300/80 via-brand-200/45 to-peach p-8 shadow-soft sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="reveal" data-reveal>
              <p className="section-kicker">Contato</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
                Seu pet merece esse cuidado
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-brand-800/80">
                Fale com a Amorzim Pet e agende um horário para oferecer uma experiência
                mais tranquila, afetuosa e segura para o seu melhor amigo.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-brand-700 px-7 py-4 font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:bg-brand-800"
                >
                  Agendar pelo WhatsApp
                </a>
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-brand-200 bg-white px-7 py-4 font-semibold text-brand-800 transition duration-300 hover:-translate-y-1 hover:border-pink hover:text-pink"
                >
                  Ver Instagram
                </a>
              </div>
            </div>

            <div className="reveal rounded-[2rem] bg-white/80 p-6 shadow-soft backdrop-blur-xl" data-reveal>
              <div className="flex items-center gap-4">
                <img
                  src={brandAssets.logo}
                  alt="Logo Amorzim Pet"
                  className="h-14 w-14 rounded-2xl object-cover shadow-soft"
                />
                <h3 className="text-2xl font-semibold text-brand-950">Amorzim Pet</h3>
              </div>

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
          Amorzim Pet | Estética Animal. Banho e tosa low stress para cães e gatos.
        </footer>
      </div>
    </section>
  )
}

export default Contact
