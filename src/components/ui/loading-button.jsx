import { motion } from "framer-motion";
import { Button } from "./button";
import { LoadingSpinner } from "./loading-spinner";
import { cn } from "@/lib/utils";

const LoadingButton = ({ 
  children, 
  isLoading = false, 
  loadingText = "Loading...",
  className,
  disabled,
  ...props 
}) => {
  return (
    <Button
      className={cn("relative overflow-hidden", className)}
      disabled={disabled || isLoading}
      {...props}
    >
      <motion.div
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="flex items-center"
      >
        {children}
      </motion.div>
      
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <LoadingSpinner variant="default" size="sm" className="mr-2" />
          {loadingText}
        </motion.div>
      )}
    </Button>
  );
};

export { LoadingButton };
