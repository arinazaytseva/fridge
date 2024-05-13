import classes from './App.module.css'
import { Routes, Route } from 'react-router-dom'
import LogInForm from './components/LogInForm/LogInForm'
import SignUpForm from './components/SignUpForm/SignUpForm'

function App() {
  return (
    <div className={classes.App}>
      <Routes>
        <Route path='/login' element={<LogInForm />} />
        <Route path='/signup' element={<SignUpForm />} />
      </Routes>
    </div>
  )
}

export default App