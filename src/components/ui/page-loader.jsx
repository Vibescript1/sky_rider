import { motion, AnimatePresence } from "framer-motion";
import { LoadingSpinner } from "./loading-spinner";
import { cn } from "@/lib/utils";

const PageLoader = ({ 
  isLoading = true, 
  variant = "car",
  message = "Loading...",
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
            overlay && "bg-black/80 backdrop-blur-sm",
            className
          )}
          {...props}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col items-center space-y-4"
          >
            <LoadingSpinner variant={variant} size="xl" />
            
            {message && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-white text-lg font-medium"
              >
                {message}
              </motion.p>
            )}
            
            {/* Animated progress bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-32 h-1 bg-accent/30 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-1/2 bg-accent rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { PageLoader };
