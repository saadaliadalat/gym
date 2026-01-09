import { Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t py-16 md:py-20" style={{ borderColor: "rgba(138, 138, 122, 0.15)" }}>
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-12 md:mb-16">
            <div className="md:col-span-2">
              <h3 
                className="mb-5 tracking-tight"
                style={{ 
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "2rem",
                  letterSpacing: "0.05em",
                  color: "#E8E8E8"
                }}
              >
                FITLAB
              </h3>
              <p 
                className="leading-relaxed mb-6 max-w-md"
                style={{ 
                  fontSize: "0.875rem",
                  color: "#9A9A9A",
                  lineHeight: "1.7"
                }}
              >
                Men's performance gym in Fujairah. Strength training, 
                fighter conditioning, and serious results.
              </p>
              
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/fitlabfujairah" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border transition-all duration-200 hover:border-primary"
                  style={{ borderColor: "rgba(138, 138, 122, 0.3)" }}
                >
                  <Instagram className="w-5 h-5" style={{ color: "#8A8A7A" }} />
                </a>
                <a 
                  href="https://wa.me/971501234567" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border transition-all duration-200 hover:border-primary"
                  style={{ borderColor: "rgba(138, 138, 122, 0.3)" }}
                >
                  <MessageCircle className="w-5 h-5" style={{ color: "#8A8A7A" }} />
                </a>
              </div>
            </div>

            <div>
              <h4 
                className="mb-5"
                style={{ 
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.125rem",
                  letterSpacing: "0.05em",
                  color: "#E8E8E8"
                }}
              >
                NAVIGATE
              </h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#about" 
                    className="transition-colors duration-200"
                    style={{ 
                      fontSize: "0.875rem",
                      color: "#9A9A9A"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#E8E8E8"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "#9A9A9A"}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#programs" 
                    className="transition-colors duration-200"
                    style={{ 
                      fontSize: "0.875rem",
                      color: "#9A9A9A"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#E8E8E8"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "#9A9A9A"}
                  >
                    Programs
                  </a>
                </li>
                <li>
                  <a 
                    href="#schedule" 
                    className="transition-colors duration-200"
                    style={{ 
                      fontSize: "0.875rem",
                      color: "#9A9A9A"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#E8E8E8"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "#9A9A9A"}
                  >
                    Schedule
                  </a>
                </li>
                <li>
                  <a 
                    href="#location" 
                    className="transition-colors duration-200"
                    style={{ 
                      fontSize: "0.875rem",
                      color: "#9A9A9A"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#E8E8E8"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "#9A9A9A"}
                  >
                    Location
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 
                className="mb-5"
                style={{ 
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.125rem",
                  letterSpacing: "0.05em",
                  color: "#E8E8E8"
                }}
              >
                CONTACT
              </h4>
              <ul 
                className="space-y-2"
                style={{ 
                  fontSize: "0.875rem",
                  color: "#9A9A9A",
                  lineHeight: "1.7"
                }}
              >
                <li>Fujairah Trade Center</li>
                <li>Ground Floor</li>
                <li>Fujairah, UAE</li>
                <li className="pt-3">+971 50 123 4567</li>
              </ul>
            </div>
          </div>

          <div 
            className="pt-8 border-t text-center"
            style={{ borderColor: "rgba(138, 138, 122, 0.15)" }}
          >
            <p 
              style={{ 
                fontSize: "0.75rem",
                color: "#8A8A7A",
                letterSpacing: "0.08em",
                fontWeight: 600
              }}
            >
              © {new Date().getFullYear()} FITLAB FITNESS. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
