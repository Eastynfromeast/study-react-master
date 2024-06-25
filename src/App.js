import styled from "styled-components";

const Father = styled.div`
	display: flex;
`;
const Box = styled.div`
	width: 100px;
	height: 100px;
	background-color: ${props => props.bgColor};
`;

const Circle = styled(Box)`
	border-radius: 100%;
`;

function App() {
	return (
		<Father>
			<Box bgColor="skyblue" />
			<Circle bgColor="yellowgreen" />
		</Father>
	);
}

export default App;
