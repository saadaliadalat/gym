import { motion } from "motion/react";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { siteConfig } from "../../config/site.config";
import { themeConfig, getAccentColors } from "../../config/theme.config";

export function Location() {
  const accent = getAccentColors();

  return (
    <section id="location" className="py-24 md:py-32 bg-card">
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
            LOCATION
          </span>

          <h2
            className="text-5xl md:text-7xl mb-8 tracking-tight leading-[0.95]"
            style={{
              fontFamily: themeConfig.fonts.heading,
              letterSpacing: "0.02em"
            }}
          >
            Find Us
          </h2>

          <div className="w-20 h-0.5 mb-8" style={{ backgroundColor: accent.primary }} />

          <p
            className="text-base md:text-lg leading-relaxed"
            style={{
              fontWeight: 400,
              color: themeConfig.colors.textSecondary
            }}
          >
            {siteConfig.location.name}. {siteConfig.location.address}.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: themeConfig.animation.ease }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start space-x-5">
                <div
                  className="w-12 h-12 flex items-center justify-center flex-shrink-0 border"
                  style={{ borderColor: "rgba(138, 138, 122, 0.3)" }}
                >
                  <MapPin className="w-5 h-5" style={{ color: accent.accent }} />
                </div>
                <div>
                  <h4
                    className="mb-2"
                    style={{
                      fontFamily: themeConfig.fonts.heading,
                      fontSize: "1.25rem",
                      letterSpacing: "0.05em"
                    }}
                  >
                    Address
                  </h4>
                  <p
                    className="leading-relaxed"
                    style={{
                      fontSize: "0.875rem",
                      color: themeConfig.colors.textSecondary,
                      lineHeight: "1.7"
                    }}
                  >
                    {siteConfig.location.name}<br />
                    {siteConfig.location.address}<br />
                    {siteConfig.location.city}, {siteConfig.location.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div
                  className="w-12 h-12 flex items-center justify-center flex-shrink-0 border"
                  style={{ borderColor: "rgba(138, 138, 122, 0.3)" }}
                >
                  <Clock className="w-5 h-5" style={{ color: accent.accent }} />
                </div>
                <div>
                  <h4
                    className="mb-2"
                    style={{
                      fontFamily: themeConfig.fonts.heading,
                      fontSize: "1.25rem",
                      letterSpacing: "0.05em"
                    }}
                  >
                    Hours
                  </h4>
                  <p
                    className="leading-relaxed"
                    style={{
                      fontSize: "0.875rem",
                      color: themeConfig.colors.textSecondary,
                      lineHeight: "1.7"
                    }}
                  >
                    {siteConfig.hours.weekdays}<br />
                    {siteConfig.hours.weekend}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div
                  className="w-12 h-12 flex items-center justify-center flex-shrink-0 border"
                  style={{ borderColor: "rgba(138, 138, 122, 0.3)" }}
                >
                  <Phone className="w-5 h-5" style={{ color: accent.accent }} />
                </div>
                <div>
                  <h4
                    className="mb-2"
                    style={{
                      fontFamily: themeConfig.fonts.heading,
                      fontSize: "1.25rem",
                      letterSpacing: "0.05em"
                    }}
                  >
                    Contact
                  </h4>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: themeConfig.colors.textSecondary
                    }}
                  >
                    {siteConfig.contact.phone}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <Button
                size="lg"
                className="w-full px-10 py-7 rounded-sm transition-all duration-200"
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
                {siteConfig.cta.contact}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 px-10 py-7 rounded-sm transition-all duration-200"
                onClick={() => window.open(`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`, '_blank')}
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
                <Phone className="w-5 h-5 mr-3" />
                Call Now
              </Button>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: themeConfig.animation.ease }}
            className="lg:col-span-3 bg-background overflow-hidden border h-[450px] lg:h-full"
            style={{ borderColor: "rgba(138, 138, 122, 0.15)" }}
          >
            <iframe
              src={siteConfig.location.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) invert(90%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${siteConfig.name} Location`}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
