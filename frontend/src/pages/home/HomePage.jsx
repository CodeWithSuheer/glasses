import BestSeller from "./BestSeller";
import Brands from "./Brands";
import Features from "./Features";
import HeroSection from "./HeroSection";
import HomeCategories from "./HomeCategories";

const HomePage = () => {
  return (
    <>
      <HeroSection />

      <Features />

      <HomeCategories />

      <Brands />

      <BestSeller />
    </>
  );
};

export default HomePage;
