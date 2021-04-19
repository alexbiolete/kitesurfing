import PropTypes from 'prop-types'

const Guest = ({ children }) => {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center bg-gray-50">
      {children}
    </div>
  )
}

Guest.propTypes = {
  children: PropTypes.any
}

export default Guest
