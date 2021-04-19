const InputTextUnderlined = ({
  id,
  title,
  type='text',
  onChange,
  value,
  placeholder,
  required=false
}) => {
  return (
    <input
      id={id}
      name={id}
      key={id}
      title={title}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className="w-full px-2 py-1 bg-transparent border-b-2 border-gray-300 rounded-none font-light text-sm placeholder-gray-300 hover:border-blue-500 focus:outline-none transition ease-in-out duration-300"
      required={required}
    />
  )
}

export default InputTextUnderlined
