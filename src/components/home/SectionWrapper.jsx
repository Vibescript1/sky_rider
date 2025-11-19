import { motion } from "framer-motion";

const SectionWrapper = ({ children, className = "", id }) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.7,
        ease: "easeOut"
      }}
      className={`py-0 ${className}`}
      // Prevent touch event interference
      style={{ touchAction: 'auto' }}
    >
      <div className="py-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {children}
      </div>
    </motion.div>
  );
};

export default SectionWrapper;