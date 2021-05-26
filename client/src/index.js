import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import client from "./client";
import App from "./components/App";
import "./index.css";
import { ApolloProvider } from "@apollo/client/react";

const Root = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
