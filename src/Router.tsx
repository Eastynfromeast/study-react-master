import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Header from "./components/Header";
import Home from "./screens/Home";
import About from "./screens/About";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";
import User from "./screens/users/User";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "",
				element: <Home />,
				errorElement: <ErrorComponent />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "users/:userId",
				element: <User />,
			},
		],
		errorElement: <NotFound />,
	},
]);

export default router;
