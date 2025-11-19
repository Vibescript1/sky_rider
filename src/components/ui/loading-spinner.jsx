import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const LoadingSpinner = ({ 
  variant = "default", 
  size = "md", 
  className,
  ...props 
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  const variants = {
    default: {
      animate: { rotate: 360 },
      transition: { duration: 1, repeat: Infinity, ease: "linear" }
    },
    pulse: {
      animate: { scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] },
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
    },
    bounce: {
      animate: { y: [0, -10, 0] },
      transition: { duration: 0.8, repeat: Infinity, ease: "easeInOut" }
    },
    dots: {
      animate: { scale: [1, 1.5, 1] },
      transition: { duration: 0.6, repeat: Infinity, ease: "easeInOut" }
    }
  };

  if (variant === "dots") {
    return (
      <div className={cn("flex space-x-1", className)} {...props}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={cn("bg-accent rounded-full", sizeClasses[size])}
            animate={variants.dots.animate}
            transition={{
              ...variants.dots.transition,
              delay: i * 0.2
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === "car") {
    return (
      <div className={cn("relative", sizeClasses[size], className)} {...props}>
        {/* Car body */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-8 h-4 bg-accent rounded-sm"></div>
        </motion.div>
        
        {/* Car wheels */}
        <motion.div 
          className="absolute bottom-0 left-1 w-2 h-2 bg-gray-800 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-0 right-1 w-2 h-2 bg-gray-800 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Motion effect */}
        <motion.div
          className="absolute inset-0 border-2 border-accent/30 rounded-full"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    );
  }

  return (
    <motion.div
      className={cn(
        "border-4 border-accent/20 border-t-accent rounded-full",
        sizeClasses[size],
        className
      )}
      animate={variants[variant].animate}
      transition={variants[variant].transition}
      {...props}
    />
  );
};

export { LoadingSpinner };
