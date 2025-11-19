import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Star, Users, Award } from "lucide-react";
import { SectionTitle, SectionSubtitle } from "./Typography";
import { colorGradients, backgroundColors, borderColors } from "./ColorPalette";

const ImageSlider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const images = [
    "/images/Amnet_digital_.png",
    "/images/Axelon-Logo.svg",
    "/images/Blaze.png",
    "/images/FT.png",
    "/images/GUS_education_.png",
    "/images/Grid_Dynami__.png",
    "/images/Micron__.png",
    "/images/Persistent__.png",
    "/images/Qualitest__.png",
    "/images/Synechron_.png",
    "/images/WNS_.png"
  ];

  // Create 3 sets for a more seamless loop
  const displayImages = [...images, ...images, ...images];

  const itemWidth = 224; // w-48 (192px) + space-x-8 (32px)
  const singleSetWidth = images.length * itemWidth;
  const totalWidth = displayImages.length * itemWidth;

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      
      {/* Background Elements - Consistent with other sections */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10 mb-8"
          >
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="text-white/90 text-base font-semibold">Trusted by Industry Leaders</span>
          </motion.div>

          <SectionTitle className="text-4xl md:text-5xl lg:text-6xl">
            Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Valued Partners</span>
          </SectionTitle>
          <SectionSubtitle>
            Proudly serving India's leading enterprises with premium corporate transportation solutions
          </SectionSubtitle>
        </motion.div>

        {/* Logo Slider */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-8 py-4"
            animate={{
              x: isInView ? [-singleSetWidth, -singleSetWidth * 2] : [],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            style={{
              width: `${totalWidth}px`,
            }}
          >
            {displayImages.map((image, index) => (
              <motion.div
                key={index}
                className={`flex-shrink-0 w-48 h-28 ${backgroundColors.card} backdrop-blur-sm rounded-2xl ${borderColors.card} p-6 flex items-center justify-center transition-all duration-300 group hover:${backgroundColors.cardHover} hover:${borderColors.cardHover}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 * (index % images.length), duration: 0.5 }}
                whileHover={{
                  y: -5,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <img
                  src={image}
                  alt={`Partner ${(index % images.length) + 1}`}
                  className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Gradient fades */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-white/60 text-lg mb-6">
            Join hundreds of satisfied corporate clients
          </p>
          <motion.div
            className="inline-flex gap-3 text-white/80 text-base font-medium bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Star className="w-5 h-5 text-yellow-400" />
            <span>Enterprise-Grade Solutions • Customized Services • 24/7 Support</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageSlider;