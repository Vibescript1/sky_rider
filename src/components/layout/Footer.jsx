import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Shield,
  Star,
  Award,
  Clock
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex justify-start gap-2 mb-6 items-center">
              <Link to="/" className="flex items-center gap-3 group relative">
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  className="relative"
                >
                  <img
                    src="/skyrydr logo png.png"
                    alt="skyrydr Logo"
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain"
                  />
                </motion.div>
              </Link>
            </div>
            <p className="text-white/70 text-lg mb-6 leading-relaxed">
              Premium corporate transportation solutions with experienced 
              chauffeurs and seamless booking experience.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/company/sky-logistics-hub" },
                { icon: Instagram, href: "https://www.instagram.com/sky_logisticshub/" },
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 hover:bg-blue-500/20 transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4 text-white/70 group-hover:text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", to: "/" },
                { name: "Our Fleet", to: "/fleet" },
                { name: "About Us", to: "/about" },
                { name: "Contact Us", to: "/contact" },
                { name: "Legal & Compliance", to: "/legal-compliance" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-white/70 hover:text-blue-400 hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-white/30 rounded-full group-hover:bg-blue-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full" />
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                "Executive Sedans",
                "Luxury SUVs",
                "Corporate Events",
                "Airport Transfers",
                "Business Meetings",
                "VIP Transportation"
              ].map((service) => (
                <li key={service}>
                  <div className="text-white/70 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 bg-white/30 rounded-full group-hover:bg-cyan-400 transition-colors" />
                    {service}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              Contact Info
            </h3>
            <ul className="space-y-4">
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 group cursor-pointer"
              >
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-white/70 group-hover:text-white transition-colors text-sm leading-relaxed">
                  Plot No. 41-48, Flat No.502, Telecom Nagar, 
                  Gachibowli, Hyderabad, Telangana – 500032
                </span>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 group"
              >
                <Phone className="w-5 h-5 flex-shrink-0 text-green-400 group-hover:scale-110 transition-transform" />
                <a
                  href="tel:+919121261234"
                  className="text-white/70 group-hover:text-white transition-colors hover:underline"
                >
                  +91 91212 61234
                </a>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 group"
              >
                <Mail className="w-5 h-5 flex-shrink-0 text-cyan-400 group-hover:scale-110 transition-transform" />
                <a
                  href="mailto:bookings@skyrydr.com"
                  className="text-white/70 group-hover:text-white transition-colors hover:underline"
                >
                  bookings@skyrydr.com
                </a>
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Legal Links Section */}
        <div className="border-t border-white/10 pt-8 mb-6">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm">
            {[
              { name: "Privacy Policy", to: "/privacy-policy" },
              { name: "Terms & Conditions", to: "/terms-and-conditions" },
              { name: "Legal & Compliance", to: "/legal-compliance" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-white/60 hover:text-blue-400 hover:underline transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center pt-6 border-t border-white/10">
          <p className="text-white/50 text-sm mb-2">
            &copy; {new Date().getFullYear()} Sky Travels and Logistics Private Limited | 
            CIN: U63031TG2019PTC131839 | GSTIN: 36ABBCS8643L1ZU
          </p>
          <p className="text-white/40 text-xs">
            All vehicle images are for representational purposes only. 
            Information shared is used solely for service communication.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;