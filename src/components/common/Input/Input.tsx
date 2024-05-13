import classes from './Input.module.css'
import React, { RefObject } from 'react'
import { Props } from './InputTypes'

function Input(props: Props) {
    let input: RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>()

    const handleChange = () => {
        if (input.current) {
            props.setValue(input.current.value)
        }
    }

    return <input
        className={classes.input}
        ref={input}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={handleChange} />
}

export default Input