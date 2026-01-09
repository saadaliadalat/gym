import { motion } from "motion/react";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { Button } from "./ui/button";

export function Location() {
  return (
    <section id="location" className="py-24 md:py-32 bg-card">
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
            LOCATION
          </span>
          
          <h2 
            className="text-5xl md:text-7xl mb-8 tracking-tight leading-[0.95]"
            style={{ 
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.02em"
            }}
          >
            FIND US
          </h2>
          
          <div className="w-20 h-0.5 mb-8" style={{ backgroundColor: "#4A5240" }} />
          
          <p 
            className="text-base md:text-lg leading-relaxed"
            style={{ 
              fontWeight: 400,
              color: "#9A9A9A"
            }}
          >
            Fujairah Trade Center. Ground floor.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start space-x-5">
                <div 
                  className="w-12 h-12 flex items-center justify-center flex-shrink-0 border"
                  style={{ borderColor: "rgba(138, 138, 122, 0.3)" }}
                >
                  <MapPin className="w-5 h-5" style={{ color: "#8A8A7A" }} />
                </div>
                <div>
                  <h4 
                    className="mb-2"
                    style={{ 
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "1.25rem",
                      letterSpacing: "0.05em"
                    }}
                  >
                    ADDRESS
                  </h4>
                  <p 
                    className="leading-relaxed"
                    style={{ 
                      fontSize: "0.875rem",
                      color: "#9A9A9A",
                      lineHeight: "1.6"
                    }}
                  >
                    Fujairah Trade Center<br />
                    Ground Floor<br />
                    Fujairah, UAE
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div 
                  className="w-12 h-12 flex items-center justify-center flex-shrink-0 border"
                  style={{ borderColor: "rgba(138, 138, 122, 0.3)" }}
                >
                  <Clock className="w-5 h-5" style={{ color: "#8A8A7A" }} />
                </div>
                <div>
                  <h4 
                    className="mb-2"
                    style={{ 
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "1.25rem",
                      letterSpacing: "0.05em"
                    }}
                  >
                    HOURS
                  </h4>
                  <p 
                    className="leading-relaxed"
                    style={{ 
                      fontSize: "0.875rem",
                      color: "#9A9A9A",
                      lineHeight: "1.6"
                    }}
                  >
                    Sat – Thu: 6AM – 9PM<br />
                    Friday: Closed
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div 
                  className="w-12 h-12 flex items-center justify-center flex-shrink-0 border"
                  style={{ borderColor: "rgba(138, 138, 122, 0.3)" }}
                >
                  <Phone className="w-5 h-5" style={{ color: "#8A8A7A" }} />
                </div>
                <div>
                  <h4 
                    className="mb-2"
                    style={{ 
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "1.25rem",
                      letterSpacing: "0.05em"
                    }}
                  >
                    CONTACT
                  </h4>
                  <p 
                    style={{ 
                      fontSize: "0.875rem",
                      color: "#9A9A9A"
                    }}
                  >
                    +971 50 123 4567
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 rounded-sm transition-all duration-200"
                onClick={() => window.open('https://wa.me/971501234567', '_blank')}
                style={{ 
                  fontWeight: 700, 
                  letterSpacing: "0.08em",
                  fontSize: "0.875rem"
                }}
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                MESSAGE US
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-accent/40 text-foreground hover:bg-accent/10 hover:border-accent px-10 py-7 rounded-sm transition-all duration-200"
                onClick={() => window.open('tel:+971501234567', '_blank')}
                style={{ 
                  fontWeight: 700, 
                  letterSpacing: "0.08em",
                  fontSize: "0.875rem"
                }}
              >
                <Phone className="w-5 h-5 mr-3" />
                CALL NOW
              </Button>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 bg-background overflow-hidden border h-[450px] lg:h-full"
            style={{ borderColor: "rgba(138, 138, 122, 0.15)" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.738739!2d56.3408!3d25.1289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA3JzQ0LjAiTiA1NsKwMjAnMjcuMyJF!5e0!3m2!1sen!2sae!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) invert(90%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FitLab Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
