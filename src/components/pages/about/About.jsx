import AboutHero from "../../../components/pages/about/AboutHero";
import OurStory from "../../../components/pages/about/OurStory";
import BrandStory from "../../../components/pages/about/BrandStory";
import MissionVission from "../../../components/pages/about/MissionVission";
import TeamHighlight from "../../../components/pages/about/TeamHighlight";
import Header from "../../header/Header";
import CoreValues from "./CoreValues";
import StatsSection from "./StatsSection";
import TrustedPartner from "./TrustedPartner";

export function About() {
  return (
    <>
      <Header />
      <AboutHero />
      <OurStory />
      <BrandStory />
      <MissionVission />
      <TeamHighlight />
      <CoreValues />
      <StatsSection />
      <TrustedPartner />
    </>
  );
}
