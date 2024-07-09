import styled, { createGlobalStyle } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

* {
	box-sizing: border-box;
}

body {
	font-family: "Source Sans 3", sans-serif;
	background-color: ${props => props.theme.textColor};
	color: ${props => props.theme.bgColor};
}

a {
	text-decoration: none;
	color:inherit;
}
`;

const Wrapper = styled(motion.div)`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background: linear-gradient(135deg, rgb(131, 188, 217), rgb(0, 79, 238));
`;
const Box = styled(motion.div)`
	width: 400px;
	height: 200px;
	background-color: rgba(255, 255, 255, 1);
	border-radius: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 28px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
	position: absolute;
	top: 200px;
`;

const boxVariants = {
	entry: (isBack: boolean) => ({
		x: isBack ? -500 : 500,
		opacity: 0,
		scale: 0,
		transition: {
			duration: 0.3,
		},
	}),
	center: {
		x: 0,
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.3,
		},
	},
	exit: (isBack: boolean) => ({
		x: isBack ? 500 : -500,
		opacity: 0,
		scale: 0,
		transition: {
			duration: 0.3,
		},
	}),
};

function App() {
	const [counter, setCounter] = useState(1);
	const [isBack, setIsBack] = useState(false);
	const onClickPrev = () => {
		setIsBack(true);
		setCounter(prev => (prev === 1 ? 1 : prev - 1));
	};
	const onClickNext = () => {
		setIsBack(false);
		setCounter(prev => (prev === 10 ? 10 : prev + 1));
	};
	return (
		<>
			<GlobalStyle />
			<Wrapper>
				<AnimatePresence mode="wait" custom={isBack}>
					<Box custom={isBack} key={counter} variants={boxVariants} initial="entry" animate="center" exit="exit">
						{counter}
					</Box>
				</AnimatePresence>
				<button onClick={onClickPrev}>prev</button>
				<button onClick={onClickNext}>next</button>
			</Wrapper>
		</>
	);
}

export default App;

/*
	// eslint-disable-next-line
	global state
		state management
*/
