import { galleryImages } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function Gallery() {
  useReveal()

  return (
    <section id="galeria" className="py-20">
      <div className="container-shell">
        <div className="reveal text-center" data-reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-600">
            Galeria de resultados
          </p>
          <h2 className="section-title mt-4">Espaco pronto para mostrar pets felizes</h2>
          <p className="section-copy mx-auto">
            Use esta grade para substituir pelas fotos reais dos atendimentos. A estrutura
            ja esta preparada para destacar antes e depois, poses e momentos especiais.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[220px] gap-5 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <figure
              key={image.src}
              className={`reveal group relative overflow-hidden rounded-[2rem] shadow-soft ${
                index === 0 || index === 3 ? 'md:row-span-2' : ''
              }`}
              data-reveal
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/55 via-brand-950/10 to-transparent opacity-80 transition duration-300 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm font-medium text-white">
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
