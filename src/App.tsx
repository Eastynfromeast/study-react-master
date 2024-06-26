import styled, { keyframes } from "styled-components";

const Title = styled.h1`
	color: ${props => props.theme.textColor};
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: ${props => props.theme.backgroundColor};
`;

const rotating = keyframes`
	0% {
		transform: rotate(0deg);
		border-radius: 0;
	}
	50% {
		border-radius: 100%;
	}
	100%{
		transform: rotate(360deg);
	}
`;

const Emoji = styled.span`
	font-size: 36px;
`;

const Box = styled.div`
	height: 200px;
	width: 200px;
	background-color: yellowgreen;
	animation: ${rotating} 1s linear infinite;
	display: flex;
	justify-content: center;
	align-items: center;
	${Emoji} {
		&:hover {
			font-size: 98px;
		}
	}
`;

function App() {
	return (
		<Wrapper>
			<Title>This is a title</Title>
			<Box>
				<Emoji as="p">😎</Emoji>
			</Box>
			<Emoji>❤️‍🔥</Emoji>
		</Wrapper>
	);
}

export default App;
