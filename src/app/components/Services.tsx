import { motion } from "motion/react";
import { Dumbbell, Activity, Users, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { siteConfig } from "../../config/site.config";
import { themeConfig, getAccentColors } from "../../config/theme.config";

const iconMap = {
  Dumbbell,
  Activity,
  Users,
  Zap,
};

export function Services() {
  const accent = getAccentColors();

  return (
    <section id="programs" className="py-24 md:py-32 bg-background">
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
            TRAINING PROGRAMS
          </span>

          <h2
            className="text-5xl md:text-7xl mb-8 tracking-tight leading-[0.95]"
            style={{
              fontFamily: themeConfig.fonts.heading,
              letterSpacing: "0.02em"
            }}
          >
            How We<br />Train
          </h2>

          <div className="w-20 h-0.5 mb-8" style={{ backgroundColor: accent.primary }} />

          <p
            className="text-base md:text-lg leading-relaxed"
            style={{
              fontWeight: 400,
              color: themeConfig.colors.textSecondary
            }}
          >
            Professional coaching. Proven methods. Real results.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {siteConfig.programs.map((program, index) => {
            const IconComponent = iconMap[program.icon as keyof typeof iconMap] || Dumbbell;

            return (
              <motion.div
                key={program.title}
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
                  className="bg-card p-8 md:p-10 border transition-all duration-300 h-full flex flex-col"
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
                    className="w-14 h-14 flex items-center justify-center mb-6 border transition-all duration-300 group-hover:border-primary"
                    style={{ borderColor: "rgba(138, 138, 122, 0.3)" }}
                  >
                    <IconComponent className="w-7 h-7" style={{ color: accent.accent }} />
                  </div>

                  <h3
                    className="mb-2 tracking-tight"
                    style={{
                      fontFamily: themeConfig.fonts.heading,
                      fontSize: "1.75rem",
                      letterSpacing: "0.05em",
                      color: themeConfig.colors.textPrimary
                    }}
                  >
                    {program.title}
                  </h3>

                  {/* Who it's for - subtle tag */}
                  <p
                    className="mb-4"
                    style={{
                      fontSize: "0.8125rem",
                      color: accent.accent,
                      fontWeight: 500
                    }}
                  >
                    {program.forWho}
                  </p>

                  <p
                    className="mb-6 leading-relaxed flex-grow"
                    style={{
                      fontSize: "0.9375rem",
                      color: themeConfig.colors.textSecondary,
                      lineHeight: "1.75"
                    }}
                  >
                    {program.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {program.features.map((item) => (
                      <li
                        key={item}
                        className="flex items-center"
                        style={{ fontSize: "0.8125rem", color: themeConfig.colors.textMuted }}
                      >
                        <span
                          className="w-1.5 h-1.5 mr-3 flex-shrink-0 rounded-full"
                          style={{ backgroundColor: accent.primary }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="w-full border-2 transition-all duration-200 py-6"
                    onClick={() => window.open(`https://wa.me/${siteConfig.contact.whatsapp}`, '_blank')}
                    style={{
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      fontSize: "0.8125rem",
                      borderColor: "rgba(138, 138, 122, 0.4)",
                      color: themeConfig.colors.textPrimary
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = themeConfig.colors.cta;
                      e.currentTarget.style.borderColor = themeConfig.colors.cta;
                      e.currentTarget.style.color = themeConfig.colors.ctaText;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.borderColor = "rgba(138, 138, 122, 0.4)";
                      e.currentTarget.style.color = themeConfig.colors.textPrimary;
                    }}
                  >
                    Start Training
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
