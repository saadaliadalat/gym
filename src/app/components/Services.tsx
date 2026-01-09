import { motion } from "motion/react";
import { Dumbbell, Activity, Users, Zap } from "lucide-react";
import { Button } from "./ui/button";

export function Services() {
  const programs = [
    {
      icon: Dumbbell,
      title: "Strength Training",
      description: "Barbell work, powerlifting fundamentals, and progressive overload. Build real strength.",
      focus: ["Compound movements", "Progressive programming", "Form coaching"]
    },
    {
      icon: Activity,
      title: "Fighter Conditioning",
      description: "Combat-specific conditioning for striking, grappling, and fight endurance.",
      focus: ["Fight cardio", "Explosive power", "Recovery protocols"]
    },
    {
      icon: Users,
      title: "Group Training",
      description: "High-intensity circuits and functional work. Push with your brothers.",
      focus: ["Circuit training", "Functional strength", "Team accountability"]
    },
    {
      icon: Zap,
      title: "Athletic Performance",
      description: "Speed, agility, and sport-specific training for competitive athletes.",
      focus: ["Speed work", "Plyometrics", "Movement quality"]
    }
  ];

  return (
    <section id="programs" className="py-24 md:py-32 bg-background">
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
            TRAINING PROGRAMS
          </span>
          
          <h2 
            className="text-5xl md:text-7xl mb-8 tracking-tight leading-[0.95]"
            style={{ 
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.02em"
            }}
          >
            HOW WE<br />TRAIN
          </h2>
          
          <div className="w-20 h-0.5 mb-8" style={{ backgroundColor: "#4A5240" }} />
          
          <p 
            className="text-base md:text-lg leading-relaxed"
            style={{ 
              fontWeight: 400,
              color: "#9A9A9A"
            }}
          >
            Professional coaching. Proven methods. Real results.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
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
                className="bg-card p-8 md:p-10 border transition-all duration-300 hover:border-primary/50 h-full flex flex-col"
                style={{ borderColor: "rgba(138, 138, 122, 0.15)" }}
              >
                <div 
                  className="w-14 h-14 flex items-center justify-center mb-6 border transition-all duration-300 group-hover:border-primary"
                  style={{ borderColor: "rgba(138, 138, 122, 0.3)" }}
                >
                  <program.icon className="w-7 h-7" style={{ color: "#8A8A7A" }} />
                </div>
                
                <h3 
                  className="mb-4 tracking-tight"
                  style={{ 
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.75rem",
                    letterSpacing: "0.05em",
                    color: "#E8E8E8"
                  }}
                >
                  {program.title}
                </h3>
                
                <p 
                  className="mb-6 leading-relaxed flex-grow"
                  style={{ 
                    fontSize: "0.9375rem",
                    color: "#9A9A9A",
                    lineHeight: "1.7"
                  }}
                >
                  {program.description}
                </p>
                
                <ul className="space-y-2 mb-8">
                  {program.focus.map((item) => (
                    <li 
                      key={item} 
                      className="flex items-center"
                      style={{ fontSize: "0.8125rem", color: "#8A8A7A" }}
                    >
                      <span 
                        className="w-1 h-1 mr-3 flex-shrink-0" 
                        style={{ backgroundColor: "#4A5240" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full border-2 border-accent/40 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 py-6"
                  onClick={() => window.open('https://wa.me/971501234567', '_blank')}
                  style={{ 
                    fontWeight: 700, 
                    letterSpacing: "0.08em",
                    fontSize: "0.8125rem"
                  }}
                >
                  START TRAINING
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
