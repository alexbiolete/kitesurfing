const ButtonSimpleLargeSecondary = ({
  children,
  title,
  type='button',
  onClick
}) => {
  return (
    <button
      className="px-4 py-2 bg-white shadow-lg rounded-xl text-gray-800 hover:bg-gray-100 hover:text-black focus:outline-none transition ease-in-out duration-300"
      type={type}
      onClick={onClick}
    >
      <div className="flex items-center space-x-2">
        {children}
        <span className="p-0.5 uppercase text-xs font-semibold tracking-widest">
          {title}
        </span>
      </div>
    </button>
  )
}

export default ButtonSimpleLargeSecondary
