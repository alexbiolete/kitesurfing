import { MapContainer, TileLayer, ZoomControl, Marker, Popup } from 'react-leaflet'
import { iconMarkerRed } from '../../Resources/iconMarkerRed'
import { iconMarkerYellow } from '../../Resources/iconMarkerYellow'
import ButtonBlockDanger from '../Atoms/ButtonBlockDanger'
import ButtonBlockWarning from '../Atoms/ButtonBlockWarning'

const Map = ({
  spots,
  createFavourite,
  deleteFavourite
}) => {
  return (
    <MapContainer center={[35, 0]} zoom={3} scrollWheelZoom={false}
      zoomControl={false}
      className="min-w-screen h-96 z-0"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomright" zoomInText="+" zoomOutText="-" />
      {/*
        * Generate Marker components for each Spot element from
        * the array.

        * If the latitude and longitude fields are not
        * set (highly unlikely), position them at the
        * coordinates [0, 0].

        * If the Spot elements are associated with a Favourite
        * element (logic in App), show a yellow marker.
        * Otherwise, a red one.
        */}
      {spots.map((spot, index) => (
        <Marker
          key={index}
          position={[
            spot.lat ? spot.lat : 0,
            spot.long ? spot.long : 0
          ]}
          icon={ spot.favourite ? iconMarkerYellow : iconMarkerRed }
        >
          <Popup>
            <div>
              <div className="mb-5">
                <h1 className="flex items-center not-italic font-semibold text-xl">
                  {spot.name}
                  {spot.favourite ? (
                    <span className="flex-shrink-0 text-yellow-500 mx-2">
                      {/* ../Resources/svg/star.svg */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="currentColor">
                        <g>
                          <path d="M0,0h24v24H0V0z" fill="none"/>
                          <path d="M0,0h24v24H0V0z" fill="none"/>
                        </g>
                        <g>
                          <path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/>
                        </g>
                      </svg>
                    </span>
                  ) : (
                    ''
                  )}
                </h1>
                <h2 className="not-italic font-thin text-lg text-gray-400">
                  {spot.country}
                </h2>
              </div>
              <div className="flex flex-col items-start space-y-3 mb-4 text-sm">
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
            </div>
            {spot.favourite ? (
              <ButtonBlockDanger
                title="Remove from favourites"
                onClick={() => deleteFavourite(spot.id)}
              >
                {/* ../Resources/svg/minus.svg */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
              </ButtonBlockDanger>
            ) : (
              <ButtonBlockWarning
                title="Add to favourites"
                onClick={() => createFavourite(spot.id)}
              >
                {/* ../Resources/svg/plus.svg */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </ButtonBlockWarning>
            )}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default Map
