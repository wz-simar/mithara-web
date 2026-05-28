import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AppointmentPopup from "@/components/AppointmentPopup";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-background/90 backdrop-blur-md sticky top-0 z-50 border-b border-border/30 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Elegant Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Mithara logo" className="w-10 h-10 object-contain group-hover:scale-105 transition-transform" />
          <div className="flex flex-col">
            <span className="font-heading text-2xl font-bold tracking-tight text-foreground leading-none">Mithara</span>
            <span className="font-body text-[8px] font-semibold tracking-[0.25em] text-primary uppercase mt-1">Nutrition & Wellness</span>
          </div>
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`relative px-4 py-2 text-sm font-semibold tracking-wide uppercase transition-colors duration-200 ${
                location.pathname === item.href
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              {item.label}
              {location.pathname === item.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-[-13px] left-0 right-0 h-0.5 bg-gold"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Right Side Book Button */}
        <div className="hidden md:block">
          <AppointmentPopup className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-bold uppercase text-[11px] tracking-wider hover:bg-primary/95 hover:shadow-md transition-all duration-300">
            Book a Consultation
          </AppointmentPopup>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-background border-t border-border/30 overflow-hidden"
          >
            <div className="flex flex-col py-3 px-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-semibold tracking-wide uppercase transition-colors ${
                    location.pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80 hover:bg-secondary/50 hover:text-primary"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4 pb-2">
                <AppointmentPopup
                  className="w-full bg-primary text-primary-foreground text-center py-3 rounded-full font-bold uppercase text-xs tracking-wider hover:bg-primary/95 transition-all shadow-sm"
                  onClick={() => setOpen(false)}
                >
                  Book a Consultation
                </AppointmentPopup>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
