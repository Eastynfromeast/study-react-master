import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

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

const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #b938f7;
`;

const Box = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	width: 200px;
	height: 200px;
	background-color: rgba(255, 255, 255, 0.2);
	border-radius: 40px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
	background: #fff;
	height: 70px;
	width: 70px;
	place-self: center;
	border-radius: 100%;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
	font-size: 0;
`;

const boxVariants = {
	start: {
		opacity: 0,
		scale: 0.5,
	},
	end: {
		opacity: 1,
		scale: 1,
		transition: {
			type: "spring",
			duration: 2,
			bounce: 0.5,
			delayChildren: 0.5,
			staggerChildren: 0.5,
		},
	},
};

const circleVariants = {
	start: {
		opacity: 0,
	},
	end: {
		opacity: 1,
	},
};

function App() {
	return (
		<>
			<GlobalStyle />
			<Wrapper>
				<Box variants={boxVariants} initial="start" animate="end">
					<Circle variants={circleVariants} />
					<Circle variants={circleVariants} />
					<Circle variants={circleVariants} />
					<Circle variants={circleVariants} />
				</Box>
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
