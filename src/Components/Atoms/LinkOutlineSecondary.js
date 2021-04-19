import { Link } from 'react-router-dom'

const LinkOutlineSecondary = ({
  children,
  to,
  title
}) => {
  return (
    <Link
      to={to}
      className="px-2 py-1.5 bg-transparent border-2 border-gray-600 rounded-full text-gray-600 hover:bg-gray-600 hover:border-gray-600 hover:text-white focus:outline-none transition ease-in-out duration-300"
    >
      <div className="flex items-center space-x-0.5">
        {children}
        <span className="p-0.5 uppercase text-xs font-semibold tracking-widest">
          {title}
        </span>
      </div>
    </Link>
  )
}

export default LinkOutlineSecondary
