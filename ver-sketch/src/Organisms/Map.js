import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, ZoomControl, Marker, Popup } from 'react-leaflet'
import { iconMarkerRed } from '../Resources/iconMarkerRed'
import { iconMarkerYellow } from '../Resources/iconMarkerYellow'

const Map = ({ spots, isFavourite, toggleFavourite }) => {
  return (
    <MapContainer center={[35, -95]} zoom={3} scrollWheelZoom={false}
      zoomControl={false}
      className="min-w-screen h-screen z-0"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomright" zoomInText="+" zoomOutText="-" />
      {spots.map((spot, index) => (
        <Marker
          key={index}
          position={[spot.lat, spot.long]}
          icon={ spot.favourite ? iconMarkerYellow : iconMarkerRed }
        >
          <Popup>
            <div className="mb-5">
              <h1 className="not-italic font-semibold text-xl">
                {spot.name}
              </h1>
              <h2 className="not-italic font-thin text-lg text-gray-400">
                {spot.country}
              </h2>
            </div>
            <div className="flex flex-col items-start space-y-3 mb-4">
              <div className="flex flex-col items-start">
                <span className="not-italic font-medium uppercase text-gray-500">
                  Wind probaility
                </span>
                {spot.probability}%
              </div>
              <div className="flex flex-col items-start">
                <span className="not-italic font-medium uppercase text-gray-500">
                  Latitude
                </span>
                {spot.lat}
              </div>
              <div className="flex flex-col items-start">
                <span className="not-italic font-medium uppercase text-gray-500">
                  Longitude
                </span>
                {spot.long}
              </div>
              <div className="flex flex-col items-start">
                <span className="not-italic font-medium uppercase text-gray-500">
                  When to go
                </span>
                {spot.month}
              </div>
            </div>
            {isFavourite ? (
              <div className="-mx-5">
                <button
                  className="flex items-center justify-center w-full py-2 bg-red-500 uppercase not-italic text-white focus:outline-none"
                  onClick={() => toggleFavourite(!isFavourite)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-1 fill-current">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M19 13H5v-2h14v2z"/>
                  </svg>
                  Remove from favourites
                </button>
              </div>
            ) : (
              <div className="-mx-5">
                <button
                  className="flex items-center justify-center w-full py-2 bg-yellow-500 uppercase not-italic text-white focus:outline-none"
                  onClick={() => toggleFavourite(!isFavourite)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-1 fill-current">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                  </svg>
                  Add to favourites
                </button>
              </div>
            )}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default Map
