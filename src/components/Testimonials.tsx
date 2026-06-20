import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import testimonial1 from "@/assets/testimonial1.jpg";
import testimonial2 from "@/assets/testimonial2.jpg";
import testimonial3 from "@/assets/testimonial3.jpg";
import testimonial4 from "@/assets/testimonial4.jpg";
import testimonial5 from "@/assets/testimonial5.jpg";
import testimonial6 from "@/assets/testimonial6.jpeg";

const testimonials = [
  {
    name: "K M Jayalakshmi (Thalassery)",
    text: "We consulted Ms. Menon for my 84-year-old mother after her blood tests showed elevated lipid levels. Smitha’s dietary recommendations were simple, practical, and easy to follow. Within three months, her values improved significantly. Smitha was consistently encouraging and took the time to patiently address every concern along the way. Highly grateful for her guidance.",
    image: testimonial1,
  },
  {
    name: "Sandhya Ponneth (Executive Secretary, Intercol, Bahrain)",
    text: "I would like to express my sincere gratitude to Smitha Menon, who has been an incredible support in my weight loss journey. At 50, while dealing with perimenopause challenges, managing weight felt especially difficult. However, with her expert guidance, everything became much more achievable. I am working in Bahrain, and despite the distance, she conducted all sessions online. Even with the time difference, she managed everything seamlessly and always made me feel comfortable and supported throughout the process. She carefully monitored my diet, clearly explaining what to eat and what to avoid, and consistently followed up to ensure I stayed on track. Thanks to her dedication and support, I successfully lost 6 kg within just three months. This has made a significant difference in how I feel both physically and mentally. I truly appreciate her commitment, knowledge, and encouragement throughout my journey. I highly recommend her to anyone looking for a sustainable and guided approach to weight management.",
    image: testimonial2,
  },
  {
    name: "Divya Shaiju",
    text: "I’m incredibly grateful to Smitha for being such an amazing dietician and guide throughout my journey. Her knowledge, support, and encouragement have truly made a positive impact on my life. Managing both thyroid and PCOS left me feeling depleted and discouraged. After following her personalized simple-to-follow diet plans, my energy is renewed, weight dropped from 70.9 kg to 61.3 kg, and my waist circumference reduced from 101.6 cm to 85 cm. My LDL levels reduced from 128 to 96, achieving normal levels. She always takes the time to guide me patiently. She is so good at appreciating every small progress, which keeps me motivated and confident to do better each day. I truly appreciate her dedication and care. Thanks to her guidance.",
    image: testimonial3,
  },
  {
    name: "Gayathri Menon (IT Professional, Bangalore)",
    text: "I was under the care of Smitha for about 6 months, and honestly, it’s been such a positive journey. I work in an IT company in Bangalore. When I started, I had PCOD with irregular periods, high cholesterol, and was prediabetic. I had also gained around 15–20 kgs in a year, and being a hardcore foodie, I had no idea how to fix things without going extreme. Smitha made it really easy for me from day one. She’s very soft-spoken, patient, and actually listens—never made me feel judged or pressured. One thing I really appreciated is that she never gave unrealistic promises or pushed crash diets. Instead, she helped me understand that it’s all about balance and consistency. I lost around 12.9 kgs in 6 months — which felt huge for me. Along with that, my blood sugar and cholesterol levels improved significantly, my cycles became regular, and I started feeling much better overall. There were times I wanted to give up, but she kept encouraging me and adjusting my diet based on my routine, cravings, and lifestyle. She also helped me manage things even during travel and eating out, which made it very practical to follow. She was always approachable and available to clarify doubts whenever I needed guidance, which really helped me stay on track. Overall, I felt very comfortable working with her, and I’m really grateful for the support and long-term changes. Definitely recommend her if you’re looking for a realistic and sustainable approach to health.",
    image: testimonial4,
  },
  {
    name: "Jeeta Nair (School Teacher at DPS Public School, Bahrain)",
    text: "Hi! I wanted to share my experience with Smitha Menon — I’ve seen noticeable weight reduction, my inflammation has reduced significantly, and my diabetes is much better under control now. I also feel much better overall, with real relief from bloatedness and constipation. It’s made a big difference in how I feel day to day. Thank you, Smitha!",
    image: testimonial5,
  },
  {
    name: "Nirmal Jayprakash (General Manager - Sales Nippon Motor Corporation (P) Ltd)",
    text: "I approached Smitha looking for a practical way to lose weight, and I couldn’t be happier with the results. In just 2 months, I lost 6.3 kg with a simple plan built around home-cooked food. No gym memberships, no extreme routines, no starving. Just real meals that fit my daily life.The changes went beyond the scale. I dropped from overweight to normal BMI, lost 9 cm off my waist, and felt my energy come back. My uric acid came down from 8.4 to 6.9, and my *fasting insulin improved dramatically from 25.3 to 7.6.Most importantly, it was sustainable. I never felt deprived, and for the first time, eating healthy felt easy.I highly recommend Smitha Menon to anyone who wants real, lasting results without the gimmicks. She changed how I eat, and how I feel.",
    image: testimonial6,
  },
];
const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const currentTestimonial = testimonials[current];

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="section-title text-center mb-12">Lives We Have Touched</h2>
        </AnimatedSection>

        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="grid md:grid-cols-[0.96fr_1.04fr] gap-8 lg:gap-10 items-center mb-10"
            >
              {/* Picture (Left Side) */}
              <div className="relative mx-auto w-full max-w-[420px] rounded-[2rem] overflow-hidden bg-[linear-gradient(180deg,#f8eee7_0%,#f2dfd2_100%)] shadow-[0_30px_90px_-35px_hsl(var(--primary)/0.45)] h-[340px] md:h-[430px] lg:h-[470px]">
                <div className="absolute inset-0 flex items-center justify-center p-4 md:p-5">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="max-h-full max-w-full object-contain object-center drop-shadow-[0_12px_28px_rgba(0,0,0,0.18)]"
                  />
                </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-white/12 flex items-end p-6">
                </div>
              </div>

              {/* Review (Right Side) */}
              <div className="bg-section-alt rounded-[2rem] p-8 md:p-10 shadow-md relative group flex flex-col justify-center border border-primary/10 min-h-[340px] md:min-h-[430px] lg:min-h-[470px]">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10 transition-colors" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-foreground/80 font-body text-lg md:text-[1.02rem] leading-7 md:leading-8 mb-8 italic relative z-10 flex-grow">
                  "{currentTestimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-sm">
                    {currentTestimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground font-body text-lg">{currentTestimonial.name}</p>
                    <p className="text-sm text-primary">Happy Client</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-6 mt-8">
            <motion.button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all shadow-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-6 h-6 ml-[-2px]" />
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all shadow-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-6 h-6 mr-[-2px]" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
