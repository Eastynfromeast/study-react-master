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
	justify-content: space-around;
	align-items: center;
	background: linear-gradient(135deg, rgb(131, 188, 217), rgb(0, 79, 238));
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	width: 50vw;
	gap: 10px;
	div:first-child,
	div:last-child {
		grid-column: span 2;
	}
`;

const Box = styled(motion.div)`
	height: 400px;
	background-color: rgba(255, 255, 255, 1);
	border-radius: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
	width: 100%;
	height: 100%;

	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
`;

function App() {
	const [id, setId] = useState<null | string>();
	const closeOverlay = () => {
		setId(null);
	};
	return (
		<>
			<GlobalStyle />
			<Wrapper>
				<Grid>
					{["1", "2", "3", "4"].map(n => (
						<Box key={n} layoutId={n} onClick={() => setId(n)} />
					))}
				</Grid>
				<AnimatePresence>
					{id ? (
						<Overlay
							initial={{ backgroundColor: "rgba(0,0,0,0)" }}
							animate={{ backgroundColor: "rgba(0,0,0,.5)" }}
							exit={{ backgroundColor: "rgba(0,0,0,0)" }}
							onClick={closeOverlay}
						>
							<Box layoutId={id} style={{ width: "50vw", height: 400 }} />
						</Overlay>
					) : null}
				</AnimatePresence>
			</Wrapper>
		</>
	);
}

export default App;
