import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	padding: 0px 20px;
	max-width: 480px;
	margin: 0 auto;
`;

const Header = styled.header`
	height: 10vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Title = styled.h1`
	font-size: 3em;
	color: ${props => props.theme.accentColor};
`;

const Loader = styled.p`
	text-align: center;
	font-weight: 600;
`;

interface IRouteState {
	state: {
		name: string;
	};
}

interface ICoinInfo {
	id: string;
	name: string;
	symbol: string;
	rank: number;
	is_new: boolean;
	is_active: boolean;
	type: string;
	description: string;
	message: string;
	open_source: boolean;
	started_at: string;
	development_status: string;
	hardware_wallet: boolean;
	proof_type: string;
	org_structure: string;
	hash_algorithm: string;
	first_data_at: string;
	last_data_at: string;
}

interface IPriceInfo {
	id: string;
	name: string;
	symbol: string;
	rank: number;
	total_supply: number;
	max_supply: number;
	beta_value: number;
	first_data_at: string;
	last_updated: string;
	quotes: {
		USD: {
			price: number;
			volume_24h: number;
			volume_24h_change_24h: number;
			market_cap: number;
			market_cap_change_24h: number;
			percent_change_15m: number;
			percent_change_30m: number;
			percent_change_1h: number;
			percent_change_6h: number;
			percent_change_12h: number;
			percent_change_24h: number;
			percent_change_7d: number;
			percent_change_30d: number;
			percent_change_1y: number;
			ath_price: number;
			ath_date: string;
			percent_from_price_ath: number;
		};
	};
}

function Coin() {
	const [isLoading, setIsLoading] = useState(true);
	const { coinId } = useParams<string>();
	const { state } = useLocation() as IRouteState; // react-router-dom v6 에서는 제너릭 지원 안함
	const [info, setInfo] = useState<ICoinInfo>();
	const [priceInfo, setPriceInfo] = useState<IPriceInfo>();

	useEffect(() => {
		const getCoinData = async () => {
			const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();

			const priceData = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json();
			setInfo(infoData);
			setPriceInfo(priceData);
			setIsLoading(false);
		};
		getCoinData();
	}, []);
	console.log(info, priceInfo);
	return (
		<Container>
			<Header>
				<Title>{state?.name || "Loading..."}</Title>
			</Header>
			{isLoading ? <Loader>We are loading... </Loader> : null}
		</Container>
	);
}

export default Coin;
