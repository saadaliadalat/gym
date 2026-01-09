/**
 * Theme Configuration
 * ===================
 * Customize colors and design tokens for your gym brand.
 * These values are used throughout the template.
 */

export const themeConfig = {
    // ===== BRAND COLORS =====
    // Choose your accent color scheme: 'olive', 'gold', or 'crimson'
    accentScheme: 'olive' as 'olive' | 'gold' | 'crimson',

    colors: {
        // Primary accent (used for highlights, icons, borders)
        olive: {
            primary: '#4A5240',
            primaryHover: '#5A6250',
            accent: '#8A8A7A',
        },
        gold: {
            primary: '#8B7355',
            primaryHover: '#9B8365',
            accent: '#C4A574',
        },
        crimson: {
            primary: '#6B3A3A',
            primaryHover: '#7B4A4A',
            accent: '#A85454',
        },

        // CTA Button (distinct, high contrast)
        cta: '#C9A227', // Gold for visibility
        ctaHover: '#D9B237',
        ctaText: '#0F0F0F',

        // Base colors (dark theme)
        background: '#0F0F0F',
        card: '#1A1A1A',
        cardHover: '#222222',
        secondary: '#2A2A2A',

        // Text colors
        textPrimary: '#E8E8E8',
        textSecondary: '#9A9A9A',
        textMuted: '#8A8A7A',

        // Borders
        border: 'rgba(138, 138, 122, 0.15)',
        borderHover: 'rgba(138, 138, 122, 0.4)',
    },

    // ===== TYPOGRAPHY =====
    fonts: {
        heading: "'Bebas Neue', sans-serif",
        body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    },

    // ===== ANIMATION =====
    animation: {
        // Entrance animation timing
        stagger: 0.08, // Delay between staggered items
        duration: 0.7, // Base animation duration
        ease: [0.22, 1, 0.36, 1], // Smooth easing curve
    },

    // ===== SPACING =====
    spacing: {
        sectionPadding: 'py-24 md:py-32',
        containerPadding: 'px-6 md:px-8',
    },
};

// Helper to get current accent colors based on scheme
export function getAccentColors() {
    const scheme = themeConfig.accentScheme;
    return themeConfig.colors[scheme];
}

export type ThemeConfig = typeof themeConfig;
