import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import App from "./containers/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
/*prettier-ignore*/
root.render(
	<React.StrictMode>
      <App />
	</React.StrictMode>
);

reportWebVitals();
