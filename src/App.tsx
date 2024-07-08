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
	height: 100vh;
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

const SVG = styled.svg`
	width: 300px;
	height: 300px;
	path {
		stroke: "#fff";
		stroke-width: 2px;
	}
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
	const icon = {
		initial: {
			pathLength: 0,
			fill: "rgba(255,255,255,0)",
		},
		animate: {
			pathLength: 1,
			fill: "rgba(255,255,255,1)",
		},
	};
	return (
		<>
			<GlobalStyle />
			<Wrapper>
				<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
					<motion.path
						variants={icon}
						initial="initial"
						animate="animate"
						transition={{
							default: { duration: 5 },
							fill: { duration: 2, delay: 3 },
						}}
						d="M224 373.1c-25.2-31.7-40.1-59.4-45-83.2-22.6-88 112.6-88 90.1 0-5.5 24.3-20.3 52-45 83.2zm138.2 73.2c-42.1 18.3-83.7-10.9-119.3-50.5 103.9-130.1 46.1-200-18.9-200-54.9 0-85.2 46.5-73.3 100.5 6.9 29.2 25.2 62.4 54.4 99.5-32.5 36.1-60.6 52.7-85.2 54.9-50 7.4-89.1-41.1-71.3-91.1 15.1-39.2 111.7-231.2 115.9-241.6 15.8-30.1 25.6-57.4 59.4-57.4 32.3 0 43.4 25.9 60.4 59.9 36 70.6 89.4 177.5 114.8 239.1 13.2 33.1-1.4 71.3-37 86.6zm47-136.1C280.3 35.9 273.1 32 224 32c-45.5 0-64.9 31.7-84.7 72.8C33.2 317.1 22.9 347.2 22 349.8-3.2 419.1 48.7 480 111.6 480c21.7 0 60.6-6.1 112.4-62.4 58.7 63.8 101.3 62.4 112.4 62.4 62.9 .1 114.9-60.9 89.6-130.2 0-3.9-16.8-38.9-16.8-39.6z"
					/>
				</SVG>
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
