import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import ServicesSection from "../../components/ServicesSection/ServicesSection";

export default function LandingPage() {
  return (
    <main className="overflow-x-hidden bg-[#262053] text-white">
      <Header />
      <Hero />
      <About />
            <ServicesSection />

    </main>
  );
}