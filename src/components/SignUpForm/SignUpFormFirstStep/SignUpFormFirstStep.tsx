import classes from './SignUpFormFirstStep.module.css'
import styles from '../../common/Input/Input.module.css'
import Form from '../../common/Form/Form'
import Input from '../../common/Input/Input'
import { RootState } from '../../../app/store'
import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { Props } from '../SignUpTypes'
import { useNavigate } from 'react-router-dom'
import { setFirstStep } from '../../../features/signUpForm/signUpFormSlice'

function SignUpFormFirstStep(props: Props) {
    const dispatch = useAppDispatch()
    const { name, surname, age, sex } = useAppSelector((state: RootState) => state.signUpForm.firstStep)
    const [nameValue, setNameValue] = useState(name)
    const [surnameValue, setSurnameValue] = useState(surname)
    const [ageValue, setAgeValue] = useState(age)
    const [sexValue, setSexValue] = useState(sex)
    const navigate = useNavigate()

    const inputsAttributes = [
        {
            type: 'text',
            name: 'name',
            placeholder: 'Name',
            value: nameValue,
            setValue: setNameValue,
        },
        {
            type: 'text',
            name: 'surname',
            placeholder: 'Surname',
            value: surnameValue,
            setValue: setSurnameValue,
        },
        {
            type: 'text',
            name: 'age',
            placeholder: 'Age',
            value: ageValue,
            setValue: setAgeValue,
        },
        {
            type: 'text',
            name: 'sex',
            placeholder: 'Sex',
            value: sexValue,
            setValue: setSexValue,
        },
    ]

    const handleNextClick = () => {
        dispatch(setFirstStep({ 
            name: nameValue, 
            surname: surnameValue, 
            age: ageValue, 
            sex: sexValue, 
        }))
        props.setStep(2)
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
            <input className={styles.input} type='button' value='Next' onClick={handleNextClick} />
            <div className={classes.textContainer}>
                Already have an account? <span className={classes.textContainer__link} onClick={() => navigate('/login')}>Log in</span>
            </div>
        </form>
    </Form>
}

export default SignUpFormFirstStep