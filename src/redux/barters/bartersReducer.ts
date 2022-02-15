import { BartersActionsType, BartersStateType } from "../redux.data.type";
import { BartersTypes } from "./bartersTypes";

const initialState: BartersStateType = {
	isLoading: false,
	barters: {},
	getBartersError: null,
}

export const bartersReducer = (state = initialState, action: BartersActionsType) => {
	switch (action.type) {
		case BartersTypes.GET_BARTERS_REQUEST:
			return {
				...state,
				isLoading: true,
			}
		case BartersTypes.GET_BARTERS_SUCCESS:
			return {
				...state,
				isLoading: false,
				barters: action.payload
			}
		case BartersTypes.GET_BARTERS_FAILURE:
			return {
				...state,
				isLoading: false,
				getBartersError: action.payload
			}
	
		default:
			return state;
	}
}