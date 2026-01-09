import { motion } from "motion/react";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

export function Schedule() {
  const schedule = [
    { 
      day: "SAT", 
      classes: [
        { time: "06:00", name: "Strength" },
        { time: "17:00", name: "Fighter Conditioning" },
        { time: "19:00", name: "Group Circuit" }
      ] 
    },
    { 
      day: "SUN", 
      classes: [
        { time: "06:00", name: "Athletic Performance" },
        { time: "17:00", name: "Strength" },
        { time: "19:00", name: "Fighter Conditioning" }
      ] 
    },
    { 
      day: "MON", 
      classes: [
        { time: "06:00", name: "Fighter Conditioning" },
        { time: "17:00", name: "Group Circuit" },
        { time: "19:00", name: "Strength" }
      ] 
    },
    { 
      day: "TUE", 
      classes: [
        { time: "06:00", name: "Strength" },
        { time: "17:00", name: "Athletic Performance" },
        { time: "19:00", name: "Group Circuit" }
      ] 
    },
    { 
      day: "WED", 
      classes: [
        { time: "06:00", name: "Group Circuit" },
        { time: "17:00", name: "Fighter Conditioning" },
        { time: "19:00", name: "Strength" }
      ] 
    },
    { 
      day: "THU", 
      classes: [
        { time: "06:00", name: "Athletic Performance" },
        { time: "17:00", name: "Strength" },
        { time: "19:00", name: "Fighter Conditioning" }
      ] 
    }
  ];

  return (
    <section id="schedule" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto mb-16 md:mb-20"
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
            CLASS SCHEDULE
          </span>
          
          <h2 
            className="text-5xl md:text-7xl mb-8 tracking-tight leading-[0.95]"
            style={{ 
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.02em"
            }}
          >
            WHEN WE<br />TRAIN
          </h2>
          
          <div className="w-20 h-0.5 mb-8" style={{ backgroundColor: "#4A5240" }} />
          
          <p 
            className="text-base md:text-lg mb-10 leading-relaxed"
            style={{ 
              fontWeight: 400,
              color: "#9A9A9A",
              lineHeight: "1.7"
            }}
          >
            Six days a week. Morning and evening sessions. Book your spot via WhatsApp.
          </p>
          
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 rounded-sm transition-all duration-200"
            onClick={() => window.open('https://wa.me/971501234567', '_blank')}
            style={{ 
              fontWeight: 700, 
              letterSpacing: "0.08em",
              fontSize: "0.875rem"
            }}
          >
            <MessageCircle className="w-5 h-5 mr-3" />
            BOOK NOW
          </Button>
        </motion.div>

        {/* Schedule Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {schedule.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <div 
                  className="bg-background p-6 border transition-all duration-300 hover:border-primary/50 h-full"
                  style={{ borderColor: "rgba(138, 138, 122, 0.15)" }}
                >
                  <h4 
                    className="mb-6 pb-3 border-b tracking-tight"
                    style={{ 
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "1.5rem",
                      color: "#4A5240",
                      letterSpacing: "0.08em",
                      borderColor: "rgba(138, 138, 122, 0.2)"
                    }}
                  >
                    {day.day}
                  </h4>
                  
                  <ul className="space-y-4">
                    {day.classes.map((classItem) => (
                      <li 
                        key={`${day.day}-${classItem.time}`}
                        className="pb-3 border-b last:border-0"
                        style={{ 
                          borderColor: "rgba(138, 138, 122, 0.1)"
                        }}
                      >
                        <p 
                          className="mb-1"
                          style={{ 
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: "0.875rem",
                            color: "#8A8A7A",
                            letterSpacing: "0.05em"
                          }}
                        >
                          {classItem.time}
                        </p>
                        <p 
                          style={{ 
                            fontSize: "0.8125rem",
                            color: "#9A9A9A",
                            fontWeight: 500
                          }}
                        >
                          {classItem.name}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 md:mt-16 p-6 md:p-8 bg-secondary border text-center"
            style={{ borderColor: "rgba(138, 138, 122, 0.2)" }}
          >
            <p 
              style={{ 
                fontSize: "0.8125rem",
                color: "#8A8A7A",
                letterSpacing: "0.05em",
                fontWeight: 600
              }}
            >
              SATURDAY – THURSDAY / OPEN 6AM – 9PM
              <span className="mx-4" style={{ color: "#4A5240" }}>•</span>
              FRIDAY CLOSED
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
