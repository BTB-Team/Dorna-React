import HeroPortfolio from "./HeroPortfolio";
import FeaturedProjects from "./FeaturedProjects"
import SocialMediaReels from "./SocailMediaReels";
import BrandProject from "./Components/BrandProject";
import DesingProject from "./Components/DesingProject";
import LetInTouch from "./Components/LetInTouch";

export function Portfolio() {
  return (
    <div >
      <HeroPortfolio />
      <FeaturedProjects />
      <SocialMediaReels/>
      <BrandProject/>
      <DesingProject/>
      <LetInTouch/>
    </div>
  );
}


        
