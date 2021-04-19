import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'

const MapSelect = () => {
  return (
    <MapContainer center={[35, -95]} zoom={4}
      scrollWheelZoom={false}
      zoomControl={false}
      className="w-full h-48 z-0"
      >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomright" zoomInText="+" zoomOutText="-" />
    </MapContainer>
  )
}

export default MapSelect
