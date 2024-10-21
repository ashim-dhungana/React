import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// To use Redux store and providing access to whole app
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>

    {/* Wrapping whole app in redux store */}
    <Provider store={store}>
      <App />
    </Provider>

  </StrictMode>
);