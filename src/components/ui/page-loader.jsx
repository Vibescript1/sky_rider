import { motion, AnimatePresence } from "framer-motion";
import { LoadingSpinner } from "./loading-spinner";
import { cn } from "@/lib/utils";
import { Car } from "lucide-react";

const PageLoader = ({ 
  isLoading = true, 
  variant = "car",
  message = "Welcome to Skyrydr",
  className,
  overlay = true,
  ...props 
}) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "fixed inset-0 z-50 flex flex-col items-center justify-center",
            overlay && "bg-black/90 backdrop-blur-sm",
            className
          )}
          {...props}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col items-center space-y-8 w-full max-w-2xl px-4"
          >
            {/* Moving Car Animation */}
            <div className="w-64 relative h-20 mb-6 mx-auto">
              {/* Road */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700 rounded-full"></div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-600 rounded-full"></div>
              
              {/* Road markings */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 flex justify-between">
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-4 h-0.5 bg-yellow-400 rounded-full"
                  />
                ))}
              </div>
              
              {/* Moving Car */}
              <motion.div
                animate={{ 
                  x: ["-100%", "200%"],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute bottom-2"
              >
                <Car className="w-10 h-10 text-accent" />
              </motion.div>
            </div>
            
            {/* Welcome Message */}
            <div className="text-center space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-2xl font-bold text-white"
              >
                Welcome to
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="text-4xl font-bold bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent"
              >
                Skyrydr
              </motion.h2>
            </div>
            
            {/* Loading Spinner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="flex flex-col items-center"
            >
              <LoadingSpinner variant="car" size="lg" className="mb-4" />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="text-white/80 text-sm font-medium"
              >
                Preparing your journey...
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { PageLoader };
