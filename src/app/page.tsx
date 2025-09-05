// app/page.tsx
import BrandMarquee from '@/components/home/BrandMarquee';
import CapturedMovement from '@/components/home/CapturedMovement';
import ContactSection from '@/components/home/ContactSection';
import DesktopNavigation from '@/components/home/DesktopNavigation';
import HeroSection from '@/components/home/HeroSection';
import PortfolioSection from '@/components/home/PortFolioSection';
import PopupServices from '@/components/home/Services';
import ServicesSection from '@/components/home/ServiceSection';
import { TestimonialSection } from '@/components/home/TestimonialSection';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';




const HomePage = async () => {
  return (
    <div className="min-h-screen">
      <DesktopNavigation />
      {/* <MobileNavigation /> */}

      <main>
        <HeroSection />
        <PopupServices />
        <PortfolioSection />
        <ServicesSection />
        <CapturedMovement />
        {/* <BrandMarquee /> */}
        <TestimonialSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default HomePage;
