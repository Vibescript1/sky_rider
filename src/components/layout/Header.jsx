import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Fleet", path: "/fleet" },
    { name: "Contact Us", path: "/contact" },
    { name: "Legal & Compliance", path: "/legal-compliance" },
    { name: "Call Now", path: "tel:+919121261234", highlight: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      {/* Main Header */}
      <div className="container mx-auto px-2 sm:px-3 md:px-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group relative">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="relative"
            >
              <img
                src="/logo.png" 
                alt="skyrydr Logo"
                className="h-10 sm:h-12 md:h-14 w-auto object-contain"
              />
            </motion.div>
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center gap-1 bg-[#295DFF] backdrop-blur-sm rounded-full px-3 py-1 border border-blue-300"
            >
              <Shield className="w-3 h-3 text-white" />
              <span className="text-white text-[8px] font-medium">POSH Certified</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation - Right aligned */}
          <nav className="hidden lg:flex items-center gap-1 ml-auto">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="relative group">
                <div
                  className={`px-5 py-3 rounded-xl transition-all duration-300 font-medium text-sm ${
                    location.pathname === link.path
                      ? "text-blue-600 font-semibold"
                      : "text-black hover:text-black"
                  }`}
                >
                  {link.name}
                  {link.highlight && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#4d7aff] to-[#295DFF] rounded-xl -z-10"
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  {location.pathname === link.path && !link.highlight && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-[#295DFF]/20 rounded-xl -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </div>
                <div className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#295DFF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </Link>
            ))}
          </nav>

          {/* CTA Buttons - Removed phone and social media */}
          <div className="hidden md:flex items-center gap-4">
            {/* Dashboard Button */}
            {/* <Link to="/dashboard">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="sm"
                  className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-blue-500/25 border-0 font-semibold px-6 py-2.5 rounded-xl"
                >
                  <User className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10 font-medium text-white">Dashboard</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Button>
              </motion.div>
            </Link> */}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2.5 rounded-xl bg-gray-100 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 ease-out hover:bg-gray-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4 text-gray-700" />
            ) : (
              <Menu className="w-4 h-4 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-xl"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                    link.highlight 
                      ? "text-white bg-gradient-to-r from-[#4d7aff] to-[#295DFF]"
                      : location.pathname === link.path
                        ? "text-[#295DFF] bg-[#295DFF]/10 border-l-4 border-[#295DFF]"
                        : "text-black hover:text-black hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile CTA Section - Removed phone and social media */}
              <div className="flex flex-col gap-4 pt-6 mt-6 border-t border-white/10">
                {/* Dashboard Button */}
                {/* <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className="w-full justify-center py-4 font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0 rounded-xl"
                    >
                      <User className="w-5 h-5 mr-2" />
                      <span className="text-white font-medium">Dashboard</span>
                    </Button>
                  </motion.div>
                </Link> */}
              </div>

              {/* Trust Badge */}
              <div className="flex justify-center pt-4">
                <div className="flex items-center gap-2 bg-white backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200">
                  <Star className="w-3 h-3 text-yellow-400" />
                  <span className="text-gray-600 text-xs font-medium">Rated 4.9/5</span>
                  <Shield className="w-3 h-3 text-blue-400" />
                  <span className="text-gray-600 text-[8px] font-medium">POSH Certified</span>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;