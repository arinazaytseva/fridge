import { useState } from 'react'
import SignUpFormFirstStep from './SignUpFormFirstStep/SignUpFormFirstStep'
import SignUpFormSecondStep from './SignUpFormSecondStep/SignUpFormSecondStep'

function SignUpForm() {
    const [signUpFormStepNumber, setSignUpFormStepNumber] = useState(1)
    switch (signUpFormStepNumber) {
        case 1: {
            return <SignUpFormFirstStep 
                step={signUpFormStepNumber} 
                setStep={setSignUpFormStepNumber} />
        }
        case 2: {
            return <SignUpFormSecondStep 
                step={signUpFormStepNumber}
                setStep={setSignUpFormStepNumber} />
        }
        default: {
            return <></>
        }
    }
}

export default SignUpForm