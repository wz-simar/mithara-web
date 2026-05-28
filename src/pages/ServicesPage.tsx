import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import servicesHero from "@/assets/services-hero.jpg";
import AppointmentPopup from "@/components/AppointmentPopup";
import { 
  Scale, 
  Activity, 
  Sparkles, 
  ShieldCheck, 
  HeartPulse, 
  Smile, 
  PhoneCall, 
  FileSpreadsheet, 
  FileText, 
  MessageSquare, 
  Camera, 
  Calendar, 
  Trophy, 
  MapPin, 
  Users, 
  Newspaper 
} from "lucide-react";
import { motion } from "framer-motion";

const expertiseList = [
  {
    icon: Scale,
    title: "Weight Management",
    description: "Personalized nutrition strategies focused on sustainable fat loss, muscle preservation, and healthy weight gain, avoiding extreme calorie restrictions.",
    details: ["Fat loss & body recomposition", "Muscle gain nutrition", "Metabolic health optimization", "Weight maintenance planning"]
  },
  {
    icon: Activity,
    title: "Diabetes Care",
    description: "Evidence-based meal planning designed to stabilize blood glucose levels, improve insulin sensitivity, and prevent diabetes-related complications.",
    details: ["Glycemic index optimization", "Insulin resistance management", "Prediabetes reversal plans", "Continuous glucose support"]
  },
  {
    icon: Sparkles,
    title: "PCOS & Hormonal Health",
    description: "Targeted nutrition protocols to regulate cycles, reduce androgenic symptoms (acne, hair growth), address insulin resistance, and support fertility.",
    details: ["Hormone balance mapping", "Insulin-sensitizing diets", "Ovarian health nutrition", "Symptomatic relief coaching"]
  },
  {
    icon: HeartPulse,
    title: "Lipid Management",
    description: "Clinical nutrition interventions designed to lower bad cholesterol (LDL), improve HDL levels, and protect cardiovascular wellness.",
    details: ["Cholesterol lowering diets", "Triglyceride control plans", "Cardiovascular support nutrition", "Heart-healthy fat strategies"]
  },
  {
    icon: ShieldCheck,
    title: "Thyroid Disorders",
    description: "Nutritional strategies that address key micronutrients (selenium, iodine, zinc) supporting thyroid gland function and metabolic rate correction.",
    details: ["Hypothyroidism supportive diet", "Hashimoto's autoimmune plans", "Metabolic rate boost focus", "Energy optimization support"]
  },
  {
    icon: Smile,
    title: "Gut Health & Lifestyle Disorders",
    description: "Restorative nutrition to address bloating, acidity, IBS, and chronic lifestyle issues by nourishing the gut microbiome and reducing inflammation.",
    details: ["Bloating & indigestion relief", "Microbiome restoration plans", "Anti-inflammatory diets", "Stress-metabolism correction"]
  }
];

