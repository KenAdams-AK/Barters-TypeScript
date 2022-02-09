import { UserType } from "../components/components.data.type";
import { LoginTypes } from "./login/loginTypes";
import { RegistrationTypes } from "./registration/registrationTypes";

export type UserDataType = {
	id: string,
	token: string,
	username: string,
}

export type RegistrationStateType = {
	isLoading: boolean;
	userData: UserDataType | UserType;
	isSuccess: boolean;
	errorMessage: string | null
}

export type LoginStateType = RegistrationStateType;


interface IRegistrationRequestAction {
		type: RegistrationTypes.REGISTRATION_REQUEST
	
}

interface IRegistrationSuccessAction {
		type: RegistrationTypes.REGISTRATION_SUCCESS,
		payload: UserDataType,
	
}

interface IRegistrationFailureAction {
		type: RegistrationTypes.REGISTRATION_FAILURE,
		payload: string
}

export type RegistrationActionTypes = IRegistrationRequestAction | IRegistrationSuccessAction | IRegistrationFailureAction;


interface ILoginRequest {
	type: LoginTypes.LOGIN_REQUEST
}

interface ILoginSuccess {
	type: LoginTypes.LOGIN_SUCCESS
	payload: UserDataType | UserType
}

interface ILoginFailure {
	type: LoginTypes.LOGIN_FAILURE
	payload: string
}

interface ILogout {
	type: LoginTypes.LOGOUT
}

export type LoginActionTypes = ILoginRequest | ILoginSuccess | ILoginFailure | ILogout;