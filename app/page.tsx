import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Products from "@/components/Products";
import About from "@/components/Aboutus";
import Process from "@/components/Farmingprocess";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Products />
      <About />
      <Process />
      <Gallery />
      <Testimonials />
    </>
  );
}