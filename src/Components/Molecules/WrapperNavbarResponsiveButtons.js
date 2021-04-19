import PropTypes from 'prop-types'

const WrapperNavbarResponsiveButtons = ({ children }) => {
  return (
    <div className="flex flex-col space-y-2 bg-gray-50 shadow-inner rounded-2xl p-4">
      {children}
    </div>
  )
}

WrapperNavbarResponsiveButtons.propTypes = {
  children: PropTypes.any
}

export default WrapperNavbarResponsiveButtons
