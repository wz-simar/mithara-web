import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { programsData, SubProgram } from "@/data/programs";
import { Link } from "react-router-dom";
import AppointmentPopup from "@/components/AppointmentPopup";

const ProgramDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedSubProgram, setSelectedSubProgram] = useState<SubProgram | null>(null);

  useEffect(() => {
    if (!selectedSubProgram) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedSubProgram]);

  if (!id) return <Navigate to="/services" replace />;
  const program = programsData.find((p) => p.id === id);

  if (!program) return <Navigate to="/NotFound" replace />;

  return (
    <div className="min-h-screen">
      <Header />
      <Navbar />
      <PageHero image={program.image} title={program.title} subtitle={program.shortDesc} />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <AnimatedSection>
            <h2 className="section-title mb-6">About the Program</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{program.description}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-section-alt">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="section-title">Our Distinct Care Plans</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Explore specialized sub-programs tailored to specific needs and goals under {program.title}.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {program.subPrograms.map((subProg, i) => (
              <AnimatedSection key={subProg.title} delay={i * 0.1}>
                <div className="bg-background rounded-2xl shadow-lg p-6 md:p-8 h-full flex flex-col hover:shadow-xl transition-shadow border border-primary/10">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-3">{subProg.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{subProg.servicePageDescription}</p>
                  
                  <div className="space-y-3 mb-8">
                    {subProg.bulletPoints.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-body text-muted-foreground">{point}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setSelectedSubProgram(subProg)}
                    className="btn-appointment inline-flex items-center justify-center gap-2 mt-auto w-full"
                  >
                    Know More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedSubProgram && (
          <motion.div
            className="fixed inset-0 z-[1100] bg-black/70 px-4 py-6 md:px-8 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedSubProgram(null);
              }
            }}
          >
            <div className="min-h-full flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 28, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="relative w-full max-w-4xl overflow-hidden rounded-[1.5rem] bg-background shadow-[0_40px_120px_-30px_rgba(0,0,0,0.5)]"
              >
                <button
                  type="button"
                  onClick={() => setSelectedSubProgram(null)}
                  className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/85 text-foreground backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Close program details"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="p-8 md:p-10 lg:p-12">
                    <div className="border-b border-primary/10 pb-6 pr-10">
                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-primary/70">{program.title}</p>
                      <h3 className="text-3xl md:text-4xl font-heading font-bold leading-tight text-foreground">{selectedSubProgram.title}</h3>
                    </div>

                    <div className="mt-8 space-y-4">
                      {selectedSubProgram.popUpPageDescription.map((paragraph, idx) => (
                        <p key={idx} className="text-base leading-7 text-muted-foreground">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="mt-8 rounded-[1.5rem] bg-section-alt border border-primary/10 p-6 md:p-8">
                      <h4 className="text-lg font-heading font-bold text-foreground mb-4">Who this is for:</h4>
                      <ul className="space-y-3">
                        {selectedSubProgram.whoThisIsFor.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></span>
                            <span className="text-base text-muted-foreground leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="rounded-[1.5rem] border border-primary/15 bg-primary/5 p-6 md:p-8">
                          <h4 className="text-lg font-heading font-bold text-foreground mb-4">What we do:</h4>
                          <ul className="space-y-3">
                            {selectedSubProgram.whatWeDo.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                                <span className="text-sm text-foreground/80 leading-relaxed">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="rounded-[1.5rem] border border-gold/30 bg-gold/10 p-6 md:p-8">
                          <h4 className="text-lg font-heading font-bold text-foreground mb-4">Outcome frame:</h4>
                          <ul className="space-y-3">
                            {selectedSubProgram.outcomeFrame.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                                <span className="text-sm text-foreground/80 leading-relaxed">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <AppointmentPopup
                        className="btn-appointment inline-flex items-center justify-center gap-2"
                      >
                        Book Consultation <ArrowRight className="w-4 h-4" />
                      </AppointmentPopup>
                      <button
                        type="button"
                        onClick={() => setSelectedSubProgram(null)}
                        className="inline-flex items-center justify-center rounded-full border border-primary/20 px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        Close
                      </button>
                    </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProgramDetails;
