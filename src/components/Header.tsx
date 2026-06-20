import { Phone, Mail, Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-background border-b border-border/50 hidden md:block"
    >
      <div className="container mx-auto flex items-center justify-between py-2 px-4 text-xs font-body text-muted-foreground">
        {/* Left Side Tagline */}
        <div className="flex items-center gap-1.5 font-medium tracking-wide">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/60"></span>
          <span>Backed by Science. Focused on You.</span>
        </div>

        {/* Right Side Contact & Socials */}
        <div className="flex items-center gap-6">
          <a
            href="tel:+916235034862"
            className="flex items-center gap-1.5 hover:text-primary transition-colors font-semibold"
          >
            <Phone className="w-3.5 h-3.5 text-primary" />
            <span>+91 6235034862</span>
          </a>

          <div className="flex items-center gap-4 border-l border-border/60 pl-4">
            <a
              href="https://instagram.com/mithahara"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://facebook.com/mithahara"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:info@mithahara.com"
              className="hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
