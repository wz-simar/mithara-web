import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import smithaPortrait from "@/assets/smitha-menon.png";
import { Quote } from "lucide-react";

const AboutPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Text Content */}
          <AnimatedSection direction="left" className="lg:w-6/12 text-left">
            <span className="text-xs font-body font-bold uppercase tracking-[0.25em] text-gold mb-3 block">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight mb-6">
              I'm passionate about helping you become the healthiest, happiest version of yourself.
            </h2>
            <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed mb-8">
              <p>
                I'm <strong className="text-foreground">Smitha Menon</strong>, a Clinical, Functional & Preventive Nutritionist based in Kochi. She runs her diet clinic, <strong className="text-foreground">MITHAHARA</strong>, dedicated to helping individuals achieve better health through evidence-based, personalized nutrition.
              </p>
              <p>
                With a strong academic foundation and specialized certifications, I bring a holistic and functional approach to nutrition care — addressing root causes rather than just symptoms.
              </p>
              <p>
                In a world full of quick fixes and confusing advice, my goal is to simplify nutrition and empower you to make informed, sustainable lifestyle choices. No extreme diets. Just realistic strategies tailored to your body and lifestyle.
              </p>
            </div>

            {/* CTA Button and Decorative Icon */}
            <div className="flex items-center gap-4">
              <Link
                to="/about"
                className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-bold uppercase text-xs tracking-wider hover:bg-primary/95 hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Know More About Me
              </Link>
              
              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-primary/40">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8C8 8 4 12 4 19C7 16 11 15 15 15C18 15 20 17 20 17C20 17 19.5 12 17 8Z" />
                </svg>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column: Portrait and Overlapping Quote */}
          <AnimatedSection direction="right" className="lg:w-6/12 flex justify-center relative">
            <div className="relative w-full max-w-md">
              
              {/* Main Photo Frame */}
              <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={smithaPortrait}
                  alt="Smitha Menon - Clinical Nutritionist"
                  className="w-full h-full object-cover select-none"
                />
              </div>

              {/* Overlapping Quote Box (Bottom-Right) */}
              <motion.div
                whileHover={{ y: -4 }}
                className="absolute -bottom-4 -right-2 md:-right-4 
                bg-gold-light/90 backdrop-blur-md 
                p-2 rounded-xl 
                border border-gold/20 
                shadow-md 
                max-w-[200px] text-left"
              >
                <Quote className="w-4 h-4 text-gold opacity-40 mb-2" />

                <p className="font-heading italic text-foreground text-xs leading-snug font-semibold">
                  "Good nutrition is not about restriction, it's about balance."
                </p>

                 <div className="flex items-center gap-2 mt-2">
                   <span className="h-[1px] w-3 bg-primary/40"></span>
                   <span className="text-[9px] font-body uppercase tracking-wider text-primary font-bold">
                     Mithahara Clinic
                   </span>
                 </div>
               </motion.div>

            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
