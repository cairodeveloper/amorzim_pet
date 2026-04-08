import { galleryImages } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function Gallery() {
  useReveal()

  return (
    <section id="galeria" className="py-20">
      <div className="container-shell">
        <div className="reveal text-center" data-reveal>
          <p className="section-kicker">Galeria</p>
          <h2 className="section-title mt-4">Pets atendidos com carinho e muito capricho</h2>
          <p className="section-copy mx-auto">
            Uma selecao com as fotos reais do projeto para mostrar a delicadeza do atendimento
            e a personalidade de cada pet.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <figure
              key={`${image.src}-${index}`}
              className="reveal group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-soft"
              data-reveal
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="h-[280px] overflow-hidden bg-brand-50">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/68 via-brand-950/8 to-transparent opacity-70 transition duration-300 group-hover:opacity-95" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-5 text-sm font-medium text-white transition duration-300 group-hover:translate-y-0">
                {image.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
