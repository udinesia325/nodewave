import Applications from "./components/Applications";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HowWeWork from "./components/HowWeWork";
import Navbar from "./components/Navbar";
import OurProducts from "./components/OurProducts";
import OurWorks from "./components/OurWorks";
import Portfolio from "./components/Portfolio";
import Testimony from "./components/Testimony";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <HeroSection />
      <OurProducts />
      <Testimony />
      <OurWorks />
      <HowWeWork />
      <Applications />
      <Portfolio />
      <Footer />
    </div>
  );
}
