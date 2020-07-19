import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/index.scss";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ), document.querySelector("#app")
);
