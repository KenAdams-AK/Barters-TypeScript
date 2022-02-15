import { BartersActionsType } from '../redux.data.type';
import { BartersTypes } from "./bartersTypes";

export const getBartersRequest = (): BartersActionsType => ({
	type: BartersTypes.GET_BARTERS_REQUEST
})

export const getBartersSuccess = (response: any): BartersActionsType => ({
	type: BartersTypes.GET_BARTERS_SUCCESS,
	payload: response
})

export const getBartersFailure = (errorMessage: string): BartersActionsType => ({
	type: BartersTypes.GET_BARTERS_FAILURE,
	payload: errorMessage
})