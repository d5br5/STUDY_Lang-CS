import { connect } from "react-redux";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/sample";
import { useEffect } from "react";

const SampleContainer = ({
	getPost,
	getUsers,
	post,
	users,
	loadingPost,
	loadingUsers,
}) => {
	useEffect(() => {
		(async () => {
			try {
				getPost(1);
				getUsers();
			} catch (e) {
				console.log(e);
			}
		})();
	}, [getPost, getUsers]);
	return (
		<Sample
			post={post}
			users={users}
			loadingPost={loadingPost}
			loadingUsers={loadingUsers}
		/>
	);
};

export default connect(
	({ sample, loading }) => ({
		post: sample.post,
		users: sample.users,
		loadingPost: loading["sample/GET_POST"],
		loadingUsers: loading["sample/GET_USERS"],
	}),
	{ getPost, getUsers }
)(SampleContainer);
