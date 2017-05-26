import React, {Component} from "react";
import EmployeeForm from "./EmployeeForm";
import {Card, CardSection, Button, Confirm} from "./common";
import {employeeUpdate, employeeSave, employeeDelete} from "../actions";
import {connect} from "react-redux";
import Communications from "react-native-communications";
import _ from "lodash";

class EmployeeEdit extends Component {
	state = { showModal: false };

	componentWillMount() {
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({ prop, value });
		});
	}

	render() {
		return (
			<Card>
				<EmployeeForm {...this.props} />
				<CardSection>
					<Button onPress={this.onButtonPressed.bind(this)}>
						Edit Changes
					</Button>
				</CardSection>
				<CardSection>
					<Button onPress={this.onTextPressed.bind(this)}>
						Text Schedule
					</Button>
				</CardSection>
				<CardSection>
					<Button onPress={this.onFirePressed.bind(this)}>
						Fire Employee
					</Button>
				</CardSection>

				<Confirm
					visible={this.state.showModal}
					onDecline={() => this.setState({showModal: false})}
					onAccept={this.onDeleteEmployee.bind(this)}>
					Are you sure you want to fire this employee?
				</Confirm>
			</Card>
		);
	}

	onDeleteEmployee() {
		this.props.employeeDelete({uid: this.props.employee.key});
	}

	onFirePressed() {
		this.setState({showModal: !this.state.showModal});
	}

	onTextPressed() {
		const { phone, shift } = this.props;

		Communications.text(phone, `Your upcoming shift is on ${shift}`);
	}

	onButtonPressed() {
		const { name, phone, shift } = this.props;

		this.props.employeeSave({ name, phone, shift, uid: this.props.employee.key });
	}
}

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift: shift || 'monday' };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);