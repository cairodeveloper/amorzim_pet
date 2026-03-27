import { whatsappLink } from '../data/content'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/60 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between py-4">
        <a href="#inicio" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-700 text-lg text-white shadow-glow">
            🐾
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">
              Amorzim Pet
            </p>
            <p className="text-sm text-brand-900/75">Estetica Animal</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-brand-900/75 md:flex">
          <a className="transition hover:text-brand-700" href="#sobre">
            Sobre
          </a>
          <a className="transition hover:text-brand-700" href="#servicos">
            Servicos
          </a>
          <a className="transition hover:text-brand-700" href="#galeria">
            Galeria
          </a>
          <a className="transition hover:text-brand-700" href="#contato">
            Contato
          </a>
        </nav>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-brand-800"
        >
          WhatsApp
        </a>
      </div>
    </header>
  )
}

export default Navbar
