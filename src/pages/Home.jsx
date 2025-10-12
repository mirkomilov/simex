import HeroSection from "../components/home/HeroSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import QualitySection from "../components/home/QualitySection";
import ProductSection from "../components/home/ProductSection";
import PartnersSection from "../components/home/PartnersSection";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <QualitySection />
      <ProductSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </>
  );
}
