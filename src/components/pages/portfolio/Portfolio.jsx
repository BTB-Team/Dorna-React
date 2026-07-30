import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import HeroPortfolio from "./HeroPortfolio";
import FeaturedProjects from "./FeaturedProjects";
import SocialMediaReels from "./SocailMediaReels";
import BrandProject from "./Components/BrandProject";
import DesingProject from "./Components/DesingProject";
import LetInTouch from "./Components/LetInTouch";

export function Portfolio() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);

  return (
    <div>
      <HeroPortfolio />
      <FeaturedProjects />
      <SocialMediaReels />
      <BrandProject />
      <DesingProject />
      <LetInTouch />
    </div>
  );
}