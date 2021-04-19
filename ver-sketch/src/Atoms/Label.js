const Label = ({ id, title }) => {
  return (
    <label
      htmlFor={id}
      className="text-xs text-gray-900"
    >
      {title}
    </label>
  )
}

export default Label
