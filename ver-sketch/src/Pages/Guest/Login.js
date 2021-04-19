import { Link } from 'react-router-dom'
import WrapperInput from '../../Molecules/WrapperInput'

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="w-60 flex flex-col items-center space-y-4">
        <h1 className="text-6xl" style={{ fontFamily: "Calligraffitti" }}>
          Kite
        </h1>
        <WrapperInput
          id="username"
          title="Username"
        />
        <WrapperInput
          id="password"
          title="Password"
        />
      </div>
      <Link
        to="/dashboard"
        className="bg-blue-400 text-white px-10 py-2"
        style={{
          backgroundColor: "#4A90E2",
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.5)"
        }}
      >
        Login
      </Link>
    </div>
  )
}

export default Login
