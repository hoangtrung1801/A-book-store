import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";

import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";

import makeServer from './api/server';

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
