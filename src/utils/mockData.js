export const fleetData = [
  {
    id: 1,
    name: "Suzuki Ciaz",
    category: "sedan",
    type: "Business",
    seating: 4,
    price: 2500,
    pricePerKm: 15,
    features: ["Premium Comfort", "AC", "GPS Tracking"],
    image: "/cars/ciaz.jpg",
    available: true,
    baggage: 2
  },
  {
    id: 2,
    name: "Kia Carens",
    category: "suv",
    type: "Business",
    seating: 5,
    price: 2700,
    pricePerKm: 16,
    features: ["Comfort Cabin", "AC", "USB Charging", "Spacious Boot"],
    image: "/cars/carens.jpg",
    available: true,
    baggage: 3
  },
  {
    id: 3,
    name: "Kia Seltos",
    category: "suv",
    type: "Business",
    seating: 5,
    price: 2800,
    pricePerKm: 17,
    features: ["Modern Design", "Touchscreen", "AC", "Rear Camera"],
    image: "/cars/seltos.jpg",
    available: true,
    baggage: 3
  },
  {
    id: 4,
    name: "BMW M3",
    category: "luxury",
    type: "Luxury Sedan",
    seating: 5,
    price: 9000,
    pricePerKm: 35,
    features: ["Sport Mode", "Leather Seats", "Sunroof", "Premium Sound System"],
    image: "/cars/BMWM3.jpg",
    available: true,
    baggage: 3
  },

  //  SUVs
  {
    id: 5,
    name: "Toyota Innova Crysta",
    category: "suv",
    type: "Family",
    seating: 7,
    price: 3700,
    pricePerKm: 17,
    features: ["Spacious Interior", "Reclining Seats", "Dual AC", "GPS Tracking"],
    image: "/cars/crysta.jpg",
    available: true,
    baggage: 4
  },
  {
    id: 6,
    name: "Toyota Innova Hycross",
    category: "suv",
    type: "Family",
    seating: 7,
    price: 3500,
    pricePerKm: 16,
    features: ["Hybrid Drive", "Comfortable Cabin", "AC", "GPS Tracking"],
    image: "/cars/hycross.jpg",
    available: true,
    baggage: 4
  },
  {
    id: 7,
    name: "Toyota Fortuner",
    category: "suv",
    type: "Premium SUV",
    seating: 7,
    price: 5500,
    pricePerKm: 25,
    features: ["4x4 Drive", "Luxury Cabin", "Dual AC", "Reclining Seats"],
    image: "/cars/fortuner.jpg",
    available: true,
    baggage: 4
  },
  {
    id: 8,
    name: "MG ZS EV",
    category: "suv",
    type: "Electric SUV",
    seating: 5,
    price: 4000,
    pricePerKm: 20,
    features: ["Electric Drive", "Zero Emissions", "Touchscreen", "Smart Connectivity"],
    image: "/cars/ZS EV.jpg",
    available: true,
    baggage: 3
  },
  {
    id: 9,
    name: "BYD Atto 3",
    category: "suv",
    type: "Electric SUV",
    seating: 5,
    price: 4200,
    pricePerKm: 22,
    features: ["Electric Powertrain", "Smart Features", "Panoramic Roof", "AC"],
    image: "/cars/ATTO.jpg",
    available: true,
    baggage: 3
  },
  {
    id: 11,
    name: "Mercedes V-Class",
    category: "Van",
    type: "Luxury Van",
    seating: 7,
    price: 7000,
    pricePerKm: 30,
    features: ["Premium Group Travel", "Executive Seating", "AC", "Entertainment System"],
    image: "/cars/mercedes.jpg",
    available: true,
    baggage: 5
  },
  {
    id: 12,
    name: "Toyota Vellfire",
    category: "luxury",
    type: "Luxury MPV",
    seating: 7,
    price: 7500,
    pricePerKm: 32,
    features: ["Captain Seats", "Refrigerator", "Dual AC", "Ambient Lighting"],
    image: "/cars/toyotoVellfire.jpg",
    available: true,
    baggage: 4
  },
  {
    id: 13,
    name: "Toyota Modellista",
    category: "luxury",
    type: "Luxury Van",
    seating: 7,
    price: 8000,
    pricePerKm: 34,
    features: ["Luxury Interiors", "AC", "Massage Seats", "Ambient Lighting"],
    image: "/cars/modellista.jpg",
    available: true,
    baggage: 4
  },
  {
    id: 14,
    name: "BYD e6",
    category: "luxury",
    type: "Electric MPV",
    seating: 5,
    price: 5000,
    pricePerKm: 24,
    features: ["Electric Drive", "Silent Cabin", "Touchscreen", "Dual AC"],
    image: "/cars/BYD-e6.jpg",
    available: true,
    baggage: 3
  },
   {
    id: 16,
    name: "BYD M6",
    category: "luxury",
    type: "Premium Van",
    seating: 7,
    price: 5200,
    pricePerKm: 27,
    features: ["Comfort Ride", "Dual AC", "Leather Seats", "Smart Display"],
    image: "/cars/byd-m6.jpg",
    available: true,
    baggage: 5
  },

  // 🚐 Vans
  {
    id: 15,
    name: "Chevrolet Venture",
    category: "van",
    type: "Group",
    seating: 7,
    price: 4800,
    pricePerKm: 25,
    features: ["Spacious Cabin", "AC", "Comfortable Ride", "Entertainment System"],
    image: "/cars/venture.jpg",
    available: true,
    baggage: 6
  },
 
  {
    id: 17,
    name: "Force Urbania",
    category: "van",
    type: "Group Van",
    seating: 12,
    price: 6000,
    pricePerKm: 28,
    features: ["Spacious", "AC", "Reclining Seats", "Entertainment System"],
    image: "/cars/force.jpg",
    available: true,
    baggage: 8
  },

  // 🚌 Buses
  {
    id: 18,
    name: "Isuzu 40-Seater Bus",
    category: "bus",
    type: "Group Travel",
    seating: 40,
    price: 12000,
    pricePerKm: 30,
    features: ["AC", "Reclining Seats", "Music System"],
    image: "/cars/bus.jpg",
    available: true,
    baggage: 25
  },
  {
    id: 19,
    name: "Isuzu 40-Seater Bus (Variant 2)",
    category: "bus",
    type: "Group Travel",
    seating: 40,
    price: 12000,
    pricePerKm: 30,
    features: ["AC", "Comfort Ride", "Music System"],
    image: "/cars/bus2.jpg",
    available: true,
    baggage: 25
  },
  {
    id: 20,
    name: "Isuzu 40-Seater Bus (Variant 3)",
    category: "bus",
    type: "Group Travel",
    seating: 40,
    price: 12000,
    pricePerKm: 30,
    features: ["AC", "Comfort Ride", "Reclining Seats"],
    image: "/cars/bus3.jpg",
    available: true,
    baggage: 25
  },
  {
    id: 21,
    name: "Isuzu 40-Seater Bus (Variant 4)",
    category: "bus",
    type: "Group Travel",
    seating: 40,
    price: 12000,
    pricePerKm: 30,
    features: ["AC", "Comfort Ride", "Reclining Seats"],
    image: "/cars/bus4.jpg",
    available: true,
    baggage: 25
  },
  {
    id: 22,
    name: "Tata Starbus",
    category: "bus",
    type: "Group Travel",
    seating: 40,
    price: 12500,
    pricePerKm: 31,
    features: ["AC", "Comfort Ride", "Reclining Seats"],
    image: "/cars/starbus.jpg",
    available: true,
    baggage: 25
  },
  {
    id: 23,
    name: "Olectra Electric Bus",
    category: "bus",
    type: "Electric Travel",
    seating: 40,
    price: 13000,
    pricePerKm: 33,
    features: ["Electric Drive", "Silent Cabin", "AC", "Comfort Ride"],
    image: "/cars/olectraV2.jpg",
    available: true,
    baggage: 25
  },
  // ⚡ Electric Vehicles
  {
    id: 24,
    name: "Tesla Model S",
    category: "electric",
    type: "Electric Sedan",
    seating: 5,
    price: 6000,
    pricePerKm: 25,
    features: ["Zero Emissions", "Autopilot", "Premium Interior", "Fast Charging"],
    image: "/electric car/p1.jpg",
    available: true,
    baggage: 3
  },
  {
    id: 25,
    name: "Nissan Leaf",
    category: "electric",
    type: "Electric Hatchback",
    seating: 5,
    price: 3500,
    pricePerKm: 18,
    features: ["Eco-Friendly", "Smart Connectivity", "AC", "Regenerative Braking"],
    image: "/electric car/p2.jpg",
    available: true,
    baggage: 2
  },
  {
    id: 26,
    name: "Hyundai Kona Electric",
    category: "electric",
    type: "Electric SUV",
    seating: 5,
    price: 4500,
    pricePerKm: 22,
    features: ["Long Range", "Fast Charging", "Smart Features", "Spacious Cabin"],
    image: "/electric car/p3.jpg",
    available: true,
    baggage: 3
  },
  {
    id: 27,
    name: "MG ZS EV",
    category: "electric",
    type: "Electric SUV",
    seating: 5,
    price: 4200,
    pricePerKm: 20,
    features: ["Zero Emissions", "Smart Tech", "Panoramic Roof", "AC"],
    image: "/electric car/p4.jpg",
    available: true,
    baggage: 3
  },
  {
    id: 28,
    name: "Tata Nexon EV",
    category: "electric",
    type: "Electric SUV",
    seating: 5,
    price: 3800,
    pricePerKm: 19,
    features: ["Eco-Friendly", "Connected Car", "AC", "Smart Features"],
    image: "/electric car/p5.jpg",
    available: true,
    baggage: 3
  },
  {
    id: 29,
    name: "Mahindra eKUV100",
    category: "electric",
    type: "Electric Hatchback",
    seating: 4,
    price: 3200,
    pricePerKm: 16,
    features: ["Compact Design", "Zero Emissions", "City Friendly", "Smart Tech"],
    image: "/electric car/p6.jpg",
    available: true,
    baggage: 2
  },
  {
    id: 30,
    name: "Tata Tiago EV",
    category: "electric",
    type: "Electric Hatchback",
    seating: 5,
    price: 3000,
    pricePerKm: 15,
    features: ["Urban Mobility", "Eco-Friendly", "Smart Features", "AC"],
    image: "/electric car/p7.jpg",
    available: true,
    baggage: 2
  },
];


