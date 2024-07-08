import styled, { createGlobalStyle } from "styled-components";
import { motion, useMotionValue, useMotionValueEvent, useScroll, useTransform } from "framer-motion";

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
	height: 200vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	width: 200px;
	height: 200px;
	background-color: rgba(255, 255, 255, 1);
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
	hover: { rotateZ: 90 },
	click: { borderRadius: "100%", scale: 1 },
};

function App() {
	const x = useMotionValue(0);
	/* 	useEffect(() => {
		x.on("change", () => {
			console.log(x.get());
		});
	}, [x]); */
	const rotateZ = useTransform(x, [-400, 400], [-360, 360]);
	useMotionValueEvent(rotateZ, "change", el => {
		console.log(el);
	});
	const gradient = useTransform(
		x,
		[-400, 0, 400],
		[
			"linear-gradient(135deg, rgb(0, 202, 238), rgb(0, 12, 238))",
			"linear-gradient(135deg, rgb(205, 152, 187), rgb(111, 22, 117))",
			"linear-gradient(135deg, rgb(223, 227, 146), rgb(12, 153, 19))",
		]
	);
	const { scrollYProgress } = useScroll();
	const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

	return (
		<>
			<GlobalStyle />
			<Wrapper style={{ background: gradient }}>
				<Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin />
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
