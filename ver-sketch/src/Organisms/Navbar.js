import { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({ showModalAddSpot, setShowModalAddSpot }) => {
  const [showUserMenu, setShowUserMenu] = useState(false)
  const location = useLocation()

  return (
    <div>
      {location.pathname !== '/' && (
        <nav className="fixed top-0 w-full h-12 z-50 bg-white">
          <div className="h-full mx-auto flex items-center justify-between px-6">
            <Link to='/'>
              <h1
                className="pt-3 text-4xl select-none"
                style={{ fontFamily: "Calligraffitti" }}
              >
                Kite
              </h1>
            </Link>
            <div className="flex items-center space-x-5">
              <button
                className="px-7 py-2 text-white uppercase font-medium text-xs"
                style={{ backgroundColor: "#007AFF" }}
                onClick={() => setShowModalAddSpot(!showModalAddSpot)}
              >
                Add spot
              </button>
              <div className="relative mt-1">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                >
                  <span className="bg-white text-black rounded-full overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
                {showUserMenu ? (
                  <div className="absolute top-10 right-0 bg-white">
                    <Link
                      to='/'
                    >
                      <div
                        className="flex items-center px-4 py-2 rounded-sm shadow-lg text-red-500"
                        style={{ boxShadow: "0 2.5px 10px rgba(0, 0, 0, 0.5)" }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-current"><path d="M0 0h24v24H0V0z" fill="none"/>
                          <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                        </svg>
                        <span className="pt-0.5 text-sm">
                          Logout
                        </span>
                      </div>
                    </Link>
                  </div>
                ) : ('')}
              </div>
            </div>
          </div>
        </nav>
      )}
    </div>
  )
}

Navbar.propTypes = {
  onClick: PropTypes.func
}

export default Navbar
