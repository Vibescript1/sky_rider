import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Star, Shield, Wifi, ArrowRight, Clock, MapPin, Zap } from "lucide-react";
import { SectionTitle, SectionSubtitle, SectionBadge } from "./Typography";
import { colorGradients, backgroundColors, borderColors } from "./ColorPalette";

const FleetShowcase = () => {
  const showcaseFleet = [
    {
      id: 1,
      name: "Executive Sedan",
      category: "Business",
      seating: 4,
      rating: 4.9,
      price: 2500,
      description: "Perfect for corporate meetings and business travel",
      features: ["Professional Driver", "AC", "GPS Tracking", "Wi-Fi"],
      image: "https://media.istockphoto.com/id/170107445/photo/white-smart-car.jpg?s=612x612&w=0&k=20&c=PRHWIYHunkjEy0K8CusBaNc-KHgF_s0sXxNHMmCuRwA=",
      available: true,
      popular: true
    },
    {
      id: 2,
      name: "Luxury SUV",
      category: "Premium",
      seating: 6,
      rating: 4.8,
      price: 3500,
      description: "Spacious comfort for executive groups and clients",
      features: ["Extra Luggage Space", "Premium Sound", "Climate Control", "Wi-Fi"],
      image: "/b844c2eb-f43e-432a-98e4-1275ec84b454.jpg",
      available: true,
      popular: false
    },
    {
      id: 3,
      name: "BMW 7 Series",
      category: "Executive",
      seating: 4,
      rating: 5.0,
      price: 4500,
      description: "Ultimate luxury experience for VIP executives",
      features: ["Champagne Service", "Massage Seats", "Privacy Glass", "Wi-Fi"],
      image: "/bmw11.png",
      available: true,
      popular: true
    },
  ];

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
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionBadge icon={Zap}>
            Premium Fleet
          </SectionBadge>
          <SectionTitle>
            Choose Your <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Premium Ride</span>
          </SectionTitle>
          <SectionSubtitle>
            Experience corporate travel redefined with our meticulously maintained luxury vehicles
          </SectionSubtitle>
        </motion.div>

        {/* Fleet Cards - Horizontal Layout */}
        <div className="space-y-8 mb-16">
          {showcaseFleet.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className={`group relative ${backgroundColors.card} rounded-3xl ${borderColors.card} backdrop-blur-sm overflow-hidden hover:${backgroundColors.cardHover} transition-all duration-500 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex-row`}
            >
              {/* Image Section */}
              <div className="lg:w-2/5 relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="relative h-64 lg:h-full overflow-hidden"
                >
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                  
                  {/* Popular Badge */}
                  {vehicle.popular && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  {/* Availability Badge */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-white">
                    {vehicle.available ? "Available Now" : "Booked"}
                  </div>
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="lg:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-2xl text-white group-hover:text-cyan-400 transition-colors">
                      {vehicle.name}
                    </h3>
                    <div className="flex items-center gap-1 bg-white/10 rounded-full px-3 py-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-white text-sm font-semibold">
                        {vehicle.rating}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <span className={`bg-blue-500/20 text-blue-300 text-sm px-3 py-1 rounded-full ${borderColors.cardHover}`}>
                      {vehicle.category}
                    </span>
                    <div className="flex items-center gap-1 text-slate-300 text-sm">
                      <Users className="w-4 h-4" />
                      <span>{vehicle.seating} seats</span>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {vehicle.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="pt-6 border-t border-white/10">
                  <div className="text-2xl font-bold text-white">
                    {vehicle.available ? "Available" : "Booked"}
                  </div>
                  <div className="text-slate-400 text-sm">Ready for immediate booking</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          
          <div className="relative z-10 p-12 text-center">
            <h3 className="font-bold text-3xl md:text-4xl text-white mb-4">
              Ready for Executive Travel?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Discover our complete fleet of luxury vehicles tailored for corporate excellence and VIP transportation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/fleet">
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-slate-100 font-semibold px-8 py-3 rounded-full transition-all duration-200 group"
                >
                  Explore Full Fleet
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-full transition-all duration-200"
                >
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default FleetShowcase;