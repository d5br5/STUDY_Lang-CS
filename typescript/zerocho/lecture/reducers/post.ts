import produce from "immer";
import { ADD_POST, AddPostAction } from "../actions/post";

type Actions = AddPostAction;

const initialState: string[] = [];

const postReducer = (state = initialState, action: Actions): string[] => {
	return produce(state, (draft) => {
		switch (action.type) {
			case ADD_POST:
				draft.push(action.data);
				break;
			default:
				break;
		}
	});
};

export default postReducer;
