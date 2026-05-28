import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FaRegCircleCheck, FaXmark } from "react-icons/fa6";
import { RefreshCcw } from "lucide-react";
import { Link } from "react-router-dom";

const DEFAULT_WELLNESSZ_API_URL = "http://localhost:3000/api";

const API_BASE_URL =
  import.meta.env.VITE_APP_BASE_URL ||
  import.meta.env.VITE_WELLNESSZ_CORE_API_URL ||
  "";

const WELLNESSZ_API_URL =
  import.meta.env.VITE_WELLNESSZ_APP_API_URL ||
  import.meta.env.VITE_APP_BACKEND_URL ||
  import.meta.env.VITE_WELLNESSZ_API_URL ||
  DEFAULT_WELLNESSZ_API_URL;

const FRONTEND_CLIENT =
  import.meta.env.VITE_WELLNESSZ_FRONTEND_CLIENT ||
  import.meta.env.VITE_APP_FRONTEND_CLIENT ||
  "";

const COACH_ID =
  import.meta.env.VITE_WELLNESSZ_COACH_ID ||
  import.meta.env.VITE_APP_COACH_ID ||
  "";

function generateCaptcha(length = 6) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

// Sub-Component: Modal Wrapper
function Modal({ onClose, className, children }: { onClose?: () => void; className?: string; children: React.ReactNode }) {
  function handleClickOutside(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  }

  useEffect(function () {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div
      onClick={handleClickOutside}
      className={`fixed h-screen w-screen bg-[#0000008D] z-[1000] top-0 left-0 flex items-center justify-center ${className || ""}`}
    >
      {children}
    </div>
  );
}

// Sub-Component: Form Control Input
function FormControl({ title, className, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { title: string }) {
  return (
    <label className={`text-[14px] block my-4 ${className || ""}`}>
      <span className="cursor-pointer font-bold text-zinc-600">{title}</span>
      <input
        type={props.type || "text"}
        className="input ring-[1px] ring-zinc-200 shadow-md shadow-zinc-200 w-full mt-2 px-4 py-[10px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
        {...props}
      />
    </label>
  );
}

// Sub-Component: Thank You Screen
function ThankYouMessage({ onClose }: { onClose: () => void }) {
  return (
    <Modal onClose={onClose} className="p-4">
      <div className="max-w-[500px] w-full bg-white p-6 md:p-10 rounded-xl relative text-black shadow-xl">
        <FaXmark onClick={onClose} className="absolute top-4 right-4 cursor-pointer text-2xl text-gray-400 hover:text-gray-700 transition-colors" />
        <h2 className="text-center text-[28px] font-bold mt-4">Thank You For Registering</h2>
        <FaRegCircleCheck className="text-green-600 w-[64px] h-[64px] mt-8 mx-auto" />
        <div className="mt-8 mb-4 flex items-center justify-center">
          <p className="text-gray-500 font-medium">We will reach out to you soon.</p>
        </div>
      </div>
    </Modal>
  );
}

// Main Component
export default function LetsKnowYouBetterForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captcha, setCaptcha] = useState(() => generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");

  function reloadCaptcha(showError = false) {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");

    if (showError) {
      toast.error("Incorrect captcha. Please try again.");
    }
  }

  async function createCustomer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const name = String(formData.get("name") || "").trim();
      const phoneNumber = String(formData.get("phoneNumber") || "").replace(/\D/g, "");
      const email = String(formData.get("email") || "").trim();
      const goal = String(formData.get("goal") || "").trim();

      const data = {
        name,
        phoneNumber,
        email,
        goal,
        frontEndClient: FRONTEND_CLIENT,
      };

      if (!data.name || !data.phoneNumber || !data.email) {
        throw new Error("Please Enter Name, Email, Phone Number");
      }

      if (data.phoneNumber.length !== 10) {
        throw new Error("Phone Number should be 10 digits in length!");
      }

      if (captchaInput.trim().toUpperCase() !== captcha) {
        reloadCaptcha(true);
        throw new Error("Incorrect captcha");
      }

      if (!COACH_ID) {
        throw new Error("Missing WellnessZ coach mapping. Please set VITE_WELLNESSZ_COACH_ID.");
      }

      const shouldSyncWithCoreApi = Boolean(API_BASE_URL && data.frontEndClient);

      // 1. Submit to WellnessZ client creation API
      const wellnesszResponse = await fetch(`${WELLNESSZ_API_URL}/app/request-client`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          mobileNumber: data.phoneNumber,
          countryCode: "+91",
          email: data.email,
          dob: "2000-01-01",
          coachID: COACH_ID,
          diab: false,
        }),
        cache: "no-store",
      }).then(async (res) => {
        const json = await res.json().catch(() => null);

        if (!res.ok) {
          throw new Error(json?.message || json?.data?.message || "Unable to create client in WellnessZ.");
        }

        return json;
      });

      // 2. Optionally mirror the lead to the older registration endpoint if configured
      if (shouldSyncWithCoreApi) {
        fetch(`${API_BASE_URL}/user/register-user`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          cache: "no-store",
        }).catch((err) => {
          console.error("Fetch implementation API err:", err);
        });
      }

      console.log("WellnessZ request-client response:", wellnesszResponse);

      if (wellnesszResponse) {
        setFormSubmitted(true);
        form.reset();
        reloadCaptcha(false);
        toast.success(wellnesszResponse?.message || wellnesszResponse?.data?.message || "Client created successfully!");
      } else {
        toast.error("Please try again Later!");
      }
    } catch (error: any) {
      const errorMsg = error.response?.data?.message || error.message || "An Error Occurred";
      toast.error(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  }

  const isCaptchaMatched = captchaInput.trim().toUpperCase() === captcha;

  return (
    <>
      <form
        id="register"
        onSubmit={createCustomer}
        className="w-full mx-auto relative text-black"
      >
        <div className="w-full bg-[#FAF8F8] mx-auto px-6 py-10 rounded-[24px] border-[1px] border-primary shadow-sm">
          <h2 className="text-[20px] md:text-[24px] font-bold text-primary">Let's Know You Better</h2>
          <div className="grid md:grid-cols-2 gap-x-6">
            <FormControl title="Name" placeholder="Enter Your Name" name="name" required />
            <FormControl title="Phone" placeholder="Enter Your Phone" name="phoneNumber" type="tel" inputMode="numeric" maxLength={10} required />
            <FormControl title="Email" placeholder="Enter Your Email" name="email" type="email" required />
            <FormControl title="What is your goal" placeholder="What is your goal" name="goal" />
          </div>

          <div className="mt-6 rounded-2xl border border-primary/15 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/70">Captcha Verification</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Enter the code exactly as shown below to enable form submission.
                </p>
              </div>
              <button
                type="button"
                onClick={() => reloadCaptcha(false)}
                className="inline-flex items-center gap-2 self-start rounded-full border border-primary/20 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <RefreshCcw className="h-4 w-4" />
                Reload Captcha
              </button>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-[180px_minmax(0,1fr)] md:items-end">
              <div className="flex h-14 items-center justify-center rounded-xl border border-dashed border-primary/35 bg-primary/5 px-4 font-mono text-2xl font-bold tracking-[0.35em] text-primary">
                {captcha}
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-zinc-600">Enter captcha</span>
                <input
                  type="text"
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value.toUpperCase())}
                  onBlur={() => {
                    if (captchaInput.trim() && !isCaptchaMatched) {
                      reloadCaptcha(true);
                    }
                  }}
                  maxLength={captcha.length}
                  className="input ring-[1px] ring-zinc-200 shadow-md shadow-zinc-200 w-full px-4 py-[10px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
                  placeholder="Type captcha here"
                  required
                />
              </label>
            </div>

            <p className={`mt-3 text-sm ${isCaptchaMatched ? "text-green-600" : "text-muted-foreground"}`}>
              {isCaptchaMatched ? "Captcha matched. You can submit the form now." : "Submit stays disabled until the captcha matches."}
            </p>
          </div>

          <label className="flex items-center gap-3 mt-8 mb-4 cursor-pointer">
            <input 
              type="checkbox" 
              required
              name="terms"
              className="w-5 h-5 accent-primary cursor-pointer border-zinc-300 rounded focus:ring-primary"
            />
            <span className="text-sm md:text-base font-body text-zinc-600 select-none">
              I agree to all the{" "}
              <Link to="/terms" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-bold underline transition-colors">
                Terms and Conditions
              </Link>
            </span>
          </label>

          <button
            type="submit"
            disabled={isSubmitting || !isCaptchaMatched}
            className="bg-primary block text-primary-foreground font-bold px-8 py-3 w-fit mx-auto mt-8 rounded-[8px] hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
      {formSubmitted && <ThankYouMessage onClose={() => setFormSubmitted(false)} />}
    </>
  );
}
