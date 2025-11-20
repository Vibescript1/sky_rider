import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Play, CheckCircle2, TrendingUp, Shield, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PageLoader } from "@/components/ui/page-loader";

// Video source path - Local video file
const heroVideo = "/bg skyrydr.mp4";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isLoading, setIsLoading] = useState(() => {
    const firstLoad = sessionStorage.getItem("hasLoaded");
    return !firstLoad;
  });
  const [videoLoaded, setVideoLoaded] = useState(false);

  const features = [
    {
      icon: Shield,
      title: "20+ Years Experience",
      description: "Proven expertise in corporate transportation"
    },
    {
      icon: CheckCircle2,
      title: "POSH Certified",
      description: "Safety-focused and compliance-driven"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Always ready when you need us"
    }
  ];

  const services = [
    "Premium Car Rentals",
    "Airport Transfers",
    "Event Mobility",
    "Corporate Solutions"
  ];

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((current) => (current + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Removed scroll effect to prevent component-level scrolling
  // useEffect(() => {
  //   const handleScroll = () => setScrollY(window.scrollY);
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // Handle loading
  useEffect(() => {
    if (videoLoaded) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasLoaded", "true");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [videoLoaded]);

  const handleTimeUpdate = (e) => {
    const video = e.target;
    if (video.currentTime / video.duration >= 0.9) {
      video.currentTime = 0;
      video.play();
    }
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <>
      <PageLoader 
        isLoading={isLoading}
      />
      
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Video Background - Removed scroll effect */}
        <div 
          className="absolute inset-0 z-0"
        >
          <div className="relative w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              onCanPlayThrough={handleVideoLoad}
              onTimeUpdate={handleTimeUpdate}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                videoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                filter: 'brightness(0.9) contrast(1.1) saturate(1.1)',
                transform: "scale(1.01)",
                minHeight: '100%',
                minWidth: '100%'
              }}
            >
              <source src={heroVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Subtle gradient overlay */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10"
              style={{
                mixBlendMode: 'overlay'
              }}
            />
          </div>
          
          {/* Gradient overlays removed for brighter video */}
        </div>

        {/* Animated Grid Pattern - Removed scroll effect */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: 'linear-gradient(rgba(240, 145, 54, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(240, 145, 54, 0.3) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent rounded-full"
              initial={{ 
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                opacity: 0
              }}
              animate={{
                y: [`${Math.random() * 100}%`, `${Math.random() * 100 - 50}%`],
                opacity: [0, 1, 0],
                scale: [0, 2, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 z-10 relative pt-6 sm:pt-10 md:pt-8 pb-10 sm:pb-16">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-md rounded-full border border-accent/30"
              >
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-white">Premium Corporate Transport</span>
              </motion.div>

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-white leading-tight mb-3 sm:mb-4">
                  Your Trusted
                  <span className="block bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent">
                    Cab Partner
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-gray-200 max-w-2xl mb-4 sm:mb-6">
                  Corporate Solutions That Drive Success
                </p>
              </motion.div>

              {/* Services Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="grid grid-cols-2 gap-3"
              >
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-2 text-white/80"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm sm:text-base">{service}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons - Call Now button removed */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8"
              >
              </motion.div>
            </motion.div>

            {/* Right Column - Features Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block w-full max-w-md space-y-4 sm:space-y-6"
            >
              <div className="relative">
                {/* Feature Cards */}
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        scale: activeFeature === index ? 1.05 : 1
                      }}
                      transition={{ 
                        delay: 0.6 + index * 0.1,
                        scale: { duration: 0.3 }
                      }}
                      className={`p-3 rounded-xl backdrop-blur-xl border-2 transition-all duration-300 w-full ${
                        activeFeature === index 
                          ? 'bg-accent/20 border-accent shadow-xl shadow-accent/20' 
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-xl flex-shrink-0 ${
                          activeFeature === index 
                            ? 'bg-accent text-white' 
                            : 'bg-white/10 text-accent'
                        } transition-all duration-300`}>
                          <feature.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1">
                            {feature.title}
                          </h3>
                          <p className="text-white/70">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="mt-6 grid grid-cols-3 gap-3 max-w-md mx-auto"
                >
                  {[
                    { label: "Years", value: "20+" },
                    { label: "Fleet", value: "500+" },
                    { label: "Clients", value: "1000+" }
                  ].map((stat, i) => (
                    <div 
                      key={stat.label} 
                      className="text-center p-2 bg-white/5 backdrop-blur-md rounded-lg border border-white/10"
                    >
                      <div className="text-3xl font-bold text-accent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-white/60">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

      </motion.section>
    </>
  );
};

export default HeroSection;