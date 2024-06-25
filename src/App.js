import styled from "styled-components";

const Father = styled.div`
	display: flex;
`;
const Child = styled.div`
	width: 100px;
	height: 100px;
	background-color: skyblue;
	&:last-of-type {
		background-color: yellowgreen;
	}
`;

const Text = styled.span`
	color: white;
`;

function App() {
	return (
		<Father>
			<Child>
				<Text>Hello</Text>
			</Child>
			<Child />
		</Father>
	);
}

export default App;
