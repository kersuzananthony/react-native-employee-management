import * as TYPES from "../actions/types";

const INITIAL_STATE = {
	email: '',
	password: '',
	user: null,
	error: '',
	loading: false
};

export default(state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TYPES.EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case TYPES.PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case TYPES.LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, user: action.payload };
		case TYPES.LOGIN_USER_FAILED:
			return { ...state, error: action.payload, password: '', loading: false };
		case TYPES.LOGIN_USER:
			return { ...state, loading: true, error: '' };
		default:
			return state;
	}
};