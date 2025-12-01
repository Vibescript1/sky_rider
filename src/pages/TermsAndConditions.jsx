import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FileText, AlertTriangle, CheckCircle, Clock, CreditCard, MapPin, Users, Shield } from "lucide-react";

const TermsAndConditions = () => {
  const sections = [
    {
      title: "Payment Terms and Conditions",
      icon: CreditCard,
      content: [
        "The customer shall pay the car rental fare as per the applicable rates and payment schedules mentioned on the website of skyrydr at the time of booking. The customer shall also pay parking charges, toll-charges, service tax, state tax and any other fee or levy presently payable or imposed hereinafter under applicable law/s for availing the car rental services.",
        "The payment has to be transferred to the skyrydr account for the transaction to be completed. The client will have the responsibility to confirm the transaction with skyrydr and send all relevant details and proof to confirm the same.",
        "The billing shall be done after the completion of the transaction and the bill shall be sent through email. The client shall pay the amount communicated on email through the payment gateway and shall send us the confirmation of the transaction separately through email to info@skyrydr.com.",
        "In case of a payment made before the commencement of a booking, the amount shall be treated as advance / part payment and the final amount nett of the advance paid shall be cleared by the client as per the amount intimated to the client on email.",
        "The transaction / payment has to be made within the office hours of 0930 to 1900 hrs on a monday to saturday basis excluding public holidays for the vehicle to be dispatched. alternatively, for other hours / days, the client has the option to come to our 24×7 operations office and complete the physical swiping of the credit card and make the payment and confirm the booking."
      ]
    },
    {
      title: "Service Disclaimers and Liability",
      icon: AlertTriangle,
      content: [
        "The Customer agrees and acknowledges that the use of the services offered by skyrydr is at the sole risk of the Customer. skyrydr disclaims all representations and warranties of any kind, whether express or implied as to condition, suitability, quality, merchantability and fitness of the services offered by skyrydr. The liability of skyrydr is excluded to the fullest extent permitted by law.",
        "Without prejudice to the above, skyrydr makes no representation or warranty that:",
        "• The service shall meet Customer requirements;",
        "• The service shall be uninterrupted, timely, secure, or error-free.",
        "\nskyrydr shall not be responsible or liable for any loss or damage, howsoever caused or suffered by the Customer arising out of the use of car rental service offered by skyrydr or due to the failure of skyrydr to provide services to the Customer for any reason whatsoever including but not limited to the Customer's non-compliance with the services' recorded voice instructions, malfunction, partial or total failure of any network terminal, data processing system, computer tele-transmission or telecommunications system or other circumstances whether or not beyond the control of skyrydr or any person or any organization involved in the above mentioned systems.",
        "Without prejudice to the above, skyrydr shall not be liable for any direct or indirect loss or damage which may be suffered by the Customer as a result of any failure on the part of skyrydr to provide a taxi to the Customer within any stipulated time even if skyrydr has agreed to provide the taxi, or even if the Customer has apprised skyrydr of the possibility of any such loss or damage which would result if the taxi is not provided at all or is not provided within the stipulated time to the Customer.",
        "Upon the demand of skyrydr, the Customer shall indemnify skyrydr from/ and against/ and in respect of any/ or all liabilities, losses, charges and expenses (including legal fees and costs on a full indemnity basis) claims, demands, actions and proceedings which skyrydr may incur or sustain directly or indirectly from/ or by any reason of/ or in relation to the use or purposed use of the Services provided by skyrydr."
      ]
    },
    {
      title: "Location Services and Data Usage",
      icon: MapPin,
      content: [
        "skyrydr is hereby authorized to use the location-based information provided by any of the telecommunication companies regarding the use of mobile phone by the Customer for making a taxi booking. However, the location-based information will be used only to facilitate and improve the probability of locating a taxi for the Customer.",
        "skyrydr shall be entitled to disclose the particulars of the Customer/s in possession of skyrydr to all companies controlled by skyrydr or any of its authorized chauffeurs or any government body as required by the law/ or by directive/ or request from any government body or to any third party deemed fit and proper by skyrydr, in its absolute discretion.",
        "skyrydr shall be entitled to terminate any booking at any time without giving any reason or prior notice to the Customer.",
        "skyrydr encourages all its customers to take full responsibility of their luggage/belongings. In case of any loss, from the taxi during the journey, skyrydr shall endeavour to locate the lost luggage/belongings on a 'best-effort' basis but skyrydr shall not be held responsible for such loss or damage.",
        "If the Customer leaves any luggage/belongings/goods in the taxi or has any complaint in respect of the services or the use of the taxi, the Customer shall make a complaint in writing to skyrydr within 2 hours from such usage."
      ]
    },
    {
      title: "Dispute Resolution and Arbitration",
      icon: FileText,
      content: [
        "In case of any dispute arising between the Customer and skyrydr, the dispute shall be referred to an Arbitrator, appointed by skyrydr in its sole discretion. The Arbitrator so appointed by skyrydr shall act in conformity with the Arbitration and Conciliation Act, 1996. The award so passed by the Arbitrator shall be binding upon the Customer as well as skyrydr. The courts of Hyderabad, India shall have the sole and exclusive jurisdiction in respect of any matters which may be instituted before any court of law, arising from the use of the services offered by skyrydr.",
        "skyrydr shall be entitled to add, vary or amend any or all of these terms and conditions at any time at its sole discretion and the Customer shall be bound by such addition, variation or amendment incorporated/made in these terms and conditions with effect from the date set forth by skyrydr. The terms and conditions shall be available on skyrydr website www.skyrydr.com",
        "skyrydr shall be entitled to record all the calls made to the call centre/s of skyrydr for quality and training purposes.",
        "Vehicles registered with skyrydr may be continuously tracked by skyrydr using GPS for security reasons or for reasons deemed fit and proper by skyrydr."
      ]
    },
    {
      title: "Account Security and Communication",
      icon: CheckCircle,
      content: [
        "By logging on the Account Access service on skyrydr websites, the User/customer hereby authorizes skyrydr and its agents to access third party sites, including that of Banks and other payment gateways, designated by them or on their behalf for retrieving requested information.",
        "While registering, the User will choose a password and the user is responsible for maintaining the confidentiality of the password and the account. The User is fully responsible for all the activities that may take place whilst using their password or account. It is the duty of the User to notify skyrydr immediately in writing of any unauthorized use of their password or account or any other breach of security. skyrydr will not be liable for any loss that may be incurred by the User as a result of unauthorized use of customer's password or account, either with or without his/her knowledge. The User shall not use anyone else's password at any time.",
        "skyrydr may send booking confirmation, itinerary information, cancellation, payment confirmation, refund status, schedule change or any such other information relevant for the transaction, via SMS or by voice call on the contact number given by the User at the time of booking; skyrydr may also contact the User by voice call, SMS or email in case the User couldn't or hasn't concluded the booking, for any reason what so ever or to know the preference of the User for concluding the booking and also to help the User for the booking.",
        "The User hereby unconditionally consents that such communications via SMS and/ or voice call by skyrydr is (a) upon the request and authorization of the User, (b) 'transactional' and not an 'unsolicited commercial communication' as per the guidelines of Telecom Regulation Authority of India (TRAI) and (c) in compliance with the relevant guidelines of TRAI or such other authority in India and abroad. The User will indemnify skyrydr against all types of losses and damages incurred by skyrydr due to any action taken by TRAI, Access Providers (as per TRAI regulations) or any other authority due to any erroneous compliant made by the User against skyrydr with respect to the intimations mentioned above or on account of any wrong number or email id provided by the User for any reason whatsoever."
      ]
    },
    {
      title: "User Compliance and Insurance",
      icon: Shield,
      content: [
        "The User warrants that the User shall abide by all such additional procedures and guidelines, as modified from time to time, with respect to the use of skyrydr services. The User further warrants that the User shall comply with all the applicable laws and regulations regarding the services provided by skyrydr.",
        "Unless explicitly provided by skyrydr, any specific service or deliverable, obtaining sufficient insurance coverage shall be the obligation/option of the User and skyrydr shall not accept any claim/s arising out of such contingencies.",
        "Insurance cover, if any provided as a part of the service/ product by skyrydr shall be based on the terms and conditions of the insuring company. The User shall contact the insurance company directly for any claim/s or dispute/s which may arise out of such insurance cover. skyrydr shall not provide any express or implied undertakings for acceptance of the claims by the insurance company."
      ]
    }
  ];

  const keyPoints = [
    "Payment must be completed as per the rates and schedules mentioned on our website",
    "All transactions require confirmation and proper documentation",
    "Bookings are subject to availability and confirmation",
    "Customers must report any issues or complaints within 2 hours of service",
    "Disputes are subject to arbitration in Hyderabad, India",
    "We reserve the right to modify terms and conditions at any time",
    "Account security is the sole responsibility of the user",
    "All communications comply with TRAI regulations"
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
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-lg rounded-full px-6 py-3 border border-white/10 mb-8"
            >
              <FileText className="w-5 h-5 text-blue-400" />
              <span className="text-white/90 text-base font-semibold">Terms & Conditions</span>
            </motion.div>

            <h1 className="font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
              Terms & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Conditions</span>
            </h1>
            <p className="text-white/70 text-xl leading-relaxed max-w-3xl mx-auto mb-8">
              Please read these terms and conditions carefully before using our transportation services.
              By using skyrydr, you agree to be bound by these comprehensive terms.
            </p>
            <div className="text-white/60 text-sm">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-8">
              <h2 className="font-bold text-2xl text-white mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-400" />
                Important Terms Summary
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {keyPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0 mt-2"></div>
                    <p className="text-white/80 leading-relaxed">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-bold text-4xl md:text-5xl text-white mb-6">
                Comprehensive <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Terms</span>
              </h2>
              <p className="text-white/70 text-xl max-w-2xl mx-auto">
                Detailed terms and conditions governing the use of skyrydr transportation services
              </p>
            </motion.div>

            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-2xl text-white">{section.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + (itemIndex * 0.05) }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-2"></div>
                        <p className="text-white/80 leading-relaxed">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-bold text-4xl text-white mb-6">
              Need Clarification?
            </h2>
            <p className="text-white/70 text-xl mb-12 leading-relaxed">
              If you have any questions about these terms and conditions, our legal team is here to help.
            </p>

            <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-8 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="font-semibold text-white mb-3">Legal Inquiries</h3>
                  <p className="text-white/70 mb-1">nfo@skyrydr.com</p>
                  <p className="text-white/70">Phone: +91 9121261234</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-3">General Support</h3>
                  <p className="text-white/70 mb-1">nfo@skyrydr.com</p>
                  <p className="text-white/70">Phone: +91 9121261234</p>
                </div>
              </div>
            </div>

            <div className="text-white/60 text-sm mt-8">
              For legal matters, our team responds within 3-5 business days. For urgent operational issues, contact our 24/7 support.
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;