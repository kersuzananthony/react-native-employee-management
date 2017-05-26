import React, {Component} from "react";
import {Text, View, StyleSheet} from "react-native";

export class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.viewStyle}>
				<Text style={styles.textStyle}>{this.props.title}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 20
	},
	viewStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F8F8F8',
		paddingTop: 15,
		height: 60,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	}
});