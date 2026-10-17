import { Hero } from "@/components/sections/Hero";
import { EngineeringHighlights } from "@/components/sections/EngineeringHighlights";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { EngineeringPrinciples } from "@/components/sections/EngineeringPrinciples";
import { About } from "@/components/sections/About";
import { TechnicalSkills } from "@/components/sections/TechnicalSkills";
import { EmergingAISection } from "@/components/sections/EmergingAISection";
import { Contact } from "@/components/sections/Contact";
import { JsonLd, buildPersonJsonLd } from "@/components/seo/JsonLd";

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildPersonJsonLd()} />
      <Hero />
      <EngineeringHighlights />
      <FeaturedProjects />
      <EngineeringPrinciples />
      <About />
      <TechnicalSkills />
      <EmergingAISection />
      <Contact />
    </>
  );
}
