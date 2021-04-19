import PropTypes from 'prop-types'

const LabelUnderlinedSmall = ({ id, title }) => {
  return (
    <label
      htmlFor={id}
      className="block -mb-1 select-none font-medium tracking-wider text-xs text-gray-700"
    >
      {title}
    </label>
  )
}

LabelUnderlinedSmall.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string
}

export default LabelUnderlinedSmall
