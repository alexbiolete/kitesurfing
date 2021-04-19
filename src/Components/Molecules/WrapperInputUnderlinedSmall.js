import PropTypes from 'prop-types'
import LabelUnderlinedSmall from '../Atoms/LabelUnderlinedSmall'
import InputTextUnderlinedSmall from '../Atoms/InputTextUnderlinedSmall'

const WrapperInputUnderlinedSmall = ({
  id,
  title,
  type,
  onChange,
  value,
  placeholder,
  required
}) => {
  return (
    <div className="w-full text-gray-600 my-3">
      <LabelUnderlinedSmall id={id} title={title} />
      <InputTextUnderlinedSmall
        id={id}
        key={id}
        title={title}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}

WrapperInputUnderlinedSmall.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool
}

export default WrapperInputUnderlinedSmall
