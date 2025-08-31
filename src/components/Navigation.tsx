import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[hsl(var(--industrial-blue))] to-[hsl(var(--industrial-accent))] rounded-md" />
            <span className="text-xl font-bold">CoolTech Industries</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-[hsl(var(--industrial-blue))] transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-foreground hover:text-[hsl(var(--industrial-blue))] transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('rfq-section')}
              className="text-foreground hover:text-[hsl(var(--industrial-blue))] transition-colors"
            >
              Get Quote
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-[hsl(var(--industrial-blue))] transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <Button 
              variant="industrial" 
              size="sm"
              onClick={() => scrollToSection('rfq-section')}
            >
              Request Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left py-2 text-foreground hover:text-[hsl(var(--industrial-blue))] transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="block w-full text-left py-2 text-foreground hover:text-[hsl(var(--industrial-blue))] transition-colors"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('rfq-section')}
                className="block w-full text-left py-2 text-foreground hover:text-[hsl(var(--industrial-blue))] transition-colors"
              >
                Get Quote
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-2 text-foreground hover:text-[hsl(var(--industrial-blue))] transition-colors"
              >
                Contact
              </button>
              <div className="pt-4 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>info@cooltech.com</span>
                </div>
                <Button 
                  variant="industrial" 
                  size="sm" 
                  className="w-full mt-4"
                  onClick={() => scrollToSection('rfq-section')}
                >
                  Request Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;