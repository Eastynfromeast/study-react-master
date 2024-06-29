import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
	nameOfMyUser: string;
}

export default function Follower() {
	const { nameOfMyUser } = useOutletContext<IFollowersContext>();

	return (
		<div>
			<h1>{nameOfMyUser}의 Followers</h1>
		</div>
	);
}
