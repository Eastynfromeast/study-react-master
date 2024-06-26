import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./screens/NotFound";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Price from "./routes/Price";
import Chart from "./routes/Chart";

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
