import { motion } from "framer-motion";
import { Users, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import CardSkeleton from "@/components/ui/card-skeleton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FleetCard = ({ vehicle, isLoading = false, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  // Show skeleton loading state
  if (isLoading) {
    return <CardSkeleton className="glass-card-light rounded-2xl" />;
  }

  // Staggered animation delays based on index
  const staggerDelay = index * 0.1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: staggerDelay,
        ease: "easeOut",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -12 }}
      className="glass-card-light rounded-2xl overflow-hidden smooth-transition cursor-pointer hover:glow-effect h-full flex flex-col"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {/* Category Badge */}
        <motion.div
          className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: staggerDelay + 0.2 }}
        >
          {vehicle.category.toUpperCase()}
        </motion.div>

        {/* Rating */}
        <motion.div
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: staggerDelay + 0.3 }}
        >
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-semibold">4.8</span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <motion.h3
          className="font-display font-bold text-2xl text-foreground mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: staggerDelay + 0.4 }}
        >
          {vehicle.name}
        </motion.h3>

        {/* Seating */}
        <motion.div
          className="flex items-center gap-2 text-muted-foreground mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: staggerDelay + 0.5 }}
        >
          <Users className="w-4 h-4" />
          <span className="text-sm">Up to {vehicle.seating} passengers</span>
        </motion.div>

        {/* Features */}
        <motion.div
          className="space-y-2 mb-6 flex-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: staggerDelay + 0.6 }}
        >
          {vehicle.features.map((feature, featureIndex) => (
            <motion.div
              key={featureIndex}
              className="flex items-center gap-2 text-sm text-muted-foreground"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: staggerDelay + 0.7 + featureIndex * 0.05 }}
            >
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>{feature}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="pt-4 border-t mt-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: staggerDelay + 0.8 }}
        >
          <Button
            className="w-full rounded-xl bg-[#56B24C] hover:bg-green-700 text-white transition"
            onClick={() => navigate(`/vehicle/${vehicle.id}`)}
          >
            View Details
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FleetCard;
