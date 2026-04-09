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
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