export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    company: "Tech Solutions Inc.",
    role: "HR Manager",
    content:
      "Exceptional service! Their corporate booking system has streamlined our employee transportation. Highly professional drivers and premium fleet.",
    rating: 5,
    avatar: "/avatars/rajesh.jpg",
  },
  {
    id: 2,
    name: "Priya Sharma",
    company: "Global Enterprises",
    role: "Operations Head",
    content:
      "Reliable and efficient. We've been using their services for over a year now. The booking process is seamless and the support team is outstanding.",
    rating: 5,
    avatar: "/avatars/priya.jpg",
  },
  {
    id: 3,
    name: "Amit Patel",
    company: "Innovation Labs",
    role: "CEO",
    content:
      "Premium quality service at competitive rates. Perfect for our executive team. The fleet is well-maintained and drivers are courteous.",
    rating: 5,
    avatar: "/avatars/amit.jpg",
  },
  {
    id: 4,
    name: "Sanjay Mehta",
    company: "Financial Partners Ltd.",
    role: "Director",
    content:
      "Outstanding corporate service. The dedicated account manager makes everything so smooth. Highly recommended for business travel.",
    rating: 5,
    avatar: "/avatars/sanjay.jpg",
  },
  {
    id: 5,
    name: "Anita Desai",
    company: "Creative Studios",
    role: "Marketing Director",
    content:
      "Impressive attention to detail and punctuality. Our creative team relies on their service for client meetings and photoshoots. Always professional and accommodating.",
    rating: 5,
    avatar: "/avatars/anita.jpg",
  },
  {
    id: 6,
    name: "Vikram Singh",
    company: "Manufacturing Corp",
    role: "Supply Chain Manager",
    content:
      "Excellent logistics support for our factory visits and supplier meetings. The drivers are knowledgeable about industrial areas and always arrive prepared.",
    rating: 5,
    avatar: "/avatars/vikram.jpg",
  },
];

