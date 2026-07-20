import Projects from "../sections/Projects";
import ConstructionBanner from "../components/common/ConstructionBanner";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Hero from "../sections/Hero";
import Contact from "../components/common/Contact";

const Home = () => {
  return (
    <>
      <ConstructionBanner />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Home;