import { RegistrationTypes } from './registrationTypes';
import { RegistrationStateType, UserDataType, RegistrationActionTypes } from '../redux.data.type';

const initialState: RegistrationStateType = {
	isLoading: false,
	userData: {} as UserDataType,
	isSuccess: false,
	errorMessage: null
}

export const registrationReducer = (state = initialState, action: RegistrationActionTypes ) : RegistrationStateType => {
	switch (action.type) {
		case RegistrationTypes.REGISTRATION_REQUEST:
			return {
				isLoading: true,
				userData: {} as UserDataType,
				isSuccess: false,
				errorMessage: null
			}
		
		case RegistrationTypes.REGISTRATION_SUCCESS:
			return {
				isLoading: false,
				userData: action.payload,
				isSuccess: true,
				errorMessage: null
			}
		
		case RegistrationTypes.REGISTRATION_FAILURE:
			return {
				isLoading: false,
				userData: {} as UserDataType,
				isSuccess: false,
				errorMessage: action.payload
			}
			
		default:
			return state;
	}
}