import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection"; 
import { CurriculumSection } from "./components/CurriculumSection";
import { InstructorSection } from "./components/InstructorSection";
import { PricingSection } from "./components/PricingSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <CurriculumSection />
      <InstructorSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
}