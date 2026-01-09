import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { siteConfig } from "../../config/site.config";
import { themeConfig } from "../../config/theme.config";

export function Navigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#programs", label: "Programs" },
    { href: "#schedule", label: "Schedule" },
    { href: "#location", label: "Location" }
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: themeConfig.animation.ease }}
            className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b"
            style={{ borderColor: "rgba(138, 138, 122, 0.15)" }}
          >
            <div className="container mx-auto px-6 md:px-8 py-4">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <a
                  href="#"
                  className="transition-opacity duration-200 hover:opacity-70"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <span
                    style={{
                      fontFamily: themeConfig.fonts.heading,
                      fontSize: "1.75rem",
                      color: themeConfig.colors.textPrimary,
                      letterSpacing: "0.05em"
                    }}
                  >
                    {siteConfig.name}
                  </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className="transition-colors duration-200"
                      style={{
                        fontSize: "0.875rem",
                        color: themeConfig.colors.textSecondary,
                        fontWeight: 500,
                        letterSpacing: "0.02em"
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = themeConfig.colors.textPrimary}
                      onMouseLeave={(e) => e.currentTarget.style.color = themeConfig.colors.textSecondary}
                    >
                      {link.label}
                    </a>
                  ))}

                  <Button
                    size="sm"
                    className="px-6 py-5 rounded-sm transition-all duration-200"
                    onClick={() => window.open(`https://wa.me/${siteConfig.contact.whatsapp}`, '_blank')}
                    style={{
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      letterSpacing: "0.08em",
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
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Book
                  </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 transition-colors duration-200"
                  style={{ color: themeConfig.colors.textPrimary }}
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: themeConfig.animation.ease }}
              className="absolute top-[73px] right-0 bottom-0 w-full max-w-sm bg-card border-l shadow-2xl"
              style={{ borderColor: "rgba(138, 138, 122, 0.15)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 space-y-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="block py-3 transition-colors duration-200"
                    style={{
                      fontSize: "1.25rem",
                      fontFamily: themeConfig.fonts.heading,
                      color: themeConfig.colors.textPrimary,
                      letterSpacing: "0.05em"
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="pt-6"
                >
                  <Button
                    size="lg"
                    className="w-full py-6 rounded-sm"
                    onClick={() => window.open(`https://wa.me/${siteConfig.contact.whatsapp}`, '_blank')}
                    style={{
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      backgroundColor: themeConfig.colors.cta,
                      color: themeConfig.colors.ctaText,
                    }}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Book Now
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
