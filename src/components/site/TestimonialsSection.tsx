import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Isadora Melo",
    text: "Doutora Teresa Marly tem mãos leves. Já fui fazer limpeza, restauração de resina e faceta. Além da praticidade, tem um bom humor e qualidade de atendimento! Se tiver medo não se preocupe que passa lá.",
    rating: 5,
  },
  {
    name: "Lourdes Rodrigues",
    text: "Excelente profissional, se garante no que faz.",
    rating: 5,
  },
  {
    name: "Conceição Barros",
    text: "Além de boa profissional, pessoa maravilhosa!!",
    rating: 5,
  },
  {
    name: "Paciente Verificado",
    text: "Ambiente super limpo, atendimento pontual e muito atencioso. A Dra. Teresa explica cada etapa do tratamento e deixa a gente tranquilo.",
    rating: 5,
  },
  {
    name: "Paciente Verificado",
    text: "Fiz implante e o resultado ficou incrível. Parece dente natural! Recomendo de olhos fechados.",
    rating: 5,
  },
  {
    name: "Paciente Verificado",
    text: "Melhor experiência que já tive no dentista. Equipe simpática e profissional. Voltarei sempre.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-dental">
            Depoimentos
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            O que nossos pacientes dizem
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Nota máxima no Google. Cada avaliação reflete o cuidado e dedicação que temos com quem
            confia em nosso trabalho.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-border bg-cream p-6 transition-all hover:-translate-y-1 hover:shadow-dental"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-dental/20" />
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground">“{testimonial.text}”</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-dental/10 text-dental text-sm font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <span className="text-sm font-medium text-foreground">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
