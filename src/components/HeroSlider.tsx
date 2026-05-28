import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import AppointmentPopup from "@/components/AppointmentPopup";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import servicePreconception from "@/assets/service-preconception.jpg";
import serviceChild from "@/assets/service-child.jpg";
import serviceMommy from "@/assets/service-mommy.jpg";

const slides = [
  {
    image: hero1,
    title: "HORMONAL HARMONY",
    subtitle: "PREMIUM MATERNAL WELLNESS",
    description: "Root-cause nutrition for PCOS, Thyroid & other hormonal imbalance",
  },
  {
    image: hero2,
    title: "NOURISH & FLOURISH",
    subtitle: "PREGNANCY NUTRITION",
    description: "Science-backed nutrition for a healthy pregnancy journey",
  },
  {
    image: hero3,
    title: "LACTATION HARMONY",
    subtitle: "POSTNATAL CARE",
    description: "Expert nutrition support for new mothers and babies",
  },
  {
    image: servicePreconception,
    title: "PRECONCEPTION POWER",
    subtitle: "FERTILITY WELLNESS",
    description: "Boost your fertility naturally with our tailored nutrition strategies",
  },
  {
    image: serviceChild,
    title: "LITTLE BITES BIG GROWTH",
    subtitle: "CHILD NUTRITION",
    description: "Early-life nutrition program combining complementary feeding science",
  },
  {
    image: serviceMommy,
    title: "MOMMY MAKEOVER",
    subtitle: "POSTPARTUM CARE",
    description: "Nourishing your body, calming your mind, and empowering yourself postpartum",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          initial={{ opacity: 0, x: direction * 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -direction * 100 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="absolute inset-0"
        >
          <motion.img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(37,31,23,0.74)_0%,rgba(37,31,23,0.45)_45%,rgba(37,31,23,0.22)_100%)]" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-primary-foreground/80 tracking-[0.3em] text-sm md:text-base mb-4 font-body uppercase"
              >
                {slides[current].subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.55 }}
                className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground/90 backdrop-blur-sm"
              >
                Personalized Nutrition Programs
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-gold leading-tight mb-4"
              >
                {slides[current].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-primary-foreground/90 text-lg md:text-xl max-w-xl font-body mb-8"
              >
                {slides[current].description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="flex items-center gap-4"
              >
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <AppointmentPopup className="btn-appointment">
                    Book Consultation
                  </AppointmentPopup>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Link to="/services" className="btn-appointment-outline">
                    Our Services
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={goPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40 text-primary-foreground rounded-full p-3 transition-all hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40 text-primary-foreground rounded-full p-3 transition-all hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="relative w-3 h-3 rounded-full bg-primary-foreground/30 overflow-hidden"
          >
            {i === current && (
              <motion.div
                layoutId="slider-dot"
                className="absolute inset-0 rounded-full bg-primary"
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
