import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAILED,
	LOGIN_USER
} from "./types";
import firebase from 'firebase';
import {Actions} from "react-native-router-flux";

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = (password) => {
	return {
		type: PASSWORD_CHANGED,
		payload: password
	};
};

export const loginUser = ({email, password}) => {
	// Use redux-thunk for async task
	return (dispatch) => {
		dispatch({type: LOGIN_USER});

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(user => loginUserSuccess(dispatch, user))
			.catch(() => registerUser(dispatch, { email, password }));
	};
};

const registerUser = (dispatch, { email, password }) => {
	firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(user => loginUserSuccess(dispatch, user))
		.catch(err => loginUserFailed(dispatch, err));
};

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		user
	});

	Actions.main();
};

const loginUserFailed = (dispatch, err) => {
	dispatch({
		type: LOGIN_USER_FAILED,
		payload: err.message || 'Authentication failed'
	});
};