import {
  ArrowRight,
  Sparkles,
  ShieldAlert,
  Scale,
  UserRound,
  Newspaper,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { useState, useEffect, useMemo, useRef } from "react";

import article1 from "@/assets/article1.png";
import article2 from "@/assets/article2.png";
import article3 from "@/assets/article3.png";
import article4 from "@/assets/article4.png";
import article5 from "@/assets/article5.png";
import article6 from "@/assets/article6.png";
import article7 from "@/assets/article7.png";
import article8 from "@/assets/article8.png";
import article9 from "@/assets/article9.png";
import article10 from "@/assets/article10.png";

// ⭐ ONLY ADDITION
import blind_video from "@/assets/blind_video.mp4";

const expertiseAreas = [
  {
    icon: Sparkles,
    title: "PCOS & Hormonal Balance",
    description: "Balance hormones, improve cycles & support fertility naturally.",
    link: "/services#expertise",
  },
  {
    icon: ShieldAlert,
    title: "Gut Health & Digestion",
    description: "Heal your gut, reduce bloating & improve overall digestion.",
    link: "/services#expertise",
  },
  {
    icon: Scale,
    title: "Weight Management",
    description: "Achieve your ideal weight with sustainable & realistic nutrition.",
    link: "/services#expertise",
  },
  {
    icon: UserRound,
    title: "Skin, Hair & Lifestyle",
    description: "Nourish your skin & hair with the right food and lifestyle.",
    link: "/services#expertise",
  },
];

const articles = [
  { image: article1, text: "Article in leading Malayalam Newspaper, Rashtradeepika (All-Kerala edition) - 4 part series on Ramadan fasting nutrition: practical guidelines for Suhoor and Iftar: practical guidelines for Suhoor and Iftar." },
  { image: article2, text: "Article in leading Malayalam Newspaper, Rashtradeepika (All-Kerala edition) - 4 part series on Ramadan fasting nutrition: practical guidelines for Suhoor and Iftar: practical guidelines for Suhoor and Iftar." },

  // ⭐ ONLY ADD VIDEO CARD (NO TEXT CHANGES ANYWHERE ELSE)
  {
    video: blind_video,
    text:
      "Nutrition Awareness Session with the amazing kids at Aluva Blind School during their All Kerala Blind Kids Cricket Coaching Camp.",
  },

  { image: article3, text: "Article in leading Malayalam Newspaper, Rashtradeepika (All-Kerala edition) - 4 part series on Ramadan fasting nutrition: practical guidelines for Suhoor and Iftar: practical guidelines for Suhoor and Iftar." },
  { image: article4, text: "Article in leading Malayalam Newspaper, Rashtradeepika (All-Kerala edition) - 4 part series on Ramadan fasting nutrition: practical guidelines for Suhoor and Iftar: practical guidelines for Suhoor and Iftar." },
  { image: article5, text: "Article in Arogyam Malayalam Magazine on Stress and Nutrition." },
  { image: article6, text: "Article in Arogyam Malayalam Magazine on Stress and Nutrition." },
  { image: article7, text: "Article in Arogyam Malayalam Magazine on Stress and Nutrition." },
  { image: article8, text: "Article in Arogyam Malayalam Magazine on Stress and Nutrition." },
  { image: article9, text: "Article published in Saalam Bahrain, a popular Magazine of Bahrain." },
  { image: article10, text: "Article published in Saalam Bahrain, a popular Magazine of Bahrain." },
];

const ServicesPreview = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  // ⭐ PAUSE/RESUME CAROUSEL BASED ON VIDEO STATE
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    if (isVideoPlaying) return;

    const timer = window.setInterval(() => {
      setDirection(1);
      setStartIndex((prev) => (prev + 1) % articles.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [isVideoPlaying]);

  // const VISIBLE_ARTICLES = 3;
  const [visibleCount, setVisibleCount] = useState(3);

useEffect(() => {
  const updateCount = () => {
    if (window.innerWidth < 768) {
      setVisibleCount(1);
    } else if (window.innerWidth < 1280) {
      setVisibleCount(2);
    } else {
      setVisibleCount(3);
    }
  };

  updateCount();
  window.addEventListener("resize", updateCount);

  return () => window.removeEventListener("resize", updateCount);
}, []);

  // const visibleArticles = useMemo(() => {
  //   return Array.from(
  //     { length: Math.min(VISIBLE_ARTICLES, articles.length) },
  //     (_, index) => articles[(startIndex + index) % articles.length]
  //   );
  // }, [startIndex]);

  const visibleArticles = useMemo(() => {
  return Array.from(
    { length: Math.min(visibleCount, articles.length) },
    (_, index) => articles[(startIndex + index) % articles.length]
  );
}, [startIndex, visibleCount]);

  const goNext = () => {
    setDirection(1);
    setStartIndex((prev) => (prev + 1) % articles.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setStartIndex((prev) => (prev - 1 + articles.length) % articles.length);
  };

  // ⭐ VIDEO RESET ON SLIDE CHANGE
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsVideoPlaying(false);
    }
  }, [startIndex]);

  // ⭐ PAUSE VIDEO ON UNMOUNT
  useEffect(() => {
    return () => {
      videoRef.current?.pause();
    };
  }, []);

  // ⭐ PAUSE VIDEO WHEN SCROLL OUT OF VIEW
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          videoRef.current?.pause();
          setIsVideoPlaying(false);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-section-alt">
      <div className="container mx-auto px-4">

        {/* ===== EVERYTHING BELOW UNTOUCHED ===== */}

        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-body font-bold uppercase tracking-[0.25em] text-gold mb-3 block">
            How I Can Help You
          </span>

          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Areas of Expertise
          </h2>

          <div className="flex justify-center items-center gap-2 mt-4">
            <span className="h-[1px] w-8 bg-gold"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
            <span className="h-[1px] w-8 bg-gold"></span>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {expertiseAreas.map((area, i) => (
            <AnimatedSection key={area.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-card rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg border border-border/40 text-left flex flex-col h-full transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-secondary/60 flex items-center justify-center text-primary mb-6 flex-shrink-0">
                  <area.icon className="w-6 h-6 stroke-[1.5]" />
                </div>

                <h3 className="font-heading font-bold text-foreground text-lg mb-3 leading-snug">
                  {area.title}
                </h3>

                <p className="font-body text-xs leading-relaxed text-muted-foreground mb-8 flex-grow">
                  {area.description}
                </p>

                <Link
                  to={area.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:text-gold transition-colors mt-auto group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* PUBLICATIONS */}
        <AnimatedSection className="mt-16">
          <div className="text-center mb-12">
            <span className="text-xs font-body font-bold uppercase tracking-[0.25em] text-gold mb-3 block">
              Publications
            </span>

            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Featured Articles & Newspaper Features
            </h3>

            <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
              A collection of published nutrition write-ups and magazine features focused on practical wellness, fasting, stress, and healthy living.
            </p>
          </div>

          <div className="relative">

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={startIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 70 : -70 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -70 : 70 }}
                transition={{ duration: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
                // className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {visibleArticles.map((article, index) => (
                  <motion.article
                    key={`${startIndex}-${index}`}
                    className="group overflow-hidden rounded-2xl border border-border/40 bg-card shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="overflow-hidden flex-shrink-0 bg-secondary/20 flex items-center justify-center p-4">

                      {"video" in article ? (
                        <video
                          ref={videoRef}
                          src={article.video}
                          className="max-h-96 w-full object-cover"
                          controls
                          onPlay={() => setIsVideoPlaying(true)}
                          onPause={() => setIsVideoPlaying(false)}
                        />
                      ) : (
                        <img
                          src={article.image}
                          className="max-h-96 w-full object-contain"
                        />
                      )}

                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-gold mb-3">
                        <Newspaper className="w-4 h-4" />
                        <span className="text-[10px] uppercase tracking-[0.25em] font-semibold">
                          Published
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {article.text}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center justify-center gap-4">
              <button onClick={goPrev}>
                <ChevronLeft />
              </button>

              {/* <div className="flex items-center gap-2"> */}
              <div className="hidden md:flex items-center gap-2">
                {articles.map((_, index) => (
                  <span
                    key={index}
                    className={`h-2.5 rounded-full transition-all ${
                      index === startIndex
                        ? "w-6 bg-primary"
                        : "w-2.5 bg-gold/30"
                    }`}
                  />
                ))}
              </div>

              <button onClick={goNext}>
                <ChevronRight />
              </button>
            </div>

           <div className="w-full flex justify-center mt-20">
             <Link
               to="/services"
               className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold hover:underline transition-colors"
             >
               <span>View All Programs & Consultation Processes</span>
               <ArrowRight className="w-4 h-4" />
             </Link>
           </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default ServicesPreview;