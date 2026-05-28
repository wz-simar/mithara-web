import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { programsData as services } from "@/data/programs";

const Services = () => {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="py-16 bg-section-alt">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-4">
            <h2 className="section-title">Solution In 4 Easy Steps</h2>
            <p className="text-primary font-bold text-lg mt-2">100000+ Patients</p>
          </div>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <div className="lg:w-1/3">
            <div className="flex flex-col gap-1">
              {services.map((s, i) => (
                <motion.button
                  key={s.id}
                  onClick={() => setActive(i)}
                  className={`text-left px-5 py-3.5 rounded-md transition-colors font-body font-semibold text-sm ${
                    i === active ? "bg-primary text-primary-foreground shadow-lg" : "bg-background text-foreground hover:bg-secondary"
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {s.title}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-background rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 overflow-hidden">
                    <motion.img
                      src={current.image}
                      alt={current.title}
                      className="w-full h-64 md:h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-4">{current.title}</h3>
                    <p className="text-muted-foreground font-body leading-relaxed mb-6">{current.description}</p>
                    <Link to={`/programs/${current.id}`} className="btn-appointment inline-block w-fit">
                      View More
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
