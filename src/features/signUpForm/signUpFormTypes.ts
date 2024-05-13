export interface IFirstStep {
    name: string
    surname: string
    age: string
    sex: string
}

export interface ISecondStep {
    email: string
    password: string
}

export interface IState {
    firstStep: IFirstStep
    secondStep: ISecondStep
}