import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { siteConfig } from "../../config/site.config";
import { themeConfig, getAccentColors } from "../../config/theme.config";

export function Gallery() {
  const accent = getAccentColors();

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
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
            THE FACILITY
          </span>

          <h2
            className="text-5xl md:text-7xl mb-8 tracking-tight leading-[0.95]"
            style={{
              fontFamily: themeConfig.fonts.heading,
              letterSpacing: "0.02em"
            }}
          >
            Where We<br />Train
          </h2>

          <div className="w-20 h-0.5 mb-8" style={{ backgroundColor: accent.primary }} />

          <p
            className="text-base md:text-lg leading-relaxed"
            style={{
              fontWeight: 400,
              color: themeConfig.colors.textSecondary
            }}
          >
            Professional equipment. Clean space. No distractions.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-20 md:mb-24">
          {siteConfig.gallery.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * themeConfig.animation.stagger,
                ease: themeConfig.animation.ease
              }}
              className="relative aspect-[4/3] overflow-hidden group"
            >
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(to top, rgba(15, 15, 15, 0.5), transparent)"
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: themeConfig.animation.ease }}
          className="max-w-3xl mx-auto"
        >
          <div
            className="bg-card p-10 md:p-12 border text-center"
            style={{ borderColor: "rgba(138, 138, 122, 0.15)" }}
          >
            <h3
              className="mb-4 tracking-tight"
              style={{
                fontFamily: themeConfig.fonts.heading,
                fontSize: "2rem",
                letterSpacing: "0.05em"
              }}
            >
              Come See It
            </h3>

            <p
              className="mb-0 max-w-xl mx-auto leading-relaxed"
              style={{
                fontSize: "0.9375rem",
                color: themeConfig.colors.textSecondary,
                lineHeight: "1.75"
              }}
            >
              Visit {siteConfig.name}. Check the equipment. Meet the coaches.
              See if this is where you belong.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
