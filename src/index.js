import React from "react";
import ReactDOM, { hydrate } from "react-dom";
import App from "./App";
import AllContext from "./context/AllContext";
import "react-modal-video/scss/modal-video.scss";
import "react-image-lightbox/style.css";
import "./index.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import './polyfill.js'
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <React.Fragment>
      <AllContext>
        <App />
      </AllContext>
    </React.Fragment>,
    rootElement
  );
} else {
  ReactDOM.render(
    <React.Fragment>
      <AllContext>
        <App />
      </AllContext>
    </React.Fragment>,
    rootElement
  );
}
