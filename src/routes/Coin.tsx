import { useQuery } from "@tanstack/react-query";
import { Link, Outlet, useLocation, useMatch, useParams } from "react-router-dom";
import styled from "styled-components";
import { fecthCoinInfo, fetchCoinPriceInfo } from "../api";

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

const Overview = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: rgba(0, 0, 0, 0.5);
	padding: 10px 20px;
	border-radius: 10px;
`;

const OverviewItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	span:first-child {
		font-size: 10px;
		font-weight: 400;
		text-transform: uppercase;
		margin-bottom: 5px;
	}
`;

const Description = styled.p`
	margin: 20px 0px;
`;

const Tabs = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	margin: 25px 0;
	gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
	text-align: center;
	text-transform: uppercase;
	font-size: 14px;
	font-weight: 400;
	background-color: rgba(0, 0, 0, 0.5);
	padding: 7px 0px;
	border-radius: 10px;
	color: ${props => (props.isActive ? props.theme.accentColor : props.theme.textColor)};
	a {
		display: block;
	}
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
	const { coinId } = useParams<string>();
	const { state } = useLocation() as IRouteState; // react-router-dom v6 에서는 제너릭 지원 안함
	const priceMatch = useMatch("/:coinId/price");
	const chartMatch = useMatch("/:coidId/chart");
	const { isLoading: isInfoLoading, data: infoData } = useQuery<ICoinInfo>({
		queryKey: ["info", coinId],
		queryFn: () => fecthCoinInfo(coinId!),
	});
	const { isLoading: isPriceLoading, data: priceInfoData } = useQuery<IPriceInfo>({
		queryKey: ["priceInfo", coinId],
		queryFn: () => fetchCoinPriceInfo(coinId!),
	});
	/* 
	const [isLoading, setIsLoading] = useState(true);
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
	}, [coinId]); */
	const isLoading = isInfoLoading || isPriceLoading;
	return (
		<Container>
			<Header>
				<Title>{state?.name ? state.name : isLoading ? "Loading..." : infoData?.name}</Title>
			</Header>
			{isLoading ? (
				<Loader>We are loading... </Loader>
			) : (
				<>
					<Overview>
						<OverviewItem>
							<span>Rank:</span>
							<span>{infoData?.rank}</span>
						</OverviewItem>
						<OverviewItem>
							<span>Symbol:</span>
							<span>{infoData?.symbol}</span>
						</OverviewItem>
						<OverviewItem>
							<span>Open Source:</span>
							<span>{infoData?.open_source ? "Yes" : "No"}</span>
						</OverviewItem>
					</Overview>
					<Description>{infoData?.description}</Description>
					<Overview>
						<OverviewItem>
							<span>Total Supply:</span>
							<span>{priceInfoData?.total_supply}</span>
						</OverviewItem>
						<OverviewItem>
							<span>Max Supply:</span>
							<span>{priceInfoData?.max_supply}</span>
						</OverviewItem>
					</Overview>
					<Tabs>
						<Tab isActive={priceMatch !== null}>
							<Link to={"price"}>Price</Link>
						</Tab>
						<Tab isActive={chartMatch !== null}>
							<Link to={"chart"}>Chart</Link>
						</Tab>
					</Tabs>
					<Outlet />
				</>
			)}
		</Container>
	);
}

export default Coin;
