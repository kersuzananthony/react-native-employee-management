import React, {Component} from "react";
import {Scene, Router, Actions} from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";
import EmployeeEdit from "./components/EmployeeEdit";

class RouterComponent extends Component {

	render() {
		return (
			<Router sceneStyle={{ paddingTop: 65 }}>
				<Scene key="auth">
					<Scene key="login" component={LoginForm} title="Login" initial />
				</Scene>
				<Scene key="main">
					<Scene
						initial
						key="employeeList"
						component={EmployeeList}
						title="Employees"
						rightTitle="Add"
						onRight={() => Actions.employeeCreate()} />
				</Scene>
				<Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
				<Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
			</Router>
		);
	}
}

export default RouterComponent;