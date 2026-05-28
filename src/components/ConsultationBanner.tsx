import { motion } from "framer-motion";
import AppointmentPopup from "@/components/AppointmentPopup";

const ConsultationBanner = () => {
  return (
    <section className="bg-primary py-6 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-primary-foreground text-xl md:text-2xl font-heading font-bold text-center md:text-left"
        >
          Get a Free 1-on-1 Consultation with the Dietitian!
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AppointmentPopup className="btn-appointment-outline whitespace-nowrap">
            Book Now
          </AppointmentPopup>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationBanner;
