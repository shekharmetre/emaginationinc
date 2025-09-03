// app/page.tsx
import CapturedMovement from "@/components/home/CapturedMovement";
import ContactSection from "@/components/home/ContactSection";
import HeroSection from "@/components/home/HeroSection";
import PortfolioSection from "@/components/home/PortFolioSection";
import PopupServices from "@/components/home/Services";
import ServicesSection from "@/components/home/ServiceSection";
import DesktopNavigation from "@/components/home/DesktopNavigation";
import MobileNavigation from "@/components/home/MobileNavigation";

const HomePage = async () => {
  return (
    <div className="min-h-screen">
      <DesktopNavigation />
      <MobileNavigation />

      <main>
        <HeroSection />
        <PopupServices />
        <PortfolioSection />
        <ServicesSection />
        <CapturedMovement />
        <ContactSection />
      </main>
    </div>
  );
};

export default HomePage;
