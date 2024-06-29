import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./screens/NotFound";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

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
			},
		],
		errorElement: <NotFound />,
	},
]);

export default router;
