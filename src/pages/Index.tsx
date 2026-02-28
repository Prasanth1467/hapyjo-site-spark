import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Rentals from "@/components/Rentals";
import Industries from "@/components/Industries";
import WhyChoose from "@/components/WhyChoose";
import Trust from "@/components/Trust";
import Blog from "@/components/Blog";
import GalleryCTA from "@/components/GalleryCTA";
import DeploymentCTA from "@/components/DeploymentCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Rentals />
        <Industries />
        <WhyChoose />
        <Trust />
        <Blog />
        <GalleryCTA />
        <DeploymentCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
