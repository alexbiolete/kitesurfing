import { useState } from 'react'
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'
import DateFnsUtils from '@date-io/date-fns'
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'

const ModalAddSpot = ({ showModalAddSpot, setShowModalAddSpot }) => {
  const [selectedDate1, handleDateChange1] = useState(new Date());
  const [selectedDate2, handleDateChange2] = useState(new Date());

  if (!showModalAddSpot) {
    return null
  }

  return (
    <div className="fixed left-0 top-0 right-0 bottom-0 z-10 flex items-center justify-center">
      <div className="bg-white p-4">
        <h1 className="text-xl">
          Add Spot
        </h1>
        <div className="mt-4 space-y-5">
          <div className="flex flex-col items-start">
            <label htmlFor="name" className="font-medium text-lg">Name</label>
            <input
              type="text"
              id="name"
              key="name"
              className="w-full border-b-2 border-gray-400 focus:border-blue-400 focus:outline-none text-sm"
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="country" className="font-medium text-lg">Country</label>
            <input
              type="text"
              id="country"
              key="country"
              className="w-full border-b-2 border-gray-400 focus:border-blue-400 focus:outline-none text-sm"
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="country" className="font-medium text-lg mb-2">High Season</label>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <div className="flex items-center space-x-4">
                <DatePicker value={selectedDate1} onChange={handleDateChange1} />
                -
                <DatePicker value={selectedDate2} onChange={handleDateChange2} />
              </div>
            </MuiPickersUtilsProvider>
          </div>
          <MapContainer center={[35, -95]} zoom={4}
            scrollWheelZoom={false}
            zoomControl={false}
            className="w-64 h-48 z-0"
            >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ZoomControl position="bottomright" zoomInText="+" zoomOutText="-" />
          </MapContainer>
          <div className="flex justify-end space-x-5 text-xs">
            <button
              className="uppercase font-medium text-red-500 tracking-wider"
              onClick={() => setShowModalAddSpot(!showModalAddSpot)}
            >
              Cancel
            </button>
            <button
              className="uppercase font-medium text-blue-500 tracking-wider"
              onClick={() => setShowModalAddSpot(!showModalAddSpot)}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalAddSpot
