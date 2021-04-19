import PropTypes from 'prop-types'
import InputSearch from '../../Components/Molecules/InputSearch'
import Map from '../../Components/Organisms/Map'
import MenuFilter from '../../Components/Organisms/MenuFilter'
import Table from '../../Components/Organisms/Table'

const Dashboard = ({
  spots,
  setSpots,
  unfilteredSpots,
  createFavourite,
  deleteFavourite,
  filterCountry,
  setFilterCountry,
  filterProbability,
  setFilterProbability,
  filterSearch,
  setFilterSearch,
  useSortableData
}) => {
  return (
    <div className="relative z-0">
      <Map
        spots={spots}
        createFavourite={createFavourite}
        deleteFavourite={deleteFavourite}
      />
      <MenuFilter
        spots={spots}
        setSpots={setSpots}
        unfilteredSpots={unfilteredSpots}
        filterCountry={filterCountry}
        setFilterCountry={setFilterCountry}
        filterProbability={filterProbability}
        setFilterProbability={setFilterProbability}
        setFilterSearch={setFilterSearch}
      />
      <div className="max-w-7xl mx-auto pt-5 pb-10 space-y-6">
        <div className="px-5 md:px-2.5 xl:px-0 space-y-4">
          <h1 className="px-2 font-semibold text-3xl">
            Locations
          </h1>
          <InputSearch
            spots={spots}
            setSpots={setSpots}
            unfilteredSpots={unfilteredSpots}
            filterSearch={filterSearch}
            setFilterSearch={setFilterSearch}
          />
        </div>
        <Table
          spots={spots}
          filterCountry={filterCountry}
          filterProbability={filterProbability}
          useSortableData={useSortableData}
        />
      </div>
    </div>
  )
}

Dashboard.propTypes = {
  spots: PropTypes.array,
  setSpots: PropTypes.func,
  unfilteredSpots: PropTypes.array,
  createFavourite: PropTypes.func,
  deleteFavourite: PropTypes.func,
  filterCountry: PropTypes.string,
  setFilterCountry: PropTypes.func,
  filterProbability: PropTypes.string,
  setFilterProbability: PropTypes.func,
  filterSearch: PropTypes.string,
  setFilterSearch: PropTypes.func,
  useSortableData: PropTypes.func
}

export default Dashboard
