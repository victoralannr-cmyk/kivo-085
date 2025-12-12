import HeroSection from '@/components/sections/hero';
import ServicesSection from '@/components/sections/services';
import ContactSection from '@/components/sections/contact';
import FaqSection from '@/components/sections/faq';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ContactSection />
      <FaqSection />
    </>
  );
}
