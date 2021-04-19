const ButtonBlockOutlineDanger = ({
  children,
  title,
  type='button',
  onClick
}) => {
  return (
    <button
      className="w-full px-4 py-2 bg-transparent border-2 border-red-600 rounded-xl text-red-600 hover:bg-red-600 hover:border-red-600 hover:text-white focus:outline-none transition ease-in-out duration-300"
      type={type}
      onClick={onClick}
    >
      <div className="flex items-center justify-center space-x-1">
        {children}
        <span className="p-0.5 uppercase text-xs font-semibold tracking-widest">
          {title}
        </span>
      </div>
    </button>
  )
}

export default ButtonBlockOutlineDanger
