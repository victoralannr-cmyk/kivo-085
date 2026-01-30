import HeroSection from '@/components/sections/hero';
import ServicesSection from '@/components/sections/services';
import ContactSection from '@/components/sections/contact';
import FaqSection from '@/components/sections/faq';
import FloatingLogos from '@/components/ui/floating-logos';

export default function Home() {
  return (
    <div className="relative">
      <FloatingLogos />
      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <ContactSection />
        <FaqSection />
      </div>
    </div>
  );
}
