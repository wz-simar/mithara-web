import { PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

type VideoTestimonial = {
  id: string;
  name: string;
  designation: string;
  place: string;
};

const videoTestimonials: VideoTestimonial[] = [
  { id: "p0STfrUDEZE", name: "Shantanu Maheshwari", designation: "Dancer, Actor", place: "Mumbai" },
  { id: "_XYjoHA5v50", name: "Shruti Sinha", designation: "Dancer, Actor", place: "Mumbai" },
  { id: "ihTY6nlxuY0", name: "Sagnik Roy", designation: "Student", place: "Kolkata" },
];

const VideoTestimonials = () => {

  return (
    <section className="py-20 bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--secondary)/0.45)_100%)] overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/70 mb-3">
              Real Experiences
            </p>
            <h2 className="section-title mb-4">Listen What Our Clients Say</h2>
            <p className="text-muted-foreground font-body text-base md:text-lg">
              A quick look into real journeys, real routines, and the confidence our clients built with guided nutrition care.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="relative rounded-[2rem] border border-primary/10 bg-white/70 backdrop-blur-sm shadow-[0_25px_80px_-35px_hsl(var(--primary)/0.3)] p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-3">
              {videoTestimonials.map((video, index) => (
                <motion.article
                  key={video.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group"
                >
                  <div className="rounded-[1.75rem] overflow-hidden bg-[#1f1a17] shadow-xl ring-1 ring-black/5">
                    <div className="relative mx-auto aspect-[9/16] max-h-[440px] w-full max-w-[248px] bg-black md:max-h-[420px]">
                      <iframe
                        className="h-full w-full"
                        src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0`}
                        title={video.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                      <div className="pointer-events-none absolute right-4 bottom-4 rounded-full bg-black/55 p-2 text-white backdrop-blur-sm">
                        <PlayCircle className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="bg-[#fffaf6] px-5 py-5">
                      <h3 className="font-heading text-xl font-bold text-foreground">{video.name}</h3>
                      <p className="text-sm font-medium text-primary/80 mt-1">{video.designation}</p>
                      <p className="text-xs text-muted-foreground mt-1">{video.place}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VideoTestimonials;
