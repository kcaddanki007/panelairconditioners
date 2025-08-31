import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import RFQForm from "@/components/RFQForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <div id="products">
          <ProductShowcase />
        </div>
        <RFQForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
