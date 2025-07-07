import CustomNavbar from "../components/CustomNavbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <CustomNavbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
