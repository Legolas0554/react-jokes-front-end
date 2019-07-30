import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/react-components";

import App from "./component/App";
import setupStore from "./redux/store";
import { client } from "./services/apolloJokeService";
import "./styles.css";

const store = setupStore();

render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,

  document.getElementById("root")
);
