import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = '5524999382195';
  const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços do Instituto COMET.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-gradient-comet text-white p-4 rounded-full shadow-glow hover:scale-110 transition-transform duration-300 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="h-6 w-6 group-hover:rotate-12 transition-transform" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card text-foreground px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-card">
        Fale com um consultor
      </span>
    </a>
  );
};

export default WhatsAppButton;
