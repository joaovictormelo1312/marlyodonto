import { Phone } from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "@/lib/site-config";

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-dental focus:ring-offset-2"
    >
      <Phone className="h-7 w-7 fill-current" />
    </a>
  );
}
