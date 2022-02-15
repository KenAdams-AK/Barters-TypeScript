import { AppDispatch, RootState } from './store';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from 'redux';
import * as registrationActions from "./registration/registrationActions";
import { registrationAsyncAction } from "./registration/registrationAsyncActions";
import * as loginActions from "./login/loginActions";
import { loginAsyncAction } from "./login/loginAsyncActions";
import * as barterActions from "./barters/bartersActions";
import {getBartersAsyncAction} from './barters/bartersAsyncActions'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const authActions = { ...registrationActions, registrationAsyncAction, ...loginActions, loginAsyncAction }

export const useAuthActions = () => {
	const dispatch = useAppDispatch()
	return bindActionCreators(authActions, dispatch)
}

const bartersActions = { ...barterActions, getBartersAsyncAction }

export const useBartersActions = () => {
	const dispatch = useAppDispatch()
	return bindActionCreators(bartersActions, dispatch)
}

