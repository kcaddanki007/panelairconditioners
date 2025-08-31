import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Snowflake, Gauge, Shield, Wrench } from "lucide-react";
import facilityImage from "@/assets/industrial-facility.jpg";
import controlPanelImage from "@/assets/ac-control-panel.jpg";

const ProductShowcase = () => {
  const products = [
    {
      name: "Compact Series",
      capacity: "500W - 2kW",
      description: "Perfect for small electrical panels and control cabinets",
      features: ["IP54 Protection", "Compact Design", "Easy Installation"],
      image: controlPanelImage
    },
    {
      name: "Industrial Series", 
      capacity: "2kW - 10kW",
      description: "Heavy-duty cooling for large industrial applications",
      features: ["High Efficiency", "Robust Construction", "24/7 Operation"],
      image: facilityImage
    },
    {
      name: "Heavy Duty Series",
      capacity: "10kW - 50kW",
      description: "Maximum cooling power for critical industrial processes",
      features: ["Redundant Systems", "Remote Monitoring", "Custom Solutions"],
      image: facilityImage
    }
  ];

  const specifications = [
    { icon: Snowflake, title: "Cooling Capacity", value: "500W to 50kW" },
    { icon: Gauge, title: "Operating Temperature", value: "-40°C to +70°C" },
    { icon: Shield, title: "Protection Rating", value: "IP54 / IP55" },
    { icon: Wrench, title: "Maintenance", value: "Low Maintenance Design" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Product Range</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Complete Cooling Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From compact control panels to large industrial installations, 
            we provide the right cooling solution for every application.
          </p>
        </div>

        {/* Key Specifications */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {specifications.map((spec, index) => (
            <Card key={index} className="text-center shadow-[var(--shadow-card)]">
              <CardContent className="pt-6">
                <spec.icon className="h-12 w-12 text-[hsl(var(--industrial-blue))] mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{spec.title}</h3>
                <p className="text-[hsl(var(--industrial-accent))] font-medium">{spec.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-industrial)] transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <Badge variant="outline" className="bg-[hsl(var(--industrial-blue))]/10 text-[hsl(var(--industrial-blue))]">
                    {product.capacity}
                  </Badge>
                </div>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[hsl(var(--industrial-accent))] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="industrial" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;