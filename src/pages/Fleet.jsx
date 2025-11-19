import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FleetCard from "@/components/fleet/FleetCard";
import { fleetData } from "@/utils/mockData";
import { PageLoader } from "@/components/ui/page-loader";
import { EnhancedSkeleton } from "@/components/ui/enhanced-skeleton";
import { Car, Filter, Star, Shield, Users, Zap } from "lucide-react";

const Fleet = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    { id: "all", name: "All Vehicles", icon: Car },
    { id: "sedan", name: "Sedans", icon: Car },
    { id: "suv", name: "SUVs", icon: Users },
    { id: "luxury", name: "Luxury", icon: Star },
    { id: "van", name: "Vans", icon: Users },
    { id: "bus", name: "Buses", icon: Users },
  ];

  const filteredFleet =
    selectedCategory === "all"
      ? fleetData
      : fleetData.filter((vehicle) => vehicle.category === selectedCategory);

  // Simulate loading state
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-lg rounded-full px-6 py-3 border border-white/10 mb-8"
            >
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-white/90 text-base font-semibold">Premium Fleet Collection</span>
            </motion.div>

            <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight">
              Executive <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Fleet</span>
            </h1>
            <p className="text-white/70 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-12">
              Discover our exclusive collection of luxury vehicles designed for corporate excellence 
              and premium executive transportation experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <motion.div
              initial={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 mb-4"
            >
              <Filter className="w-4 h-4 text-blue-400" />
              <span className="text-white/80 text-sm font-medium">Filter by Category</span>
            </motion.div>
            <p className="text-white/60 text-lg">
              Choose the perfect vehicle type for your corporate needs
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 relative">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm border ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-blue-400/50 shadow-lg shadow-blue-500/25"
                    : "bg-white/5 text-white/80 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="font-bold text-4xl md:text-6xl text-white mb-6 leading-tight">
              {selectedCategory === "all" 
                ? "Complete Fleet Collection" 
                : `${categories.find(c => c.id === selectedCategory)?.name}`
              }
            </h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              {selectedCategory === "all"
                ? "Discover our full range of premium vehicles designed for corporate transportation excellence"
                : `Explore our premium ${categories.find(c => c.id === selectedCategory)?.name.toLowerCase()} collection`
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              // Loading state - show skeleton cards with staggered animation
              Array.from({ length: 6 }).map((_, index) => (
                <motion.div
                  key={`skeleton-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <FleetCard isLoading={true} index={index} />
                </motion.div>
              ))
            ) : (
              // Loaded state - show actual cards with enhanced staggered animations
              filteredFleet.map((vehicle, index) => (
                <motion.div
                  key={vehicle.id}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="group"
                >
                  <FleetCard vehicle={vehicle} index={index} />
                </motion.div>
              ))
            )}
          </div>

          {filteredFleet.length === 0 && !isLoading && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
                <Car className="w-8 h-8 text-white/40" />
              </div>
              <p className="text-white/80 text-lg font-medium mb-2">No vehicles found</p>
              <p className="text-white/60 text-sm">Try selecting a different category</p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fleet;