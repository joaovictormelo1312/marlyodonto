import { Star, Phone, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl, siteConfig } from "@/lib/site-config";
import heroSmile from "@/assets/hero-smile.png";
import icon from "@/assets/icon.png";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-cream pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--color-dental-light)_0%,_transparent_50%)] opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--color-gold-light)_0%,_transparent_40%)] opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-dental shadow-sm">
              <Star className="h-4 w-4 fill-gold text-gold" />
              <span>
                {siteConfig.rating.score.toFixed(1)} estrelas
              </span>
            </div>

            <h1 className="mt-6 text-balance text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Sorria com confiança com a <span className="text-dental">Dra. Teresa Marly</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Especialista em implantes dentários e reabilitação oral em Teresina. Atendimento
              humanizado, mãos leves e tecnologia moderna para devolver seu sorriso e qualidade de
              vida.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-dental hover:bg-dental-dark text-white shadow-dental"
              >
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-5 w-5" />
                  Agendar avaliação gratuita
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-dental/30 text-dental hover:bg-dental/10"
              >
                <a href="#servicos">
                  Conhecer tratamentos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-dental" />
                <span>Agendamento online</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={icon} alt="" className="h-5 w-5 rounded-sm object-cover" />
                <span>Implantes de alta precisão</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-dental/20 to-gold/20 blur-2xl" />
              <img
                src={heroSmile}
                alt="Sorriso saudável e branco após tratamento na clínica da Dra. Teresa Marly"
                width={1920}
                height={1088}
                className="relative rounded-2xl shadow-dental"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
