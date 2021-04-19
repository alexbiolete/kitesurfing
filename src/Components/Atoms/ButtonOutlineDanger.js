const ButtonOutlineDanger = ({
  children,
  title,
  type='button',
  onClick
}) => {
  return (
    <button
      className="px-2 py-1.5 bg-transparent border-2 border-red-600 rounded-full text-red-600 hover:bg-red-600 hover:border-red-600 hover:text-white focus:outline-none transition ease-in-out duration-300"
      type={type}
      onClick={onClick}
    >
      <div className="flex items-center space-x-0.5">
        {children}
        <span className="p-0.5 uppercase text-xs font-semibold tracking-widest">
          {title}
        </span>
      </div>
    </button>
  )
}

export default ButtonOutlineDanger
