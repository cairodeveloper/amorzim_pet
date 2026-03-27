import { whatsappLink } from '../data/content'

function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-2xl text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:bg-brand-800"
    >
      💬
    </a>
  )
}

export default WhatsAppButton
