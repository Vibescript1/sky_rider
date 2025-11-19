import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ImageSlider from "@/components/home/ImageSlider";
import ServicesSection from "@/components/home/ServicesSection";
import BookingFlowSection from "@/components/home/BookingFlowSection";
import FleetShowcase from "@/components/home/FleetShowcase";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import SectionWrapper from "@/components/home/SectionWrapper";
import SmoothScroll from "@/components/home/SmoothScroll";

const Home = () => {
  return (
    <div className="min-h-screen overflow-y-auto" style={{ touchAction: 'auto' }}>
      <Header />
      <main>
        <HeroSection />
        <SectionWrapper id="partners">
          <ImageSlider />
        </SectionWrapper>
        <SectionWrapper id="services">
          <ServicesSection />
        </SectionWrapper>
        {/* <BookingFlowSection /> */}
        <SectionWrapper id="fleet">
          <FleetShowcase />
        </SectionWrapper>
        <SectionWrapper id="stats" className="bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900">
          <StatsSection />
        </SectionWrapper>
        <SectionWrapper id="testimonials">
          <TestimonialsSection />
        </SectionWrapper>
      </main>
      <SmoothScroll />
      <Footer />
    </div>
  );
};

export default Home;