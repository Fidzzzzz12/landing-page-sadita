import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ProblemSection from "@/components/landing/ProblemSection";
import ProductSection from "@/components/landing/ProductSection";
import WhyBothSection from "@/components/landing/WhyBothSection";
import TargetSection from "@/components/landing/TargetSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <section id="tentang">
          <AboutSection />
        </section>
        <ProblemSection />
        <ProductSection />
        <WhyBothSection />
        <TargetSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