const onlineSteps = [
  {
    icon: PhoneCall,
    num: "1",
    title: "Complimentary Clarity Call",
    duration: "5 to 10 minutes",
    desc: "A brief introductory call to understand your health concerns, goals, and to determine if we’re the right fit for your journey."
  },
  {
    icon: FileSpreadsheet,
    num: "2",
    title: "Health Data & Assessment",
    duration: "Pre-planning phase",
    desc: "We collect your anthropometric measurements, detailed medical history, lifestyle information, and recent blood reports for a comprehensive analysis."
  },
  {
    icon: FileText,
    num: "3",
    title: "Personalized Nutrition Plan",
    duration: "Delivered within 24–48 hours",
    desc: "You receive a customized, practical, and scientifically backed nutrition plan designed specifically for your body condition, and lifestyle."
  },
  {
    icon: MessageSquare,
    num: "4",
    title: "One-on-One Plan Review Session",
    duration: "Launch day",
    desc: "A dedicated session via WhatsApp or Botim to walk you through your plan, address all queries, and ensure complete clarity before you begin."
  },
  {
    icon: Camera,
    num: "5",
    title: "Daily Meal Tracking & Support",
    duration: "Ongoing daily",
    desc: "Share pictures of your meals daily for real-time feedback, portion guidance, and accountability. Includes ongoing support for meal adjustments."
  },
  {
    icon: Calendar,
    num: "6",
    title: "Weekly Review Calls",
    duration: "Weekly check-ins",
    desc: "Scheduled check-ins to track progress, measure improvements, adjust menu variations, and fine-tune your plan as needed."
  },
  {
    icon: Trophy,
    num: "7",
    title: "Final Report & Maintenance Plan",
    duration: "Program completion",
    desc: "Once your target is achieved, you receive a comprehensive progress report and a long-term maintenance plan to help you sustain results independently."
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navbar />
      <PageHero image={servicesHero} title="Our Services" subtitle="Evidence-based, personalized nutrition care plans" />

      {/* SECTION 1: Areas of Expertise */}
      <section id="expertise" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs font-body font-bold uppercase tracking-[0.25em] text-gold mb-3 block">
              Section 1
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Areas of Expertise
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto mt-4 text-sm md:text-base">
              Personalized, clinically directed nutrition plans targeting metabolic corrections and long-term wellness.
            </p>
            <div className="flex justify-center items-center gap-2 mt-4">
              <span className="h-[1px] w-8 bg-gold"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
              <span className="h-[1px] w-8 bg-gold"></span>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {expertiseList.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-card rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-lg border border-border/40 text-left flex flex-col h-full transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <item.icon className="w-5.5 h-5.5 stroke-[1.5]" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-3">{item.title}</h3>
                  <p className="font-body text-xs leading-relaxed text-muted-foreground mb-6 flex-grow">
                    {item.description}
                  </p>
                  <ul className="space-y-2 border-t border-border/40 pt-4 mt-auto">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-body text-foreground/80">
                        <span className="w-1 h-1 rounded-full bg-gold"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: How It Works */}
      <section id="how-it-works" className="py-16 md:py-24 bg-section-alt border-t border-b border-border/20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs font-body font-bold uppercase tracking-[0.25em] text-gold mb-3 block">
              Section 2
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              How It Works
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto mt-4 text-sm md:text-base">
              We provide both Online and Onsite Consultations tailored to your health goals. Each client receives a structured, evidence-based approach designed for sustainable results.
            </p>
            <div className="flex justify-center items-center gap-2 mt-4">
              <span className="h-[1px] w-8 bg-gold"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
              <span className="h-[1px] w-8 bg-gold"></span>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 max-w-6xl mx-auto items-start">
            
            {/* Online Process Timeline */}
            <AnimatedSection className="bg-card rounded-3xl p-6 md:p-8 border border-border/40 shadow-sm text-left">
              <h3 className="font-heading font-bold text-foreground text-xl mb-1 flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary"></span>
                <span>Online Consultation Process</span>
              </h3>
              <p className="text-xs text-muted-foreground font-body mb-8 border-b border-border/40 pb-4">
                Structured digital guidance available globally via WhatsApp or Botim.
              </p>

              <div className="relative border-l border-border/80 pl-6 ml-4 space-y-8">
                {onlineSteps.map((step, idx) => (
                  <div key={idx} className="relative group text-left">
                    {/* Circle timeline dot */}
                    <div className="absolute -left-[39px] top-1.5 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center text-[10px] font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {step.num}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1.5">
                        <h4 className="font-heading font-bold text-foreground text-base leading-tight">
                          {step.title}
                        </h4>
                        <span className="text-[10px] font-body bg-gold/10 text-primary border border-primary/10 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground font-body leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Onsite Process Block */}
            <div className="space-y-6">
              <AnimatedSection className="bg-primary text-primary-foreground rounded-3xl p-8 shadow-md text-left relative overflow-hidden border border-white/10">
                <div className="absolute top-0 right-0 p-4 text-white/5 pointer-events-none">
                  <MapPin className="w-48 h-48 -mr-10 -mt-10" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-4 flex items-center gap-2 text-gold">
                  <MapPin className="w-5.5 h-5.5 text-gold flex-shrink-0" />
                  <span>Onsite Consultation Process</span>
                </h3>
                <p className="font-body text-sm leading-relaxed mb-6 text-primary-foreground/90">
                  All steps of the online consultation process apply, with the addition of **in-person body composition analysis** and **physical consultations** at our clinic.
                </p>
                <p className="font-body text-sm leading-relaxed mb-8 text-primary-foreground/80">
                  Ideal for clients based in Kochi who prefer face-to-face interaction and comprehensive biological assessment.
                </p>
                
                <div className="bg-white/10 rounded-2xl p-4 border border-white/15 backdrop-blur-sm">
                  <h4 className="font-heading font-bold text-xs text-gold uppercase tracking-wider mb-2">Clinic Location</h4>
                  <p className="font-body text-xs leading-normal text-white/90">
                    G 182, (1st. Floor) 3rd.Cross Road<br />
                    (Behind Revive Studio) Panampilli Nagar,<br />
                    Kochi 682036.
                  </p>
                </div>
              </AnimatedSection>

              {/* Instant Action Card */}
              <AnimatedSection className="bg-card rounded-3xl p-8 border border-border/40 shadow-sm text-center">
                <h4 className="font-heading font-bold text-foreground text-lg mb-2">Ready to Start Your Journey?</h4>
                <p className="font-body text-xs text-muted-foreground mb-6 leading-relaxed">
                  Book a free 10-minute clarity call with Smitha Menon to discuss your targets.
                </p>
                <AppointmentPopup className="bg-primary text-primary-foreground w-full py-3.5 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-primary/95 transition-all duration-300">
                  Book A Consultation
                </AppointmentPopup>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: Other Services */}
      <section id="other-services" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs font-body font-bold uppercase tracking-[0.25em] text-gold mb-3 block">
              Section 3
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Other Services
            </h2>
            <div className="flex justify-center items-center gap-2 mt-4">
              <span className="h-[1px] w-8 bg-gold"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
              <span className="h-[1px] w-8 bg-gold"></span>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Corporate & School Wellness */}
            <AnimatedSection direction="left">
              <div className="bg-card rounded-3xl p-8 border border-border/40 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col text-left">
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-6">
                  <Users className="w-5.5 h-5.5" />
                </div>
                <span className="text-[10px] font-body font-bold uppercase tracking-wider text-gold mb-2 block">Beyond Consultations</span>
                <h3 className="font-heading font-bold text-foreground text-xl mb-4">Corporate & School Wellness Programs</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6 flex-grow">
                  Customized nutrition workshops designed to improve student health and company employee productivity through practical, accessible nutrition education.
                </p>
                <div className="bg-secondary/40 border border-border/40 rounded-2xl p-4 mt-auto">
                  <h4 className="font-heading font-bold text-xs text-primary uppercase tracking-wider mb-1">Target Outcomes</h4>
                  <p className="font-body text-xs leading-relaxed text-muted-foreground">
                    Healthier individuals &rarr; improved focus, reduced sick days, and an organizational culture of wellness.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Media & Publications */}
            <AnimatedSection direction="right">
              <div className="bg-card rounded-3xl p-8 border border-border/40 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col text-left">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Newspaper className="w-5.5 h-5.5" />
                </div>
                <span className="text-[10px] font-body font-bold uppercase tracking-wider text-primary mb-2 block">Professional Writing</span>
                <h3 className="font-heading font-bold text-foreground text-xl mb-4">Media & Publication Services</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6 flex-grow">
                  Evidence-based articles, guest columns, and medical reviews written for magazines, scientific journals, newsletters, and newspapers.
                </p>
                <div className="bg-secondary/40 border border-border/40 rounded-2xl p-4 mt-auto">
                  <h4 className="font-heading font-bold text-xs text-primary uppercase tracking-wider mb-1">Service Focus</h4>
                  <p className="font-body text-xs leading-relaxed text-muted-foreground">
                    Translating complex biochemistry and clinical dietetics into highly engaging, practical, and scientifically accurate public columns.
                  </p>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesPage;
