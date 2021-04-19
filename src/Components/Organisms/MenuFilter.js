import React, { useState } from 'react'
import ButtonSimpleLargeSecondary from '../Atoms/ButtonSimpleLargeSecondary'
import ButtonSimpleLargeDanger from '../Atoms/ButtonSimpleLargeDanger'
import ModalFilter from '../Molecules/ModalFilter'

const MenuFilter = ({
  spots,
  setSpots,
  unfilteredSpots,
  filterCountry,
  setFilterCountry,
  filterProbability,
  setFilterProbability,
  setFilterSearch
}) => {
  const [showFilterMenu, setShowFilterMenu] = useState(true)

  return (
    <div className="z-10">
      {showFilterMenu ? (
        <div className="absolute top-20 right-4 z-10 flex flex-col items-end space-x-2 space-y-2">
          <ButtonSimpleLargeSecondary title="Set filters" onClick={() => {
            setShowFilterMenu(!showFilterMenu)
          }}>
            {/* ../Resources/svg/filters-list.svg */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
            </svg>
          </ButtonSimpleLargeSecondary>
          {/*
            * If spots has less elements than unfilteredSpots,
            * the array was most probably filtered. In this
            * case, a button will appear, which clears the
            * filter fields and assigns to spots the unfiltered * objects from an unaltered array.
            */}
          {spots.length !== unfilteredSpots.length ? (
            <ButtonSimpleLargeDanger title="Remove filters" onClick={() => {
              setFilterCountry('')
              setFilterProbability('')
              setFilterSearch('')
              setSpots(unfilteredSpots)
            }}>
              {/* ../Resources/svg/filters-remove.svg */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zm2-8h6v8H5v-8zm5-6H6L5 5H2v2h12V5h-3z"/>
              </svg>
            </ButtonSimpleLargeDanger>
          ) : (
            ''
          )}
        </div>
      ) : (
        // If the showFilterMenu is true, the filter buttons
        // are replaced with a modal. In this modal can be set
        // values for filtering by Country or Wind Probability.
        // The logic for filtering is below.
        <ModalFilter
          filterCountry={filterCountry}
          setFilterCountry={setFilterCountry}
          filterProbability={filterProbability}
          setFilterProbability={setFilterProbability}
          onClick={() => {
            setSpots(spots.filter((spot) => spot.country.toLowerCase().includes(filterCountry.toLowerCase()) && spot.probability.toString().includes(filterProbability.toString())))
            setShowFilterMenu(!showFilterMenu)
          }}
        />
      )}
    </div>
  )
}

export default MenuFilter
