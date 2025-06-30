import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import ThemeProvide from "./context/utils/ThemeProvide";
import IsAuth from "./context/Auth/IsAuth";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvide>
      <IsAuth>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </IsAuth>
    </ThemeProvide>
  </StrictMode>
);
