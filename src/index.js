// import "@fontsource/raleway/400.css"
// import "@fontsource/open-sans/700.css"

import React from "react"
import ReactDOM from "react-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import App from "./App"
import store from "./app/store"
import {Provider} from "react-redux"
import reportWebVitals from "./reportWebVitals"

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
