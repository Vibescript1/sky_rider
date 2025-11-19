import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Award, TrendingUp, Play, Pause, Building2 } from "lucide-react";
import { testimonials } from "@/utils/mockData";
import { useState, useEffect } from "react";
import { SectionTitle, SectionSubtitle } from "./Typography";
import { colorGradients, backgroundColors, borderColors } from "./ColorPalette";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  // Show 3 testimonials at a time - 1 for main box and 2 for review boxes
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextTestimonials = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevTestimonials = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentTestimonials = () => {
    const startIndex = currentIndex * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const sliced = testimonials.slice(startIndex, endIndex);
    
    // If we don't have enough testimonials for the current page,
    // wrap around to the beginning of the array
    if (sliced.length < itemsPerPage) {
      const remaining = itemsPerPage - sliced.length;
      return [...sliced, ...testimonials.slice(0, remaining)];
    }
    
    return sliced;
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonials();
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  /**
   * Animation variants for the slide transition
   * @param {number} direction - The direction of the slide (1 for right, -1 for left)
   */
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements - Consistent with other sections */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10 mb-8"
          >
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="text-white/90 text-base font-semibold">Rated 4.9/5 by Corporate Clients</span>
            <TrendingUp className="w-5 h-5 text-green-400" />
          </motion.div>

          <SectionTitle className="text-4xl md:text-5xl lg:text-6xl">
            Voices of <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Excellence</span>
          </SectionTitle>
          <SectionSubtitle>
            Discover why industry leaders trust us for their premium corporate transportation needs
          </SectionSubtitle>
        </motion.div>

        {/* Main Testimonials Section */}
        <div className="relative max-w-6xl mx-auto mb-16">
          {/* Big Top Testimonial Box */}
          <div className="relative mb-12">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`main-${currentIndex}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="w-full"
              >
                <div className={`${backgroundColors.card} backdrop-blur-sm rounded-3xl ${borderColors.card} p-8 lg:p-12 relative overflow-hidden group hover:shadow-2xl transition-all duration-500`}>
                  <div className="absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 bg-blue-400/20 rounded-full filter blur-3xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-6 h-6 ${
                              i < testimonials[currentIndex * itemsPerPage]?.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'fill-white/20 text-white/20'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-yellow-400 font-medium">
                        {testimonials[currentIndex * itemsPerPage]?.rating.toFixed(1)}/5.0
                      </span>
                    </div>

                    <blockquote className="text-white text-2xl lg:text-4xl leading-relaxed font-medium mb-8 max-w-4xl">
                      "{testimonials[currentIndex * itemsPerPage]?.content}"
                    </blockquote>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-12">
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300">
                          {testimonials[currentIndex * itemsPerPage]?.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-white font-bold text-xl">
                            {testimonials[currentIndex * itemsPerPage]?.name}
                          </div>
                          <div className="text-white/60 text-lg">
                            {testimonials[currentIndex * itemsPerPage]?.role}
                          </div>
                          <div className="text-blue-300 font-semibold text-lg">
                            {testimonials[currentIndex * itemsPerPage]?.company}
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <Building2 className="w-12 h-12 text-white/20" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Two Review Boxes Below */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`reviews-${currentIndex}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            >
              {getCurrentTestimonials().slice(1, 3).map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.2 }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className={`${backgroundColors.card} backdrop-blur-sm rounded-2xl ${borderColors.card} p-8 hover:bg-gradient-to-br hover:from-blue-500/5 hover:to-cyan-500/5 transition-all duration-500 group h-full flex flex-col`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'fill-white/20 text-white/20'
                          }`}
                        />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-white/20 group-hover:text-blue-400/50 transition-colors duration-300" />
                  </div>
                  
                  <blockquote className="text-white/80 text-lg leading-relaxed mb-6 flex-grow">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="border-t border-white/10 pt-4 mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-white font-semibold">{testimonial.name}</div>
                        <div className="text-white/60">{testimonial.role}</div>
                        <div className="text-blue-300 text-sm font-medium">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Centered Navigation Controls */}
          <div className="flex flex-col items-center gap-6 mt-12">
            {/* Navigation Dots */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-blue-400 w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevTestimonials}
                className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:text-blue-300" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextTestimonials}
                className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:text-blue-300" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;