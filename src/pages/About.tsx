import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import aboutHero from "@/assets/about-hero-new.png";
import smithaPortrait from "@/assets/smitha-menon.png";
import { Award, Users, Heart, BookOpen, GraduationCap, CheckCircle, Trophy, Sparkles } from "lucide-react";

const stats = [
  { icon: Users, label: "Lives Touched", value: "Thousands" },
  { icon: GraduationCap, label: "Certifications", value: "7+" },
  { icon: Heart, label: "Approach", value: "Root-Cause" },
  { icon: Award, label: "Clinic", value: "Mithahara" },
];

const qualifications = [
  "M.Sc. in Family Resource Management",
  "Advanced Certification in Functional Medicine Clinical Nutrition (Accredited by IAFM - Indian Association of Functional Medicine)",
  "Post Graduate Diploma in Clinical Nutrition (Amity University, Noida)",
  "Certification in PCOS Nutrition",
  "Certified Diabetes Educator (National Diabetes Educator Program - NDEP)",
  "Certification in Menopause Coaching",
  "Certification in Sports Nutrition (Medvarsity, Hyderabad)",
  "Certification in Programming for Infant and Young Child Feeding (UNICEF & Cornell University)"
];

const expertise = [
  "Personalized nutrition plans for weight management, diabetes, PCOS, thyroid disorders, and renal conditions",
  "Gut health and lifestyle disorder support",
  "Body Composition Analysis for individuals and organizations",
  "Corporate and school-based nutrition awareness programs",
  "Health education through video content and workshops"
];

const memberships = [
  "Lifetime Member – AEDAN (Association for Evidence-Based Dietetics and Nutrition)",
  "Lifetime Member – IAPEN (India Association for Parenteral and Enteral Nutrition)"
];

const achievements = [
  "Published multiple nutrition articles in leading magazines",
  "Awarded for an article on 'Stress' by AEDAN"
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navbar />
      <PageHero image={aboutHero} title="About the Nutritionist" subtitle="Know more about Smitha Menon" />

      {/* Stats Counter Section */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center text-primary-foreground">
                  <stat.icon className="w-9 h-9 mx-auto mb-3 text-gold" />
                  <p className="text-2xl md:text-3xl font-heading font-bold">{stat.value}</p>
                  <p className="text-xs font-body mt-1 text-primary-foreground/80 uppercase tracking-wider">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Profile Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left: Photo Frame */}
            <AnimatedSection direction="left" className="lg:w-5/12">
              <div className="relative">
                <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src={smithaPortrait}
                    alt="Smitha Menon - Clinical Nutritionist"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3.5 rounded-2xl shadow-lg border border-white/10">
                  <p className="font-heading font-bold text-base leading-none">Mithahara Clinic</p>
                  <p className="text-[10px] font-body uppercase tracking-wider mt-1 text-gold">Kochi, Kerala</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Main Bio */}
            <AnimatedSection direction="right" className="lg:w-7/12 text-left">
              <span className="text-xs font-body font-bold uppercase tracking-[0.2em] text-gold mb-2 block">
                Preventive & Functional Nutritionist
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Smitha Menon
              </h2>
              
              <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed mb-6">
                <p>
                  Smitha Menon is a <strong className="text-foreground">Clinical, Functional & Preventive Nutritionist</strong> based in Kochi. She runs her clinic, <strong className="text-foreground">MITHAHARA</strong>, dedicated to helping individuals achieve better health through evidence-based, personalized nutrition.
                </p>
                <p>
                  With a strong academic foundation and specialized certifications, she brings a holistic and functional approach to nutrition care — addressing root causes rather than just symptoms.
                </p>
              </div>

              {/* Approach & Philosophy */}
              <div className="bg-secondary/40 rounded-2xl p-6 border border-border/40 mb-6">
                <h3 className="font-heading font-bold text-foreground text-lg mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span>Approach & Philosophy</span>
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  Smitha is passionate about promoting evidence-based nutrition and empowering individuals to make informed and sustainable lifestyle choices. Her approach combines clinical expertise with practical, realistic strategies tailored to each individual's unique biology and daily routine.
                </p>
              </div>

              {/* Beyond Nutrition */}
              <div className="border-l-4 border-gold pl-4">
                <h4 className="font-heading font-bold text-foreground text-md mb-1.5">Beyond Nutrition</h4>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  Beyond her professional work, she is a trained classical dancer and a yoga practitioner, which further strengthens her belief in integrating movement, mindfulness, and nutrition for overall wellbeing.
                </p>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Qualifications, Memberships & Achievements Grid */}
      <section className="py-16 bg-section-alt border-t border-border/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Left Box: Qualifications */}
            <AnimatedSection>
              <div className="bg-background rounded-3xl p-8 shadow-sm border border-border/40 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground">Qualifications & Certifications</h3>
                </div>
                
                <ul className="space-y-4 flex-grow text-left">
                  {qualifications.map((q, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm font-body text-muted-foreground leading-relaxed">{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Right Box: Memberships and Publications */}
            <div className="flex flex-col gap-8">
              
              {/* Memberships */}
              <AnimatedSection delay={0.1}>
                <div className="bg-background rounded-3xl p-8 shadow-sm border border-border/40">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                      <Heart className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground">Professional Memberships</h3>
                  </div>
                  
                  <ul className="space-y-4 text-left">
                    {memberships.map((m, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                        <span className="text-sm font-body text-muted-foreground leading-relaxed">{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              {/* Areas of Expertise */}
              <AnimatedSection delay={0.2}>
                <div className="bg-background rounded-3xl p-8 shadow-sm border border-border/40">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground">Areas of Expertise</h3>
                  </div>

                  <ul className="space-y-4 text-left">
                    {expertise.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-sm font-body text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              {/* Publications & Achievements */}
              <AnimatedSection delay={0.3}>
                <div className="bg-background rounded-3xl p-8 shadow-sm border border-border/40">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground">Publications & Achievements</h3>
                  </div>

                  <ul className="space-y-4 text-left">
                    {achievements.map((a, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-sm font-body text-muted-foreground leading-relaxed">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

            </div>

          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
