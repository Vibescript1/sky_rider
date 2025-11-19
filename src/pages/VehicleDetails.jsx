import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { fleetData } from "@/utils/mockData";
import { Users, CheckCircle, ArrowLeft } from "lucide-react";
import sedanImage from "@/assets/sedan.jpg";
import suvImage from "@/assets/suv.jpg";
import luxuryImage from "@/assets/luxury.jpg";
import tempoImage from "@/assets/tempo.jpg";

const VehicleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const vehicle = fleetData.find((v) => v.id === Number(id));
  console.log(vehicle, "vehicle details");
  const imageMap = {
    sedan: sedanImage,
    suv: suvImage,
    luxury: luxuryImage,
    van: tempoImage,
  };

  if (!vehicle) {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display font-bold text-4xl text-foreground mb-4">
              Vehicle Not Found
            </h1>
            <Button onClick={() => navigate("/fleet")}>Back to Fleet</Button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/fleet")}
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Fleet
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={vehicle?.image || sedanImage}
                  alt={vehicle.name}
                  className="w-full h-[400x] object-cover" /* h-[500x] */
                />
                <div className="absolute top-6 left-6 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  {vehicle.category.toUpperCase()}
                </div>
              </div>
            </motion.div>

            {/* Details Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <h1 className="font-display font-bold text-5xl text-foreground mb-4">
                  {vehicle.name}
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-5 h-5" />
                  <span>Up to {vehicle.seating} passengers</span>
                </div>
              </div>

              {/* Features */}
              <div className="glass-card-light rounded-2xl p-6">
                <h3 className="font-display font-bold text-xl text-foreground mb-4">
                  Features
                </h3>
                <div className="space-y-3">
                  {vehicle.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="glass-card-light rounded-2xl p-6">
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  Description
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Experience premium comfort and professional service with our{" "}
                  {vehicle.name}. Perfect for {vehicle.seating} passengers, this
                  vehicle combines luxury with reliability. Ideal for corporate
                  travel, airport transfers, and business meetings.
                </p>
              </div>

              {/* Price & Booking */}
              {/* <div className="glass-card-light rounded-2xl p-6">
                <Button
                  onClick={() =>
                    navigate(`/individual-booking?vehicle=${vehicle.id}`)
                  }
                  size="lg"
                  className="w-full bg-[#56B24C] hover:bg-green-700 text-white transition"
                >
                  Book Now
                </Button>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VehicleDetails;
