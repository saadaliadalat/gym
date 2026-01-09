import { motion } from "motion/react";
import { Target, Zap, Shield, Users } from "lucide-react";
import { siteConfig } from "../../config/site.config";
import { themeConfig, getAccentColors } from "../../config/theme.config";

const iconMap = {
  Target,
  Zap,
  Shield,
  Users,
};

export function About() {
  const accent = getAccentColors();

  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: themeConfig.animation.ease }}
          className="max-w-4xl mx-auto mb-20 md:mb-24"
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
            WHAT WE STAND FOR
          </span>

          <h2
            className="text-5xl md:text-7xl mb-8 tracking-tight leading-[0.95]"
            style={{
              fontFamily: themeConfig.fonts.heading,
              letterSpacing: "0.02em"
            }}
          >
            A Fighter's<br />Laboratory
          </h2>

          <div className="w-20 h-0.5 mb-8" style={{ backgroundColor: accent.primary }} />

          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl"
            style={{
              fontWeight: 400,
              color: themeConfig.colors.textSecondary,
              lineHeight: "1.75"
            }}
          >
            {siteConfig.name} isn't a bodybuilding gym. We don't do selfies or ego lifting.
            This is a place for men who train with purpose — fighters, athletes,
            and anyone serious about building real strength and performance.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {siteConfig.values.map((pillar, index) => {
            const IconComponent = iconMap[pillar.icon as keyof typeof iconMap] || Target;

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * themeConfig.animation.stagger,
                  ease: themeConfig.animation.ease
                }}
                className="group"
              >
                <div
                  className="bg-secondary p-8 border transition-all duration-300 h-full"
                  style={{ borderColor: "rgba(138, 138, 122, 0.15)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = accent.primary;
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(138, 138, 122, 0.15)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-6 border transition-all duration-300 group-hover:border-primary"
                    style={{ borderColor: "rgba(138, 138, 122, 0.3)" }}
                  >
                    <IconComponent className="w-6 h-6" style={{ color: accent.accent }} />
                  </div>

                  <h3
                    className="mb-3 tracking-tight"
                    style={{
                      fontFamily: themeConfig.fonts.heading,
                      fontSize: "1.5rem",
                      letterSpacing: "0.05em",
                      color: themeConfig.colors.textPrimary
                    }}
                  >
                    {pillar.title}
                  </h3>

                  <p
                    className="leading-relaxed"
                    style={{
                      fontSize: "0.875rem",
                      color: themeConfig.colors.textSecondary,
                      lineHeight: "1.7"
                    }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
