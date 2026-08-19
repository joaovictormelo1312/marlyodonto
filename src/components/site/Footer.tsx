import { Phone, MapPin, Instagram } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/lib/site-config";
import icon from "@/assets/icon.png";

const footerLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-white/90">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <img src={icon} alt="" className="h-9 w-9 rounded-lg object-cover" />
              <span className="text-lg font-bold text-white">Dra. Teresa Marly</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Clínica de implantes e odontologia em Teresina. Atendimento humanizado, tecnologia
              moderna e resultados que transformam sorrisos.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-dental"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Links rápidos
            </h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-dental-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contato</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-dental-light" />
                  {siteConfig.whatsapp.display}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-dental-light" />
                  {siteConfig.address.short}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Dra. Teresa Marly. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
