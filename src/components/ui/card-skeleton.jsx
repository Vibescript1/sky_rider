import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const CardSkeleton = ({
  className,
  variant = "default",
  showAnimation = true,
  ...props
}) => {
  const skeletonVariants = {
    default: "h-64",
    compact: "h-48",
    large: "h-80"
  };

  const pulseAnimation = {
    animate: {
      opacity: [0.5, 1, 0.5],
    },
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <Card className={cn("overflow-hidden", className)} {...props}>
      <div className={cn("relative bg-muted/50", skeletonVariants[variant])}>
        {showAnimation && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </div>
      <CardHeader className="space-y-3">
        <motion.div
          className="h-6 bg-muted rounded-md"
          {...(showAnimation && pulseAnimation)}
        />
        <motion.div
          className="h-4 bg-muted rounded-md w-2/3"
          {...(showAnimation && pulseAnimation)}
        />
      </CardHeader>
      <CardContent className="space-y-3">
        <motion.div
          className="h-4 bg-muted rounded-md"
          {...(showAnimation && pulseAnimation)}
        />
        <motion.div
          className="h-4 bg-muted rounded-md w-4/5"
          {...(showAnimation && pulseAnimation)}
        />
        <motion.div
          className="h-4 bg-muted rounded-md w-3/4"
          {...(showAnimation && pulseAnimation)}
        />
        <div className="flex justify-between items-center pt-4">
          <motion.div
            className="h-8 bg-muted rounded-md w-20"
            {...(showAnimation && pulseAnimation)}
          />
          <motion.div
            className="h-8 bg-muted rounded-md w-24"
            {...(showAnimation && pulseAnimation)}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default CardSkeleton;
