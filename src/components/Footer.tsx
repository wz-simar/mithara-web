import { Phone, Mail, MapPin, MessageSquare, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background/80 relative border-t border-border/10">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-10">
          
          {/* Brand Intro Column */}
          <div className="text-left">
            <h3 className="font-heading text-xl font-bold text-background mb-4">Mithara</h3>
            <p className="font-body text-xs leading-relaxed text-background/70">
              Mithara is a clinical wellness space founded by Smitha Menon, a Clinical, Functional & Preventive Nutritionist. We specialize in evidence-based, personalized nutrition care to address root causes of metabolic, gut, and hormonal health concerns.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="text-left md:pl-8">
            <h3 className="font-heading text-lg font-bold text-background mb-4">Quick Links</h3>
            <ul className="space-y-2.5 font-body text-xs">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
              <li><Link to="/terms" className="hover:text-gold transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="text-left">
            <h3 className="font-heading text-lg font-bold text-background mb-4">Contact Info</h3>
            <div className="space-y-3 font-body text-xs">
              <a 
                href="https://wa.me/916235034862" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-3 hover:text-gold transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-gold flex-shrink-0" />
                <span>+91 6235034862</span>
              </a>
              <a 
                href="tel:+916235034862" 
                className="flex items-center gap-3 hover:text-gold transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span>+91 6235034862</span>
              </a>
              <a 
                href="mailto:info@mithahara.com" 
                className="flex items-center gap-3 hover:text-gold transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span>info@mithahara.com</span>
              </a>
              <a 
                href="https://maps.google.com/?q=G%20182,%201st%20Floor,%203rd%20Cross%20Road,%20Panampilli%20Nagar,%20Kochi%20682036" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-start gap-3 hover:text-gold transition-colors cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  G 182, (1st. Floor) 3rd.Cross Road, Panampilli Nagar, Kochi 682036
                </span>
              </a>
            </div>
          </div>

          {/* Map Column */}
          <div className="text-left">
            <h3 className="font-heading text-lg font-bold text-background mb-4">Our Location</h3>
            <div className="rounded-2xl overflow-hidden shadow-md border border-white/5 h-[160px]">
              <iframe
                src="https://maps.google.com/maps?q=G%20182,%201st%20Floor,%203rd%20Cross%20Road,%20Panampilli%20Nagar,%20Kochi%20682036&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location map"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-background/10 bg-black/10">
        <div className="container mx-auto px-4 py-5 text-center font-body text-[10px] uppercase tracking-widest text-background/45">
          © 2026 Mithara Nutrition & Wellness. All rights reserved.
        </div>
      </div>

      {/* Scroll to Top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute right-6 -top-5 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg border border-white/10"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;
