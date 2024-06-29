import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Header from "./components/Header";
import Home from "./screens/Home";
import About from "./screens/About";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "about",
				element: <About />,
			},
		],
	},
]);

export default router;
