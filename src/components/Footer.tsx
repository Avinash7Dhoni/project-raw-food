import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const languages = [
    { code: "en", name: "English", native: "English" },
    { code: "hi", name: "Hindi", native: "हिंदी" },
    { code: "te", name: "Telugu", native: "తెలుగు" },
    { code: "ta", name: "Tamil", native: "தமிழ்" },
    { code: "bn", name: "Bengali", native: "বাংলা" },
    { code: "mr", name: "Marathi", native: "मराठी" }
  ];

  const cities = [
    "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad",
    "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Kanpur", "Nagpur"
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-3xl">🏪</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">RawMandi</h3>
                <p className="text-sm opacity-80">Street Food Sourcing</p>
              </div>
            </div>
            
            <p className="text-background/80 leading-relaxed">
              Connecting Indian street food vendors with trusted suppliers. 
              Get better prices through group buying and AI-powered suggestions.
            </p>
            
            <div className="flex gap-4">
              <Button size="sm" variant="outline" className="bg-transparent border-background/30 text-background hover:bg-background hover:text-foreground">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="bg-transparent border-background/30 text-background hover:bg-background hover:text-foreground">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="bg-transparent border-background/30 text-background hover:bg-background hover:text-foreground">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="bg-transparent border-background/30 text-background hover:bg-background hover:text-foreground">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-background/80 hover:text-background transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-background/80 hover:text-background transition-colors">Pricing</a></li>
              <li><a href="#suppliers" className="text-background/80 hover:text-background transition-colors">Become Supplier</a></li>
              <li><a href="#vendor" className="text-background/80 hover:text-background transition-colors">Join as Vendor</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-background transition-colors">Contact Us</a></li>
              <li><a href="#support" className="text-background/80 hover:text-background transition-colors">Help & Support</a></li>
              <li><a href="#blog" className="text-background/80 hover:text-background transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h4 className="text-xl font-semibold mb-6">
              <Globe className="inline h-5 w-5 mr-2" />
              Languages
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((lang) => (
                <Button 
                  key={lang.code} 
                  variant="ghost" 
                  size="sm" 
                  className="justify-start text-background/80 hover:text-background hover:bg-background/10"
                >
                  {lang.native}
                </Button>
              ))}
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium mb-3">Voice Support</h5>
              <p className="text-sm text-background/80">
                Order using voice commands in all supported languages. 
                Perfect for vendors of all education levels.
              </p>
            </div>
          </div>

          {/* Contact & Cities */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact & Coverage</h4>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 opacity-80" />
                <span className="text-background/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 opacity-80" />
                <span className="text-background/80">support@rawmandi.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 opacity-80 mt-1" />
                <div>
                  <p className="text-background/80 text-sm">
                    123 Market Street, Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-medium mb-3">Available Cities</h5>
              <div className="flex flex-wrap gap-2">
                {cities.slice(0, 6).map((city) => (
                  <Badge 
                    key={city} 
                    variant="outline" 
                    className="bg-transparent border-background/30 text-background/80 text-xs"
                  >
                    {city}
                  </Badge>
                ))}
                <Badge 
                  variant="outline" 
                  className="bg-transparent border-background/30 text-background/80 text-xs"
                >
                  +6 more
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/80 text-sm">
              © 2025 RawMandi. All rights reserved. | Made for Indian Street Food Vendors
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-background/80 hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-background/80 hover:text-background transition-colors">
                Terms of Service
              </a>
              <a href="#refund" className="text-background/80 hover:text-background transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-background/20 text-center">
            <p className="text-background/60 text-sm">
              Built with ❤️ for Indian Street Food Community | 
              <span className="ml-2">Supporting vendors across India since 2025</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;