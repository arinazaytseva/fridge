import classes from './SignUpFormSecondStep.module.css'
import styles from '../../common/Input/Input.module.css'
import Form from '../../common/Form/Form'
import Input from '../../common/Input/Input'
import { RootState } from '../../../app/store'
import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { Props } from '../SignUpTypes'
import { useNavigate } from 'react-router-dom'
import { setSecondStep } from '../../../features/signUpForm/signUpFormSlice'

function SignUpFormSecondStep(props: Props) {
    const dispatch = useAppDispatch()
    const { email, password } = useAppSelector((state: RootState) => state.signUpForm.secondStep)
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
            type: 'text',
            name: 'surname',
            placeholder: 'Surname',
            value: passwordValue,
            setValue: setPasswordValue,
        },
    ]

    const handleBackClick = () => {
        props.setStep(1)
    }

    const handleSignUpClick = () => {
        dispatch(setSecondStep({
            email: emailValue,
            password: passwordValue,
        }))
    }

    return <Form>
        <form className={classes.signUpForm}>
            <h1>Sign Up</h1>
            <div className={classes.stepContainer}>
                <span className={classes.stepContainer__step}>{props.step}</span>
            </div>
            {
                inputsAttributes.map(inputAttributes => <Input
                    type={inputAttributes.type}
                    name={inputAttributes.name}
                    placeholder={inputAttributes.placeholder}
                    value={inputAttributes.value}
                    setValue={inputAttributes.setValue} />)
            }
            <input className={styles.input} type='button' value='Back' onClick={handleBackClick} />
            <input className={styles.input} type='button' value='Sign up' onClick={handleSignUpClick} />
            <div className={classes.textContainer}>
                Already have an account? <span className={classes.textContainer__link} onClick={() => navigate('/login')}>Log in</span>
            </div>
        </form>
    </Form>
}

export default SignUpFormSecondStep