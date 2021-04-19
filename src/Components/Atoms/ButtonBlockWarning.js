import PropTypes from 'prop-types'

const ButtonBlockWarning = ({
  children,
  title,
  type='button',
  onClick
}) => {
  return (
    <button
      className="w-full px-4 py-2 bg-yellow-500 border-2 border-yellow-500 rounded-xl text-white hover:bg-transparent hover:border-yellow-600 hover:text-yellow-600 focus:outline-none transition ease-in-out duration-300"
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

ButtonBlockWarning.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
}

export default ButtonBlockWarning
