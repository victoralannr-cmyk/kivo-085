import HeroSection from '@/components/sections/hero';
import ServicesSection from '@/components/sections/services';
import ContactSection from '@/components/sections/contact';
import FaqSection from '@/components/sections/faq';

export default function Home() {
  return (
    <div className="relative">
      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <ContactSection />
        <FaqSection />
      </div>
    </div>
  );
}
