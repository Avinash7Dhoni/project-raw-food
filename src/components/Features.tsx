import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  TrendingDown, 
  MapPin, 
  Clock, 
  Shield, 
  MessageSquare,
  Truck,
  CreditCard,
  Star,
  Globe,
  Smartphone,
  Brain
} from "lucide-react";
import rawMaterialsImage from "@/assets/raw-materials.jpg";

const Features = () => {
  const vendorFeatures = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Smart Group Buying",
      description: "AI suggests optimal group orders with nearby vendors for maximum discounts",
      savings: "Up to 25% off"
    },
    {
      icon: <TrendingDown className="h-6 w-6" />,
      title: "Best Market Rates",
      description: "Compare real-time prices from verified suppliers across your city",
      savings: "Save ₹5000/month"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Voice Assistant",
      description: "Order in Hindi, Tamil, Telugu, Bengali, Marathi - just speak naturally",
      savings: "5 languages"
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Live Tracking",
      description: "Track your orders from supplier to doorstep with real-time updates",
      savings: "24/7 updates"
    }
  ];

  const supplierFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Verified Network",
      description: "Join our GST-verified supplier network with built-in trust system",
      benefit: "Verified Badge"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location-Based Orders",
      description: "Get orders from vendors in your delivery area automatically",
      benefit: "Smart Matching"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Reputation System",
      description: "Build your rating through quality service and timely delivery",
      benefit: "Trust Building"
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Flexible Payments",
      description: "UPI, Bank transfers, or Cash on Delivery - choose what works",
      benefit: "All Methods"
    }
  ];

  const aiFeatures = [
    "Suggest group orders based on demand patterns",
    "Predict optimal purchase timing for seasonal items",
    "Match vendors by location and order history",
    "Price optimization for both vendors and suppliers",
    "Multilingual voice understanding and responses",
    "Smart delivery route optimization"
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Why Choose RawMandi?
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Built for Indian Street Food
            <span className="block text-primary">Vendors & Suppliers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From roadside chaat stalls to large food vendors - we understand the unique 
            challenges of Indian street food business.
          </p>
        </div>

        {/* Vendor Features */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                For Vendors
              </Badge>
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                Source Raw Materials Smarter
              </h3>
              <div className="space-y-6">
                {vendorFeatures.map((feature, index) => (
                  <Card key={index} className="p-6 bg-gradient-card border-border/50 shadow-glass hover:shadow-warm transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                        <div className="text-primary">
                          {feature.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-foreground">
                            {feature.title}
                          </h4>
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {feature.savings}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <Button size="lg" className="mt-8 shadow-warm">
                Start as Vendor
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={rawMaterialsImage} 
                alt="Raw Materials for Street Food" 
                className="rounded-2xl shadow-spice w-full"
              />
              <div className="absolute inset-0 bg-gradient-primary/20 rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Supplier Features */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-card rounded-2xl p-8 shadow-spice">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">📦</div>
                  <h4 className="text-2xl font-bold text-foreground mb-2">Supplier Dashboard</h4>
                  <p className="text-muted-foreground">Manage orders, inventory, and payments</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-background/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary">₹2.5L</div>
                    <div className="text-sm text-muted-foreground">Monthly Revenue</div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-accent">95%</div>
                    <div className="text-sm text-muted-foreground">Vendor Satisfaction</div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View Supplier Demo
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                For Suppliers
              </Badge>
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                Grow Your Business Network
              </h3>
              <div className="space-y-6">
                {supplierFeatures.map((feature, index) => (
                  <Card key={index} className="p-6 bg-gradient-card border-border/50 shadow-glass hover:shadow-warm transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 p-3 rounded-full flex-shrink-0">
                        <div className="text-accent">
                          {feature.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-foreground">
                            {feature.title}
                          </h4>
                          <Badge variant="secondary" className="bg-accent/10 text-accent">
                            {feature.benefit}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <Button size="lg" variant="outline" className="mt-8 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Join as Supplier
              </Button>
            </div>
          </div>
        </div>

        {/* AI Features */}
        <div className="text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            AI Powered
          </Badge>
          <h3 className="text-3xl font-bold mb-6 text-foreground">
            Smart Suggestions for Better Business
          </h3>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our AI understands the Indian market patterns and vendor behavior to optimize 
            your sourcing and selling strategies.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiFeatures.map((feature, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-border/50 shadow-glass hover:shadow-warm transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <Brain className="h-5 w-5 text-primary" />
                  <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {feature}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;