import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/201000000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 end-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform wa-pulse"
      aria-label="WhatsApp"
    >
      <MessageCircle size={24} className="text-white" />
    </a>
  );
}
