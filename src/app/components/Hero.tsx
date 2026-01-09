import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBlcXVpcG1lbnQlMjBkYXJrfGVufDB8fHx8MTczNjc4MTg0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="FitLab Training Floor"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto"
        >
          {/* Headline - Commanding */}
          <div className="mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span 
                className="inline-block px-4 py-2 border"
                style={{ 
                  borderColor: "rgba(138, 138, 122, 0.3)",
                  fontSize: "0.8125rem",
                  letterSpacing: "0.12em",
                  color: "#8A8A7A",
                  fontWeight: 600
                }}
              >
                MEN'S PERFORMANCE GYM
              </span>
            </motion.div>
            
            <h1 
              className="text-6xl md:text-8xl lg:text-9xl mb-8 tracking-tight leading-[0.9]"
              style={{ 
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.02em",
                color: "#E8E8E8"
              }}
            >
              TRAIN WITH<br />
              PURPOSE
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-lg max-w-xl leading-relaxed"
              style={{ 
                fontWeight: 400,
                color: "#9A9A9A",
                lineHeight: "1.7"
              }}
            >
              A fighter's lab in Fujairah. Strength training, combat conditioning, 
              and performance coaching for men who take their training seriously.
            </motion.p>
          </div>

          {/* CTAs - Direct & Strong */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-20 md:mb-24"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 rounded-sm transition-all duration-200 hover:translate-y-[-2px]"
              onClick={() => window.open('https://wa.me/971501234567', '_blank')}
              style={{ 
                fontWeight: 700, 
                letterSpacing: "0.08em",
                fontSize: "0.875rem"
              }}
            >
              BOOK A VISIT
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-accent/40 text-foreground hover:bg-accent/10 hover:border-accent px-10 py-7 rounded-sm transition-all duration-200"
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ 
                fontWeight: 700, 
                letterSpacing: "0.08em",
                fontSize: "0.875rem"
              }}
            >
              VIEW PROGRAMS
            </Button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 md:gap-12 pt-8 border-t"
            style={{ borderColor: "rgba(138, 138, 122, 0.2)" }}
          >
            <div>
              <p 
                className="mb-2 tracking-widest"
                style={{ 
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "2rem",
                  color: "#4A5240",
                  letterSpacing: "0.05em"
                }}
              >
                6 DAYS
              </p>
              <p className="text-xs tracking-wider" style={{ color: "#8A8A7A", fontWeight: 600 }}>
                WEEKLY
              </p>
            </div>
            
            <div>
              <p 
                className="mb-2 tracking-widest"
                style={{ 
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "2rem",
                  color: "#4A5240",
                  letterSpacing: "0.05em"
                }}
              >
                PRO
              </p>
              <p className="text-xs tracking-wider" style={{ color: "#8A8A7A", fontWeight: 600 }}>
                COACHING
              </p>
            </div>
            
            <div>
              <p 
                className="mb-2 tracking-widest"
                style={{ 
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "2rem",
                  color: "#4A5240",
                  letterSpacing: "0.05em"
                }}
              >
                NO BS
              </p>
              <p className="text-xs tracking-wider" style={{ color: "#8A8A7A", fontWeight: 600 }}>
                RESULTS
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle vignette */}
      <div className="absolute inset-0 pointer-events-none" 
        style={{ 
          background: "radial-gradient(circle at center, transparent 0%, rgba(15, 15, 15, 0.6) 100%)" 
        }}
      />
    </section>
  );
}
