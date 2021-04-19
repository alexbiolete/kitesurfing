import PropTypes from 'prop-types'

const LabelUnderlined = ({ id, title }) => {
  return (
    <label
      htmlFor={id}
      className="block -mb-1 select-none font-medium tracking-wider text-sm text-gray-700"
    >
      {title}
    </label>
  )
}

LabelUnderlined.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string
}

export default LabelUnderlined
