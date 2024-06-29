import { useParams } from "react-router-dom";

function Coin() {
	const { coinId } = useParams<string>();
	console.log(coinId);
	return <h1>Coin</h1>;
}

export default Coin;
