import { motion } from "motion/react";
import { Users, Award, Calendar, Star } from "lucide-react";
import { siteConfig } from "../../config/site.config";
import { themeConfig, getAccentColors } from "../../config/theme.config";

export function Stats() {
    const accent = getAccentColors();

    const stats = [
        {
            value: siteConfig.stats.members,
            label: siteConfig.stats.membersLabel,
            icon: Users,
        },
        {
            value: siteConfig.stats.experience,
            label: siteConfig.stats.experienceLabel,
            icon: Award,
        },
        {
            value: siteConfig.stats.classes,
            label: siteConfig.stats.classesLabel,
            icon: Calendar,
        },
        {
            value: siteConfig.stats.rating,
            label: siteConfig.stats.ratingLabel,
            icon: Star,
        },
    ];

    return (
        <section className="py-16 md:py-20 bg-card border-y" style={{ borderColor: "rgba(138, 138, 122, 0.15)" }}>
            <div className="container mx-auto px-6 md:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: themeConfig.animation.ease
                            }}
                            className="text-center"
                        >
                            <div
                                className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border"
                                style={{ borderColor: "rgba(138, 138, 122, 0.3)" }}
                            >
                                <stat.icon className="w-6 h-6" style={{ color: accent.accent }} />
                            </div>

                            <p
                                className="mb-1"
                                style={{
                                    fontFamily: themeConfig.fonts.heading,
                                    fontSize: "2.5rem",
                                    color: accent.primary,
                                    letterSpacing: "0.02em",
                                    lineHeight: 1
                                }}
                            >
                                {stat.value}
                            </p>

                            <p
                                style={{
                                    fontSize: "0.8125rem",
                                    color: themeConfig.colors.textMuted,
                                    fontWeight: 600,
                                    letterSpacing: "0.05em"
                                }}
                            >
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
