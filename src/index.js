import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./nav";
import Goals from "./goals";

function App() {
  return (
    <div>
      <Nav />
      <Goals />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
