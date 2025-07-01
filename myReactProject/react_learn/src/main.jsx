import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <App />
  // <StrictMode></StrictMode> here we remove this tag inside this tag there is above
  // <App /> tag present here.
);
