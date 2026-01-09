import { useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Schedule } from "./components/Schedule";
import { Gallery } from "./components/Gallery";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";
import { themeConfig } from "../config/theme.config";

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div
      className="min-h-screen antialiased"
      style={{ fontFamily: themeConfig.fonts.body }}
    >
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Testimonials />
      <Schedule />
      <Gallery />
      <Location />
      <Footer />
    </div>
  );
}