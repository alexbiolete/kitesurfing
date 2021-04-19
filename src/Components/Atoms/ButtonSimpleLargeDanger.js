const ButtonSimpleLargeDanger = ({
  children,
  title,
  type='button',
  onClick
}) => {
  return (
    <button
      type={type}
      className="px-4 py-2 bg-white shadow-lg rounded-xl text-red-600 hover:bg-gray-100 hover:text-red-800 focus:outline-none transition ease-in-out duration-300"
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

export default ButtonSimpleLargeDanger
