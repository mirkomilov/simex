import AboutHero from "../components/about/AboutHero";
import CompanyInfo from "../components/about/CompanyInfo";
import MissionSection from "../components/about/MissionSection";
import ProductionTabs from "../components/about/ProductionTabs";
import WorkProcessSection from "../components/about/WorkProcess";
import { Map } from "../components/map/map";

const About = () => {
  return (
    <>
      <AboutHero />
      <CompanyInfo />
      <MissionSection />
      <ProductionTabs />
      <WorkProcessSection />
      <Map />
    </>
  );
};

export default About;
