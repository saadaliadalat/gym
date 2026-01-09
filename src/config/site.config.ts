/**
 * Site Configuration
 * ==================
 * Edit this file to customize the gym website for your business.
 * All content, contact info, and business details are configured here.
 */

export const siteConfig = {
    // ===== BUSINESS INFO =====
    name: "FITLAB",
    tagline: "Men's Performance Gym",
    description: "A fighter's lab in Fujairah. Strength training, combat conditioning, and performance coaching for men who take their training seriously.",

    // Value proposition - appears in hero
    headline: "TRAIN WITH\nPURPOSE",
    subheadline: "Build real strength. Get fight-ready conditioning. Join a brotherhood of serious athletes.",

    // ===== CONTACT INFO =====
    contact: {
        phone: "+971 50 123 4567",
        whatsapp: "971501234567", // Without + or spaces
        email: "info@fitlabfujairah.com",
        instagram: "fitlabfujairah",
    },

    // ===== LOCATION =====
    location: {
        name: "Fujairah Trade Center",
        address: "Ground Floor",
        city: "Fujairah",
        country: "UAE",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.738739!2d56.3408!3d25.1289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA3JzQ0LjAiTiA1NsKwMjAnMjcuMyJF!5e0!3m2!1sen!2sae!4v1234567890",
    },

    // ===== HOURS =====
    hours: {
        weekdays: "Sat – Thu: 6AM – 9PM",
        weekend: "Friday: Closed",
    },

    // ===== STATS (Social Proof) =====
    stats: {
        members: "500+",
        membersLabel: "Active Members",
        experience: "8+",
        experienceLabel: "Years Experience",
        classes: "15,000+",
        classesLabel: "Classes Taught",
        rating: "4.9",
        ratingLabel: "Member Rating",
    },

    // ===== CORE VALUES =====
    values: [
        {
            title: "Discipline",
            description: "Consistency beats motivation. Show up, do the work, get results.",
            icon: "Target",
        },
        {
            title: "Performance",
            description: "Training designed for real strength, speed, and combat readiness.",
            icon: "Zap",
        },
        {
            title: "Structure",
            description: "Professional coaching, proven methods, no guesswork.",
            icon: "Shield",
        },
        {
            title: "Brotherhood",
            description: "Men who push each other to be stronger.",
            icon: "Users",
        },
    ],

    // ===== PROGRAMS =====
    programs: [
        {
            title: "Strength Training",
            description: "Barbell work, powerlifting fundamentals, and progressive overload. Build real strength that transfers to life.",
            icon: "Dumbbell",
            forWho: "For beginners to advanced lifters",
            features: ["Compound movements", "Progressive programming", "Form coaching"],
        },
        {
            title: "Fighter Conditioning",
            description: "Combat-specific conditioning for striking, grappling, and fight endurance. Get ring-ready.",
            icon: "Activity",
            forWho: "For martial artists & fighters",
            features: ["Fight cardio", "Explosive power", "Recovery protocols"],
        },
        {
            title: "Group Training",
            description: "High-intensity circuits and functional work. Push harder with your training partners.",
            icon: "Users",
            forWho: "For those who thrive in teams",
            features: ["Circuit training", "Functional strength", "Team accountability"],
        },
        {
            title: "Athletic Performance",
            description: "Speed, agility, and sport-specific training for competitive athletes who want an edge.",
            icon: "Zap",
            forWho: "For competitive athletes",
            features: ["Speed work", "Plyometrics", "Movement quality"],
        },
    ],

    // ===== SCHEDULE =====
    schedule: [
        {
            day: "SAT",
            classes: [
                { time: "06:00", name: "Strength" },
                { time: "17:00", name: "Fighter Conditioning" },
                { time: "19:00", name: "Group Circuit" },
            ],
        },
        {
            day: "SUN",
            classes: [
                { time: "06:00", name: "Athletic Performance" },
                { time: "17:00", name: "Strength" },
                { time: "19:00", name: "Fighter Conditioning" },
            ],
        },
        {
            day: "MON",
            classes: [
                { time: "06:00", name: "Fighter Conditioning" },
                { time: "17:00", name: "Group Circuit" },
                { time: "19:00", name: "Strength" },
            ],
        },
        {
            day: "TUE",
            classes: [
                { time: "06:00", name: "Strength" },
                { time: "17:00", name: "Athletic Performance" },
                { time: "19:00", name: "Group Circuit" },
            ],
        },
        {
            day: "WED",
            classes: [
                { time: "06:00", name: "Group Circuit" },
                { time: "17:00", name: "Fighter Conditioning" },
                { time: "19:00", name: "Strength" },
            ],
        },
        {
            day: "THU",
            classes: [
                { time: "06:00", name: "Athletic Performance" },
                { time: "17:00", name: "Strength" },
                { time: "19:00", name: "Fighter Conditioning" },
            ],
        },
    ],

    // ===== TESTIMONIALS =====
    testimonials: [
        {
            name: "Ahmed K.",
            role: "MMA Fighter",
            duration: "Member for 2 years",
            quote: "FitLab transformed my fight conditioning. The coaches understand what fighters need — no fluff, just results.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&h=150&fit=crop",
        },
        {
            name: "Rashid M.",
            role: "Business Owner",
            duration: "Member for 1 year",
            quote: "After years of gym-hopping, I finally found a place where training is taken seriously. The structured programs work.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
        },
        {
            name: "Khalid S.",
            role: "Personal Trainer",
            duration: "Member for 3 years",
            quote: "The best strength facility in Fujairah. Equipment is top-tier, and the community pushes you to be better.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
        },
    ],

    // ===== CTA COPY =====
    cta: {
        primary: "Start Your Transformation",
        secondary: "View Programs",
        book: "Book a Free Visit",
        contact: "Message Us",
        urgency: "Limited spots available for new members",
    },

    // ===== GALLERY IMAGES =====
    gallery: [
        {
            url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
            alt: "Training equipment",
        },
        {
            url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",
            alt: "Training floor",
        },
        {
            url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800",
            alt: "Strength equipment",
        },
        {
            url: "https://images.unsplash.com/photo-1623874514711-0f321325f318?w=800",
            alt: "Training space",
        },
    ],
};

export type SiteConfig = typeof siteConfig;