export const stats = [
  { label: "Companies Served", value: 500, suffix: "+" },
  { label: "Happy Customers", value: 50000, suffix: "+" },
  { label: "Fleet Vehicles", value: 200, suffix: "+" },
  { label: "Cities Covered", value: 25, suffix: "+" },
  { label: "Professional Drivers", value: 350, suffix: "+" },
  { label: "Service Rating", value: 4.9, suffix: "/5" },
];

export const services = [
  {
    icon: "Building2",
    title: "Corporate Solutions",
    description:
      "Tailored transportation solutions for businesses of all sizes with dedicated account management and billing.",
    features: [
      "Dedicated Account Manager",
      "Monthly Billing",
      "Customized Reporting",
    ],
  },
  {
    icon: "Users",
    title: "Employee Commute",
    description:
      "Safe and reliable daily commute services for your workforce with flexible scheduling and route optimization.",
    features: [
      "Route Optimization",
      "Flexible Scheduling",
      "Real-time Tracking",
    ],
  },
  {
    icon: "Calendar",
    title: "Event Transportation",
    description:
      "Comprehensive logistics for corporate events, conferences, business meetings and client hospitality.",
    features: ["Event Planning", "Multiple Vehicles", "Coordination Support"],
  },
  {
    icon: "Shield",
    title: "Safety First",
    description:
      "Verified drivers, real-time tracking, 24/7 support and comprehensive insurance for complete peace of mind.",
    features: ["Verified Drivers", "24/7 Support", "GPS Tracking"],
  },
  {
    icon: "Globe",
    title: "Airport Transfers",
    description:
      "Punctual airport pickups and drops with flight tracking and professional meet & greet services.",
    features: ["Flight Tracking", "Meet & Greet", "Wait Time Included"],
  },
  {
    icon: "Briefcase",
    title: "Executive Travel",
    description:
      "Premium services for C-level executives and important business guests with highest privacy standards.",
    features: ["Executive Vehicles", "Privacy Focus", "Premium Amenities"],
  },
];

