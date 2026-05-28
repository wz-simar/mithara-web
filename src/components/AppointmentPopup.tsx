import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

interface AppointmentPopupProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const AppointmentPopup = ({ children, className, onClick }: AppointmentPopupProps) => {
  const [agreed, setAgreed] = useState(false);
  const appointmentLink = "https://app.wellnessz.in/public/book-appointment/69562a4202438fe6c61177db";

  return (
    <Dialog onOpenChange={(open) => { if (!open) setAgreed(false); }}>
      <DialogTrigger asChild>
        <button type="button" className={className} onClick={onClick}>
          {children}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md z-[1200]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading font-bold text-foreground">Almost there!</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-6 py-4">
          <p className="text-base text-muted-foreground font-body leading-relaxed">
            Before proceeding to book an appointment, please read and agree to our terms and conditions.
          </p>
          <div className="flex items-start space-x-3 bg-section-alt p-4 rounded-lg border border-primary/10">
            <Checkbox 
              id="terms" 
              checked={agreed} 
              onCheckedChange={(c) => setAgreed(c === true)} 
              className="mt-1"
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-relaxed cursor-pointer"
            >
              I agree to the <Link to="/terms" target="_blank" className="text-primary font-bold hover:underline">Terms and Conditions</Link>
            </label>
          </div>
          <a
            href={agreed ? appointmentLink : "#"}
            className={`mt-4 inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
              agreed
                ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg"
                : "bg-muted text-muted-foreground cursor-not-allowed opacity-70"
            }`}
            onClick={(e) => {
              if (!agreed) {
                e.preventDefault();
              }
            }}
          >
            Book Appointment
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentPopup;
