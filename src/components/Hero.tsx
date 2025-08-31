import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Thermometer, Zap } from "lucide-react";
import heroImage from "@/assets/industrial-ac-hero.jpg";

const Hero = () => {
  const scrollToRFQ = () => {
    document.getElementById('rfq-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-muted to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_24%,hsl(var(--border))_25%,hsl(var(--border))_26%,transparent_27%,transparent_74%,hsl(var(--border))_75%,hsl(var(--border))_76%,transparent_77%)] bg-[length:60px_60px] opacity-20" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[hsl(var(--industrial-blue))] to-[hsl(var(--industrial-accent))] bg-clip-text text-transparent">
                  Industrial
                </span>
                <br />
                Panel Air Conditioners
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Precision cooling solutions for electrical panels and industrial equipment. 
                Built for reliability, efficiency, and continuous operation.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm shadow-[var(--shadow-card)]">
                <Shield className="h-8 w-8 text-[hsl(var(--industrial-blue))]" />
                <div>
                  <div className="font-semibold">IP54 Rated</div>
                  <div className="text-sm text-muted-foreground">Weather Protected</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm shadow-[var(--shadow-card)]">
                <Thermometer className="h-8 w-8 text-[hsl(var(--industrial-accent))]" />
                <div>
                  <div className="font-semibold">-40°C to +70°C</div>
                  <div className="text-sm text-muted-foreground">Operating Range</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm shadow-[var(--shadow-card)]">
                <Zap className="h-8 w-8 text-[hsl(var(--industrial-blue))]" />
                <div>
                  <div className="font-semibold">High Efficiency</div>
                  <div className="text-sm text-muted-foreground">Energy Saving</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={scrollToRFQ}
                className="group"
              >
                Request Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View Specifications
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-[var(--shadow-industrial)]">
              <img 
                src={heroImage} 
                alt="Industrial Panel Air Conditioner"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[hsl(var(--industrial-blue))] to-[hsl(var(--industrial-accent))] rounded-full opacity-20 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-[hsl(var(--industrial-accent))] to-[hsl(var(--industrial-blue))] rounded-full opacity-20 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;