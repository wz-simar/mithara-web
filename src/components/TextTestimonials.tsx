import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const textTestimonials = [
  {
    name: "Anuradha Gupta",
    text: "Nutritionist Smitha Menon is very good at her work. She is there over a call when needed by a person to consult about the treatment she has given to work for better health. Nowadays finding a good practitioner and a kind professional is hard, so I wish her all the luck and I would like to recommend my family and friends to see her if they need her help. Thank you.",
  },
  {
    name: "Anonymous",
    text: "Smitha has been an angel to me. It’s been a year following her diet. I met her when my sugar levels, cholesterol, and weight were all high. Within 3 months everything was under control and I was able to lose 18 kgs. Even my pregnancy journey was very smooth with her guidance, and with her diet I never had any extra cravings because I was getting everything according to my body’s requirements. No thyroid, sugar, or BP problems throughout my pregnancy. Now post pregnancy also I am following her diet and able to reduce my weight.",
  },
  {
    name: "Sumaira Nusrat",
    text: "She is the kind of nutritionist you need if you are looking for a sustainable and approachable healthy lifestyle. No fad diets or crash ones. She provided simple homemade food with easy rules to follow. I look forward to rescheduling and upgrading my plan with her. Thank you ma'am for always motivating me and reverting to my doubts whenever I needed your guidance. I might have shed less on the scale but my journey has become more realistic and easy to plan because of your guidance.",
  },
  {
    name: "Anonymous",
    text: "I am getting my diet counselling for my 4 year old son as he is unable to walk and his overweight was troubling him during his ongoing physiotherapy treatment. She gave enough time to us and in a playful way made my child understand how he has to eat his food, which he is anti in eating. My son is actually listening to us and he is saying that the doctor aunty has told me to eat this or drink water for my good health. Please make me do it. I am really very lucky and happy to have a nutritionist like her.",
  },
  {
    name: "Baby Rajnanadini Khaitan",
    text: "Smitha is super with children. Her nutrition guidance really helped my daughter with her overall health. She’s very patient and explains everything to the child in a manner that they can understand at their level. Her immunity, strength and growth really improved under Smitha's guidance. She was easily available via online appointments and was very accessible for any queries.",
  },
];

const VISIBLE_CARDS = 3;

const TextTestimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDirection(1);
      setStartIndex((prev) => (prev + 1) % textTestimonials.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [startIndex]);

  const visibleTestimonials = useMemo(() => {
    return Array.from({ length: Math.min(VISIBLE_CARDS, textTestimonials.length) }, (_, index) => {
      return textTestimonials[(startIndex + index) % textTestimonials.length];
    });
  }, [startIndex]);

  const goNext = () => {
    setDirection(1);
    setStartIndex((prev) => (prev + 1) % textTestimonials.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setStartIndex((prev) => (prev - 1 + textTestimonials.length) % textTestimonials.length);
  };

  return (
    <section className="py-20 bg-secondary/35 border-t border-b border-border/20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="mb-12 flex flex-col items-center gap-4 text-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-primary mb-3">
                Client Testimonials
              </p>
              <h2 className="section-title mb-4">Words That Stay With Us</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Honest experiences from clients and families who found support, clarity, and sustainable progress through personalized nutrition guidance.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={startIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 70 : -70 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -70 : 70 }}
              transition={{ duration: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
              className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            >
              {visibleTestimonials.map((testimonial, index) => (
                <motion.article
                  key={`${testimonial.name}-${startIndex}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.35 }}
                  whileHover={{ y: -6, rotate: index % 2 === 0 ? -0.5 : 0.5 }}
                  className={`relative h-full rounded-[1.75rem] border border-border bg-card p-7 shadow-sm ${
                    index === 2 ? 'md:hidden xl:block' : ''
                  }`}
                >
                  <div className="mb-5 text-5xl leading-none text-gold font-serif">“</div>
                  <p className="text-[14px] leading-7 text-foreground/80 font-body text-left">{testimonial.text}</p>
                  <div className="mt-6 h-px w-16 bg-gold/50" />
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-primary text-left">
                    {testimonial.name}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <motion.button
              type="button"
              onClick={goPrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-background text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous text testimonials"
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>

            <div className="flex items-center gap-2">
              {textTestimonials.map((_, index) => (
                <span
                  key={index}
                  className={`h-2.5 rounded-full transition-all ${
                    index === startIndex ? "w-6 bg-primary" : "w-2.5 bg-gold/30"
                  }`}
                />
              ))}
            </div>

            <motion.button
              type="button"
              onClick={goNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-background text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next text testimonials"
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextTestimonials;
