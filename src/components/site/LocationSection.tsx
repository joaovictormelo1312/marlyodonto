import { MapPin, Clock, Phone, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import clinicaInterior from "@/assets/clinica-interior.jpg";

export function LocationSection() {
  return (
    <section id="contato" className="bg-cream py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-dental">
            Onde estamos
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Venha nos conhecer
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Clínica moderna e acessível no coração de Teresina, com fácil estacionamento e ambiente
            acolhedor.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-dental">
            <img
              src={clinicaInterior}
              alt="Interior moderno da clínica odontológica da Dra. Teresa Marly"
              width={1920}
              height={1088}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6 rounded-2xl bg-white p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dental/10 text-dental">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Endereço</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {siteConfig.address.full}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dental/10 text-dental">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Horário de funcionamento</h3>
                <p className="mt-1 text-sm text-muted-foreground">{siteConfig.hours}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dental/10 text-dental">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Contato</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  WhatsApp: {siteConfig.whatsapp.display}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dental/10 text-dental">
                <Car className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Como chegar</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Localizado no Manhattan River Center, com fácil acesso e estacionamento próximo.
                </p>
              </div>
            </div>

            <Button
              asChild
              className="mt-2 w-full bg-dental hover:bg-dental-dark text-white shadow-dental"
            >
              <a href={siteConfig.address.mapsUrl} target="_blank" rel="noopener noreferrer">
                <MapPin className="mr-2 h-4 w-4" />
                Abrir no Google Maps
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
