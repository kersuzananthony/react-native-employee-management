import React from "react";
import {Text, TouchableOpacity} from "react-native";

const Button = (props) => {
	return (
		<TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
			<Text style={styles.textStyle}>{props.children}</Text>
		</TouchableOpacity>
	);
};

const styles = {
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007AFF',
		marginRight: 5,
		marginLeft: 5
	},
	textStyle: {
		alignSelf: 'center',
		fontSize: 15,
		fontWeight: '600',
		paddingBottom: 10,
		paddingTop: 10,
		color: '#007AFF',
	}
};

export {Button};