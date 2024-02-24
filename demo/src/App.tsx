import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("http://localhost:5000/skills")
      .then((res) => res.json()) // Assuming the response is JSON. This converts it to a JavaScript object.
      .then((data) => {
        console.log(data); // Log the data to see the response from your backend.
      })
      .catch((error) => {
        console.error("Error fetching data: ", error); // Catch and log any errors.
      });
  }, []); // Don't forget the closing bracket for the dependency array.

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React+zongyang2</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
