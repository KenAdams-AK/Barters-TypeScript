import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Dispatch } from "redux";
import { UserType } from "../../components/components.data.type";
import { LoginActionTypes } from "../redux.data.type";
import { loginFailureAction, loginRequestAction, loginSuccessAction } from "./loginActions";

export const loginAsyncAction = (user: UserType) => {
	return (dispatch: Dispatch<LoginActionTypes>) => {

		dispatch(loginRequestAction())

		const options: AxiosRequestConfig = {
			method: 'post',
			url: 'http://localhost:4000/login',
			data: user,
		}

		axios(options)
			.then((response: AxiosResponse) => dispatch(loginSuccessAction(response.data)))
			.catch((error: AxiosError) => dispatch(loginFailureAction(error?.response?.data?.message)))
	}
}