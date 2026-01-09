import { motion } from "motion/react";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "../../config/site.config";
import { themeConfig, getAccentColors } from "../../config/theme.config";

export function Schedule() {
  const accent = getAccentColors();

  return (
    <section id="schedule" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: themeConfig.animation.ease }}
          className="max-w-4xl mx-auto mb-16 md:mb-20"
        >
          <span
            className="inline-block px-3 py-1 mb-6 border"
            style={{
              borderColor: "rgba(138, 138, 122, 0.3)",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              color: themeConfig.colors.textMuted,
              fontWeight: 600
            }}
          >
            CLASS SCHEDULE
          </span>

          <h2
            className="text-5xl md:text-7xl mb-8 tracking-tight leading-[0.95]"
            style={{
              fontFamily: themeConfig.fonts.heading,
              letterSpacing: "0.02em"
            }}
          >
            When We<br />Train
          </h2>

          <div className="w-20 h-0.5 mb-8" style={{ backgroundColor: accent.primary }} />

          <p
            className="text-base md:text-lg mb-10 leading-relaxed"
            style={{
              fontWeight: 400,
              color: themeConfig.colors.textSecondary,
              lineHeight: "1.75"
            }}
          >
            Six days a week. Morning and evening sessions. Book your spot via WhatsApp.
          </p>

          <Button
            size="lg"
            className="px-10 py-7 rounded-sm transition-all duration-300 hover:translate-y-[-2px]"
            onClick={() => window.open(`https://wa.me/${siteConfig.contact.whatsapp}`, '_blank')}
            style={{
              fontWeight: 700,
              letterSpacing: "0.08em",
              fontSize: "0.875rem",
              backgroundColor: themeConfig.colors.cta,
              color: themeConfig.colors.ctaText,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = themeConfig.colors.ctaHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = themeConfig.colors.cta;
            }}
          >
            <MessageCircle className="w-5 h-5 mr-3" />
            {siteConfig.cta.book}
          </Button>
        </motion.div>

        {/* Schedule Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {siteConfig.schedule.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: themeConfig.animation.ease
                }}
              >
                <div
                  className="bg-background p-6 border transition-all duration-300 h-full"
                  style={{ borderColor: "rgba(138, 138, 122, 0.15)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = accent.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(138, 138, 122, 0.15)";
                  }}
                >
                  <h4
                    className="mb-6 pb-3 border-b tracking-tight"
                    style={{
                      fontFamily: themeConfig.fonts.heading,
                      fontSize: "1.5rem",
                      color: accent.primary,
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
                            fontFamily: themeConfig.fonts.heading,
                            fontSize: "0.875rem",
                            color: themeConfig.colors.textMuted,
                            letterSpacing: "0.05em"
                          }}
                        >
                          {classItem.time}
                        </p>
                        <p
                          style={{
                            fontSize: "0.8125rem",
                            color: themeConfig.colors.textSecondary,
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
            transition={{ duration: 0.7, delay: 0.3, ease: themeConfig.animation.ease }}
            className="mt-12 md:mt-16 p-6 md:p-8 bg-secondary border text-center"
            style={{ borderColor: "rgba(138, 138, 122, 0.2)" }}
          >
            <p
              style={{
                fontSize: "0.8125rem",
                color: themeConfig.colors.textMuted,
                letterSpacing: "0.05em",
                fontWeight: 600
              }}
            >
              {siteConfig.hours.weekdays.toUpperCase()}
              <span className="mx-4" style={{ color: accent.primary }}>•</span>
              {siteConfig.hours.weekend.toUpperCase()}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
