import AboutSection from "../aboutSection/AboutSection";
import AboutSectionV2 from "../aboutSection/AboutSectionV2";
import CategoryGrid from "../categoryGrid/CategoryGrid";
import CategoryGridV3 from "../categoryGrid/CategoryGridV2";
import CategoryGridV2 from "../categoryGrid/CategoryGridV2";
import FeaturedProducts from "../featuredProducts/FeaturedProducts";
import HeroSection from "../home/HeroSection";
import HeroSectionV2 from "../home/HeroSectionV2";
import HeroSectionV3 from "../home/HeroSectionV3";
import HotItems from "../hotItems/HotItems";
import HotItemsV2 from "../hotItems/HotItemsV2";
import Specials from "../specials/Specials";
import SpecialsV2 from "../specials/SpecialsV2";





export default function HomePage() {
  return (
    <div className="pt-19">
   <HeroSectionV3/>
   <CategoryGridV3/>
   <FeaturedProducts/>
   <SpecialsV2/>
   <HotItemsV2/>
   <AboutSectionV2/>
    
    </div>
    
  );
}