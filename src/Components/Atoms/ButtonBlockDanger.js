import PropTypes from 'prop-types'

const ButtonBlockDanger = ({
  children,
  title,
  type='button',
  onClick
}) => {
  return (
    <button
      className="w-full px-4 py-2 bg-red-600 border-2 border-red-600 rounded-xl text-white hover:bg-transparent hover:border-red-700 hover:text-red-700 focus:outline-none transition ease-in-out duration-300"
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

ButtonBlockDanger.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
}

export default ButtonBlockDanger
