import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Clients from "./containers/Clients";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";
import Home from "./containers/Home";
import Projects from "./containers/Projects";
import Services from "./containers/Services";
import Testimonials from "./containers/Tastimonials";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 800,
      easing: "ease-in-quad",
      delay: 100,
    });
  }, []);

  return (
    <main className="page-body-wrapper">
      <Home />
      <Services />
      <Projects />
      <Testimonials />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
