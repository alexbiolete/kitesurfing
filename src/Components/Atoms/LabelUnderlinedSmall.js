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

export default LabelUnderlinedSmall
