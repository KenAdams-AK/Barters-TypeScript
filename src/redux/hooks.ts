import { AppDispatch, RootState } from './store';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from 'redux';
import * as registrationActions from "./registration/registrationActions";
import { registrationAsyncAction } from "./registration/registrationAsyncActions";
import * as loginActions from "./login/loginActions";
import { loginAsyncAction } from "./login/loginAsyncActions";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const actions = { ...registrationActions, registrationAsyncAction, ...loginActions, loginAsyncAction }

export const useActions = () => {
	const dispatch = useAppDispatch()
	return bindActionCreators(actions, dispatch)
}

