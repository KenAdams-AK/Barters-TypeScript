import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import { Dispatch } from "redux"
import { BartersActionsType } from "../redux.data.type"
import { getBartersFailure, getBartersRequest, getBartersSuccess } from "./bartersActions"


export const getBartersAsyncAction = () => {
	return (dispatch: Dispatch<BartersActionsType>) => {
		dispatch(getBartersRequest())

		const options: AxiosRequestConfig = {
			method: 'GET',
			url: 'http://localhost:4000/api/barter'
		}

		axios(options)
			.then((response: AxiosResponse) => dispatch(getBartersSuccess(response.data)))
			.catch((error: AxiosError) => dispatch(getBartersFailure(error?.response?.data?.message)))
	}
}