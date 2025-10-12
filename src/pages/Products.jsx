import ProductHero from "../components/products/ProductHero";
import ProductSection from "../components/products/ProductSection";
import Footer from "../components/Footer";

export default function Products() {
  return (
    <main className="bg-gray-50">
      <ProductHero />
      <ProductSection />
      <Footer />
    </main>
  );
}
