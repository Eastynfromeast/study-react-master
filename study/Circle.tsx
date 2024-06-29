import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
	bgColor: string;
	borderColor: string;
}

interface CircleProps {
	bgColor: string;
	borderColor?: string;
	text?: string;
}

const Container = styled.div<ContainerProps>`
	width: 200px;
	height: 200px;
	background-color: ${props => props.bgColor};
	border-radius: 100%;
	border: 1px solid ${props => props.borderColor};
`;

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
	const [value, setValue] = useState<number | string>(0);

	return (
		<Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
			{text}
		</Container>
	);
}

export default Circle;
