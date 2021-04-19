import { useState } from 'react'
import Map from '../../Organisms/Map'
import ModalAddSpot from '../../Organisms/ModalAddSpot'
import MenuFilter from '../../Organisms/MenuFilter'
import InputSearch from '../../Molecules/InputSearch'
import TableSpots from '../../Organisms/TableSpots'

// const spots = [
//   {
//     id: 1,
//     name: 'Little Rock, AR',
//     country: 'USA',
//     latitude: '34.746483',
//     longitude: '-92.289597',
//     wind_prob: '41.9%',
//     when_to_go: 'April',
//     favourite: true
//   },
//   {
//     id: 2,
//     name: 'Fort Pierce, FL',
//     country: 'USA',
//     latitude: '27.4467056',
//     longitude: '-80.3256056',
//     wind_prob: '57.0%',
//     when_to_go: 'December',
//     favourite: false
//   },
//   {
//     id: 3,
//     name: 'Manassas, VA',
//     country: 'USA',
//     latitude: '38.7509488',
//     longitude: '-77.4752667',
//     wind_prob: '33.5%',
//     when_to_go: 'June',
//     favourite: false
//   },
//   {
//     id: 4,
//     name: 'Cincinnati, OH',
//     country: 'USA',
//     latitude: '39.1031182',
//     longitude: '-84.5120196',
//     wind_prob: '69.5%',
//     when_to_go: 'July',
//     favourite: false
//   },
//   {
//     id: 5,
//     name: 'Wichita, KA',
//     country: 'USA',
//     latitude: '37.697948',
//     longitude: '-97.314835',
//     wind_prob: '3.1%',
//     when_to_go: 'March',
//     favourite: false
//   },
//   {
//     id: 6,
//     name: 'Providence, RI',
//     country: 'USA',
//     latitude: '41.825226',
//     longitude: '-71.418884',
//     wind_prob: '70.0%',
//     when_to_go: 'February',
//     favourite: false
//   },
//   {
//     id: 7,
//     name: 'Tuscaloosa, AL',
//     country: 'USA',
//     latitude: '33.2098400',
//     longitude: '-87.5691700',
//     wind_prob: '73.7%',
//     when_to_go: 'August',
//     favourite: false
//   },
//   {
//     id: 8,
//     name: 'Sacramento, CA',
//     country: 'USA',
//     latitude: '38.575764',
//     longitude: '-121.478851',
//     wind_prob: '35.2%',
//     when_to_go: 'June',
//     favourite: false
//   },
// ]

const Dashboard = ({ spots, showModalAddSpot, setShowModalAddSpot, favourites }) => {
  const [isFavourite, toggleFavourite] = useState(false)
  const tableColumns = [
    {
      label: 'Name',
      field: 'name',
      sort: 'asc',
    },
    {
      label: 'Country',
      field: 'country',
      sort: 'asc',
    },
    {
      label: 'Latitude',
      field: 'lat',
      sort: 'asc',
    },
    {
      label: 'Longitude',
      field: 'long',
      sort: 'asc',
    },
    {
      label: 'Wind Prob.',
      field: 'probability',
      sort: 'asc',
    },
    {
      label: 'When to go',
      field: 'month',
      sort: 'asc',
    }
  ];


  return (
    <div className="relative z-0">
      <ModalAddSpot showModalAddSpot={showModalAddSpot} setShowModalAddSpot={setShowModalAddSpot} />
      <Map spots={spots} isFavourite={isFavourite} toggleFavourite={toggleFavourite} />
      <MenuFilter />
      <div className="px-10 py-5">
        <h1 className="mb-1 font-semibold text-3xl">
          Locations
        </h1>
        <InputSearch />
        <TableSpots columns={tableColumns} rows={spots} />
      </div>
    </div>
  )
}

export default Dashboard
