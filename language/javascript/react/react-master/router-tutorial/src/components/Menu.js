import { Link } from "react-router-dom";
const Menu = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to={"/"}>Home</Link>
				</li>
				<li>
					<Link to="/about">소개</Link>
				</li>
				<li>
					<Link to="/articles">기사</Link>
				</li>
				<li>
					<Link to="/profile/dohkim">dohkim 프로필</Link>
				</li>
				<li>
					<Link to="/profile/gildong">gildong 프로필</Link>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
