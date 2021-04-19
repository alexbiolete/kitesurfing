import { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ModalAddItem from './ModalAddItem'
import ButtonPrimary from '../Atoms/ButtonPrimary'
import ButtonBlockPrimary from '../Atoms/ButtonBlockPrimary'
import ButtonBlockOutlineDanger from '../Atoms/ButtonBlockOutlineDanger'
import WrapperNavbarResponsiveButtons from '../Molecules/WrapperNavbarResponsiveButtons'
import DropdownNavbarUser from '../Molecules/DropdownNavbarUser'

const Navbar = ({
  authenticatedUserName,
  setAuthenticatedUserName,
  createSpot
}) => {
  const [showModalAddItem, setShowModalAddItem] = useState(false)
  const [showReponsiveMenu, setShowResponsiveMenu] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)

  return (
    <div>
      <nav className="fixed top-0 w-full h-16 z-20 bg-white shadow-md">
        <div className="h-full mx-auto flex items-center justify-between px-6">
          <Link to='/' className="h-full flex items-center justify-center">
            <h1
              className="pt-3 text-5xl align-bottom select-none"
              style={{ fontFamily: "Calligraffitti" }}
            >
              Kite
            </h1>
          </Link>
          <div className="hidden md:flex items-center space-x-2">
            <ButtonPrimary
              title="Spot"
              onClick={() => setShowModalAddItem(!showModalAddItem)}
            >
              {/* ../Resources/svg/plus.svg */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </ButtonPrimary>
              <div className="relative">
                <button
                  className="flex items-center space-x-1 focus:outline-none bg-gray-100 hover:bg-gray-200 pl-2 pr-3 py-1 rounded-full text-gray-600 hover:text-gray-700 transition ease-in-out duration-300"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                >
                  <span className="bg-transparent rounded-full overflow-hidden">
                    {/* ../Resources/svg/user.svg */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="font-medium tracking-wider text-sm">
                    {authenticatedUserName.length > 15 ? authenticatedUserName.substr(0, 14) + '...' : authenticatedUserName}
                  </span>
                </button>
                <DropdownNavbarUser showUserMenu={showUserMenu} setAuthenticatedUserName={setAuthenticatedUserName} />
              </div>
            </div>
          <div className="md:hidden">
            <button
              className="focus:outline-none"
              onClick={() => setShowResponsiveMenu(!showReponsiveMenu)}
            >
              {/* ../Resources/svg/menu.svg */}
              {/* ../Resources/svg/close.svg */}
              {!showReponsiveMenu ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 pt-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 0h24v24H0V0z" fill="none"/>
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 pt-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {showReponsiveMenu ? (
        <nav className="md:hidden fixed top-16 w-screen h-screen z-30 bg-white pl-5 pr-10 py-5">
          <div className="space-y-4">
            <WrapperNavbarResponsiveButtons>
              <ButtonBlockPrimary
                title="Spot"
                onClick={() => {
                  setShowModalAddItem(!showModalAddItem)
                  setShowResponsiveMenu(!showReponsiveMenu)
                }}
              >
                {/* ../Resources/svg/plus.svg */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </ButtonBlockPrimary>
            </WrapperNavbarResponsiveButtons>
            <WrapperNavbarResponsiveButtons>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-center space-x-1.5">
                  <span className="bg-white text-gray-500 rounded-full overflow-hidden">
                    {/* ../Resources/svg/user.svg */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="font-semibold tracking-widest text-gray-500">
                    {authenticatedUserName}
                  </span>
                </div>
                <ButtonBlockOutlineDanger
                  title="Log out"
                  onClick={() => {
                    // Remove the simulated user session
                    localStorage.removeItem('userId')
                    localStorage.removeItem('userName')
                    setAuthenticatedUserName('')
                  }}
                >
                  {/* ../Resources/svg/logout.svg */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  </svg>
                </ButtonBlockOutlineDanger>
              </div>
            </WrapperNavbarResponsiveButtons>
          </div>
        </nav>
      ) : (
        ''
      )}

      <ModalAddItem
        showModalAddItem={showModalAddItem}
        setShowModalAddItem={setShowModalAddItem}
        onAdd={createSpot}
      />
    </div>
  )
}

Navbar.propTypes = {
  authenticatedUserName: PropTypes.string,
  setAuthenticatedUserName: PropTypes.func,
  onClick: PropTypes.func
}

export default Navbar
