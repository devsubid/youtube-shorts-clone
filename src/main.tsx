import { StrictMode } from "react";
import { createRoot as CreateRoot } from "react-dom/client";
import App from "./App.tsx";

CreateRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
