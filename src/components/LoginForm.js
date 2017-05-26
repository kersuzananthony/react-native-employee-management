import React, {Component} from "react";
import {Text} from "react-native";
import {Card, CardSection, Input, Button, Spinner} from "./common";
import * as actions from "../actions";
import {connect} from "react-redux";

class LoginForm extends Component {
	onEmailChange(email) {
		const { emailChanged } = this.props;
		emailChanged(email);
	}

	onPasswordChange(password) {
		const { passwordChanged } = this.props;
		passwordChanged(password);
	}

	onLoginPressed() {
		const { email, password, loginUser } = this.props;
		loginUser({email, password});
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="Email"
						value={this.props.email}
						placeholder="anthony.kersuzan@example.com"
						onChangeText={this.onEmailChange.bind(this)}/>
				</CardSection>
				<CardSection>
					<Input
						label="Password"
						value={this.props.password}
						placeholder="password"
						secure
						onChangeText={this.onPasswordChange.bind(this)}/>
				</CardSection>
				<Text style={styles.errorTextStyle}>
					{this.props.error}
				</Text>
				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}

	renderButton() {
		if(this.props.loading) {
			return <Spinner size="large"/>
		} else {
			return (
				<Button onPress={this.onLoginPressed.bind(this)}>
					Login
				</Button>
			);
		}
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

const mapStateToProps = (state) => {
	const { email, password, error, loading } = state.auth;

	return {
		email,
		password,
		error,
		loading
	};
};

export default connect(mapStateToProps, actions)(LoginForm);