import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import ConstructionBanner from "./components/common/ConstructionBanner";
import About from "./sections/About";
import Experience from "./sections/Experience";

function App() {
  return (
    <>
      <ConstructionBanner />
      <Navbar />

      <main>
        
        <Hero />
        <About />
        <Experience />
      </main>

      <Footer />
    </>
  );
}

export default App;