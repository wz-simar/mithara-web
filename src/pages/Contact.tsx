import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import contactHero from "@/assets/contact-hero.jpg";
import { Phone, Mail, MapPin, MessageSquare, Clock } from "lucide-react";
import { motion } from "framer-motion";
import LetsKnowYouBetterForm from "@/components/LetsKnowYouBetterForm";

const contactInfo = [
  { 
    icon: MessageSquare, 
    label: "WhatsApp", 
    value: "+91 6235034862", 
    href: "https://wa.me/916235034862" 
  },
  { 
    icon: Phone, 
    label: "Call Us", 
    value: "+91 6235034862", 
    href: "tel:+916235034862" 
  },
  { 
    icon: Mail, 
    label: "Email", 
    value: "info@mithahara.com", 
    href: "mailto:info@mithahara.com" 
  },
  { 
    icon: MapPin, 
    label: "Location", 
    value: "G 182, (1st. Floor) 3rd.Cross Road, Panampilli Nagar, Kochi 682036", 
    href: "https://maps.google.com/?q=G%20182,%201st%20Floor,%203rd%20Cross%20Road,%20Panampilli%20Nagar,%20Kochi%20682036" 
  },
  { 
    icon: Clock, 
    label: "Working Hours", 
    value: "Mon - Sat: 10 AM - 6 PM", 
    href: undefined 
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navbar />
      <PageHero image={contactHero} title="Contact Us" subtitle="We'd love to hear from you" />

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
            {contactInfo.map((info, i) => (
              <AnimatedSection key={info.label} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 20px 40px -15px hsl(var(--primary) / 0.15)" }}
                  className="bg-card rounded-2xl p-5 text-center h-full border border-border/40"
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground font-body text-sm mb-1">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} target="_blank" rel="noreferrer" className="text-xs text-muted-foreground font-body hover:text-primary transition-colors block break-words">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-xs text-muted-foreground font-body break-words">{info.value}</p>
                  )}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Contact Form & Decorative Section */}
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-stretch max-w-6xl mx-auto">
            <AnimatedSection direction="up" className="h-full">
              <div className="h-full flex flex-col justify-center">
                <LetsKnowYouBetterForm />
              </div>
            </AnimatedSection>

            {/* The contact message/image column */}
            <AnimatedSection direction="right" className="hidden lg:block h-full">
              <div className="relative h-full rounded-[2rem] overflow-hidden shadow-xl p-10 flex flex-col justify-center bg-primary border border-white/10">
                <div className="absolute inset-0 z-0">
                  <img src={contactHero} alt="Contact us" className="w-full h-full object-cover opacity-15" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-transparent" />
                </div>
                <div className="relative z-10 text-primary-foreground text-center flex flex-col items-center">
                  <h3 className="text-3xl font-heading font-extrabold mb-6 text-gold drop-shadow-md">Your Health Journey Starts Here</h3>
                  <p className="font-body text-lg leading-relaxed text-primary-foreground/90 mb-8 max-w-md">
                    Whether you need help with weight management, PCOS, diabetes, or gut health, we are here to support you with evidence-based personalized nutrition care plans.
                  </p>
                  <p className="font-body font-semibold italic px-6 py-4 bg-white/10 rounded-xl backdrop-blur-md border border-white/15 text-gold text-base">
                    "The right food at the right time can transform your health."
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Full-Width Map pointing to Panampilli Nagar, Kochi */}
      <section id="map" className="w-full border-t border-border/20">
        <iframe
          src="https://maps.google.com/maps?q=G%20182,%201st%20Floor,%203rd%20Cross%20Road,%20Panampilli%20Nagar,%20Kochi%20682036&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mithara Clinic Location Map"
        />
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
