import classes from './LogInForm.module.css'
import styles from '../common/Input/Input.module.css'
import Form from '../common/Form/Form'
import Input from '../common/Input/Input'
import { RootState } from '../../app/store'
import { useState } from 'react'
import { setState } from '../../features/logInForm/logInFormSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useNavigate } from 'react-router-dom'

function LogInForm() {
    const dispatch = useAppDispatch()
    const { email, password } = useAppSelector((state: RootState) => state.logInForm)
    const [emailValue, setEmailValue] = useState(email)
    const [passwordValue, setPasswordValue] = useState(password)
    const navigate = useNavigate()

    const inputsAttributes = [
        {
            type: 'text',
            name: 'email',
            placeholder: 'Email',
            value: emailValue,
            setValue: setEmailValue,
        },
        {
            type: 'password',
            name: 'password',
            placeholder: 'Password',
            value: passwordValue,
            setValue: setPasswordValue,
        },
    ]

    const handleClick = () => {
        dispatch(setState({ email: emailValue, password: passwordValue }))
    }

    return <Form>
        <form className={classes.loginForm}>
            <h1>Log In</h1>
            {
                inputsAttributes.map(inputsAttributes => <Input
                    type={inputsAttributes.type} 
                    name={inputsAttributes.name} 
                    placeholder={inputsAttributes.placeholder}
                    value={inputsAttributes.value}
                    setValue={inputsAttributes.setValue} />)
            }
            <input className={styles.input} type='button' value='Log in' onClick={handleClick} />
            <div className={classes.text}>
                You don't have an account yet? <span className={classes.text__signUpLink} onClick={() => navigate('/signup')}>Sign up</span>
            </div>
        </form>
    </Form>
}

export default LogInForm