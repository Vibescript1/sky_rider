import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const EnhancedSkeleton = ({ 
  variant = "default",
  className, 
  children,
  ...props 
}) => {
  const variants = {
    default: {
      animate: { opacity: [0.5, 1, 0.5] },
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
    },
    wave: {
      animate: { 
        background: [
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)"
        ],
        backgroundPosition: ["-200px 0", "calc(200px + 100%) 0"]
      },
      transition: { duration: 1.5, repeat: Infinity, ease: "linear" }
    },
    shimmer: {
      animate: {
        background: [
          "linear-gradient(110deg, #e2e8f0 8%, #f1f5f9 18%, #e2e8f0 33%)",
          "linear-gradient(110deg, #f1f5f9 8%, #e2e8f0 18%, #f1f5f9 33%)"
        ]
      },
      transition: { duration: 1.2, repeat: Infinity, ease: "linear" }
    },
    pulse: {
      animate: { scale: [1, 1.02, 1] },
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    }
  };

  if (variant === "card") {
    return (
      <motion.div
        className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
        {...variants.default}
        {...props}
      >
        <div className="p-6 space-y-4">
          <motion.div 
            className="h-4 bg-muted rounded animate-pulse"
            {...variants.wave}
          />
          <motion.div 
            className="h-4 bg-muted rounded w-3/4 animate-pulse"
            {...variants.wave}
          />
          <motion.div 
            className="h-8 bg-muted rounded animate-pulse"
            {...variants.wave}
          />
        </div>
      </motion.div>
    );
  }

  if (variant === "text-block") {
    return (
      <div className={cn("space-y-2", className)} {...props}>
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={cn(
              "h-4 bg-muted rounded animate-pulse",
              i === 2 && "w-3/4"
            )}
            {...variants.wave}
            transition={{
              ...variants.wave.transition,
              delay: i * 0.1
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className={cn("rounded-md bg-muted", className)}
      {...variants[variant]}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export { EnhancedSkeleton };
