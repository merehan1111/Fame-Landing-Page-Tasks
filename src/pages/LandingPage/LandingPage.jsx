import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import StardomSection from "../../components/StardomSection/StardomSection";
import AudienceSection from "../../components/AudienceSection/AudienceSection";
import WhyFameSection from "../../components/WhyFameSection/WhyFameSection";
import ClientsSection from "../../components/ClientsSection/ClientsSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import Footer from "../../components/Footer/Footer";
import JoinCelebritySection from "../../components/JoinCelebritySection/JoinCelebritySection";

export default function LandingPage() {
  return (
    <main className="overflow-x-hidden bg-[#262053] text-white">
      <Header />
      <Hero />
      <About />
            <ServicesSection />
            <StardomSection/>
            <AudienceSection/>
            <WhyFameSection/>
                  <JoinCelebritySection />
        <ContactSection />
      <ClientsSection />
      <Footer />

    </main>
  );
}