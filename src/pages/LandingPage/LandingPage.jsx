import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#262053] text-white">
      <div className="relative w-full overflow-hidden">
        <Header />
        <Hero />
      </div>
    </main>
  );
}