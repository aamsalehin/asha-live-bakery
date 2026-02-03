
import AboutSectionV2 from "../aboutSection/AboutSectionV2";
import CategoryGridV3 from "../categoryGrid/CategoryGridV3";



import FeaturedProducts from "../featuredProducts/FeaturedProducts";
import HeroSectionPlain from "../home/HeroSectionPlain";

import HeroSectionV3 from "../home/HeroSectionV3";
import HotItems from "../hotItems/HotItems";
import HotItemsV2 from "../hotItems/HotItemsV2";
import HotItemsV4 from "../hotItems/HotItemsV4";
import Specials from "../specials/Specials";
import SpecialsV2 from "../specials/SpecialsV2";





export default function HomePage() {
  return (
    <main className="">
   <HeroSectionPlain/>
   <CategoryGridV3/>
   <FeaturedProducts/>
   <SpecialsV2/>
   <HotItemsV4/>
   <AboutSectionV2/>
    
    </main>
    
  );
}