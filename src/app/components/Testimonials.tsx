import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { siteConfig } from "../../config/site.config";
import { themeConfig, getAccentColors } from "../../config/theme.config";

export function Testimonials() {
    const accent = getAccentColors();

    return (
        <section className="py-24 md:py-32 bg-background">
            <div className="container mx-auto px-6 md:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: themeConfig.animation.ease }}
                    className="max-w-4xl mx-auto mb-16 md:mb-20 text-center"
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
                        MEMBER STORIES
                    </span>

                    <h2
                        className="text-5xl md:text-7xl mb-6 tracking-tight leading-[0.95]"
                        style={{
                            fontFamily: themeConfig.fonts.heading,
                            letterSpacing: "0.02em"
                        }}
                    >
                        Real Results,<br />Real People
                    </h2>

                    <div className="w-20 h-0.5 mx-auto mb-8" style={{ backgroundColor: accent.primary }} />

                    <p
                        className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
                        style={{
                            fontWeight: 400,
                            color: themeConfig.colors.textSecondary,
                            lineHeight: "1.75"
                        }}
                    >
                        Don't take our word for it. Hear from the athletes and professionals
                        who train with us every day.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {siteConfig.testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
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
                                className="bg-card p-8 border h-full flex flex-col transition-all duration-300 hover:border-opacity-60"
                                style={{
                                    borderColor: "rgba(138, 138, 122, 0.15)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = accent.primary;
                                    e.currentTarget.style.transform = "translateY(-4px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = "rgba(138, 138, 122, 0.15)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                            >
                                {/* Quote Icon */}
                                <div className="mb-6">
                                    <Quote
                                        className="w-8 h-8"
                                        style={{ color: accent.primary, opacity: 0.6 }}
                                    />
                                </div>

                                {/* Quote Text */}
                                <p
                                    className="mb-8 flex-grow leading-relaxed"
                                    style={{
                                        fontSize: "0.9375rem",
                                        color: themeConfig.colors.textSecondary,
                                        lineHeight: "1.75",
                                        fontStyle: "italic"
                                    }}
                                >
                                    "{testimonial.quote}"
                                </p>

                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-4 h-4 fill-current"
                                            style={{ color: "#C9A227" }}
                                        />
                                    ))}
                                </div>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                        style={{ border: `2px solid ${accent.primary}` }}
                                    />
                                    <div>
                                        <p
                                            className="font-semibold"
                                            style={{
                                                color: themeConfig.colors.textPrimary,
                                                fontSize: "0.9375rem"
                                            }}
                                        >
                                            {testimonial.name}
                                        </p>
                                        <p
                                            style={{
                                                fontSize: "0.8125rem",
                                                color: themeConfig.colors.textMuted
                                            }}
                                        >
                                            {testimonial.role} · {testimonial.duration}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
