import HeroSection from '@/components/sections/hero';
import StatsSection from '@/components/sections/stats';
import ServicesSection from '@/components/sections/services';
import ContactSection from '@/components/sections/contact';
import FaqSection from '@/components/sections/faq';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ContactSection />
      <FaqSection />
    </>
  );
}
