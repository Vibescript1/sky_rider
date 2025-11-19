import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CorporateBookingForm from "@/components/booking/CorporateBookingForm";

const CorporateBooking = () => {
  const [bookingType, setBookingType] = useState("corporate");
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="pt-20 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white/90 text-sm font-medium">Streamlined Corporate Solutions</span>
            </motion.div>

            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-6 leading-tight flex flex-wrap items-center justify-center text-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={bookingType}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block"
                >
                  {bookingType === 'corporate' ? 'Corporate' : 'Individual'}
                </motion.span>
              </AnimatePresence>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-400 ml-0 sm:ml-2 block sm:inline-block w-full sm:w-auto text-center sm:text-left">
                Booking
              </span>
            </h1>
            <p className="hidden sm:block text-lg sm:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Streamlined transportation solutions for your business needs with professional service and premium fleet options.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className=""
          >
            <CorporateBookingForm onBookingTypeChange={setBookingType} initialBookingType={bookingType} />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporateBooking;
