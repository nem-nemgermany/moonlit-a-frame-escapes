import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Amenities from "@/components/Amenities";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Booking from "@/components/Booking";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  return (
    <>
      {/* SEO Meta Tags are set in index.html */}
      <Header />
      <main>
        <Hero />
        <About />
        <Amenities />
        <Experience />
        <Gallery />
        <Location />
        <Booking />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
};

export default Index;
