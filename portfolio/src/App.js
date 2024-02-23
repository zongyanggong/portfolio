import Skill from "./components/skills";
import Hero from "./components/hero";
import Portofolio from "./components/portfofio";
import Education from "./components/education";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Weather from "./components/weather";

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <ToastContainer />
      <Hero />
      <Skill />
      <Education />
      <Portofolio />
      <Contact />
      <Footer />
      <Weather />
    </div>
  );
}

export default App;
