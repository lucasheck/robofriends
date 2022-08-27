import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import { robots } from "./Robots";
import CardList from "./CardList";

const root = ReactDOM.createRoot(document.getElementById("root"));
/*prettier-ignore*/
root.render(
	<React.StrictMode>
      <CardList robots={robots}/>
	</React.StrictMode>
);

reportWebVitals();
