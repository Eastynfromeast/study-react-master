import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./screens/NotFound";
import Coin from "./coins/Coin";
import Coins from "./coins/Coins";
import Price from "./coins/Price";
import Chart from "./coins/Chart";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: <Coins />,
			},
			{
				path: "/:coinId",
				element: <Coin />,
				children: [
					{
						path: "price",
						element: <Price />,
					},
					{
						path: "chart",
						element: <Chart />,
					},
				],
			},
		],
		errorElement: <NotFound />,
	},
]);

export default router;
