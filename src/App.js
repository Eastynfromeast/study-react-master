import styled from "styled-components";

const Container = styled.div`
	display: flex;
`;

const Btn = styled.button`
	border: none;
	background-color: teal;
	color: white;
	padding: 10px 15px;
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
	background-color: tomato;
`;

function App() {
	return (
		<Container>
			<Input />
			<Input />
			<Input />
			<Input />
			<Input />
			<Btn as="a">Log in</Btn>
		</Container>
	);
}

export default App;
