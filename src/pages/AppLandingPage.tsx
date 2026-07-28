import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Apple, CheckCircle, Smartphone } from "lucide-react";
import logo from "@/assets/logo.png";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.wellnessz.mithahara&hl=en_IN";
const APP_STORE_URL = "https://apps.apple.com/app/mithahara/id6769747043";

const IOS_REGEX = /iPhone|iPad|iPod/i;
const ANDROID_REGEX = /Android/i;

const highlights = [
  "Personalized nutrition plans with your coach",
  "Track meals, habits, and progress in one place",
  "Stay connected with Mithahara in real time",
  "Evidence-based guidance for lasting results",
];

const screens = [
  { src: "/app-screen-diet.jpg", alt: "Diet plan screen" },
  { src: "/app-screen-progress.jpg", alt: "Progress tracking screen" },
  { src: "/app-screen-habits.jpg", alt: "Habits screen" },
];

function redirectToStoreIfMobile() {
  const userAgent = navigator.userAgent || "";
  if (IOS_REGEX.test(userAgent)) {
    window.location.replace(APP_STORE_URL);
    return true;
  }
  if (ANDROID_REGEX.test(userAgent)) {
    window.location.replace(PLAY_STORE_URL);
    return true;
  }
  return false;
}

const AppLandingPage = () => {
  useEffect(() => {
    redirectToStoreIfMobile();
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-primary text-primary-foreground">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/app_bg.png')" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-[hsl(101_20%_22%)]" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-gold/10 blur-3xl" aria-hidden />

      <div className="relative z-10 container mx-auto px-4 py-10 md:py-16">
        <div className="mb-10 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Mithahara logo"
              className="h-11 w-11 rounded-full object-contain bg-white/10 p-1 border border-white/15 group-hover:scale-105 transition-transform"
            />
            <div>
              <p className="font-heading text-2xl font-bold leading-none">Mithahara</p>
              <p className="font-body text-[10px] uppercase tracking-[0.22em] text-gold mt-1">
                Nutrition & Wellness
              </p>
            </div>
          </Link>
          <Link
            to="/"
            className="hidden sm:inline-flex text-xs font-body font-semibold uppercase tracking-widest text-primary-foreground/80 hover:text-gold transition-colors"
          >
            Back to website
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 text-xs font-body font-bold uppercase tracking-[0.25em] text-gold mb-4">
              <Smartphone className="w-3.5 h-3.5" />
              Get the Mithahara App
            </span>

            <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-5">
              Your health journey, guided by Smitha Menon
            </h1>

            <p className="font-body text-base md:text-lg text-primary-foreground/85 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Download the Mithahara app for personalized nutrition plans, progress
              tracking, and real-time support from your coach — all in one place.
            </p>

            <ul className="space-y-3 mb-10 text-left max-w-md mx-auto lg:mx-0">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-sm text-primary-foreground/90">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-background text-foreground rounded-xl px-5 py-3.5 hover:bg-white transition-colors shadow-lg min-w-[200px]"
              >
                <img src="/playstore.png" alt="" className="h-8 w-auto" />
                <span className="text-left">
                  <span className="block text-[10px] uppercase tracking-wider opacity-70">Get it on</span>
                  <span className="block font-heading font-bold text-sm leading-none">Google Play</span>
                </span>
              </a>

              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-background text-foreground rounded-xl px-5 py-3.5 hover:bg-white transition-colors shadow-lg min-w-[200px]"
              >
                <Apple className="h-7 w-7" />
                <span className="text-left">
                  <span className="block text-[10px] uppercase tracking-wider opacity-70">Download on the</span>
                  <span className="block font-heading font-bold text-sm leading-none">App Store</span>
                </span>
              </a>
            </div>

            <p className="mt-6 font-body text-xs text-primary-foreground/60">
              Mobile visitors are redirected to the store automatically. Prefer the website?{" "}
              <Link to="/" className="text-gold hover:underline">
                Continue browsing
              </Link>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-8 rounded-[2.5rem] bg-gold/25 blur-2xl" aria-hidden />
              <div className="relative grid grid-cols-3 gap-3 items-end">
                {screens.map((screen, index) => (
                  <div
                    key={screen.src}
                    className={`rounded-[1.4rem] overflow-hidden border-2 border-white/20 shadow-2xl bg-black/20 ${
                      index === 1 ? "mb-8" : index === 0 ? "mb-2" : "mb-4"
                    }`}
                  >
                    <img
                      src={screen.src}
                      alt={screen.alt}
                      className="w-full h-auto object-cover aspect-[9/16]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppLandingPage;
