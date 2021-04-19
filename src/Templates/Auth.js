import PropTypes from 'prop-types'
import Navbar from '../Components/Organisms/Navbar'

const Auth = ({
  children,
  authenticatedUserName,
  setAuthenticatedUserName,
  createSpot
}) => {
  return (
    <div>
      <Navbar
        authenticatedUserName={authenticatedUserName}
        setAuthenticatedUserName={setAuthenticatedUserName}
        createSpot={createSpot}
      />
      <div className="min-h-screen flex flex-col justify-between bg-gray-50">
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}

Auth.propTypes = {
  children: PropTypes.any,
  authenticatedUserName: PropTypes.string,
  setAuthenticatedUserName: PropTypes.func,
  createSpot: PropTypes.func
}

export default Auth
