import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "Halo",
  clientId: "react",
});

export default keycloak;
