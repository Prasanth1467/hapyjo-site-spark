import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Rentals from "@/components/Rentals";
import Industries from "@/components/Industries";
import WhyChoose from "@/components/WhyChoose";
import Trust from "@/components/Trust";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Rentals />
        <Industries />
        <WhyChoose />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
