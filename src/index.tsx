import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Home from "./components/Home/Home";
import App from "./App";
import { Provider } from "mobx-react";
import store from "./stores";
import ApiServiceStore from "./services/ApiServiceStore";

const stores = {
  apiStore: store.apiServiceStore,
  globalStore: store.globalStore
};

ReactDOM.render(
  <React.StrictMode>
    <Provider {...store}>
      <App {...stores} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
