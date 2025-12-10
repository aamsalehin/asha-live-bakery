import AboutSection from "../aboutSection/AboutSection";
import CategoryGrid from "../categoryGrid/CategoryGrid";
import FeaturedProducts from "../featuredProducts/FeaturedProducts";
import HeroSection from "../home/HeroSection";
import HotItems from "../hotItems/HotItems";
import Specials from "../specials/Specials";





export default function HomePage() {
  return (
    <div className="pt-19">
   <HeroSection/>
   <CategoryGrid/>
   <FeaturedProducts/>
   <Specials/>
   <HotItems/>
   <AboutSection/>
    
    </div>
    
  );
}