import React, {Component} from "react";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import firebase from "firebase";
import Router from "./Router";

class App extends Component {

	componentWillMount() {
		const config = {
			apiKey: "AIzaSyAIxXSomb4Jk19NLw1UnQ0ZvJoGSucUx_E",
			authDomain: "react-native-manager-e51d6.firebaseapp.com",
			databaseURL: "https://react-native-manager-e51d6.firebaseio.com",
			projectId: "react-native-manager-e51d6",
			storageBucket: "react-native-manager-e51d6.appspot.com",
			messagingSenderId: "205626976580"
		};
		firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;