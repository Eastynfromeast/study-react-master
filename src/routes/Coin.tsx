import { useState } from "react";
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

function Coin() {
	const [isLoading, setIsLoading] = useState(true);
	const { coinId } = useParams<string>();
	const { state } = useLocation() as IRouteState;

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
