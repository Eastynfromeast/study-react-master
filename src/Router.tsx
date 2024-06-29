import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Header from "./components/Header";
import Home from "./screens/Home";
import About from "./screens/About";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "",
				element: <Coins />,
			},
			{
				path: "/:coinId",
				element: <Coin />,
			},
		],
		errorElement: <NotFound />,
	},
]);

export default router;
