import L from 'leaflet'
import marker from '../Resources/svg/map-marker-red.svg'

const iconMarkerRed = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    iconAnchor: [10, 60],
    popupAnchor: [10, -44],
    iconSize: [40, 40],
})

export { iconMarkerRed }
