import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, ShoppingCart, TrendingDown, Sparkles } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import heroImage from "@/assets/hero-market.jpg";

const Hero = () => {
  const { t } = useLanguage();

  const handleVendorClick = () => {
    // Navigate to vendor registration/dashboard
    console.log('Vendor clicked');
  };

  const handleSupplierClick = () => {
    // Navigate to supplier registration/dashboard  
    console.log('Supplier clicked');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Indian Street Food Market" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                {t('hero.title1')}
                <span className="block text-primary animate-pulse">{t('hero.title2')}</span>
                <span className="block text-accent bg-gradient-accent bg-clip-text text-transparent">{t('hero.title3')}</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                {t('hero.subtitle')}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                {t('hero.description')}
              </p>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-8 py-6">
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">5000+</div>
                <div className="text-sm text-muted-foreground">{t('hero.stats.vendors')}</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-accent group-hover:scale-110 transition-transform duration-300">₹2L+</div>
                <div className="text-sm text-muted-foreground">{t('hero.stats.saved')}</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">15%</div>
                <div className="text-sm text-muted-foreground">{t('hero.stats.discount')}</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={handleVendorClick}
                size="lg" 
                className="text-lg px-8 py-6 shadow-warm hover:shadow-glow transition-all duration-300 bg-gradient-primary hover:scale-105 transform"
              >
                <Users className="mr-2 h-5 w-5" />
                {t('hero.vendor')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={handleSupplierClick}
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-gradient-primary hover:text-primary-foreground hover:scale-105 transform transition-all duration-300"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                {t('hero.supplier')}
              </Button>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-card backdrop-blur-lg border-border/50 shadow-glass hover:shadow-glow hover:scale-105 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                  <Users className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('features.groupBuying')}</h3>
                  <p className="text-muted-foreground">
                    {t('features.groupBuyingDesc')}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card backdrop-blur-lg border-border/50 shadow-glass hover:shadow-glow hover:scale-105 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                  <TrendingDown className="h-6 w-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('features.trustedSuppliers')}</h3>
                  <p className="text-muted-foreground">
                    {t('features.trustedSuppliersDesc')}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card backdrop-blur-lg border-border/50 shadow-glass hover:shadow-glow hover:scale-105 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="bg-success/10 p-3 rounded-full group-hover:bg-success/20 transition-colors duration-300">
                  <Sparkles className="h-6 w-6 text-success group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('features.aiSuggestions')}</h3>
                  <p className="text-muted-foreground">
                    {t('features.aiSuggestionsDesc')}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;