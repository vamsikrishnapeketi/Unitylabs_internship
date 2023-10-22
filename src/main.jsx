import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SelitemProvider from "./context/Selitem.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SelitemProvider>
      <div>
        <App />
      </div>
    </SelitemProvider>
  </React.StrictMode>
);
