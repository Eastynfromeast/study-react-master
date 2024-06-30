import { useParams } from "react-router-dom";

function Coin() {
	const { coinId } = useParams<string>();

	return <h1>Coin : {coinId} </h1>;
}

export default Coin;
