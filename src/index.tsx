import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import GlobalStyle from "./style/GlobalStyle";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
