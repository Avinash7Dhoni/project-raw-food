import { LanguageProvider } from "@/hooks/useLanguage";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <Features />
        <Pricing />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
