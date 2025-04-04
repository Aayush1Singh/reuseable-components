import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Login from "./Login.jsx";
import Profile from "./Profile.jsx";
import ContentArray from "./Card.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContentArray />
  </StrictMode>,
);
