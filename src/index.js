import "doodle.css/doodle.css";

import App from "./components/App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import { initStore } from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import { rootSaga } from "./sagas";

export const { store, sagaMiddleware } = initStore();

sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
