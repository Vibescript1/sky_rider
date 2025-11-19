import { motion } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const CallButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const phoneNumber = '+919121261234'; // Using the number from the header
    window.open(`tel:${phoneNumber}`, '_self');
  };

  // Hide button on scroll down, show on scroll up
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-24 z-50 bg-blue-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{ 
        y: isVisible ? [0, -5, 0] : [0, 20],
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8
      }}
      transition={{
        y: {
          duration: 2,
          repeat: isVisible ? Infinity : 0,
          repeatType: 'loop',
          ease: "easeInOut"
        },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }}
      aria-label="Call us"
    >
      <FaPhoneAlt className="w-6 h-6 sm:w-8 sm:h-8" />
      
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          x: isHovered ? 0 : 10
        }}
        className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap pointer-events-none"
      >
        Call us now!
        {/* Tooltip arrow */}
        <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-y-2 border-y-transparent"></div>
      </motion.div>

      {/* Pulse ring effect */}
      <motion.div
        className="absolute inset-0 border-2 border-blue-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
    </motion.button>
  );
};

export default CallButton;