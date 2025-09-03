// app/page.tsx
import CapturedMovement from "@/components/home/CapturedMovement";
import ContactSection from "@/components/home/ContactSection";
import DesktopNavigation from "@/components/home/DesktopNavigation";
import HeroSection from "@/components/home/HeroSection";
import MobileNavigation from "@/components/home/MobileNavigation";
import PortfolioSection from "@/components/home/PortFolioSection";
import PopupServices from "@/components/home/Services";
import ServicesSection from "@/components/home/ServiceSection";
const url = process.env.NEXT_PUBLIC_BASE_URL

async function fetchInitialMovements(page = 1, category = "wedding") {

  const res = await fetch(`${url}/api/movement`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ page, category, limit: 10, folder: "emaginations-images/all" }),
  });

  if (!res.ok) throw new Error("Failed to fetch movements");

  const data = await res.json();
  return data.resources || [];
}

const HomePage = async () => {
  // Fetch initial movements before rendering
  const initialMovements = await fetchInitialMovements();

  return (
    <div className="min-h-screen">
      <DesktopNavigation />
      <MobileNavigation />

      <main>
        <HeroSection />
        <PopupServices />
        <PortfolioSection />
        <ServicesSection />
        <CapturedMovement movementdata={initialMovements} />
        <ContactSection />
      </main>
    </div>
  );
};

export default HomePage;
