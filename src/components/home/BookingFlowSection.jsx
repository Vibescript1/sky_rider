import { motion } from "framer-motion";
import { Building2, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const bookingSteps = [
  {
    step: 1,
    icon: Building2,
    title: "Company Information",
    description: "Tell us about your company and primary contact details",
    details: ["Company name & contact person", "Employee count & requirements", "Contact information"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    step: 2,
    icon: MapPin,
    title: "Trip Details",
    description: "Specify your transportation needs and comfort preferences",
    details: ["Pickup & drop locations", "Date & time preferences", "Vehicle type selection"],
    color: "from-[#EE9236] to-orange-600"
  },
  {
    step: 3,
    icon: CheckCircle,
    title: "Confirm & Submit",
    description: "Review your details and submit your booking request",
    details: ["Review all information", "Submit booking request", "Receive confirmation"],
    color: "from-emerald-500 to-green-500"
  }
];

const BookingFlowSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          {/* <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Effortless Booking Experience
          </motion.div> */}
          
          <h2 className="font-display font-bold text-4xl md:text-6xl text-slate-900 dark:text-white mb-6">
            Effortless <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Booking Experience</span>
          </h2>
          
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Transform your corporate transportation with our intuitive three-step booking system.
            Save time, eliminate hassles, and ensure reliable transportation for every business journey.
          </p>
        </motion.div>

        {/* Booking Steps */}
        <div className="relative max-w-7xl mx-auto">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-800 to-transparent z-0" />
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 z-10 scale-x-0 animate-connectionLine" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {bookingSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-20 group"
              >
                {/* Main Card Container */}
                <div className="relative h-full">
                  {/* Background Card */}
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="relative bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-3xl p-6 h-full shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-200/60 dark:border-slate-700/60 group-hover:shadow-2xl group-hover:shadow-slate-300/20 dark:group-hover:shadow-slate-900/40 transition-all duration-500"
                  >
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                    {/* Step Number and Icon Container */}
                    <div className="flex items-center justify-between mb-6">
                      {/* Icon Container */}
                      <div className={`flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-br ${step.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}>
                        <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-slate-700 dark:text-slate-300 group-hover:scale-110 transition-transform duration-300" />
                      </div>

                      {/* Step Number Badge */}
                      <div className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${step.color} text-white font-bold text-base sm:text-xl shadow-lg shadow-slate-900/20 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                        {step.step}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="font-bold text-2xl text-slate-900 dark:text-white leading-tight group-hover:text-slate-800 dark:group-hover:text-slate-100 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Details List */}
                    <div className="mt-6 space-y-4">
                      {step.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          initial={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4 }}
                          className="flex items-start gap-3"
                        >
                          <span className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                            {detail}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Bottom Accent Line */}
                    <div className={`absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r ${step.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
      </div>
      <style jsx>{`
        @keyframes connectionLine {
          0% { transform: scaleX(0); transform-origin: left; }
          50% { transform: scaleX(1); transform-origin: left; }
          51% { transform-origin: right; }
          100% { transform: scaleX(0); transform-origin: right; }
        }
        .animate-connectionLine {
          animation: connectionLine 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default BookingFlowSection;