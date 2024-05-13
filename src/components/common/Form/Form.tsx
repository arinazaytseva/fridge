import classes from './Form.module.css'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

function Form({ children }: Props) {
    return <div className={classes.mainContainer}>
        <div className={classes.container}>
            <div className={classes.container_gradient}></div>
        </div>
        <div className={classes.container}>
            <div className={classes.form}>{children}</div>
        </div>
    </div>
}

export default Form