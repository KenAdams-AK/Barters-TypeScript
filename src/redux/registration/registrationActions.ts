import { RegistrationTypes } from './registrationTypes';
import { RegistrationActionTypes, UserDataType } from '../redux.data.type';



export function registrationRequestAction(): RegistrationActionTypes {
	return {
		type: RegistrationTypes.REGISTRATION_REQUEST
	}
	
}

export function registrationSuccessAction(userData: UserDataType): RegistrationActionTypes  {
	return {
		type: RegistrationTypes.REGISTRATION_SUCCESS,
		payload: userData
	}
	
}

export function registrationFailureAction(errorMessage: string): RegistrationActionTypes {
	return {
		type: RegistrationTypes.REGISTRATION_FAILURE,
		payload: errorMessage
	}
}
