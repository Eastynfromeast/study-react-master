import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	padding: 0px 20px;
`;

const Header = styled.header`
	height: 10vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
	background-color: #fff;
	color: ${props => props.theme.bgColor};
	margin-bottom: 10px;
	border-radius: 15px;
	a {
		display: block;
		padding: 20px;
		transition: color 0.2s ease-in;
	}
	&:hover {
		a {
			color: ${props => props.theme.accentColor};
		}
	}
`;

const Title = styled.h1`
	font-size: 3em;
	color: ${props => props.theme.accentColor};
`;

const Loader = styled.p`
	text-align: center;
	font-weight: 600;
`;
interface ICoin {
	id: string;
	name: string;
	symbol: string;
	rank: number;
	is_new: boolean;
	is_active: boolean;
	type: string;
}

function Coins() {
	const URL_COINS = "https://api.coinpaprika.com/v1/coins";
	const [coins, setCoins] = useState<ICoin[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const getCoins = async () => {
			const response = await (await fetch(URL_COINS)).json();
			setCoins(response.slice(0, 50));
			setIsLoading(false);
		};
		getCoins();
	}, [URL_COINS]);

	return (
		<Container>
			<Header>
				<Title>Coins</Title>
			</Header>
			{isLoading ? (
				<Loader>We are loading... </Loader>
			) : (
				<CoinsList>
					{coins.map(coin => (
						<Coin key={coin.id}>
							<Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
						</Coin>
					))}
				</CoinsList>
			)}
		</Container>
	);
}

export default Coins;
