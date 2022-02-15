import { registrationReducer } from './registration/registrationReducer';
import { configureStore } from '@reduxjs/toolkit'
import { loginReducer } from './login/loginReducer';
import { bartersReducer } from './barters/bartersReducer';

export const store = configureStore({
	reducer: {
		registration: registrationReducer,
		login: loginReducer,
		barters: bartersReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch