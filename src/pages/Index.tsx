
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedTournaments from "@/components/FeaturedTournaments";
import SportsCategories from "@/components/SportsCategories";
import PlayerSearchSection from "@/components/PlayerSearchSection";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedTournaments />
        <SportsCategories />
        <PlayerSearchSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
