import Skill from "./components/skills";
import Hero from "./components/hero";
import Portofolio from "./components/portfofio";
import Education from "./components/education";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Weather from "./components/weather";
import MetaDecorator from "./components/metaDecorator";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "测试标题1";

    const ogTitle = document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    ogTitle.content = "测试标题1";
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement("meta");
    ogDescription.setAttribute("property", "og:description");
    ogDescription.content = "描述内容";
    document.head.appendChild(ogDescription);

    const ogImage = document.createElement("meta");
    ogImage.setAttribute("property", "og:image");
    ogImage.content =
      "https://cascadevalleydesigns.com/wp-content/uploads/2019/09/How-to-Fix-Facebook-Link-Preview.png";
    document.head.appendChild(ogImage);

    const ogUrl = document.createElement("meta");
    ogUrl.setAttribute("property", "og:url");
    ogUrl.content = "http://http://138.197.44.229";
    document.head.appendChild(ogUrl);
  }, []);
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
