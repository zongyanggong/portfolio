import Skill from "./components/skills";
import Hero from "./components/hero";
import Portofolio from "./components/portfofio";
import Education from "./components/education";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Weather from "./components/weather";
// import MetaDecorator from "./components/metaDecorator";

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      {/* <MetaDecorator
        title={"测试标题"}
        // description={preview.description}
        description={"测试内容"}
      /> */}
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
