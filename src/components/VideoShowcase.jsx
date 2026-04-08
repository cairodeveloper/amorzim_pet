import { brandAssets } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function VideoShowcase() {
  useReveal()

  return (
    <section className="py-20">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-950 via-brand-900 to-brand-700 p-6 text-white shadow-soft lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="reveal" data-reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-200">
                Apresentacao
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Um olhar rapido para a energia da Amorzim Pet
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/80">
                O video de apresentacao ajuda a mostrar o ambiente, o clima acolhedor e a
                proposta de um atendimento bonito, leve e cuidadoso.
              </p>
              <div className="mt-8 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/85 backdrop-blur-sm">
                Ambiente acolhedor • cuidado low stress
              </div>
            </div>

            <div
              className="reveal relative overflow-hidden rounded-[1.8rem] border border-white/15 bg-black/10 shadow-soft"
              data-reveal
            >
              <video
                className="h-full w-full rounded-[1.8rem] object-cover"
                src={brandAssets.presentationVideo}
                controls
                preload="metadata"
              >
                Seu navegador nao suporta reproducao de video.
              </video>
              <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700 shadow-soft">
                Apresentacao
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoShowcase
