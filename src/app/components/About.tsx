import { motion } from "motion/react";
import { Target, Zap, Shield, Users } from "lucide-react";

export function About() {
  const pillars = [
    {
      icon: Target,
      title: "Discipline",
      description: "Consistency beats motivation. Show up, do the work, get results."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Training designed for real strength, speed, and combat readiness."
    },
    {
      icon: Shield,
      title: "Structure",
      description: "Professional coaching, proven methods, no guesswork."
    },
    {
      icon: Users,
      title: "Brotherhood",
      description: "Men who push each other to be stronger, not for show."
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto mb-20 md:mb-24"
        >
          <span 
            className="inline-block px-3 py-1 mb-6 border"
            style={{ 
              borderColor: "rgba(138, 138, 122, 0.3)",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              color: "#8A8A7A",
              fontWeight: 600
            }}
          >
            WHAT WE STAND FOR
          </span>
          
          <h2 
            className="text-5xl md:text-7xl mb-8 tracking-tight leading-[0.95]"
            style={{ 
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.02em"
            }}
          >
            A FIGHTER'S<br />LABORATORY
          </h2>
          
          <div className="w-20 h-0.5 mb-8" style={{ backgroundColor: "#4A5240" }} />
          
          <p 
            className="text-base md:text-lg leading-relaxed max-w-2xl"
            style={{ 
              fontWeight: 400,
              color: "#9A9A9A",
              lineHeight: "1.8"
            }}
          >
            FitLab isn't a bodybuilding gym. We don't do selfies or ego lifting. 
            This is a place for men who train with purpose — fighters, athletes, 
            and anyone serious about building real strength and performance.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group"
            >
              <div 
                className="bg-secondary p-8 border transition-all duration-300 hover:border-primary/50 h-full"
                style={{ borderColor: "rgba(138, 138, 122, 0.15)" }}
              >
                <div 
                  className="w-12 h-12 flex items-center justify-center mb-6 border transition-all duration-300 group-hover:border-primary"
                  style={{ borderColor: "rgba(138, 138, 122, 0.3)" }}
                >
                  <pillar.icon className="w-6 h-6" style={{ color: "#8A8A7A" }} />
                </div>
                
                <h3 
                  className="mb-3 tracking-tight"
                  style={{ 
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.5rem",
                    letterSpacing: "0.05em",
                    color: "#E8E8E8"
                  }}
                >
                  {pillar.title}
                </h3>
                
                <p 
                  className="leading-relaxed"
                  style={{ 
                    fontSize: "0.875rem",
                    color: "#9A9A9A",
                    lineHeight: "1.6"
                  }}
                >
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
