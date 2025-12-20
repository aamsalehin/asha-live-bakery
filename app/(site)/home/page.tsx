import AboutSection from "../../components/aboutSection/AboutSection";
import CategoryGrid from "../../components/categoryGrid/CategoryGrid";
import FeaturedProducts from "../../components/featuredProducts/FeaturedProducts";
import HeroSection from "../../components/home/HeroSection";
import HotItems from "../../components/hotItems/HotItems";
import Specials from "../../components/specials/Specials";




export default function HomePage() {
  return (
    <>
   <HeroSection/>
   <CategoryGrid/>
   <FeaturedProducts/>
   <Specials/>
   <HotItems/>
   <AboutSection/>
    
    </>
  );
}