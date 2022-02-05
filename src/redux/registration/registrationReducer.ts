import { RegistrationAction } from './registrationActions';
import { RegistrationActionTypes } from './registrationTypes';

interface RegistrationState {
	isLoading: boolean;
	userData: {};
	isSuccess: boolean;
	errorMessage: string | null
}

const initialState: RegistrationState = {
	isLoading: false,
	userData: {},
	isSuccess: false,
	errorMessage: null
}

export const registrationReducer = (state = initialState, action: RegistrationAction ) : RegistrationState => {
	switch (action.type) {
		case RegistrationActionTypes.REGISTRATION_REQUEST:
			return {
				isLoading: true,
				userData: {},
				isSuccess: false,
				errorMessage: null
			}
		
		case RegistrationActionTypes.REGISTRATION_SUCCESS:
			return {
				isLoading: false,
				userData: action.payload,
				isSuccess: true,
				errorMessage: null
			}
		
		case RegistrationActionTypes.REGISTRATION_FAILURE:
			return {
				isLoading: false,
				userData: {},
				isSuccess: false,
				errorMessage: action.payload
			}
			
		default:
			return state;
	}
}