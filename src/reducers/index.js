import {combineReducers} from "redux";
import AuthReducer from "./AuthReducer";
import EmployeeFormReducer from "./EmployeeFormReducer";
import EmployeesReducer from "./EmployeesReducer";

const rootReducer = combineReducers({
	auth: AuthReducer,
	employeeForm: EmployeeFormReducer,
	employees: EmployeesReducer
});

export default rootReducer;