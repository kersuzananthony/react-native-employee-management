import * as TYPES from "../actions/types";

const INITIAL_STATE = {
	name: '',
	phone: '',
	shift: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TYPES.EMPLOYEE_UPDATE:
			return {...state, [action.payload.prop]: action.payload.value}; // [action.payload.prop] = key interpolation ES6
		case TYPES.EMPLOYEE_CREATE:
		case TYPES.EMPLOYEE_SAVE:
			return INITIAL_STATE;
		default:
			return state;
	}
};