import { RegistrationActionTypes } from '../redux.data.type';
import { registrationFailureAction, registrationRequestAction, registrationSuccessAction } from './registrationActions';
import { Dispatch } from "redux"
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { UserType } from '../../components/components.data.type';

export const registrationAsyncAction = (newUser: UserType) => {

	return (dispatch: Dispatch<RegistrationActionTypes>) => {

		dispatch(registrationRequestAction())

		const options: AxiosRequestConfig = {
			method: "post",
			url: 'http://localhost:4000/register',
			data: newUser,
		}

		axios(options)
			.then((response: AxiosResponse) => {
				const userData = response.data
				dispatch(registrationSuccessAction(userData))
			})
			.catch((error: AxiosError) => {
				const errorMessage = error?.response?.data?.message
				dispatch(registrationFailureAction(errorMessage))
			})
	}
}