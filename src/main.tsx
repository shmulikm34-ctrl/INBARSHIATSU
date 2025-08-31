import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/globals.css";

const basename = import.meta.env.BASE_URL || "/";
console.log("[BOOT] basename =", basename, "| VERCEL =", import.meta.env.PROD ? "PROD" : "DEV");

const el = document.getElementById("root");
if (!el) {
  console.error("[BOOT] #root not found!");
} else {
  try {
    ReactDOM.createRoot(el).render(
      <React.StrictMode>
        <BrowserRouter basename={basename}>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );
    console.log("[BOOT] React mounted successfully");
  } catch (e) {
    console.error("[BOOT] React mount failed:", e);
    el.innerHTML = "<div style=\\"padding:24px;color:#b00020;\\">אירעה שגיאה בזמן טעינת האפליקציה.</div>";
  }
}
