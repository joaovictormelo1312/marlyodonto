import { Stethoscope, Smile, Sparkles, ShieldCheck, Scan, HeartPulse } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Implantes Dentários",
    description:
      "Reposição de dentes perdidos com implantes de titânio de alta qualidade, proporcionando segurança, conforto e estética natural.",
  },
  {
    icon: Smile,
    title: "Próteses sobre Implantes",
    description:
      "Coroas, pontes e dentaduras fixas sobre implantes para devolver a função de mastigar e a beleza do seu sorriso.",
  },
  {
    icon: Sparkles,
    title: "Estética Dental",
    description:
      "Facetas de resina e porcelana, clareamento dental e harmonização do sorriso com resultados delicados e naturais.",
  },
  {
    icon: ShieldCheck,
    title: "Restaurações",
    description:
      "Restaurações em resina composta com cores e formatos que imitam o dente natural, preservando a saúde e a estética.",
  },
  {
    icon: Scan,
    title: "Avaliação Digital",
    description:
      "Diagnóstico por imagem e planejamento digital guiado para implantes mais seguros, rápidos e previsíveis.",
  },
  {
    icon: HeartPulse,
    title: "Limpeza e Prevenção",
    description:
      "Profilaxia, remoção de tártaro e orientação de higiene para manter sua saúde bucal em dia sem dor.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-dental">
            Nossos tratamentos
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Cuidado completo para o seu sorriso
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Da prevenção à reabilitação oral, oferecemos tratamentos modernos com atenção aos
            detalhes que fazem a diferença no seu dia a dia.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-border bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:border-dental/20 hover:shadow-dental"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-dental/10 text-dental transition-colors group-hover:bg-dental group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
