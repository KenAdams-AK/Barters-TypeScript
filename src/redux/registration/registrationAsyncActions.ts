import { RegistrationActionTypes } from './registrationTypes';
import { RegistrationAction } from './registrationActions';
import { Dispatch } from "redux"
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const registrationAsyncAction = (newUser: {}) => {

	return (dispatch: Dispatch<RegistrationAction>) => {

		dispatch({ type: RegistrationActionTypes.REGISTRATION_REQUEST })

		const options: AxiosRequestConfig = {
			method: "post",
			url: 'http://localhost:4000/register',
			data: newUser,
		}

		axios(options)
			.then((response: AxiosResponse) => {
				const userData = response.data
				dispatch({type: RegistrationActionTypes.REGISTRATION_SUCCESS, payload: userData})
			})
			.catch((error: AxiosError) => {
				const errorMessage = error?.response?.data?.message
				dispatch({type: RegistrationActionTypes.REGISTRATION_FAILURE, payload: errorMessage})
			})
	}
}