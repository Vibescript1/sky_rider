import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FileText, Shield, CheckCircle, MessageCircle, Award, Users, Building2, Target } from "lucide-react";

const LegalCompliance = () => {
  const sections = [
    {
      title: "Company Overview",
      icon: Building2,
      content: [
        "Sky Logistics Hub Private Limited is a compliant corporate transportation service provider based in India.",
        "While our management team brings over two decades of rich experience in the mobility and logistics industry, this company was operational from 2018.",
        "Company Name: Sky Logistics Hub Private Limited",
        "CIN: U63031TG2019PTC131839",
        "GSTIN: 36ABBCS8643L1ZU"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Service Information",
      icon: Shield,
      content: [
        "All bookings and service engagements are handled directly through official communication channels - not through online transactions or automated systems.",
        "We are committed to maintaining the highest standards of compliance, POSH awareness certification, and safety protocols.",
        "Ensuring a secure and respectful travel environment for every client."
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Privacy & Content Notice",
      icon: CheckCircle,
      content: [
        "All content on this website is for general informational purposes only.",
        "Vehicle images and visuals displayed are for illustration and representational purposes and may not always depict the exact models or configurations used in service.",
        "Sky Logistics respects your privacy. Any information voluntarily shared with us through calls, emails, or contact forms is used solely for communication and service-related purposes.",
        "We do not sell, trade, or disclose personal information to any unauthorized third parties."
      ],
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const complianceFeatures = [
    {
      icon: Shield,
      title: "POSH Certified",
      description: "Fully compliant with Prevention of Sexual Harassment regulations"
    },
    {
      icon: Award,
      title: "Legal Compliance",
      description: "Adherence to all corporate transportation regulations"
    },
    {
      icon: Users,
      title: "Client Confidentiality",
      description: "Strict privacy and data protection protocols"
    },
    {
      icon: Target,
      title: "Safety Standards",
      description: "Highest safety standards for corporate travel"
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
              <Shield className="w-5 h-5 text-blue-400" />
              <span className="text-white/90 text-base font-semibold">Legal & Compliance</span>
            </motion.div>

            <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight">
              Legal <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Compliance</span>
            </h1>
            <p className="text-white/70 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
              For official correspondence or concerns, please contact us through the details provided on our Contact Us page.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="font-bold text-4xl md:text-6xl text-white mb-8 leading-tight">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Commitment</span>
            </h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              Dedicated to maintaining the highest standards of compliance and corporate governance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 text-center hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-bold text-xl text-white mb-4">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <motion.div 
                key={section.title}
                initial={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative"
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${section.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                
                <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 lg:p-12 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-6 mb-8">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-all duration-300`}
                    >
                      <section.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h2 className="font-bold text-3xl lg:text-4xl text-white mb-4 group-hover:text-white transition-colors">
                        {section.title}
                      </h2>
                      <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <ul className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <motion.li 
                        key={itemIndex}
                        initial={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.15) + (itemIndex * 0.1) }}
                        className="flex items-start gap-4 group/item"
                      >
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                        <p className="text-white/80 text-lg leading-relaxed group-hover/item:text-white transition-colors">
                          {item}
                        </p>
                      </motion.li>
                    ))}
                  </ul>
                </div>
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
                Need Legal Documentation?
              </h2>
              <p className="text-white/70 text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
                For official correspondence, compliance documents, or legal inquiries, 
                please contact us through our official channels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Legal Team
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
                  onClick={() => window.location.href = 'mailto:bookings@skylogisticshub.com'}
                >
                  Email Documentation
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalCompliance;