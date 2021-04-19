import PropTypes from 'prop-types'
import LabelUnderlined from '../Atoms/LabelUnderlined'
import InputTextUnderlined from '../Atoms/InputTextUnderlined'

const WrapperInputUnderlined = ({
  id,
  title,
  type,
  onChange,
  value,
  placeholder,
  required
}) => {
  return (
    <div className="w-full text-gray-600 my-6">
      <LabelUnderlined id={id} title={title} />
      <InputTextUnderlined
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

WrapperInputUnderlined.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool
}

export default WrapperInputUnderlined
