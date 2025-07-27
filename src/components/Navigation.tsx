import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, User, Globe, Phone } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'hi', name: 'Hindi', native: 'हिंदी' },
    { code: 'te', name: 'Telugu', native: 'తెలుగు' },
    { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
    { code: 'mr', name: 'Marathi', native: 'मराठी' },
    { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

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
            <button onClick={() => handleScroll('features')} className="text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform transition-transform duration-200">
              {t('nav.features')}
            </button>
            <button onClick={() => handleScroll('pricing')} className="text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform transition-transform duration-200">
              {t('nav.pricing')}
            </button>
            <button onClick={() => handleScroll('suppliers')} className="text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform transition-transform duration-200">
              {t('nav.suppliers')}
            </button>
            <button onClick={() => handleScroll('contact')} className="text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform transition-transform duration-200">
              {t('nav.contact')}
            </button>
          </div>

          {/* Language & Auth */}
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="hidden sm:flex hover:bg-primary/10 hover:scale-105 transform transition-all duration-200">
                  <Globe className="h-4 w-4 mr-2" />
                  {currentLanguage?.native}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                {languages.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code} 
                    onClick={() => setLanguage(lang.code as any)}
                    className={`cursor-pointer hover:bg-primary/10 ${language === lang.code ? 'bg-primary/5 text-primary' : ''}`}
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    {lang.native} ({lang.name})
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="outline" size="sm" className="hidden sm:flex hover:bg-primary hover:text-primary-foreground hover:scale-105 transform transition-all duration-200">
              <Phone className="h-4 w-4 mr-2" />
              {t('nav.login')}
            </Button>

            <Button size="sm" className="shadow-warm hover:shadow-glow hover:scale-105 transform transition-all duration-200 bg-gradient-primary">
              <User className="h-4 w-4 mr-2" />
              {t('nav.joinNow')}
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
          <div className="md:hidden border-t border-border/50 py-4 space-y-4 animate-in slide-in-from-top-2">
            <button onClick={() => handleScroll('features')} className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2">
              {t('nav.features')}
            </button>
            <button onClick={() => handleScroll('pricing')} className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2">
              {t('nav.pricing')}
            </button>
            <button onClick={() => handleScroll('suppliers')} className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2">
              {t('nav.suppliers')}
            </button>
            <button onClick={() => handleScroll('contact')} className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2">
              {t('nav.contact')}
            </button>
            <div className="flex gap-2 pt-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Globe className="h-4 w-4 mr-2" />
                    {currentLanguage?.native}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {languages.map((lang) => (
                    <DropdownMenuItem 
                      key={lang.code} 
                      onClick={() => setLanguage(lang.code as any)}
                      className={`cursor-pointer ${language === lang.code ? 'bg-primary/10 text-primary' : ''}`}
                    >
                      {lang.native}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="outline" size="sm" className="flex-1">
                {t('nav.login')}
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Announcement Bar */}
      <div className="bg-gradient-primary text-primary-foreground py-2 text-center shadow-warm">
        <div className="container mx-auto px-4">
          <p className="text-sm font-medium flex items-center justify-center gap-2">
            <Badge variant="secondary" className="bg-white/20 text-white border-0 animate-pulse">
              New
            </Badge>
            {t('nav.announcement')}
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;