export const clientLogos = [
  { name: "Tech Corp", logo: "/logos/tech-corp.png" },
  { name: "Global Solutions", logo: "/logos/global-solutions.png" },
  { name: "Innovation Labs", logo: "/logos/innovation-labs.png" },
  { name: "Enterprise Systems", logo: "/logos/enterprise-systems.png" },
  { name: "Digital Ventures", logo: "/logos/digital-ventures.png" },
  { name: "Future Tech", logo: "/logos/future-tech.png" },
];

export const bookingSteps = [
  {
    step: 1,
    title: "Select Vehicle",
    description: "Choose from our premium fleet based on your requirements",
    icon: "Car",
  },
  {
    step: 2,
    title: "Enter Details",
    description: "Provide pickup, drop locations and travel timing",
    icon: "MapPin",
  },
  {
    step: 3,
    title: "Confirm Booking",
    description: "Review details and confirm your reservation",
    icon: "CheckCircle",
  },
  {
    step: 4,
    title: "Enjoy Ride",
    description: "Sit back and experience premium transportation",
    icon: "Star",
  },
];

export const faqData = [
  {
    category: "Booking",
    questions: [
      {
        question: "How far in advance should I book?",
        answer:
          "We recommend booking at least 2-3 hours in advance for best availability. For corporate accounts, we can accommodate last-minute requests based on fleet availability.",
      },
      {
        question: "Can I modify my booking after confirmation?",
        answer:
          "Yes, you can modify pickup time, location, or vehicle type up to 1 hour before scheduled pickup through our app or by calling customer support.",
      },
    ],
  },
  {
    category: "Payment",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit/debit cards, UPI, net banking, and corporate billing for registered business accounts.",
      },
      {
        question: "Do you offer corporate billing?",
        answer:
          "Yes, we provide monthly consolidated billing for corporate clients with detailed trip reports and expense categorization.",
      },
    ],
  },
  {
    category: "Services",
    questions: [
      {
        question: "Do you provide outstation services?",
        answer:
          "Yes, we offer outstation services with experienced drivers. Additional charges apply for tolls, driver accommodation, and return trip.",
      },
      // {
      //   question: "Is Wi-Fi available in all vehicles?",
      //   answer:
      //     "Wi-Fi is available in our Business and Executive category vehicles. Please specify this requirement while booking.",
      // },
    ],
  },
];
