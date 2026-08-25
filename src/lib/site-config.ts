export const siteConfig = {
  name: "Dra. Teresa Marly",
  title: "Dra. Teresa Marly — Implantes e Odontologia",
  description:
    "Clínica de implante dentário em Teresina, Piauí. Atendimento humanizado, tecnologia moderna e resultados que transformam sorrisos.",
  url: "https://dra-teresamarly.com",
  whatsapp: {
    number: "5586998081920",
    display: "(86) 99808-1920",
    label: "Agendar pelo WhatsApp",
    message: "Olá! Gostaria de agendar uma consulta com a Dra. Teresa Marly.",
  },
  address: {
    full: "Ed. Manhattan River Center - Avenida Senador Arêa Leão 2185, R. Prof. Elías Tôrres, 1 - Sala: 1211, Teresina - PI, 64051-090",
    short: "Manhattan River Center, Teresina - PI ",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Ed.+Manhattan+River+Center,+Avenida+Senador+Arêa+Leão+2185,+Teresina+-+PI,+64051-090",
  },
  hours: "Segunda a sexta: 08h às 18h | Sábado: 08h às 12h",
  rating: {
    score: 5.0,
    count: 8,
  },
  social: {
    instagram: "https://www.instagram.com/dentistateresamarly?igsh=YzV4bnF5Mnk1M2Iy",
    facebook: "#",
  },
} as const;

export function getWhatsAppUrl(message?: string) {
  const text = encodeURIComponent(message || siteConfig.whatsapp.message);
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${text}`;
}
