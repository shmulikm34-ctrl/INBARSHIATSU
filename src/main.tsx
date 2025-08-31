import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/globals.css";

const basename = import.meta.env.BASE_URL || "/";
console.log("[BOOT] BASE_URL =", import.meta.env.BASE_URL, "| basename =", basename, "| PROD =", import.meta.env.PROD);

const root = document.getElementById("root");
if (!root) {
  console.error("[BOOT] #root not found!");
} else {
  try {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <BrowserRouter basename={basename}>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );
    console.log("[BOOT] React mounted successfully");
  } catch (e) {
    console.error("[BOOT] React mount failed:", e);
    root.innerHTML = "<div style=\\"padding:24px;color:#b00020;\\"><b>שגיאה בעת טעינת האפליקציה:</b><br/>"
      + (e instanceof Error ? (e.stack || e.message) : String(e))
      + "</div>";
  }
}
