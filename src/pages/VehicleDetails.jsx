import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { fleetData } from "@/utils/mockData";
import { Users, CheckCircle, ArrowLeft, Fuel, Zap, Luggage, Car } from "lucide-react";

const VehicleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const vehicle = fleetData.find((v) => v.id === Number(id));

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <Header />
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display font-bold text-4xl text-white mb-4">
              Vehicle Not Found
            </h1>
            <Button 
              onClick={() => navigate("/fleet")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold"
            >
              Back to Fleet
            </Button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // Determine vehicle category color
  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case 'sedan': return 'from-blue-500 to-cyan-500';
      case 'suv': return 'from-green-500 to-emerald-500';
      case 'luxury': return 'from-purple-500 to-pink-500';
      case 'van': return 'from-amber-500 to-orange-500';
      case 'bus': return 'from-red-500 to-orange-500';
      default: return 'from-gray-500 to-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/fleet")}
            className="mb-8 text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Fleet
          </Button>

          <div className="text-center mb-12">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-3">
              {vehicle.name}
            </h1>
            <div className="flex justify-center items-center gap-3 text-white/80 mb-6">
              <div className="flex items-center gap-1">
                <Users className="w-5 h-5" />
                <span>Up to {vehicle.seating} passengers</span>
              </div>
              <div className="w-1 h-1 bg-white/50 rounded-full"></div>
              <div className="flex items-center gap-1">
                <Luggage className="w-5 h-5" />
                <span>{vehicle.baggage} bags</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-80 object-cover"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/600x400/1e293b/94a3b8?text=Vehicle+Image';
                  }}
                />
                <div className={`absolute top-6 left-6 bg-gradient-to-r ${getCategoryColor(vehicle.category)} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                  {vehicle.category.toUpperCase()}
                </div>
                <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {vehicle.type}
                </div>
              </div>
            </motion.div>

            {/* Details Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >

              {/* Description */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h3 className="font-display font-bold text-xl text-white mb-4">
                  About This Vehicle
                </h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Experience premium comfort and professional service with our {vehicle.name}. 
                  Perfect for {vehicle.seating} passengers, this vehicle combines luxury with reliability. 
                  Ideal for corporate travel, airport transfers, and business meetings.
                </p>
                <p className="text-white/70 text-sm">
                  All our vehicles are regularly maintained and sanitized for your safety and comfort.
                </p>
              </div>

              {/* Features */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h3 className="font-display font-bold text-xl text-white mb-4">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {vehicle.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VehicleDetails;
