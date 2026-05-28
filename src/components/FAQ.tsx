import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const faqs = [
  { 
    q: "Who runs these services?", 
    a: "Smitha Menon, a Clinical, Functional & Preventive Nutritionist based in Kochi. She runs her clinic, MITHAHARA, dedicated to helping individuals achieve better health through evidence-based, personalized nutrition care." 
  },
  { 
    q: "What certifications and qualifications does Smitha Menon hold?", 
    a: "Smitha holds an M.Sc. FRM (St. Teresa's College, Ernakulam), an Advanced Certification in Functional Medicine Clinical Nutrition (accredited by IAFM), a Post Graduate Diploma in Clinical Nutrition (Amity University), and is a Certified Diabetes Educator (NDEP) with UNICEF and Cornell University certifications." 
  },
  { 
    q: "What is the primary approach and philosophy of Mithara?", 
    a: "Mithara operates on a root-cause and preventive approach. Rather than addressing symptoms with temporary fix diets, we decode your metabolic markers, medical history, and lifestyle to create practical, sustainable, and scientifically backed nutrition choices." 
  },
  { 
    q: "What are the primary areas of expertise under Mithara?", 
    a: "We provide specialized nutrition planning for Weight Management, Diabetes, PCOS & Hormonal Health, Lipid Management, Thyroid Disorders, and Gut Health & Lifestyle Disorders." 
  },
  { 
    q: "How does the Online Consultation process work?", 
    a: "Our online program is a structured 7-step process: (1) Free 5-10 minute clarity call, (2) Health data & medical history collection, (3) Plan delivery in 24-48 hours, (4) WhatsApp/Botim review session, (5) Daily food tracking and photo verification, (6) Scheduled weekly progress calls, and (7) Program completion with a long-term maintenance roadmap." 
  },
  { 
    q: "Do you offer Onsite/Physical consultations?", 
    a: "Yes. All stages of our evidence-based consultation process apply to onsite visits at our clinic in Panampilli Nagar, Kochi, which include in-person body composition analysis and face-to-face clinical sessions." 
  },
  { 
    q: "How can I book an appointment or get in touch?", 
    a: "You can book directly using the consultation button on our site, call or WhatsApp us at +91 6235034862, or email us at info@mithahara.com." 
  },
  { 
    q: "What are your working hours?", 
    a: "The clinic is open and consultations are conducted Monday to Saturday, from 10:00 AM to 6:00 PM." 
  }
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-section-alt border-t border-border/20">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedSection className="text-center mb-12">
          <span className="text-xs font-body font-bold uppercase tracking-[0.25em] text-gold mb-3 block">
            Common Questions
          </span>
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <div className="flex justify-center items-center gap-2 mt-4">
            <span className="h-[1px] w-8 bg-gold"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
            <span className="h-[1px] w-8 bg-gold"></span>
          </div>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="bg-card rounded-2xl border border-border/40 shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-body font-semibold text-foreground hover:bg-secondary/20 transition-colors"
                >
                  <span className="text-sm md:text-base leading-snug">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-4 flex-shrink-0 text-primary"
                  >
                    <ChevronDown className="w-5 h-5 stroke-[2]" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-border/20">
                        <p className="text-muted-foreground font-body text-xs md:text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
