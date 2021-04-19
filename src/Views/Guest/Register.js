import { useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import PropTypes from 'prop-types'
import ButtonPrimary from '../../Components/Atoms/ButtonPrimary'
import LinkOutlineSecondary from '../../Components/Atoms/LinkOutlineSecondary'
import WrapperForm from '../../Components/Molecules/WrapperForm'
import WrapperInput from '../../Components/Molecules/WrapperInput'

const Register = ({
  users,
  onAdd
}) => {
  let history = useHistory();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    // Data validation for Registration
    // If the fields are not completed, the two passwords do
    // not match or the e-mail address is already used by an
    // user, it will be shown an alert. Otherwise, the
    // registration process will proceed.
    if (!name || !email || !password || !confirmPassword) {
      alert('Please complete all fields.')
    } else if (password !== confirmPassword) {
      alert('Passwords do not match.')
      return
    } else if (users.some((user) => {
      return user.email === email
    })) {
      alert('E-mail already in use.')
      return
    } else {
      onAdd({
        name,
        email,
        password
      })
    }

    // Empty fields and change Route to root if registration
    // proceeds.
    setName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    history.push('/')
  }

  return (
    <WrapperForm>
      <form onSubmit={onSubmit}>
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="flex flex-col items-center space-y-4">
            <Link to='/'>
              <h1
                className="pt-4 text-6xl select-none"
                style={{ fontFamily: "Calligraffitti" }}
              >
                Kite
              </h1>
            </Link>
            <WrapperInput
              id="name"
              title="Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
              </svg>
            </WrapperInput>
            <WrapperInput
              id="email"
              title="E-mail"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </WrapperInput>
            <WrapperInput
              id="password"
              title="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </WrapperInput>
            <WrapperInput
              id="password-confirmation"
              title="Confirm password"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              required
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </WrapperInput>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-3 p-3 bg-gray-50 text-right">
          <LinkOutlineSecondary to='/' title="Log in" />
          <ButtonPrimary title="Register" type="submit" />
        </div>
      </form>
    </WrapperForm>
  )
}

Register.propTypes = {
  users: PropTypes.array,
  onAdd: PropTypes.func
}

export default Register
