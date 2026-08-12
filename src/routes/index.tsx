import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/site/HeroSection";
import { ServicesSection } from "@/components/site/ServicesSection";
import { AboutSection } from "@/components/site/AboutSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { CTASection } from "@/components/site/CTASection";
import { LocationSection } from "@/components/site/LocationSection";
import { siteConfig } from "@/lib/site-config";
import heroSmile from "@/assets/hero-smile.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: siteConfig.title },
      { name: "description", content: siteConfig.description },
      { property: "og:title", content: siteConfig.title },
      { property: "og:description", content: siteConfig.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroSmile },
      { name: "twitter:image", content: heroSmile },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
      <LocationSection />
    </>
  );
}
