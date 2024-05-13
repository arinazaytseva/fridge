import { configureStore } from '@reduxjs/toolkit'
import logInFormReducer from '../features/logInForm/logInFormSlice'
import signUpFormReducer from '../features/signUpForm/signUpFormSlice'

export const store = configureStore({ reducer: {
    logInForm: logInFormReducer,
    signUpForm: signUpFormReducer,
} })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch