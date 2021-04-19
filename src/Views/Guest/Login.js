import { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ButtonPrimary from '../../Components/Atoms/ButtonPrimary'
import LinkOutlineSecondary from '../../Components/Atoms/LinkOutlineSecondary'
import WrapperInput from '../../Components/Molecules/WrapperInput'

const Login = ({
  fetchSession,
  session,
  setSession,
  users,
  setAuthenticatedUserName
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [invalidCreditentials, setInvalidCreditentials] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      alert('Please complete all fields.')
      return
    }

    localStorage.setItem('userId', fetchSession({ email, password }))

    // Check if the creditentials exist. If the user name is
    // set, it will be redirected to the Dashboard (logic in
    // App).
    users.forEach((user) => {
      if (user.email === email && user.password === password) {
        localStorage.setItem('userName', user.name)
        setAuthenticatedUserName(user.name)
        return
      }
    })

    setEmail('')
    setPassword('')
    setInvalidCreditentials(true)
  }

  return (
    <div className="shadow-lg overflow-hidden rounded-2xl">
      <form onSubmit={onSubmit}>
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="w-60 flex flex-col items-center space-y-4">
            <Link to='/'>
              <h1
                className="pt-4 text-6xl select-none"
                style={{ fontFamily: "Calligraffitti" }}
              >
                Kite
              </h1>
            </Link>
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
          </div>

          {/*
            * This text becomes visible if wrong creditentials
            * are introduced.
            */}
          {invalidCreditentials ? (
            <small className="font-medium text-xs text-red-500">
              Invalid e-mail and/or password.
            </small>
          ) : (
            ''
          )}
        </div>

        <div className="flex items-center justify-end space-x-3 p-3 bg-gray-50 text-right">
          <LinkOutlineSecondary to='/register' title="Register" />
          <ButtonPrimary title="Log in" type="submit" />
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  fetchSession: PropTypes.func,
  session: PropTypes.string,
  setSession: PropTypes.func,
  users: PropTypes.array,
  setAuthenticatedUserName: PropTypes.func
}

export default Login
