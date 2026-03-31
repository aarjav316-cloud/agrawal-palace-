import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Stats from "./components/Stats";
import Garden from "./components/Garden";
import FeaturedRoom from "./components/FeaturedRoom";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutUs />
      <Stats />
      <Garden />
      <FeaturedRoom />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
