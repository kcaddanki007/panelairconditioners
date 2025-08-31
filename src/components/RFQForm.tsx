import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { FileText, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RFQForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    application: "",
    coolingCapacity: "",
    operatingTemp: "",
    enclosureSize: "",
    powerSupply: "",
    specialRequirements: "",
    urgency: "",
    dataSheet: false,
    siteVisit: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("RFQ Submitted:", formData);
    
    toast({
      title: "Quote Request Submitted",
      description: "We'll get back to you within 24 hours with a detailed quote.",
    });

    // Reset form
    setFormData({
      company: "",
      name: "",
      email: "",
      phone: "",
      application: "",
      coolingCapacity: "",
      operatingTemp: "",
      enclosureSize: "",
      powerSupply: "",
      specialRequirements: "",
      urgency: "",
      dataSheet: false,
      siteVisit: false
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="rfq-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* RFQ Form */}
          <div>
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">Request for Quote</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Get Your Custom Quote
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and our engineering team will provide you with 
                a detailed quote tailored to your specific requirements.
              </p>
            </div>

            <Card className="shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
                <CardDescription>
                  Tell us about your cooling requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Company & Contact Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name">Contact Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Technical Requirements */}
                  <div className="space-y-2">
                    <Label htmlFor="application">Application Type *</Label>
                    <Select onValueChange={(value) => handleInputChange("application", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select application type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="control-panel">Control Panel Cooling</SelectItem>
                        <SelectItem value="switchgear">Switchgear Cooling</SelectItem>
                        <SelectItem value="server-rack">Server Rack Cooling</SelectItem>
                        <SelectItem value="industrial-cabinet">Industrial Cabinet</SelectItem>
                        <SelectItem value="outdoor-enclosure">Outdoor Enclosure</SelectItem>
                        <SelectItem value="custom">Custom Application</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="coolingCapacity">Required Cooling Capacity</Label>
                      <Select onValueChange={(value) => handleInputChange("coolingCapacity", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select capacity range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="500w-1kw">500W - 1kW</SelectItem>
                          <SelectItem value="1kw-2kw">1kW - 2kW</SelectItem>
                          <SelectItem value="2kw-5kw">2kW - 5kW</SelectItem>
                          <SelectItem value="5kw-10kw">5kW - 10kW</SelectItem>
                          <SelectItem value="10kw-plus">10kW+</SelectItem>
                          <SelectItem value="not-sure">Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="operatingTemp">Operating Temperature Range</Label>
                      <Input
                        id="operatingTemp"
                        placeholder="e.g., -20°C to +50°C"
                        value={formData.operatingTemp}
                        onChange={(e) => handleInputChange("operatingTemp", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="enclosureSize">Enclosure Dimensions</Label>
                      <Input
                        id="enclosureSize"
                        placeholder="W x H x D (mm)"
                        value={formData.enclosureSize}
                        onChange={(e) => handleInputChange("enclosureSize", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="powerSupply">Power Supply</Label>
                      <Select onValueChange={(value) => handleInputChange("powerSupply", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select power supply" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="230v-single">230V Single Phase</SelectItem>
                          <SelectItem value="400v-three">400V Three Phase</SelectItem>
                          <SelectItem value="110v-single">110V Single Phase</SelectItem>
                          <SelectItem value="custom">Custom Voltage</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="urgency">Project Urgency</Label>
                    <Select onValueChange={(value) => handleInputChange("urgency", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate (1-2 weeks)</SelectItem>
                        <SelectItem value="urgent">Urgent (2-4 weeks)</SelectItem>
                        <SelectItem value="standard">Standard (1-2 months)</SelectItem>
                        <SelectItem value="planning">Planning Phase</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialRequirements">Special Requirements</Label>
                    <Textarea
                      id="specialRequirements"
                      placeholder="Please describe any special requirements, environmental conditions, or certifications needed..."
                      value={formData.specialRequirements}
                      onChange={(e) => handleInputChange("specialRequirements", e.target.value)}
                      rows={4}
                    />
                  </div>

                  {/* Additional Services */}
                  <div className="space-y-4">
                    <Label>Additional Services</Label>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="dataSheet"
                        checked={formData.dataSheet}
                        onCheckedChange={(checked) => handleInputChange("dataSheet", checked as boolean)}
                      />
                      <Label htmlFor="dataSheet" className="text-sm font-normal">
                        Request detailed technical data sheets
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="siteVisit"
                        checked={formData.siteVisit}
                        onCheckedChange={(checked) => handleInputChange("siteVisit", checked as boolean)}
                      />
                      <Label htmlFor="siteVisit" className="text-sm font-normal">
                        Request on-site consultation
                      </Label>
                    </div>
                  </div>

                  <Button type="submit" variant="quote" size="lg" className="w-full">
                    Submit Quote Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Benefits & Process */}
          <div className="space-y-8">
            <Card className="shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[hsl(var(--industrial-accent))]" />
                  Quick Response Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--industrial-blue))]" />
                    <span className="text-sm">Quote within 24 hours</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--industrial-blue))]" />
                    <span className="text-sm">Technical review by engineers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--industrial-blue))]" />
                    <span className="text-sm">Custom solution recommendations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--industrial-blue))]" />
                    <span className="text-sm">Detailed technical specifications</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-[hsl(var(--industrial-accent))]" />
                  What's Included
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[hsl(var(--industrial-accent))] rounded-full" />
                    <span className="text-sm">Detailed product specifications</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[hsl(var(--industrial-accent))] rounded-full" />
                    <span className="text-sm">Installation guidelines</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[hsl(var(--industrial-accent))] rounded-full" />
                    <span className="text-sm">Warranty information</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[hsl(var(--industrial-accent))] rounded-full" />
                    <span className="text-sm">Delivery timeline</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[hsl(var(--industrial-accent))] rounded-full" />
                    <span className="text-sm">Technical support options</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-[var(--shadow-card)] bg-gradient-to-br from-[hsl(var(--industrial-blue))]/5 to-[hsl(var(--industrial-accent))]/5">
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
                <CardDescription>
                  Our technical team is available to assist you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold">Technical Hotline</div>
                    <div className="text-[hsl(var(--industrial-blue))]">+1 (555) 123-4567</div>
                  </div>
                  <div>
                    <div className="font-semibold">Email Support</div>
                    <div className="text-[hsl(var(--industrial-blue))]">technical@company.com</div>
                  </div>
                  <div>
                    <div className="font-semibold">Business Hours</div>
                    <div className="text-muted-foreground">Mon-Fri: 8:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RFQForm;