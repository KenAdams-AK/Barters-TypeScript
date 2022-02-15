import { BarterType } from './../../components/components.data.type';
import { BartersActionsType, BartersStateType } from "../redux.data.type";
import { BartersTypes } from "./bartersTypes";

const initialState: BartersStateType = {
	isLoading: false,
	barters: [],
	getBartersError: null,
}

export const bartersReducer = (state = initialState, action: BartersActionsType): BartersStateType => {
	switch (action.type) {
		case BartersTypes.GET_BARTERS_REQUEST:
			return {
				...state,
				isLoading: true,
				getBartersError:null
			}
		case BartersTypes.GET_BARTERS_SUCCESS:
			return {
				...state,
				isLoading: false,
				barters: action.payload,
				getBartersError: null
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