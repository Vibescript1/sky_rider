import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Building2,
  MapPin,
  Calendar,
  Car,
  User,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const CorporateBookingForm = ({ onBookingTypeChange, initialBookingType = "corporate" }) => {
  const [bookingType, setBookingType] = useState(initialBookingType); // "corporate" or "individual"
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState("");
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const [error, setError] = useState("");

  const getCurrentLocation = () => {
    console.log("Fetching current location...");
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setIsGettingLocation(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("Location obtained:", latitude, longitude);
        reverseGeocode(latitude, longitude);
      },
      (err) => {
        console.error("Error getting location:", err);
        let message = "Unable to get your current location.";

        switch (err.code) {
          case err.PERMISSION_DENIED:
            message =
              "Location access denied. Please allow location permission.";
            break;
          case err.POSITION_UNAVAILABLE:
            message = "Location information unavailable.";
            break;
          case err.TIMEOUT:
            message = "Location request timed out.";
            break;
          default:
            message = "An unknown error occurred.";
        }

        setIsGettingLocation(false);
        setError(message);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  };

  const reverseGeocode = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`
      );

      if (!response.ok) throw new Error("Failed to get address");

      const data = await response.json();
      const addr = data.address || {};

      // Try to get all possible address components
      const road = addr.road || addr.residential || addr.pedestrian || "";
      const neighbourhood = addr.neighbourhood || addr.suburb || "";
      const city = addr.city || addr.town || addr.village || "";
      const state = addr.state || "";
      const country = addr.country || "";
      const postcode = addr.postcode || "";

      // Build the location string dynamically
      const formattedAddress = [road, neighbourhood, city, state, postcode, country]
        .filter(Boolean)
        .join(", ");

      console.log("Address:", formattedAddress);
      setLocation(formattedAddress);
      setFormData(prev => ({
        ...prev,
        pickupLocation: formattedAddress
      }));
      setError("");



    } catch (error) {
      console.error("Error in reverse geocoding:", error);
      setError("Unable to get address. Please enter manually.");
    } finally {
      setIsGettingLocation(false);
    }
  };

  const [formData, setFormData] = useState({
    // Corporate fields
    companyName: "",
    contactPerson: "",
    employeeCount: "",
    address: "",
    city: "",
    country: "",
    // Individual fields
    name: "",
    // Common fields
    email: "",
    phone: "",
    pickupLocation: "",
    dropLocation: "",
    date: "",
    time: "",
    vehicleType: "",
    specialRequirements: "",
    frequency: "one-time",
    duration: "",
  });

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const { toast } = useToast();

  const vehicleOptions = [
    { value: "luxury-sedan", label: "Luxury Sedan" },
    { value: "premium-suv", label: "Premium SUV" },
    { value: "executive-van", label: "Executive Van" },
    { value: "luxury-coach", label: "Luxury Coach" },
    { value: "custom", label: "Custom Requirement" },
  ];

  const frequencyOptions = [
    { value: "one-time", label: "One Time" },
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
  ];

  const validateStep = (step) => {
    const newErrors = {};

    if (bookingType === "corporate") {
      // Corporate booking validation
      if (step === 1) {
        if (!formData.companyName.trim())
          newErrors.companyName = "Company name is required";
        if (!formData.contactPerson.trim())
          newErrors.contactPerson = "Contact person is required";
        if (!formData.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "Email is invalid";
        }
        if (!formData.phone.trim()) newErrors.phone = "Phone is required";
        if (!formData.employeeCount || formData.employeeCount < 1)
          newErrors.employeeCount = "Valid employee count is required";
      }

      if (step === 2) {
        if (!formData.pickupLocation.trim())
          newErrors.pickupLocation = "Pickup location is required";
        if (!formData.dropLocation.trim())
          newErrors.dropLocation = "Drop location is required";
        if (!formData.date) newErrors.date = "Date is required";
        if (!formData.time) newErrors.time = "Time is required";
        if (!formData.vehicleType)
          newErrors.vehicleType = "Vehicle type is required";
      }
    } else {
      // Individual booking validation (single step)
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
      if (!formData.phone.trim()) newErrors.phone = "Phone is required";
      if (!formData.pickupLocation.trim())
        newErrors.pickupLocation = "Pickup location is required";
      if (!formData.dropLocation.trim())
        newErrors.dropLocation = "Drop location is required";
      if (!formData.date) newErrors.date = "Date is required";
      if (!formData.time) newErrors.time = "Time is required";
      if (!formData.vehicleType)
        newErrors.vehicleType = "Vehicle type is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleNext = () => {
    if (validateStep(step) && step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // For individual booking, we need to validate all fields at once
    if (bookingType === "individual") {
      if (!validateStep(1)) {
        return;
      }
    } else {
      // For corporate booking, validate current step
      if (!validateStep(step)) {
        return;
      }
    }

    if (!acceptTerms) {
      toast({
        title: "Terms Required",
        description: "Please accept the Terms & Conditions to proceed.",
        duration: 4000,
      });
      return;
    }

    const formDataToSend = {
      access_key: import.meta.env.VITE_WEB3FORM_KEY,
      subject: `New ${
        bookingType === "corporate" ? "Corporate" : "Individual"
      } Booking Request`,
      from_name:
        bookingType === "corporate" ? formData.companyName : formData.name,
      email: formData.email,
      replyto: formData.email,
      name:
        bookingType === "corporate" ? formData.contactPerson : formData.name,
      message: `
        Booking Type: ${
          bookingType === "corporate" ? "Corporate" : "Individual"
        }
        ${
          bookingType === "corporate"
            ? `
        Company Name: ${formData.companyName}
        Contact Person: ${formData.contactPerson}
        Employees: ${formData.employeeCount}
        Address: ${formData.address}`
            : `
        Customer Name: ${formData.name}`
        }
        Email: ${formData.email}
        Phone: ${formData.phone}
        Pickup: ${formData.pickupLocation}
        Drop: ${formData.dropLocation}
        Date: ${formData.date}
        Time: ${formData.time}
        Vehicle Type: ${formData.vehicleType}
        Frequency: ${formData.frequency}
        Special Requirements: ${formData.specialRequirements || "None"}
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
          title: "Booking Confirmed!",
          description: `Your ${bookingType} booking request has been submitted successfully.`,
        });

        console.log(" Web3Form Response:", result);
        // Reset form
        setFormData({
          companyName: "",
          contactPerson: "",
          employeeCount: "",
          address: "",
          city: "",
          country: "",
          name: "",
          email: "",
          phone: "",
          pickupLocation: "",
          dropLocation: "",
          date: "",
          time: "",
          vehicleType: "",
          specialRequirements: "",
          frequency: "one-time",
          duration: "",
        });
        setAcceptTerms(false);
        setStep(1);
      } else {
        toast({
          title: "Submission Failed",
          description: "Please try again later.",
          duration: 4000,
        });
        console.error(result);
      }
    } catch (error) {
      toast({
        title: " Error",
        description: "Something went wrong while submitting the form.",
        duration: 4000,
      });
      console.error("Error submitting form:", error);
    }
  };

  const StepIcon = ({ number, currentStep }) => (
    <div
      className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300 ${
        number < currentStep
          ? "bg-green-500 border-green-500 text-white"
          : number === currentStep
          ? "bg-blue-600 border-blue-600 text-white"
          : "border-gray-300 text-gray-500"
      }`}
    >
      {number < currentStep ? <CheckCircle className="w-4 h-4" /> : number}
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col">
      {/* Booking Type Toggle */}
      <div className="px-8 pt-8 pb-6 border-b border-gray-200">
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-3">
            <Building2
              className={`w-5 h-5 ${
                bookingType === "corporate" ? "text-blue-600" : "text-gray-400"
              }`}
            />
            <span
              className={`font-medium ${
                bookingType === "corporate" ? "text-blue-600" : "text-gray-500"
              }`}
            >
              Corporate
            </span>
          </div>
          <Switch
            checked={bookingType === "individual"}
            onCheckedChange={(checked) => {
              const newType = checked ? "individual" : "corporate";
              setBookingType(newType);
              onBookingTypeChange?.(newType);
              setStep(1);
              setErrors({});
            }}
            className="mx-2"
          />
          <div className="flex items-center gap-3">
            <User
              className={`w-5 h-5 ${
                bookingType === "individual" ? "text-blue-600" : "text-gray-400"
              }`}
            />
            <span
              className={`font-medium ${
                bookingType === "individual" ? "text-blue-600" : "text-gray-500"
              }`}
            >
              Individual
            </span>
          </div>
        </div>
      </div>

      {/* Booking Type Heading */}
      <div className="px-8 pt-8 pb-2">
        <h2 className="text-2xl font-bold text-center">
          {bookingType === 'corporate' ? 'Corporate' : 'Individual'} Booking
        </h2>
      </div>

      {/* Enhanced Progress Indicator - Only for Corporate */}
      {bookingType === "corporate" && (
        <div className="px-8 pb-6">
          <div className="flex items-center justify-between mb-4">
            {[
              { number: 1, label: "Company", icon: Building2 },
              { number: 2, label: "Trip Details", icon: MapPin },
              { number: 3, label: "Confirm", icon: CheckCircle },
            ].map(({ number, label, icon: Icon }) => (
              <div key={number} className="flex flex-col items-center flex-1">
                <div className="flex items-center w-full">
                  {number > 1 && (
                    <div
                      className={`flex-1 h-1 transition-all duration-500 ${
                        number <= step ? "bg-blue-600" : "bg-gray-200"
                      }`}
                    />
                  )}
                  <div className="flex flex-col items-center relative">
                    <StepIcon number={number} currentStep={step} />
                    <Icon
                      className={`w-4 h-4 mt-2 transition-colors duration-300 ${
                        number <= step ? "text-blue-600" : "text-gray-400"
                      }`}
                    />
                  </div>
                  {number < 3 && (
                    <div
                      className={`flex-1 h-1 transition-all duration-500 ${
                        number < step ? "bg-blue-600" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
                <span
                  className={`text-xs font-medium mt-2 transition-colors duration-300 ${
                    number <= step ? "text-blue-600" : "text-gray-500"
                  }`}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex-1 px-8 pb-8">
        <form onSubmit={handleSubmit} className="h-full flex flex-col">
          <AnimatePresence mode="wait">
            {bookingType === "corporate" ? (
              // Corporate Booking Steps
              <>
                {step === 1 && (
                  <motion.div
                    key="corporate-step1"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1"
                  >
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                        <Building2 className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="font-bold text-3xl text-gray-900 mb-2">
                        Company Information
                      </h3>
                      <p className="text-gray-600">
                        Tell us about your company and primary contact
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="companyName"
                          className="text-sm font-semibold"
                        >
                          Company Name *
                        </Label>
                        <Input
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="Enter company name"
                          className={errors.companyName ? "border-red-500" : ""}
                        />
                        {errors.companyName && (
                          <p className="text-red-500 text-xs">
                            {errors.companyName}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="contactPerson"
                          className="text-sm font-semibold"
                        >
                          Contact Person *
                        </Label>
                        <Input
                          id="contactPerson"
                          name="contactPerson"
                          value={formData.contactPerson}
                          onChange={handleInputChange}
                          placeholder="Enter contact person name"
                          className={
                            errors.contactPerson ? "border-red-500" : ""
                          }
                        />
                        {errors.contactPerson && (
                          <p className="text-red-500 text-xs">
                            {errors.contactPerson}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-sm font-semibold"
                        >
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="company@example.com"
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs">{errors.email}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="text-sm font-semibold"
                        >
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 123-4567"
                          className={errors.phone ? "border-red-500" : ""}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-xs">{errors.phone}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="employeeCount"
                          className="text-sm font-semibold"
                        >
                          Number of Employees *
                        </Label>
                        <Input
                          id="employeeCount"
                          name="employeeCount"
                          type="number"
                          min="1"
                          value={formData.employeeCount}
                          onChange={handleInputChange}
                          placeholder="Enter number of employees"
                          className={
                            errors.employeeCount ? "border-red-500" : ""
                          }
                        />
                        {errors.employeeCount && (
                          <p className="text-red-500 text-xs">
                            {errors.employeeCount}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="address"
                          className="text-sm font-semibold"
                        >
                          Company Address
                        </Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Enter company address"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="corporate-step2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1"
                  >
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="font-bold text-3xl text-gray-900 mb-2">
                        Trip Details
                      </h3>
                      <p className="text-gray-600">
                        Provide information about your transportation needs
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="pickupLocation"
                          className="text-sm font-semibold"
                        >
                          Pickup Location *
                        </Label>
                        <div className="relative">
                          <Input
                            id="pickupLocation"
                            name="pickupLocation"
                            value={formData.pickupLocation}
                            onChange={handleInputChange}
                            placeholder="Enter pickup location"
                            className={errors.pickupLocation ? "border-red-500" : ""}
                          />
                          <MapPin
                            className="w-5 h-5 text-blue-800 absolute right-3 top-3 cursor-pointer hover:scale-110 transition-transform"
                            onClick={getCurrentLocation}
                          />
                        </div>
                        {errors.pickupLocation && (
                          <p className="text-red-500 text-xs">
                            {errors.pickupLocation}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="dropLocation"
                          className="text-sm font-semibold"
                        >
                          Drop Location *
                        </Label>
                        <Input
                          id="dropLocation"
                          name="dropLocation"
                          value={formData.dropLocation}
                          onChange={handleInputChange}
                          placeholder="Enter drop location"
                          className={
                            errors.dropLocation ? "border-red-500" : ""
                          }
                        />
                        {errors.dropLocation && (
                          <p className="text-red-500 text-xs">
                            {errors.dropLocation}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="date" className="text-sm font-semibold">
                          Date *
                        </Label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split("T")[0]}
                          className={errors.date ? "border-red-500" : ""}
                        />
                        {errors.date && (
                          <p className="text-red-500 text-xs">{errors.date}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="time" className="text-sm font-semibold">
                          Time *
                        </Label>
                        <Input
                          id="time"
                          name="time"
                          type="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          className={errors.time ? "border-red-500" : ""}
                        />
                        {errors.time && (
                          <p className="text-red-500 text-xs">{errors.time}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="vehicleType"
                          className="text-sm font-semibold"
                        >
                          Vehicle Type *
                        </Label>
                        <Select
                          value={formData.vehicleType}
                          onValueChange={(value) =>
                            handleSelectChange("vehicleType", value)
                          }
                        >
                          <SelectTrigger
                            className={`bg-white border-2 transition-all duration-200 ${
                              errors.vehicleType
                                ? "border-red-500"
                                : "border-gray-200 hover:border-blue-400 focus:border-blue-500"
                            }`}
                          >
                            <SelectValue placeholder="Select vehicle type" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border-2 border-gray-200 shadow-xl rounded-xl p-2">
                            {vehicleOptions.map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                                className="rounded-lg px-4 py-3 text-gray-900 font-medium hover:bg-blue-50 hover:text-blue-700 cursor-pointer transition-all duration-200 focus:bg-blue-100 focus:text-blue-800"
                              >
                                <div className="flex items-center gap-3">
                                  <Car className="w-4 h-4 text-blue-600" />
                                  {option.label}
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.vehicleType && (
                          <p className="text-red-500 text-xs">
                            {errors.vehicleType}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="frequency"
                          className="text-sm font-semibold"
                        >
                          Service Frequency
                        </Label>
                        <Select
                          value={formData.frequency}
                          onValueChange={(value) =>
                            handleSelectChange("frequency", value)
                          }
                        >
                          <SelectTrigger className="bg-white border-2 border-gray-200 hover:border-green-400 focus:border-green-500 transition-all duration-200">
                            <SelectValue placeholder="Select frequency" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border-2 border-gray-200 shadow-xl rounded-xl p-2">
                            {frequencyOptions.map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                                className="rounded-lg px-4 py-3 text-gray-900 font-medium hover:bg-green-50 hover:text-green-700 cursor-pointer transition-all duration-200 focus:bg-green-100 focus:text-green-800"
                              >
                                <div className="flex items-center gap-3">
                                  <Calendar className="w-4 h-4 text-green-600" />
                                  {option.label}
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="md:col-span-2 space-y-2">
                        <Label
                          htmlFor="specialRequirements"
                          className="text-sm font-semibold"
                        >
                          Special Requirements
                        </Label>
                        <Textarea
                          id="specialRequirements"
                          name="specialRequirements"
                          value={formData.specialRequirements}
                          onChange={handleInputChange}
                          placeholder="Any special requirements, multiple stops, etc."
                          rows={3}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="corporate-step3"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1"
                  >
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="font-bold text-3xl text-gray-900 mb-2">
                        Confirm Your Corporate Booking
                      </h3>
                      <p className="text-gray-600 max-w-md mx-auto">
                        Please review all information carefully before
                        submitting your corporate booking request.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-blue-50 rounded-xl p-6">
                          <h4 className="font-semibold text-lg text-blue-900 mb-4 flex items-center gap-2">
                            <Building2 className="w-5 h-5" />
                            Company Details
                          </h4>
                          <div className="space-y-3">
                            <div>
                              <span className="font-medium text-sm text-blue-700">
                                Company Name:
                              </span>
                              <p className="text-blue-900">
                                {formData.companyName}
                              </p>
                            </div>
                            <div>
                              <span className="font-medium text-sm text-blue-700">
                                Contact Person:
                              </span>
                              <p className="text-blue-900">
                                {formData.contactPerson}
                              </p>
                            </div>
                            <div>
                              <span className="font-medium text-sm text-blue-700">
                                Email:
                              </span>
                              <p className="text-blue-900">{formData.email}</p>
                            </div>
                            <div>
                              <span className="font-medium text-sm text-blue-700">
                                Phone:
                              </span>
                              <p className="text-blue-900">{formData.phone}</p>
                            </div>
                            <div>
                              <span className="font-medium text-sm text-blue-700">
                                Employees:
                              </span>
                              <p className="text-blue-900">
                                {formData.employeeCount}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="bg-white rounded-xl p-6 border border-gray-100">
                          <h4 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
                            <Car className="w-5 h-5" />
                            Trip Details
                          </h4>
                          <div className="space-y-3">
                            <div>
                              <span className="font-medium text-sm text-gray-700">
                                Pickup:
                              </span>
                              <p className="text-gray-900">
                                {formData.pickupLocation}
                              </p>
                            </div>
                            <div>
                              <span className="font-medium text-sm text-gray-700">
                                Drop-off:
                              </span>
                              <p className="text-gray-900">
                                {formData.dropLocation}
                              </p>
                            </div>
                            <div>
                              <span className="font-medium text-sm text-gray-700">
                                Date & Time:
                              </span>
                              <p className="text-gray-900">
                                {formData.date} at {formData.time}
                              </p>
                            </div>
                            <div>
                              <span className="font-medium text-sm text-gray-700">
                                Vehicle:
                              </span>
                              <p className="text-gray-900">
                                {vehicleOptions.find(
                                  (v) => v.value === formData.vehicleType
                                )?.label || formData.vehicleType}
                              </p>
                            </div>
                            <div>
                              <span className="font-medium text-sm text-gray-700">
                                Frequency:
                              </span>
                              <p className="text-gray-900">
                                {
                                  frequencyOptions.find(
                                    (f) => f.value === formData.frequency
                                  )?.label
                                }
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {formData.specialRequirements && (
                      <div className="bg-yellow-50 rounded-xl p-6 mt-6">
                        <h4 className="font-semibold text-lg text-yellow-900 mb-2">
                          Special Requirements
                        </h4>
                        <p className="text-yellow-800">
                          {formData.specialRequirements}
                        </p>
                      </div>
                    )}

                    {/* Terms & Conditions Checkbox */}
                    <div className="bg-blue-50 rounded-xl p-6 mt-6 border border-blue-200">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="acceptTerms"
                          checked={acceptTerms}
                          onCheckedChange={setAcceptTerms}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label
                            htmlFor="acceptTerms"
                            className="text-sm font-semibold text-blue-900 cursor-pointer"
                          >
                            I accept the{" "}
                            <a
                              href="/terms-and-conditions"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 underline font-medium"
                            >
                              Terms & Conditions
                            </a>{" "}
                            and{" "}
                            <a
                              href="/privacy-policy"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 underline font-medium"
                            >
                              Privacy Policy
                            </a>
                          </Label>
                          <p className="text-xs text-blue-700 mt-1">
                            By checking this box, you agree to our terms of
                            service and data processing policies.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </>
            ) : (
              // Individual Booking Form (Single Step)
              <motion.div
                key="individual-form"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="flex-1"
              >
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-4 mt-4">
                    <User className="w-8 h-8 text-green-600" />
                  </div>
                  {/* <h3 className="font-bold text-3xl text-gray-900 mb-2">
                    Individual Booking
                  </h3>
                  <p className="text-gray-600">
                    Quick and easy booking for individual travelers
                  </p> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-semibold">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs">{errors.phone}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="vehicleType"
                      className="text-sm font-semibold"
                    >
                      Vehicle Type *
                    </Label>
                    <Select
                      value={formData.vehicleType}
                      onValueChange={(value) =>
                        handleSelectChange("vehicleType", value)
                      }
                    >
                      <SelectTrigger
                        className={`bg-white border-2 transition-all duration-200 ${
                          errors.vehicleType
                            ? "border-red-500"
                            : "border-gray-200 hover:border-blue-400 focus:border-blue-500"
                        }`}
                      >
                        <SelectValue placeholder="Select vehicle type" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-2 border-gray-200 shadow-xl rounded-xl p-2">
                        {vehicleOptions.map((option) => (
                          <SelectItem
                            key={option.value}
                            value={option.value}
                            className="rounded-lg px-4 py-3 text-gray-900 font-medium hover:bg-blue-50 hover:text-blue-700 cursor-pointer transition-all duration-200 focus:bg-blue-100 focus:text-blue-800"
                          >
                            <div className="flex items-center gap-3">
                              <Car className="w-4 h-4 text-blue-600" />
                              {option.label}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.vehicleType && (
                      <p className="text-red-500 text-xs">
                        {errors.vehicleType}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="pickupLocation"
                      className="text-sm font-semibold"
                    >
                      Pickup Location *
                    </Label>
                    <div className="relative">
                      <Input
                        id="pickupLocation"
                        name="pickupLocation"
                        value={formData.pickupLocation}
                        onChange={handleInputChange}
                        placeholder="Enter pickup location"
                        className={errors.pickupLocation ? "border-red-500" : ""}
                      />
                      <MapPin
                        className="w-5 h-5 text-blue-800 absolute right-3 top-3 cursor-pointer hover:scale-110 transition-transform"
                        onClick={getCurrentLocation}
                      />
                    </div>
                    {errors.pickupLocation && (
                      <p className="text-red-500 text-xs">
                        {errors.pickupLocation}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="dropLocation"
                      className="text-sm font-semibold"
                    >
                      Drop Location *
                    </Label>
                    <Input
                      id="dropLocation"
                      name="dropLocation"
                      value={formData.dropLocation}
                      onChange={handleInputChange}
                      placeholder="Enter drop location"
                      className={errors.dropLocation ? "border-red-500" : ""}
                    />
                    {errors.dropLocation && (
                      <p className="text-red-500 text-xs">
                        {errors.dropLocation}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-sm font-semibold">
                      Date *
                    </Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={handleInputChange}
                      className={errors.date ? "border-red-500" : ""}
                    />
                    {errors.date && (
                      <p className="text-red-500 text-xs">{errors.date}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-sm font-semibold">
                      Time *
                    </Label>
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className={errors.time ? "border-red-500" : ""}
                    />
                    {errors.time && (
                      <p className="text-red-500 text-xs">{errors.time}</p>
                    )}
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <Label
                      htmlFor="specialRequirements"
                      className="text-sm font-semibold"
                    >
                      Special Requirements (Optional)
                    </Label>
                    <Textarea
                      id="specialRequirements"
                      name="specialRequirements"
                      value={formData.specialRequirements}
                      onChange={handleInputChange}
                      placeholder="Any special requirements..."
                      rows={3}
                    />
                  </div>
                </div>

                {/* Terms & Conditions Checkbox for Individual */}
                <div className="bg-blue-50 rounded-xl p-6 mt-6 border border-blue-200">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="acceptTerms"
                      checked={acceptTerms}
                      onCheckedChange={setAcceptTerms}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <Label
                        htmlFor="acceptTerms"
                        className="text-sm font-semibold text-blue-900 cursor-pointer"
                      >
                        I accept the{" "}
                        <a
                          href="/terms-and-conditions"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline font-medium"
                        >
                          Terms & Conditions
                        </a>{" "}
                        and{" "}
                        <a
                          href="/privacy-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline font-medium"
                        >
                          Privacy Policy
                        </a>
                      </Label>
                      <p className="text-xs text-blue-700 mt-1">
                        By checking this box, you agree to our terms of service
                        and data processing policies.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Enhanced Navigation Buttons */}
          <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-200">
            <div>
              {bookingType === "corporate" && step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrev}
                  className="gap-2 px-6 py-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </Button>
              )}
            </div>

            <div className="flex gap-3">
              {bookingType === "corporate" ? (
                step < 3 ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="gap-2 px-8 py-2 bg-blue-600 hover:bg-blue-700"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="gap-2 px-8 py-2 bg-green-600 hover:bg-green-700"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Submit Corporate Booking
                  </Button>
                )
              ) : (
                <Button
                  type="submit"
                  className="gap-2 px-8 py-2 bg-green-600 hover:bg-green-700"
                >
                  <CheckCircle className="w-4 h-4" />
                  Submit Individual Booking
                </Button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CorporateBookingForm;
