import { registrationReducer } from './registration/registrationReducer';
import { configureStore } from '@reduxjs/toolkit'
import { loginReducer } from './login/loginReducer';

export const store = configureStore({
	reducer: {
		registration: registrationReducer,
		login: loginReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch