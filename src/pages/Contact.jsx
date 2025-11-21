import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Users,
  Shield,
  Star,
  Lock,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default markers in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const Contact = () => {
  const { toast } = useToast();
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Initialize map only after component mounts
    if (mapRef.current && !mapInstanceRef.current) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        try {
          // Hyderabad coordinates
          const hyderabadCoords = [17.4488, 78.3906];

          // Create map instance with proper options
          const map = L.map(mapRef.current, {
            center: hyderabadCoords,
            zoom: 15,
            zoomControl: true,
            scrollWheelZoom: true,
          });

          mapInstanceRef.current = map;

          // Add tile layer with correct attribution
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19,
          }).addTo(map);

          // Create custom icon
          const customIcon = new L.Icon({
            iconUrl:
              "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
            iconRetinaUrl:
              "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
            shadowUrl:
              "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],
          });

          // Add marker for business location
          const marker = L.marker(hyderabadCoords, { icon: customIcon }).addTo(
            map
          );
          marker
            .bindPopup(
              `
            <div style="text-align: center; padding: 8px;">
              <strong style="color: #2563eb;">skyrydr HQ</strong><br/>
              <span style="color: #6b7280; font-size: 12px;">Gachibowli, Hyderabad, India</span>
            </div>
          `
            )
            .openPopup();

          // Force map resize after initialization
          setTimeout(() => {
            map.invalidateSize();
          }, 100);
        } catch (error) {
          console.error("Error initializing map:", error);
        }
      }, 100);
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Add resize effect to handle map container size changes
  useEffect(() => {
    const handleResize = () => {
      if (mapInstanceRef.current) {
        setTimeout(() => {
          mapInstanceRef.current.invalidateSize();
        }, 300);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = {
      access_key: import.meta.env.VITE_WEB3FORM_KEY,
      subject: `New Contact Form Submission from ${formData.name}`,
      from_name: formData.name,
      email: formData.email,
      replyto: formData.email,
      message: `
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone || "Not provided"}
        Message: ${formData.message}
      `,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataToSend),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours.",
          duration: 4000,
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast({
          title: "Failed to Send",
          description: "Something went wrong. Please try again.",
          duration: 4000,
        });
        console.error("Failed to send:", result);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting the form.",
        duration: 4000,
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      Icon: MapPin,
      title: "Visit Our Office",
      content:
        "Plot No. 41-48, Flat No.502, Telecom Nagar, Gachibowli, Hyderabad, Telangana – 500032",
      description: "Headquarters - Schedule a meeting",
      color: "from-blue-500 to-cyan-500",
      link: "https://maps.app.goo.gl/MPDkQyncBuYd2p246",
    },
    {
      Icon: Phone,
      title: "Call Us Directly",
      content: "+91 91212 61234",
      description: "24/7 Customer Support Line",
      color: "from-green-500 to-emerald-500",
      link: "tel:+919121261234",
    },
    {
      Icon: Mail,
      title: "Email Us",
      content: "bookings@skyrydr.com",
      description: "Quick response guaranteed",
      color: "from-purple-500 to-indigo-500",
      link: "mailto:bookings@skyrydr.com",
    },
    {
      Icon: Clock,
      title: "Business Hours",
      content: "Mon - Sun: 24/7",
      description: "Always available for you",
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00030f] via-[#000a20] to-[#00030f]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-lg rounded-full px-6 py-3 border border-white/10 mb-8"
            >
              <MessageCircle className="w-5 h-5 text-blue-400" />
              <span className="text-white/90 text-base font-semibold">
                Get In Touch
              </span>
            </motion.div>

            <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight">
              Contact{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Us
              </span>
            </h1>
            <p className="text-white/70 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-12">
              Experience premium corporate travel with our executive
              transportation services. Contact our team for custom mobility
              solutions tailored to your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="font-bold text-4xl md:text-6xl text-white mb-8 leading-tight">
              Get in{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              Reach out to us for any inquiries or to book our premium
              transportation services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {contactInfo.map((info, index) =>
              info.link ? (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    info.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Background Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${info.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  />

                  <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 text-center hover:bg-white/10 transition-all duration-300 h-full">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300`}
                    >
                      <info.Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="font-bold text-xl text-white mb-4 group-hover:text-white transition-colors">
                      {info.title}
                    </h3>
                    <p className="text-white font-medium text-lg mb-2">
                      {info.content}
                    </p>
                    <p className="text-white/60 text-sm">{info.description}</p>
                  </div>
                </motion.a>
              ) : (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Background Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${info.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  />

                  <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 text-center hover:bg-white/10 transition-all duration-300 h-full">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300`}
                    >
                      <info.Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="font-bold text-xl text-white mb-4 group-hover:text-white transition-colors">
                      {info.title}
                    </h3>
                    <p className="text-white font-medium text-lg mb-2">
                      {info.content}
                    </p>
                    <p className="text-white/60 text-sm">{info.description}</p>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Map and Form Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="h-full"
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-8 lg:p-12 h-full flex flex-col">
                <div className="text-center mb-8">
                  <h2 className="font-bold text-3xl lg:text-4xl text-white mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-white/70 text-lg">
                    Fill out the form below and we'll get back to you within 24
                    hours
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 flex-1 flex flex-col"
                >
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label
                        htmlFor="name"
                        className="text-white/80 text-sm font-semibold"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="h-12 bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-blue-400"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label
                        htmlFor="email"
                        className="text-white/80 text-sm font-semibold"
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="h-12 bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-blue-400"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label
                        htmlFor="phone"
                        className="text-white/80 text-sm font-semibold"
                      >
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="h-12 bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-blue-400"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label
                        htmlFor="message"
                        className="text-white/80 text-sm font-semibold"
                      >
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please provide detailed information about your inquiry..."
                        className="min-h-[140px] resize-none bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-blue-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Button
                      type="submit"
                      className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="h-full"
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-8 h-full flex flex-col">
                <h3 className="font-bold text-2xl text-white mb-6 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  Our Location
                </h3>
                <div
                  ref={mapRef}
                  className="w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 z-0"
                  style={{ minHeight: '400px' }}
                />
                <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-white/80 text-sm leading-relaxed">
                    <strong className="text-white">skyrydr HQ</strong>
                    <br />
                    Plot No. 41-48, Flat No.502, Telecom Nagar, Gachibowli,
                    Hyderabad, Telangana – 500032
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}

      <Footer />
    </div>
  );
};

export default Contact;
