import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { siteConfig } from "../../config/site.config";
import { themeConfig, getAccentColors } from "../../config/theme.config";

export function Hero() {
  const accent = getAccentColors();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={siteConfig.gallery[0]?.url || "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920"}
          alt={`${siteConfig.name} Training Floor`}
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: themeConfig.animation.ease }}
          className="max-w-5xl mx-auto"
        >
          {/* Headline - Commanding */}
          <div className="mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span
                className="inline-block px-4 py-2 border"
                style={{
                  borderColor: "rgba(138, 138, 122, 0.3)",
                  fontSize: "0.8125rem",
                  letterSpacing: "0.12em",
                  color: themeConfig.colors.textMuted,
                  fontWeight: 600
                }}
              >
                {siteConfig.tagline.toUpperCase()}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-6xl md:text-8xl lg:text-9xl mb-8 tracking-tight leading-[0.9]"
              style={{
                fontFamily: themeConfig.fonts.heading,
                letterSpacing: "0.02em",
                color: themeConfig.colors.textPrimary
              }}
            >
              {siteConfig.headline.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base md:text-lg max-w-xl leading-relaxed"
              style={{
                fontWeight: 400,
                color: themeConfig.colors.textSecondary,
                lineHeight: "1.75"
              }}
            >
              {siteConfig.subheadline}
            </motion.p>

            {/* Urgency text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-4 flex items-center gap-2"
              style={{
                fontSize: "0.875rem",
                color: accent.accent,
                fontWeight: 500
              }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accent.primary }} />
              {siteConfig.cta.urgency}
            </motion.p>
          </div>

          {/* CTAs - Outcome Focused */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-20 md:mb-24"
          >
            {/* Primary CTA - Distinct gold color */}
            <Button
              size="lg"
              className="group px-10 py-7 rounded-sm transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
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
              {siteConfig.cta.primary}
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 px-10 py-7 rounded-sm transition-all duration-200"
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                fontWeight: 700,
                letterSpacing: "0.08em",
                fontSize: "0.875rem",
                borderColor: "rgba(138, 138, 122, 0.4)",
                color: themeConfig.colors.textPrimary
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = accent.accent;
                e.currentTarget.style.backgroundColor = "rgba(138, 138, 122, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(138, 138, 122, 0.4)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              {siteConfig.cta.secondary}
            </Button>
          </motion.div>

          {/* Quick Stats Preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-3 gap-8 md:gap-12 pt-8 border-t"
            style={{ borderColor: "rgba(138, 138, 122, 0.2)" }}
          >
            <div>
              <p
                className="mb-2 tracking-widest"
                style={{
                  fontFamily: themeConfig.fonts.heading,
                  fontSize: "2rem",
                  color: accent.primary,
                  letterSpacing: "0.05em"
                }}
              >
                {siteConfig.stats.members}
              </p>
              <p className="text-xs tracking-wider" style={{ color: themeConfig.colors.textMuted, fontWeight: 600 }}>
                MEMBERS
              </p>
            </div>

            <div>
              <p
                className="mb-2 tracking-widest"
                style={{
                  fontFamily: themeConfig.fonts.heading,
                  fontSize: "2rem",
                  color: accent.primary,
                  letterSpacing: "0.05em"
                }}
              >
                {siteConfig.stats.experience}
              </p>
              <p className="text-xs tracking-wider" style={{ color: themeConfig.colors.textMuted, fontWeight: 600 }}>
                YEARS
              </p>
            </div>

            <div>
              <p
                className="mb-2 tracking-widest"
                style={{
                  fontFamily: themeConfig.fonts.heading,
                  fontSize: "2rem",
                  color: accent.primary,
                  letterSpacing: "0.05em"
                }}
              >
                {siteConfig.stats.rating}★
              </p>
              <p className="text-xs tracking-wider" style={{ color: themeConfig.colors.textMuted, fontWeight: 600 }}>
                RATING
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
