import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesBar from "@/components/FeaturesBar";
import AboutPreview from "@/components/AboutPreview";
import ServicesPreview from "@/components/ServicesPreview";
import VideoTestimonials from "@/components/VideoTestimonials";
import Testimonials from "@/components/Testimonials";
import TextTestimonials from "@/components/TextTestimonials";
import ConsultationSection from "@/components/ConsultationSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navbar />
      <Hero />
      <FeaturesBar />
      <AboutPreview />
      <ServicesPreview />
      
      {/* Testimonials and Social Proof */}
      
      <Testimonials />
      
      
      {/* CTA and FAQ */}
      <ConsultationSection />
      <FAQ />
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
