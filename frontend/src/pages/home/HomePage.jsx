import { Helmet } from "react-helmet";
import BestSeller from "./BestSeller";
import Features from "./Features";
import HeroSection from "./HeroSection";
import HomeBlogs from "./HomeBlogs";
import HomeCategories from "./HomeCategories";
import PopularProducts from "./PopularProducts";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Googly - Home</title>
      </Helmet>

      <HeroSection />

      <Features />

      <HomeCategories />

      <BestSeller />

      <PopularProducts />

      <HomeBlogs />
    </>
  );
};

export default HomePage;
