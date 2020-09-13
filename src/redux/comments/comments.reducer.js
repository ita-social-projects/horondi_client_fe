import {
	SET_COMMENTS,
	SET_RATE,
	SET_COMMENTS_LOADING,
	SET_UPDATING_COMMENT
} from './comments.types';

export const initialState = {
	commentsLoading: false,
	updatingComment: null,
	comments: []
};

const commentsReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case SET_RATE:
			return {
				...state,
				rate: action.payload
			};
		case SET_COMMENTS:
			return {
				...state,
				comments: action.payload
			};
		case SET_COMMENTS_LOADING:
			return {
				...state,
				commentsLoading: action.payload
			};
		case SET_UPDATING_COMMENT:
			return {
				...state,
				updatingComment: action.payload
			};
		default:
			return state;
	}
};

export default commentsReducer;
