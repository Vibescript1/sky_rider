// Design Consistency Verification Component
// This component is used to verify that all home page sections follow the same design patterns

const designTokens = {
  // Color Palette
  colors: {
    primaryGradient: "from-blue-500 to-cyan-500",
    secondaryGradient: "from-purple-500 to-pink-500",
    backgroundGradients: [
      "from-slate-900 via-slate-800 to-slate-900",
      "from-slate-900 via-blue-900/50 to-slate-900"
    ],
    backgroundColors: {
      card: "bg-white/5",
      cardHover: "bg-white/10",
      badge: "bg-white/5",
      badgeHover: "bg-white/10"
    },
    borderColors: {
      card: "border-white/10",
      cardHover: "border-white/20",
      badge: "border-white/10"
    }
  },
  
  // Typography
  typography: {
    sectionTitle: "font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white",
    sectionSubtitle: "text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed",
    badge: "text-sm text-white/80"
  },
  
  // Spacing
  spacing: {
    sectionPadding: "py-20",
    sectionMargin: "mb-16",
    containerPadding: "px-4 sm:px-6 lg:px-8"
  },
  
  // Animations
  animations: {
    entrance: {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.6 },
      viewport: { once: true }
    },
    hover: {
      whileHover: { y: -5, scale: 1.05 },
      transition: { duration: 0.3 }
    }
  }
};

export default designTokens;