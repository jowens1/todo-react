import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "virtual:uno.css";
// import './index.css'
import App from "./App.tsx";

import store from "./store/store.tsx";

store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
