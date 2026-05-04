import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhySection from "@/components/WhySection";
import ServiceSection from "@/components/ServiceSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-center bg-gray-50">
      <Header />
      <HeroSection />
      <AboutSection />
      <WhySection />
      <ServiceSection />
      <ContactSection />
    </main>
  );
}