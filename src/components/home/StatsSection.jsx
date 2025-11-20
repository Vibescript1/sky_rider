import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { Building2, Users, Car, MapPin, Star, Shield, ArrowRight, Target, Award, Clock } from "lucide-react";
import { SectionTitle, SectionSubtitle } from "./Typography";
import { colorGradients, backgroundColors, borderColors } from "./ColorPalette";

const StatCard = ({ value, label, suffix = "", icon: Icon, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const displayValue = useTransform(count, (latest) => 
    label === "Service Rating" ? latest.toFixed(1) : Math.round(latest).toString()
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2.5,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  // Use consistent color palette
  const colors = Object.values(colorGradients);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        type: "spring",
        stiffness: 100
      }}
      className="group relative"
      style={{ touchAction: 'auto' }}
    >
      {/* Background Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors[index % colors.length]} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
      
      <div className={`${backgroundColors.card} backdrop-blur-lg rounded-2xl ${borderColors.card} p-8 text-center hover:${backgroundColors.cardHover} transition-all duration-300`}>
        {/* Icon with Gradient Background */}
        <motion.div 
          className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${colors[index % colors.length]} mb-6 shadow-lg`}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>
        
        {/* Animated Value */}
        <div className="font-bold text-4xl md:text-5xl text-white mb-3">
          <motion.span className="inline-block">
            {displayValue}
          </motion.span>
          {suffix}
        </div>
        
        {/* Label */}
        <div className="text-white/90 text-lg font-semibold mb-4">{label}</div>
        
        {/* Animated Progress Bar */}
        <motion.div 
          className="h-1 bg-white/20 rounded-full overflow-hidden"
          initial={{ width: "100%" }}
          transition={{ duration: 2 }}
        >
          <motion.div
            className={`h-full bg-gradient-to-r ${colors[index % colors.length]}`}
            initial={{ width: "100%" }}
            transition={{ duration: 2 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    { 
      label: "Companies Served", 
      value: 500, 
      suffix: "+", 
      icon: Building2 
    },
    { 
      label: "Happy Customers", 
      value: 50000, 
      suffix: "+", 
      icon: Users 
    },
    { 
      label: "Fleet Vehicles", 
      value: 700, 
      suffix: "+", 
      icon: Car 
    },
    { 
      label: "Cities Covered", 
      value: 25, 
      suffix: "+", 
      icon: MapPin 
    },
    { 
      label: "Service Rating", 
      value: 4.9, 
      suffix: "/5", 
      icon: Star 
    },
    { 
      label: "Professional Drivers", 
      value: 1400, 
      suffix: "+", 
      icon: Shield 
    },
  ];

  const milestones = [
    { year: "2000", event: "Company Founded", icon: Target },
    { year: "2005", event: "100+ Corporate Clients", icon: Award },
    { year: "2010", event: "National Expansion", icon: MapPin },
    { year: "2020", event: "Digital Transformation", icon: Star },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements - Consistent with other sections */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-lg rounded-full px-6 py-3 border border-white/10 mb-8"
          >
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="text-white/90 text-base font-semibold">Trusted by India's Top Companies</span>
          </motion.div>
          
          <SectionTitle className="text-4xl md:text-5xl lg:text-6xl">
            Two Decades of <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Excellence</span>
          </SectionTitle>
          
          <SectionSubtitle className="mb-12">
            Pioneering corporate transportation with unmatched reliability, safety, and premium service across India
          </SectionSubtitle>

          {/* Milestones Timeline */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/10"
              >
                <milestone.icon className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 font-semibold">{milestone.year}</span>
                <span className="text-white/60 text-sm">{milestone.event}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {stats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} index={index} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default StatsSection;