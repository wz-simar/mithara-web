import { ClipboardList, Leaf, FlaskConical, Heart } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const features = [
  {
    icon: ClipboardList,
    title: "Personalised Nutrition Plans",
    description: "Tailored to your body, goals & lifestyle",
  },
  {
    icon: Leaf,
    title: "Rooted in Ayurveda",
    description: "Holistic approach for long-term wellness",
  },
  {
    icon: FlaskConical,
    title: "Science-Backed",
    description: "Trusted nutrition guidance that works",
  },
  {
    icon: Heart,
    title: "Sustainable Results",
    description: "Healthy habits that last a lifetime",
  },
];

const FeaturesBar = () => {
  return (
    <section className="bg-secondary/40 border-b border-border/20 py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-border/60">
          {features.map((feat, i) => (
            <AnimatedSection key={feat.title} delay={i * 0.1}>
              <motion.div 
                className="flex items-start gap-4 p-4 lg:px-6 transition-all duration-300 rounded-2xl hover:bg-background/45"
                whileHover={{ y: -3 }}
              >
                {/* Circle Container for Icon */}
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <feat.icon className="w-5 h-5 stroke-[1.75]" />
                </div>
                
                {/* Text Description */}
                <div className="flex flex-col text-left">
                  <h3 className="font-heading font-bold text-foreground text-[15px] leading-tight mb-1">
                    {feat.title}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground leading-normal">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar;
