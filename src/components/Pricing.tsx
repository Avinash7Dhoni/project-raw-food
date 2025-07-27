import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, TrendingDown, Users, Zap } from "lucide-react";

const Pricing = () => {
  const realPrices = [
    {
      item: "Onions (25kg)",
      individual: "₹750",
      group: "₹625",
      savings: "₹125"
    },
    {
      item: "Tomatoes (20kg)",
      individual: "₹800",
      group: "₹680",
      savings: "₹120"
    },
    {
      item: "Cooking Oil (15L)",
      individual: "₹1,950",
      group: "₹1,650",
      savings: "₹300"
    },
    {
      item: "Atta Flour (50kg)",
      individual: "₹2,200",
      group: "₹1,870",
      savings: "₹330"
    },
    {
      item: "Refined Oil (5L)",
      individual: "₹650",
      group: "₹550",
      savings: "₹100"
    },
    {
      item: "Basmati Rice (25kg)",
      individual: "₹2,800",
      group: "₹2,380",
      savings: "₹420"
    }
  ];

  const vendorPlans = [
    {
      name: "Solo Vendor",
      price: "Free",
      description: "Perfect for small street food stalls",
      features: [
        "Individual purchase rates",
        "Basic supplier comparison",
        "WhatsApp notifications",
        "COD payments",
        "Basic support"
      ],
      limitations: [
        "No group buying",
        "Limited AI suggestions",
        "Standard delivery"
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Group Buyer",
      price: "₹299",
      period: "/month",
      description: "Best for regular vendors wanting discounts",
      features: [
        "Group buying access",
        "AI-suggested orders",
        "Voice ordering in 5 languages",
        "Priority delivery slots",
        "Advanced price tracking",
        "Bulk discount calculator",
        "24/7 chat support"
      ],
      limitations: [],
      cta: "Most Popular",
      popular: true
    },
    {
      name: "Pro Vendor",
      price: "₹599",
      period: "/month",
      description: "For large vendors & multi-location businesses",
      features: [
        "Everything in Group Buyer",
        "Custom group creation",
        "Advanced analytics & reports",
        "Dedicated account manager",
        "Custom delivery schedules",
        "Inventory management",
        "API access",
        "Priority customer support"
      ],
      limitations: [],
      cta: "Go Pro",
      popular: false
    }
  ];

  const supplierPlan = {
    name: "Supplier",
    price: "2.5%",
    period: "commission per sale",
    description: "Only pay when you make sales",
    features: [
      "List unlimited products",
      "Receive vendor orders",
      "Payment processing",
      "Order management dashboard",
      "Rating & review system",
      "Delivery logistics support",
      "Monthly payout reports",
      "Business growth analytics"
    ]
  };

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Real Market Savings
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            See How Much You Can
            <span className="block text-primary">Save Every Month</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real prices from Mumbai markets. Join group orders and save significantly 
            on every purchase.
          </p>
        </div>

        {/* Real Price Comparison */}
        <div className="mb-20">
          <Card className="p-8 bg-gradient-card border-border/50 shadow-spice">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Current Mumbai Market Rates (January 2025)
              </h3>
              <p className="text-muted-foreground">
                Compare individual vs group buying prices for common raw materials
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Raw Material</th>
                    <th className="text-center py-3 px-4 font-semibold">Individual Rate</th>
                    <th className="text-center py-3 px-4 font-semibold">Group Rate</th>
                    <th className="text-center py-3 px-4 font-semibold text-accent">You Save</th>
                  </tr>
                </thead>
                <tbody>
                  {realPrices.map((price, index) => (
                    <tr key={index} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="py-4 px-4 font-medium">{price.item}</td>
                      <td className="text-center py-4 px-4 text-muted-foreground line-through">
                        {price.individual}
                      </td>
                      <td className="text-center py-4 px-4 font-semibold text-primary">
                        {price.group}
                      </td>
                      <td className="text-center py-4 px-4">
                        <Badge className="bg-accent/10 text-accent border-accent/20">
                          {price.savings}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    Monthly Savings for Average Vendor
                  </h4>
                  <p className="text-muted-foreground">
                    Based on typical monthly raw material purchases
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">₹4,850</div>
                  <div className="text-sm text-muted-foreground">Average monthly savings</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Vendor Plans */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Choose Your Vendor Plan
            </h3>
            <p className="text-muted-foreground text-lg">
              Start free, upgrade when you're ready for more savings
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {vendorPlans.map((plan, index) => (
              <Card key={index} className={`p-8 relative ${plan.popular ? 'bg-gradient-card border-primary shadow-spice scale-105' : 'bg-card border-border shadow-glass'} transition-all duration-300 hover:shadow-warm`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h4>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.limitations.map((limitation, limitIndex) => (
                    <div key={limitIndex} className="flex items-start gap-3">
                      <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{limitation}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full ${plan.popular ? 'shadow-warm' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Supplier Plan */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Supplier Partnership
            </h3>
            <p className="text-muted-foreground text-lg">
              Grow your business with zero upfront costs
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-gradient-card border-border/50 shadow-spice">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-foreground mb-2">{supplierPlan.name}</h4>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{supplierPlan.price}</span>
                  <span className="text-muted-foreground ml-2">{supplierPlan.period}</span>
                </div>
                <p className="text-muted-foreground">{supplierPlan.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {supplierPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-accent/5 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <TrendingDown className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Example Earnings</h5>
                    <p className="text-muted-foreground text-sm">
                      ₹1,00,000 monthly sales = ₹2,500 commission
                    </p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full shadow-warm">
                Apply as Supplier
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;