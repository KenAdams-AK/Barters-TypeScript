import { UserType } from "../../components/components.data.type";
import { LoginActionTypes, LoginStateType, RegistrationStateType, UserDataType } from "../redux.data.type";
import { LoginTypes } from "./loginTypes";

const initialState: RegistrationStateType = {
	isLoading: false,
	userData: {} as UserDataType | UserType,
	isSuccess: false,
	errorMessage: null
}

export const loginReducer = (state = initialState, action: LoginActionTypes): RegistrationStateType => {
	switch (action.type) {
		case LoginTypes.LOGIN_REQUEST:
			return {
				...state,
				isLoading: true,
		}
		case LoginTypes.LOGIN_SUCCESS:
			return {
				isLoading: false,
				userData: action.payload,
				isSuccess: true,
				errorMessage: null,
		}
		case LoginTypes.LOGIN_FAILURE:
			return {
				...state,
				isLoading: false,
				errorMessage: action.payload
		}
		case LoginTypes.LOGOUT:
			localStorage.clear()
			return {
				...state,
				isSuccess: false,
				userData: {
					id: '',
					username: '',
					token: ''
				}
		}
	
		default: 
			return state
	}
}