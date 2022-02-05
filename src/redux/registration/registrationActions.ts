import { RegistrationActionTypes } from './registrationTypes';



interface registrationRequestAction {
		type: RegistrationActionTypes.REGISTRATION_REQUEST
	
}

interface registrationSuccessAction {
		type: RegistrationActionTypes.REGISTRATION_SUCCESS,
		payload: {}
	
}

interface registrationFailureAction {
		type: RegistrationActionTypes.REGISTRATION_FAILURE,
		payload: string
}

export type RegistrationAction = registrationRequestAction | registrationSuccessAction | registrationFailureAction;
