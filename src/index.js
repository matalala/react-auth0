import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-00yxu2f8agkt8ca2.us.auth0.com"
      clientId="inLKr2Ua9ti4OJPw2z57JN8kMtJBU6xd"
      audience={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
