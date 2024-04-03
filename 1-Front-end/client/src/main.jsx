import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Components/Hooks/Redux/Store";
import { KeycloakProvider } from "keycloak-react-web";
import keycloak from "./Components/Hooks/Keycloak/Keycloak";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <KeycloakProvider client={keycloak}>
      <PrimeReactProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PrimeReactProvider>
    </KeycloakProvider>
  </Provider>
);
