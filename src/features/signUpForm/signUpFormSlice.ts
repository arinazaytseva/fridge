import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IState, IFirstStep, ISecondStep } from './signUpFormTypes'

const initialState: IState = {
    firstStep: {
        name: '',
        surname: '',
        age: '',
        sex: '',
    },
    secondStep: {
        email: '',
        password: '',
    }
}

const signUpFormSlice = createSlice({
    name: 'signUpForm',
    initialState,
    reducers: {
        setFirstStep: (state, action: PayloadAction<IFirstStep>) => {
            state.firstStep = action.payload
            /* FINAL POINT */
            console.log(action)
        },
        setSecondStep: (state, action: PayloadAction<ISecondStep>) => {
            state.secondStep = action.payload
            /* FINAL POINT */
            console.log(action)
        },
    },
})

export const { setFirstStep, setSecondStep } = signUpFormSlice.actions
export default signUpFormSlice.reducer