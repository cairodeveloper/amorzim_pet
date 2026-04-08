import { brandAssets, instagramLink, whatsappLink } from '../data/content'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-800/15 bg-white backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between gap-4 py-4">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src={brandAssets.logo}
            alt="Logo Amorzim Pet"
            className="h-12 w-12 rounded-2xl object-cover shadow-soft"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">
              Amorzim Pet
            </p>
            <p className="text-sm text-brand-900/75">Estetica Animal</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-brand-900/75 lg:flex">
          <a className="transition hover:text-pink" href="#sobre">
            Sobre
          </a>
          <a className="transition hover:text-pink" href="#servicos">
            Servicos
          </a>
          <a className="transition hover:text-pink" href="#extras">
            Extras
          </a>
          <a className="transition hover:text-pink" href="#animais">
            Animais
          </a>
          <a className="transition hover:text-pink" href="#galeria">
            Galeria
          </a>
          <a className="transition hover:text-pink" href="#contato">
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={instagramLink}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-brand-800/20 bg-brand-50/45 px-4 py-2 text-sm font-semibold text-brand-900 transition hover:-translate-y-0.5 hover:border-pink hover:text-pink md:inline-flex"
          >
            Instagram
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-brand-800"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="container-shell pb-4 lg:hidden">
        <div className="flex gap-2 overflow-x-auto">
          <a
            href="#sobre"
            className="whitespace-nowrap rounded-full border border-brand-800/20 bg-brand-50/45 px-4 py-2 text-sm font-medium text-brand-900"
          >
            Sobre
          </a>
          <a
            href="#servicos"
            className="whitespace-nowrap rounded-full border border-brand-800/20 bg-brand-50/45 px-4 py-2 text-sm font-medium text-brand-900"
          >
            Serviços
          </a>
          <a
            href="#extras"
            className="whitespace-nowrap rounded-full border border-brand-800/20 bg-brand-50/45 px-4 py-2 text-sm font-medium text-brand-900"
          >
            Extras
          </a>
          <a
            href="#animais"
            className="whitespace-nowrap rounded-full border border-brand-800/20 bg-brand-50/45 px-4 py-2 text-sm font-medium text-brand-900"
          >
            Animais
          </a>
          <a
            href="#galeria"
            className="whitespace-nowrap rounded-full border border-brand-800/20 bg-brand-50/45 px-4 py-2 text-sm font-medium text-brand-900"
          >
            Galeria
          </a>
          <a
            href="#contato"
            className="whitespace-nowrap rounded-full border border-brand-800/20 bg-brand-50/45 px-4 py-2 text-sm font-medium text-brand-900"
          >
            Contato
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
