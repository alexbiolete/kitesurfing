import PropTypes from 'prop-types'

const WrapperForm = ({
  children
}) => {
  return (
    <div className="w-80 shadow-lg overflow-hidden rounded-2xl">
      {children}
    </div>
  )
}

WrapperForm.propTypes = {
  children: PropTypes.any
}

export default WrapperForm
