import About from "./sections/About";
import Events from "./sections/Events";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";
import Menu from "./sections/Menu";
import Testimonials from "./sections/Testimonials";
import Chefs from "./sections/Chefs";
import WhyUs from "./sections/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <main id="main">
        <About />
        <WhyUs />
        <Menu />
        <Events />
        <Testimonials />
        <Gallery />
        <Chefs />
      </main>
    </>
  );
}
