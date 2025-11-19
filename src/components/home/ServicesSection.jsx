import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import sedanImage from "@/assets/sedan.jpg";
import suvImage from "@/assets/suv.jpg";
import luxuryImage from "@/assets/luxury.jpg";
import tempoImage from "@/assets/tempo.jpg";
import { Building2, Users, Shield, Clock, MapPin, Star, ArrowRight, Play, Pause } from "lucide-react";
import { SectionTitle, SectionSubtitle, SectionBadge } from "./Typography";
import { colorGradients, backgroundColors, borderColors } from "./ColorPalette";

const servicesData = [
  {
    category: "Safety & Security",
    features: [
      {
        Icon: Shield,
        title: "POSH Certified",
        description: "POSH-trained staff and a zero-tolerance policy for your safety and dignity",
        color: colorGradients.primary
      },
      {
        Icon: MapPin,
        title: "GPS-Monitored Fleet",
        description: "Real-time visibility for safety and route optimization",
        color: colorGradients.success
      }
    ]
  },
  {
    category: "Comfort & Luxury",
    features: [
      {
        Icon: Building2,
        title: "Luxury & Comfort",
        description: "Premium vehicles for style, space and first-class experience",
        color: colorGradients.secondary
      },
      {
        Icon: Users,
        title: "Professional Chauffeurs",
        description: "Experienced, well-trained drivers for seamless journeys",
        color: colorGradients.warning
      }
    ]
  },
  {
    category: "Reliability & Support",
    features: [
      {
        Icon: Users,
        title: "Dedicated Account Managers",
        description: "One point of contact with 24x7 support",
        color: colorGradients.info
      },
      {
        Icon: Clock,
        title: "Reliability",
        description: "Decades of trusted service excellence",
        color: colorGradients.accent
      }
    ]
  }
];

const fleetData = [
  { image: sedanImage, name: "Business Sedan", capacity: "4 passengers", features: ["WiFi", "Charging Ports"] },
  { image: suvImage, name: "Premium SUV", capacity: "6 passengers", features: ["Spacious", "Luggage Space"] },
  { image: luxuryImage, name: "Executive Luxury", capacity: "3 passengers", features: ["Premium", "Privacy"] },
  { image: tempoImage, name: "Team Transport", capacity: "12 passengers", features: ["Group Travel", "Economical"] }
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % servicesData.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements - Consistent with other sections */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionBadge icon={Star}>
            Premium Transportation
          </SectionBadge>
          <SectionTitle>
            Elevate Your <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Journey</span>
          </SectionTitle>
          <SectionSubtitle>
            Experience unparalleled comfort, safety, and reliability with our premium fleet services
          </SectionSubtitle>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Interactive Services */}
          <div className="space-y-8">
            {/* Service Categories */}
            <div className="flex flex-col gap-4">
              {servicesData.map((service, index) => (
                <motion.div
                  key={service.category}
                  initial={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeService === index 
                      ? `${backgroundColors.card} ${borderColors.cardHover} backdrop-blur-sm` 
                      : `${backgroundColors.badge} ${borderColors.badge} hover:${backgroundColors.badgeHover}`
                  }`}
                  onClick={() => {
                    setActiveService(index);
                    setIsPlaying(false);
                  }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">
                      {service.category}
                    </h3>
                    {activeService === index && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 bg-cyan-400 rounded-full"
                      />
                    )}
                  </div>
                  
                  <AnimatePresence>
                    {activeService === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 grid gap-3"
                      >
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            className={`flex items-start gap-3 p-3 rounded-lg ${backgroundColors.badge}`}
                          >
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center flex-shrink-0`}>
                              <feature.Icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-white text-sm">
                                {feature.title}
                              </h4>
                              <p className="text-slate-300 text-xs mt-1">
                                {feature.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-lg bg-white/10 border border-white/10 hover:bg-white/20 transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 text-white" />
                  ) : (
                    <Play className="w-4 h-4 text-white" />
                  )}
                </button>
                <span className="text-sm text-slate-300">
                  Auto-rotate {isPlaying ? "on" : "off"}
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Fleet Showcase */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {fleetData.map((vehicle, index) => (
                <motion.div
                  key={vehicle.name}
                  initial={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative bg-white/5 rounded-2xl p-4 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  <div className="relative h-40 rounded-xl overflow-hidden mb-3">
                    <motion.img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  
                  <h3 className="font-semibold text-white text-sm mb-2">
                    {vehicle.name}
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <Users className="w-3 h-3" />
                      {vehicle.capacity}
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {vehicle.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 bg-white/10 rounded-full text-xs text-slate-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Bar */}
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;