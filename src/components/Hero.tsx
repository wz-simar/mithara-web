import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AppointmentPopup from "@/components/AppointmentPopup";
import heroImg from "@/assets/mithahara-hero.png";

const Hero = () => {
  return (
    <section className="relative bg-background overflow-hidden py-12 md:py-20 lg:py-24 border-b border-border/20">
      {/* Decorative Floating Leaves (Micro-animations) */}
      <motion.div
        className="absolute top-1/4 left-8 text-primary/10 hidden lg:block pointer-events-none"
        animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 8C8 8 4 12 4 19C7 16 11 15 15 15C18 15 20 17 20 17C20 17 19.5 12 17 8Z" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-1/2 text-primary/10 hidden lg:block pointer-events-none"
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 8C8 8 4 12 4 19C7 16 11 15 15 15C18 15 20 17 20 17C20 17 19.5 12 17 8Z" />
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col text-left"
          >
            {/* Tagline */}
            <span className="text-xs font-body font-bold uppercase tracking-[0.25em] text-gold mb-4 block">
              Nutrition for Real Life
            </span>
            
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.12] mb-6">
              Nourish Your Body. <br className="hidden md:inline" />
              <span className="text-primary italic font-medium font-heading">Heal from Within.</span>
            </h1>

            {/* Separator line with leaf emblem */}
            <div className="flex items-center gap-3 mb-6 opacity-80">
              <span className="h-[1px] w-12 bg-gold"></span>
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 8C8 8 4 12 4 19C7 16 11 15 15 15C18 15 20 17 20 17C20 17 19.5 12 17 8Z" />
              </svg>
              <span className="h-[1px] w-24 bg-gold/45"></span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed max-w-lg mb-10">
              Personalised nutrition & lifestyle guidance to help you restore balance, improve health, and feel your best — every day.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <AppointmentPopup className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-primary/95 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                Book a Consultation
              </AppointmentPopup>

              <Link
                to="/services"
                className="inline-flex items-center gap-3 border-2 border-border text-foreground hover:bg-secondary/35 px-7 py-3 rounded-full font-bold uppercase text-xs tracking-widest transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Play className="w-2.5 h-2.5 fill-primary" />
                </div>
                <span>How It Works</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Premium Food Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center lg:justify-end relative"
          >
            {/* Soft decorative shadow circle background */}
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl w-[320px] h-[320px] md:w-[450px] md:h-[450px] m-auto -z-10" />

            <div className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] lg:w-[440px] lg:h-[440px] rounded-full overflow-hidden shadow-2xl border-4 border-white/60">
              <img
                src={heroImg}
                alt="Healthy salad bowl styled by Mithara"
                className="w-full h-full object-cover select-none"
              />
            </div>

            {/* Decorative leaf branch overlapping */}
            <motion.div
              className="absolute -bottom-6 -left-6 text-primary hidden md:block"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg className="w-24 h-24 opacity-80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10 90C40 80 60 50 70 20" />
                <path d="M30 75C20 60 25 50 35 55C45 60 40 70 30 75Z" fill="currentColor" className="opacity-10" />
                <path d="M50 55C42 42 49 34 57 41C65 48 58 58 50 55Z" fill="currentColor" className="opacity-10" />
                <path d="M63 35C58 20 67 15 72 25C77 35 68 40 63 35Z" fill="currentColor" className="opacity-10" />
              </svg>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
