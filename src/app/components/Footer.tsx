import { Instagram, MessageCircle } from "lucide-react";
import { siteConfig } from "../../config/site.config";
import { themeConfig, getAccentColors } from "../../config/theme.config";

export function Footer() {
  const accent = getAccentColors();

  return (
    <footer className="bg-background border-t py-16 md:py-20" style={{ borderColor: "rgba(138, 138, 122, 0.15)" }}>
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-12 md:mb-16">
            <div className="md:col-span-2">
              <h3
                className="mb-5 tracking-tight"
                style={{
                  fontFamily: themeConfig.fonts.heading,
                  fontSize: "2rem",
                  letterSpacing: "0.05em",
                  color: themeConfig.colors.textPrimary
                }}
              >
                {siteConfig.name}
              </h3>
              <p
                className="leading-relaxed mb-6 max-w-md"
                style={{
                  fontSize: "0.875rem",
                  color: themeConfig.colors.textSecondary,
                  lineHeight: "1.75"
                }}
              >
                {siteConfig.tagline} in {siteConfig.location.city}. Strength training,
                fighter conditioning, and serious results.
              </p>

              <div className="flex gap-4">
                <a
                  href={`https://instagram.com/${siteConfig.contact.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border transition-all duration-200"
                  style={{ borderColor: "rgba(138, 138, 122, 0.3)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = accent.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(138, 138, 122, 0.3)";
                  }}
                >
                  <Instagram className="w-5 h-5" style={{ color: themeConfig.colors.textMuted }} />
                </a>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border transition-all duration-200"
                  style={{ borderColor: "rgba(138, 138, 122, 0.3)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = accent.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(138, 138, 122, 0.3)";
                  }}
                >
                  <MessageCircle className="w-5 h-5" style={{ color: themeConfig.colors.textMuted }} />
                </a>
              </div>
            </div>

            <div>
              <h4
                className="mb-5"
                style={{
                  fontFamily: themeConfig.fonts.heading,
                  fontSize: "1.125rem",
                  letterSpacing: "0.05em",
                  color: themeConfig.colors.textPrimary
                }}
              >
                Navigate
              </h4>
              <ul className="space-y-3">
                {[
                  { href: "#about", label: "About" },
                  { href: "#programs", label: "Programs" },
                  { href: "#schedule", label: "Schedule" },
                  { href: "#location", label: "Location" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="transition-colors duration-200"
                      style={{
                        fontSize: "0.875rem",
                        color: themeConfig.colors.textSecondary
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = themeConfig.colors.textPrimary}
                      onMouseLeave={(e) => e.currentTarget.style.color = themeConfig.colors.textSecondary}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4
                className="mb-5"
                style={{
                  fontFamily: themeConfig.fonts.heading,
                  fontSize: "1.125rem",
                  letterSpacing: "0.05em",
                  color: themeConfig.colors.textPrimary
                }}
              >
                Contact
              </h4>
              <ul
                className="space-y-2"
                style={{
                  fontSize: "0.875rem",
                  color: themeConfig.colors.textSecondary,
                  lineHeight: "1.75"
                }}
              >
                <li>{siteConfig.location.name}</li>
                <li>{siteConfig.location.address}</li>
                <li>{siteConfig.location.city}, {siteConfig.location.country}</li>
                <li className="pt-3">{siteConfig.contact.phone}</li>
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
                color: themeConfig.colors.textMuted,
                letterSpacing: "0.05em",
                fontWeight: 500
              }}
            >
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
