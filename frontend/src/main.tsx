import { createRoot } from "react-dom/client";
import App from "./App";   // removed .tsx extension
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.error("Root element not found. Did you add <div id='root'></div> in index.html?");
}
