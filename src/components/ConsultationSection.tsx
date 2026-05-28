import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import AppointmentPopup from "@/components/AppointmentPopup";
import smithaPortrait from "@/assets/smitha-menon-award.png";

const items = [
  "Dealing with PCOS or hormonal imbalances",
  "Looking to manage diabetes or cholesterol levels",
  "Targeting sustainable weight management",
  "Seeking solutions for bloating, acidity, or gut health",
  "Preparing for a healthy pregnancy or postpartum recovery",
];

const ConsultationSection = () => {
  return (
    <section id="appointment" className="py-16 md:py-24 bg-primary overflow-hidden border-t border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-6xl mx-auto">
          
          {/* Left Column: Text & List */}
          <AnimatedSection direction="left" className="lg:w-1/2 text-left text-primary-foreground">
            <span className="text-xs font-body font-bold uppercase tracking-[0.25em] text-gold mb-3 block">
              Free Clarity Session
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Get a Free 1-on-1 Consultation with the Nutritionist!
            </h2>
            <p className="text-primary-foreground/90 font-body mb-6 leading-relaxed text-base">
              Here's your chance to speak <strong className="text-white">directly with Smitha Menon</strong> — absolutely free.
              No sign-ups, no commitments — just a real conversation about you, your body, and your health goals.
            </p>
            <p className="text-primary-foreground/80 font-body font-bold text-sm mb-4 uppercase tracking-wider">Whether you're:</p>
            
            <ul className="space-y-3.5 mb-8">
              {items.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="flex items-center gap-3 text-primary-foreground/90 font-body text-sm"
                >
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <p className="text-primary-foreground/80 font-body text-xs md:text-sm leading-relaxed mb-8 max-w-md">
              This <strong className="text-white">10-minute personal consultation</strong> is designed to help you get clarity,
              direction, and science-backed guidance tailored to your stage of life.
            </p>
            
            <AppointmentPopup className="bg-gold text-primary-foreground font-body font-bold uppercase text-xs tracking-widest px-8 py-3.5 rounded-full hover:bg-gold/95 hover:shadow-lg transition-all duration-300">
              Get Appointment
            </AppointmentPopup>
          </AnimatedSection>

          {/* Right Column: Portrait image with crop settings */}
          <AnimatedSection direction="right" className="lg:w-1/2 flex justify-center">
            <motion.div
              className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={smithaPortrait}
                alt="Smitha Menon - Clinical Nutritionist consultation"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatedSection>
          
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
