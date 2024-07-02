import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const queryClient = new QueryClient();

root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<HelmetProvider>
				<Helmet>
					<title>Crypto Tracker</title>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet" />
				</Helmet>
			</HelmetProvider>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>
);
