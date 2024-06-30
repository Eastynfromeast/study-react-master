import { users } from "../db";
import { Link, useSearchParams } from "react-router-dom";

function Home() {
	// eslint-disable-next-line
	const [readSearchParams, setSearchParams] = useSearchParams();
	console.log(readSearchParams);
	setTimeout(() => {
		setSearchParams({
			day: "today",
			time: "240629",
		});
	}, 3000);
	return (
		<div>
			<h1>Users</h1>
			<ul>
				{users.map(user => (
					<li key={user.id}>
						<Link to={`/users/${user.id}`}>{user.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Home;
