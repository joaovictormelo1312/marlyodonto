import { Phone, ArrowRight, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl, siteConfig } from "@/lib/site-config";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-dental py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--color-dental-light)_0%,_transparent_50%)] opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--color-gold)_0%,_transparent_40%)] opacity-20" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
          <Clock className="h-4 w-4" />
          Vagas limitadas para este mês
        </span>
        <h2 className="mt-6 text-balance text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Pronto para ter o sorriso que você sempre quis?
        </h2>
        <p className="mt-4 text-lg text-white/90">
          Agende sua avaliação gratuita pelo WhatsApp e descubra o melhor
          tratamento para você. Atendimento rápido, sem burocracia e com toda a
          atenção que você merece.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-white text-dental hover:bg-cream shadow-lg"
          >
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </a>
          </Button>
          <a
            href={siteConfig.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-white/40 bg-transparent px-8 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
          >
            <Calendar className="h-5 w-5" />
            Ver localização
          </a>
        </div>
        <p className="mt-4 text-sm text-white/80">
          {siteConfig.whatsapp.display} · {siteConfig.address.short}
        </p>
      </div>
    </section>
  );
}
