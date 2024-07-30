import useInputs from "./useInput";

const InfoReducer = () => {
	const [state, onChange] = useInputs({ name: "", nickname: "" });
	const { name, nickname } = state;
	return (
		<div>
			<input type="text" name="name" value={name} onChange={onChange} />
			<input type="text" name="nickname" value={nickname} onChange={onChange} />
			<div>이름 : {name || ""}</div>
			<div>닉네임 : {nickname || ""}</div>
		</div>
	);
};

export default InfoReducer;
