import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { Helmet, HelmetProvider } from "react-helmet-async";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<React.StrictMode>
		<RecoilRoot>
			<ThemeProvider theme={darkTheme}>
				<HelmetProvider>
					<Helmet>
						<title>To do list</title>
						<link rel="preconnect" href="https://fonts.googleapis.com" />
						<link rel="preconnect" href="https://fonts.gstatic.com" />
						<link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet" />
					</Helmet>
				</HelmetProvider>
				<App />
			</ThemeProvider>
		</RecoilRoot>
	</React.StrictMode>
);
