import { Award, Users, Clock, CheckCircle } from "lucide-react";
import dentistaTeresa from "@/assets/dentista-teresa.jpg";

const highlights = [
  { icon: Award, label: "Especialista em implantes", value: "+40 anos" },
  { icon: Users, label: "Pacientes atendidos", value: "+10.000" },
  { icon: Clock, label: "Atendimento personalizado", value: "100%" },
];

export function AboutSection() {
  return (
    <section id="sobre" className="bg-cream py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/20 to-dental/20 blur-2xl" />
            <img
              src={dentistaTeresa}
              alt="Dra. Teresa Marly, cirurgiã-dentista especialista em implantes"
              width={1024}
              height={1024}
              className="relative rounded-2xl shadow-gold"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-5 shadow-dental">
              <div className="text-center">
                <div className="text-3xl font-bold text-dental">5.0</div>
                <div className="text-xs text-muted-foreground">Avaliação Google</div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-dental">
              Sobre a profissional
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
              Dra. Teresa Marly
            </h2>
            <p className="mt-2 text-lg font-medium text-gold-dark">
              Cirurgiã-dentista especialista em implantes
            </p>

            <p className="mt-6 leading-relaxed text-muted-foreground">
              A Dra. Teresa Marly transforma vidas por meio da odontologia há 40 anos.
              Com mãos leves, bom humor e compromisso com a excelência, ela conduz cada tratamento de modo humanizado, com materiais de qualidade,  tecnologia com laserterapia e equipe especializada para apoio e acompanhamento.

              
            </p>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              Seja para um implante, uma restauração ou um simples cuidado de prevenção, aqui você
              encontra um ambiente acolhedor, equipe atenciosa e resultados que valorizam sua saúde
              e autoestima.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Atendimento sem julgamentos e com empatia",
                "Tecnologia moderna para diagnóstico preciso",
                "Ambiente limpo, confortável e seguro",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-dental" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-xl bg-white p-4 text-center shadow-sm">
                    <Icon className="mx-auto h-5 w-5 text-dental" />
                    <div className="mt-2 text-lg font-bold text-foreground">{item.value}</div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

