import logo from "./logo.svg";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  const metaTitle = "测试标题";
  const metaDescription = "测试内容";
  const metaImage =
    "https://cascadevalleydesigns.com/wp-content/uploads/2019/09/How-to-Fix-Facebook-Link-Preview.png";
  // const metaUrl = `${origin}${pathname}${window.location.search}`;
  return (
    <div className="App">
      <Helmet>
        <title>{metaTitle}</title>
        {/* <meta name="title" content={metaTitle} /> */}
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />
        {/* <meta property="og:url" content={metaUrl} /> */}
        <meta property="og:url" content={"http://http://138.197.44.229/"} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={metaImage} />
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
