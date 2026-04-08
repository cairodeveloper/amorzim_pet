import whatsappLogo from '../assets/logo/logozap.jpg'
import { whatsappLink } from '../data/content'

function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white shadow-glow transition duration-300 hover:-translate-y-1"
    >
      <img src={whatsappLogo} alt="WhatsApp" className="h-full w-full object-cover" />
    </a>
  )
}

export default WhatsAppButton
