import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IState } from './logInFormTypes'

const initialState: IState = {
    email: '',
    password: '',
}

const logInFormSlice = createSlice({
    name: 'loginForm',
    initialState,
    reducers: {
        setState: (state, action: PayloadAction<IState>) => {
            state.email = action.payload.email
            state.password = action.payload.password
            /* FINAL POINT */
            console.log(action)
        },
    },
})

export const { setState } = logInFormSlice.actions
export default logInFormSlice.reducer