import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware, combineReducers } from "redux";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import { searchRobots, requestRobots } from "./reducers";
import App from "./containers/App";

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(
	rootReducer,
	applyMiddleware(thunkMiddleware, logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
/*prettier-ignore*/
root.render(
	<React.StrictMode>
		<Provider store={store}>
      		<App />
	  </Provider>
	</React.StrictMode>
);

reportWebVitals();
