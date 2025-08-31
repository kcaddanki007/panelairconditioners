import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--industrial-gray))] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[hsl(var(--industrial-blue))] to-[hsl(var(--industrial-accent))] rounded-md" />
              <span className="text-xl font-bold">CoolTech Industries</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Leading manufacturer of industrial panel air conditioners, 
              providing reliable cooling solutions for critical applications worldwide.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Product Catalog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Technical Specifications</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Installation Guides</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Warranty Information</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Downloads</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div id="contact">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[hsl(var(--industrial-accent))]" />
                <div>
                  <div className="font-medium">Sales Hotline</div>
                  <div className="text-gray-300">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[hsl(var(--industrial-accent))]" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-gray-300">sales@cooltech.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[hsl(var(--industrial-accent))]" />
                <div>
                  <div className="font-medium">Address</div>
                  <div className="text-gray-300">
                    123 Industrial Blvd<br />
                    Manufacturing City, MC 12345
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-[hsl(var(--industrial-accent))]" />
                <div>
                  <div className="font-medium">Business Hours</div>
                  <div className="text-gray-300">Mon-Fri: 8:00 AM - 6:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Get the latest updates on new products and industry insights.
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button variant="hero" className="w-full">
                Subscribe
              </Button>
            </div>
            <div className="mt-6">
              <Badge variant="secondary" className="bg-white/10 text-white">
                ✓ ISO 9001 Certified
              </Badge>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2024 CoolTech Industries. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;