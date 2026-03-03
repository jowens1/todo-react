import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "virtual:uno.css";
// import './index.css'
import App from "./App.tsx";
import { Provider } from "react-redux";

import { store } from "./store/store.tsx";
import { addTodo } from "./store/todos.tsx";
store.dispatch(addTodo({ text: 'Wee new todo', id: 1, completed: false }))

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
