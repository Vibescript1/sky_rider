import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { TrendingUp, Users, Car, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  const stats = [
    { Icon: Calendar, label: "Total Bookings", value: "1,247", change: "+12%" },
    { Icon: Users, label: "Active Users", value: "856", change: "+8%" },
    { Icon: Car, label: "Fleet Utilization", value: "87%", change: "+5%" },
    { Icon: TrendingUp, label: "Revenue", value: "₹12.4L", change: "+15%" },
  ];

  const recentBookings = [
    { id: "BK001", company: "Tech Solutions Inc.", vehicle: "Sedan", status: "Completed", amount: "₹2,500" },
    { id: "BK002", company: "Global Enterprises", vehicle: "SUV", status: "In Progress", amount: "₹3,500" },
    { id: "BK003", company: "Innovation Labs", vehicle: "Luxury", status: "Scheduled", amount: "₹4,500" },
    { id: "BK004", company: "Digital Ventures", vehicle: "Tempo", status: "Completed", amount: "₹5,000" },
  ];

  return (
    <div className="min-h-screen bg-muted/20">
      <Header />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-2">
              Admin <span className="text-gradient">Dashboard</span>
            </h1>
            <p className="text-muted-foreground">Welcome back! Here's your business overview.</p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card className="glass-card-light p-6 smooth-transition hover:glow-effect">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <stat.Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                      {stat.change}
                    </span>
                  </div>
                  <div className="font-display font-bold text-3xl text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Recent Bookings Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="glass-card-light p-6">
              <h2 className="font-display font-bold text-2xl text-foreground mb-6">
                Recent Bookings
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">
                        Booking ID
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">
                        Company
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">
                        Vehicle
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">
                        Status
                      </th>
                      <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentBookings.map((booking) => (
                      <motion.tr
                        key={booking.id}
                        whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                        className="border-b last:border-0 smooth-transition"
                      >
                        <td className="py-4 px-4 font-mono text-sm">{booking.id}</td>
                        <td className="py-4 px-4 font-medium">{booking.company}</td>
                        <td className="py-4 px-4 text-muted-foreground">{booking.vehicle}</td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            booking.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : booking.status === "In Progress"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right font-semibold">{booking.amount}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
