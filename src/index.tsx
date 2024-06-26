import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const darkTheme = {
	textColor: "#fcfcfc",
	backgroundColor: "#222",
};

const lightTheme = {
	backgroundColor: "#fcfcfc",
	textColor: "#222",
};
root.render(
	<React.StrictMode>
		<ThemeProvider theme={darkTheme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
