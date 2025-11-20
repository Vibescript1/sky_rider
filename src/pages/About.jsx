import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, Phone, Award, Users, Clock, MapPin, Star, TrendingUp, Heart, ArrowRight, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      Icon: Shield,
      title: "Safety & Compliance",
      description: "POSH-certified operations with zero-tolerance safety policies",
      color: "from-blue-500 to-cyan-500"
    },
    {
      Icon: Award,
      title: "Excellence",
      description: "Consistent 4.9/5 service rating across all client engagements",
      color: "from-green-500 to-emerald-500"
    },
    {
      Icon: Users,
      title: "Client First",
      description: "Dedicated account managers and 24/7 personalized support",
      color: "from-amber-500 to-orange-500"
    },
    {
      Icon: Zap,
      title: "Innovation",
      description: "Cutting-edge technology for seamless fleet management",
      color: "from-purple-500 to-indigo-500"
    },
    {
      Icon: Target,
      title: "Reliability",
      description: "99.2% on-time performance with premium vehicle maintenance",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const milestones = [
    { year: "2018", event: "Company Founded", achievement: "Started with 5 luxury sedans" },
    { year: "2020", event: "National Expansion", achievement: "Expanded to 10+ cities" },
    { year: "2022", event: "Tech Revolution", achievement: "Launched digital platform" },
    { year: "2024", event: "Market Leadership", achievement: "500+ corporate clients" }
  ];

  const teamMembers = [
    {
      name: "Alex Morgan",
      role: "Founder & CEO",
      bio: "15+ years in transportation & logistics with a passion for innovation",
      image: "/placeholder-team-1.jpg"
    },
    {
      name: "Sam Rivera",
      role: "Chief Operations Officer",
      bio: "Operations expert focused on efficiency and customer satisfaction",
      image: "/placeholder-team-2.jpg"
    },
    {
      name: "Taylor Kim",
      role: "Head of Technology",
      bio: "Building scalable platforms for seamless transportation experiences",
      image: "/placeholder-team-3.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
              <TrendingUp className="w-5 h-5 text-yellow-400" />
              <span className="text-white/90 text-base font-semibold">India's Premium Corporate Transportation</span>
            </motion.div>
            
            <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight">
              Redefining <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Corporate Travel</span>
            </h1>
            <p className="text-white/70 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-12">
              Since 2018, we've been transforming business transportation with premium fleet solutions, 
              cutting-edge technology, and unwavering commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                initial={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 mb-6"
              >
                <Target className="w-4 h-4 text-blue-400" />
                <span className="text-white/80 text-sm font-medium">Our Journey</span>
              </motion.div>

              <h2 className="font-bold text-4xl md:text-6xl text-white mb-8 leading-tight">
                Building the Future of <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Business Mobility</span>
              </h2>
              
              <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                <p>
                  Founded in 2018 with a vision to revolutionize corporate transportation, 
                  <span className="text-white font-semibold"> skyrydr</span> has emerged as 
                  India's most trusted partner for premium business travel solutions.
                </p>
                <p>
                  From our humble beginnings with a small fleet of luxury sedans, we've grown 
                  into a comprehensive transportation ecosystem serving Fortune 500 companies, 
                  dynamic startups, and everything in between.
                </p>
                <p>
                  Our relentless focus on innovation, safety, and exceptional service has 
                  earned us the trust of industry leaders across the nation.
                </p>
              </div>

              {/* Performance Metrics */}
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-8 mt-8 pt-8 border-t border-white/10"
              >
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white font-medium">4.9/5 Rating</span>
                </div>
                <div className="w-px h-6 bg-white/20"></div>
                <div className="text-white font-medium">99.2% On-time Performance</div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Milestones Timeline */}
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-6 group cursor-pointer"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                        {milestone.year}
                      </div>
                      <div className="w-0.5 h-full bg-white/10 mt-2 group-last:hidden" />
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-300 transition-colors">
                        {milestone.event}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {milestone.achievement}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 mb-6"
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span className="text-white/80 text-sm font-medium">Our Foundation</span>
            </motion.div>

            <h2 className="font-bold text-4xl md:text-6xl text-white mb-8 leading-tight">
              Core <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              The principles that guide every decision and drive our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                
                <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 text-center hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <value.Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-bold text-xl text-white mb-4 group-hover:text-white transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors mt-auto">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="font-bold text-4xl md:text-6xl text-white mb-8 leading-tight">
              Why <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Choose Us</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: "POSH Certified",
                description: "Fully compliant with POSH regulations ensuring safe and respectful transportation"
              },
              {
                icon: MapPin,
                title: "GPS Monitoring",
                description: "Real-time fleet tracking for safety, optimization, and peace of mind"
              },
              {
                icon: Users,
                title: "Expert Chauffeurs",
                description: "Professional, trained drivers with extensive experience and background checks"
              },
              {
                icon: Award,
                title: "Premium Fleet",
                description: "Luxury vehicles maintained to the highest standards for executive comfort"
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description: "Round-the-clock dedicated account management and customer support"
              },
              {
                icon: Heart,
                title: "Client Focused",
                description: "Personalized services tailored to your specific corporate requirements"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-bold text-xl text-white mb-4">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 relative bg-gradient-to-b from-slate-800/50 to-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 1 }}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 mb-6"
            >
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-white/80 text-sm font-medium">Leadership Team</span>
            </motion.div>

            <h2 className="font-bold text-4xl md:text-6xl text-white mb-8 leading-tight">
              Meet Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Leadership</span>
            </h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              The visionary minds driving innovation and excellence at skyrydr
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 group text-center"
              >
                <div className="mx-auto mb-6 relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1 mx-auto">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-bold text-xl text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-medium mb-4">{member.role}</p>
                <p className="text-white/70 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-12 lg:p-16 max-w-4xl mx-auto">
              <h2 className="font-bold text-4xl md:text-5xl text-white mb-6">
                Ready to Transform Your Corporate Travel?
              </h2>
              <p className="text-white/70 text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
                Join 500+ leading companies that trust skyrydr for their premium transportation needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919121261234">
                  <Button
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group"
                  >
                    <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Call Now
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <Button
                  variant="outline"
                  className="border-white/30 text-black font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
                  onClick={() => navigate('/fleet')}
                >
                  Explore Fleet
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;