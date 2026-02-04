
import AboutSectionV2 from "../aboutSection/AboutSectionV2";
import CategoryGrid from "../categoryGrid/CategoryGrid";
import FeaturedProducts from "../featuredProducts/FeaturedProducts";
import HeroSectionPlain from "../home/HeroSectionPlain";
import HotItemsV4 from "../hotItems/HotItemsV4";
import SpecialsSectionV4 from "../specials/SpecialsSectionV4";





export default function HomePage() {
  return (
    <main className="">
   <HeroSectionPlain/>
   <CategoryGrid/>
   <FeaturedProducts/>
   <SpecialsSectionV4/>
   <HotItemsV4/>
   <AboutSectionV2/>
    
    </main>
    
  );
}