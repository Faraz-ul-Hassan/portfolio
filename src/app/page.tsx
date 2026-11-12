import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import SkillsPreview from "@/components/sections/SkillsPreview";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedProjects />
      <SkillsPreview />
      <CTASection />
    </div>
  );
}
