import { useParams } from "react-router-dom";

const data = {
	dohkim: {
		name: "김도형",
		desc: "리액트 개발자",
	},
	gildong: {
		name: "홍길동",
		desc: "고전소설 주인공",
	},
};

const Profile = () => {
	const params = useParams();
	const profile = data[params.username];
	if (!profile) {
		return <div>존재하지 않는 사용자입니다.</div>;
	}
	return (
		<div>
			<h3>
				{params.username} ({profile.name})
			</h3>
			<p>{profile.desc}</p>
		</div>
	);
};

export default Profile;
