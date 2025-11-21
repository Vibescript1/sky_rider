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
      <div className="py-4 bg-gradient-to-br from-[#00030f] via-[#000a20] to-[#00030f]">
        {children}
      </div>
    </motion.div>
  );
};

export default SectionWrapper;