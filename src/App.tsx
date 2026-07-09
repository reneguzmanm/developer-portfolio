import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import ConstructionBanner from "./components/common/ConstructionBanner";

function App() {
  return (
    <>
      <ConstructionBanner />
      <Navbar />

      <main>
        
        <Hero />
      </main>

      <Footer />
    </>
  );
}

export default App;