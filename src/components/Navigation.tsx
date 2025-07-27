import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, User, Globe, Phone } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-2xl">🏪</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">RawMandi</h1>
              <p className="text-xs text-muted-foreground">Street Food Sourcing</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#suppliers" className="text-muted-foreground hover:text-primary transition-colors">
              Suppliers
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Language & Auth */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Globe className="h-4 w-4 mr-2" />
              English
            </Button>
            
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Phone className="h-4 w-4 mr-2" />
              Login
            </Button>

            <Button size="sm" className="shadow-warm">
              <User className="h-4 w-4 mr-2" />
              Join Now
            </Button>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4 space-y-4">
            <a href="#features" className="block text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#pricing" className="block text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#suppliers" className="block text-muted-foreground hover:text-primary transition-colors">
              Suppliers
            </a>
            <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm" className="flex-1">
                <Globe className="h-4 w-4 mr-2" />
                हिंदी
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                Login
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Announcement Bar */}
      <div className="bg-gradient-primary text-primary-foreground py-2 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm font-medium flex items-center justify-center gap-2">
            <Badge variant="secondary" className="bg-white/20 text-white">
              New
            </Badge>
            Group orders now get up to 25% discount! Join today.
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;