const InputSearch = ({
  spots,
  setSpots,
  unfilteredSpots,
  filterSearch,
  setFilterSearch
}) => {
  return (
    <div className="relative transition ease-in-out duration-300 md:transform hover:scale-110 md:hover:translate-x-12 lg:hover:translate-x-14 xl:hover:translate-x-16">
      <input
        id="search"
        type="text"
        onChange={(e) => {
          // Store input in a variable while typing and filter
          // the Spot elements by name. If the input field is
          // emptied, restore the Spot array to the unfiltered
          // one.
          setFilterSearch(e.target.value)
          if (e.target.value === '') {
            setSpots(unfilteredSpots)
          } else {
            setSpots(spots.filter((spot) => spot.name.toLowerCase().includes(filterSearch.toLowerCase())))
          }
        }}
        value={filterSearch}
        className="w-full md:w-96 pl-12 py-2 placeholder-gray-700 bg-white rounded-full shadow-lg border-2 border-transparent focus:outline-none hover:border-gray-200 transition ease-in-out duration-300"
        placeholder="Search..."
      />
      <span className="absolute top-2.5 left-4 text-gray-600">
        {/* ../Resources/svg/search.svg */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
      </span>
    </div>
  )
}

export default InputSearch
