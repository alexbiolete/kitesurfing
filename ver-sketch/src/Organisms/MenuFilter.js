import { useState } from 'react'

const MenuFilter = () => {
  const [showFilterMenu, setShowFilterMenu] = useState(true)

  return (
    <div>
      {showFilterMenu ? (
        <button
          className="absolute top-24 right-4 z-10 px-4 py-2 bg-white flex items-center space-x-1 rounded-none"
          style={{ boxShadow: "0 1px 2.5px rgba(0, 0, 0, 0.5)" }}
          onClick={() => setShowFilterMenu(!showFilterMenu)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current w-4 h-4">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
          </svg>
          <span className="uppercase text-xs font-semibold tracking-wider">
            Filters
          </span>
        </button>
      ) : (
        <div className="absolute top-24 right-4 z-10 p-3 bg-white w-44">
          <div className="space-y-4">
            <div className="flex flex-col items-start">
              <label htmlFor="country" className="text-xs">Country</label>
              <input
                type="text"
                id="country"
                key="country"
                className="w-full border-b-2 border-gray-400 focus:border-blue-400 focus:outline-none text-xs"
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="wind_probability" className="text-xs">Wind Probability</label>
              <input
                type="text"
                id="wind_probability"
                key="wind_probability"
                className="w-full border-b-2 border-gray-400 focus:border-blue-400 focus:outline-none text-xs"
              />
            </div>
            <div className="flex justify-center">
              <button
                className="bg-white rounded-none px-4 py-1"
                style={{ boxShadow: "0 1px 2.5px rgba(0, 0, 0, 0.75)" }}
                onClick={() => setShowFilterMenu(!showFilterMenu)}
              >
                <span className="uppercase text-xs font-semibold tracking-wider">
                  Apply filter
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MenuFilter
