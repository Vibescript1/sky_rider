import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PageLoader } from "@/components/ui/page-loader";
import { Skeleton } from "@/components/ui/skeleton";
const heroVideo =
  "https://res.cloudinary.com/dqvkcq4e0/video/upload/v1760681548/3063475-uhd_3840_2160_30fps_1_1_ke5lcx.mp4";
// import carDriving from "../../assets/car_driving_video.mp4";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);

  // Simulate initial loading and content loading
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setContentLoaded(true);
    }, 800);

    const completeTimer = setTimeout(() => {
      if (videoLoaded) {
        setIsLoading(false);
      }
    }, 1200);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(completeTimer);
    };
  }, [videoLoaded]);

  // Handle video loading
  const handleVideoLoad = () => {
    setVideoLoaded(true);
    if (contentLoaded) {
      setTimeout(() => setIsLoading(false), 400);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background Video with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
        style={{
          transform: "scale(1.1)",
        }}
      >
        <video
          ref={(el) => {
            if (el) {
              el.addEventListener("loadeddata", () => {
                // Ensure smooth playback from start
                el.playbackRate = 1;
                handleVideoLoad();
              });

              el.addEventListener("timeupdate", () => {
                // Keep video playing smoothly
                if (el.currentTime > 0 && el.currentTime < 0.1) {
                  el.style.opacity = "1";
                }
              });
            }
          }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: videoLoaded ? 1 : 0,
            transition: "opacity 0.8s ease-in-out",
            objectFit: "cover",
            objectPosition: "center",
          }}
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 hero-gradient opacity-80" />
      </motion.div>

      {/* Animated Glow Lines */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-0 w-96 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"
        />
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 right-0 w-96 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50"
        />
      </div>
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: "translateZ(0)",
            }}
          />
        ))}
      </div>

      {/* Enhanced Glow Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(240, 145, 54, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(240, 145, 54, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(240, 145, 54, 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>
      <div className="container mx-auto px-4 z-10 relative">
        {/* 🔹 Overlay (optional, for better text contrast) */}
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            {!contentLoaded ? (
              <motion.div
                key="skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <Skeleton className="h-16 w-full max-w-2xl bg-white/20" />
                <Skeleton className="h-8 w-3/4 bg-white/20" />
                <div className="flex gap-4">
                  <Skeleton className="h-12 w-40 bg-white/20" />
                  <Skeleton className="h-12 w-40 bg-white/20" />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <motion.h1
                  className="font-display font-bold text-4xl sm:text-5xl md:text-7xl text-white leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Corporate Cab Solutions for{" "}
                  <span className="text-[#F09136]">Modern Businesses</span>{" "}
                  {/* text-accent, bg-gradient-to-r from-[#F09136] to-[#FAD889] inline-block text-transparent bg-clip-text */}
                </motion.h1>

                <motion.p
                  className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Premium fleet, professional drivers, seamless booking
                  experience. Elevate your corporate transportation.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Link to="/corporate-booking">
                    <Button
                      size="lg"
                      className="bg-white text-primary hover:bg-white/90 p-6 glow-effect group"
                    >
                      Book for Company
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/individual-booking">
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-white/20 text-white border-white/30 hover:bg-white/10 backdrop-blur-md mb-4 sm:mb-0"
                    >
                      Book as Individual
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white opacity-70" />
      </motion.div>

      {/* Page Loader */}
      {/* <PageLoader 
        isLoading={isLoading} 
        variant="car"
        message="Preparing your journey..."
      /> */}
      {isLoading && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 h-[100vh]">
          <img
            src="https://icons8.com/preloaders/preloaders/487/Speedometer-128.gif"
            alt="Loading"
            height="300px"
          />
        </div>
      )}
    </section>
  );
};

export default HeroSection;
