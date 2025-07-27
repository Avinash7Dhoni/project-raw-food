import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, ShoppingCart, TrendingDown } from "lucide-react";
import heroImage from "@/assets/hero-market.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
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
                सड़क के
                <span className="block text-primary">स्वाद का</span>
                <span className="block text-accent">बाज़ार</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                Raw Material Sourcing for Street Food Vendors
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Connect with trusted suppliers. Get bulk discounts through group orders. 
                AI-powered suggestions in your local language.
              </p>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-8 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Active Vendors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">₹2L+</div>
                <div className="text-sm text-muted-foreground">Saved Monthly</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15%</div>
                <div className="text-sm text-muted-foreground">Avg. Discount</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 py-6 shadow-warm hover:shadow-spice transition-all duration-300">
                <Users className="mr-2 h-5 w-5" />
                I'm a Vendor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <ShoppingCart className="mr-2 h-5 w-5" />
                I'm a Supplier
              </Button>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-card backdrop-blur-lg border-border/50 shadow-glass hover:shadow-warm transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Group Buying Power</h3>
                  <p className="text-muted-foreground">
                    Join other vendors for bulk purchases. AI suggests optimal group orders 
                    based on your location and needs.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card backdrop-blur-lg border-border/50 shadow-glass hover:shadow-warm transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <TrendingDown className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Best Market Rates</h3>
                  <p className="text-muted-foreground">
                    Compare prices from verified suppliers. Get wholesale rates 
                    with transparent pricing for all raw materials.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card backdrop-blur-lg border-border/50 shadow-glass hover:shadow-warm transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Simple Ordering</h3>
                  <p className="text-muted-foreground">
                    Voice-enabled ordering in Hindi, Telugu, Tamil, Bengali, Marathi. 
                    Perfect for all education levels.
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