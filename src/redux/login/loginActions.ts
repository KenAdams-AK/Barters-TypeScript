import { UserType } from '../../components/components.data.type';
import { LoginActionTypes, UserDataType } from '../redux.data.type';
import { LoginTypes } from './loginTypes';

export const loginRequestAction = (): LoginActionTypes => {
	return {
		type: LoginTypes.LOGIN_REQUEST
	}
}

export const loginSuccessAction = (response: UserDataType | UserType): LoginActionTypes => {
	return {
		type: LoginTypes.LOGIN_SUCCESS,
		payload: response,
	}
}

export const loginFailureAction = (errorMessage: string): LoginActionTypes => {
	return {
		type: LoginTypes.LOGIN_FAILURE,
		payload: errorMessage,
	}
}

export const logoutAction = (): LoginActionTypes => {
	return {
		type: LoginTypes.LOGOUT,
	}
}
