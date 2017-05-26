import React, {Component} from "react";
import EmployeeForm from "./EmployeeForm";
import {Card, CardSection, Button} from "./common";
import {connect} from "react-redux";
import {employeeCreate} from "../actions";

class EmployeeCreate extends Component {

	render() {
		return (
			<Card>
				<EmployeeForm {...this.props} />
				<CardSection>
					<Button onPress={this.onButtonPressed.bind(this)}>
						Create
					</Button>
				</CardSection>
			</Card>
		);
	}

	onButtonPressed() {
		const { name, phone, shift} = this.props;

		this.props.employeeCreate({ name, phone, shift });
	}
}

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift: shift || 'monday' };
};

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate);