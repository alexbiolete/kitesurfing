import { useState } from 'react'
import DateFnsUtils from '@date-io/date-fns'
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import Select from 'react-select'
import { countries as listCountries } from '../../Resources/listCountries'
import LabelUnderlined from '../Atoms/LabelUnderlined'
import ButtonPrimary from '../Atoms/ButtonPrimary'
import ButtonOutlineDanger from '../Atoms/ButtonOutlineDanger'
import MapSelect from '../Atoms/MapSelect'
import WrapperInputUnderlined from '../Molecules/WrapperInputUnderlined'

const ModalAddItem = ({
  showModalAddItem,
  setShowModalAddItem,
  onAdd
}) => {
  // Array of objects required by Select2
  const countries = listCountries.map((country) => {
    return { value: country.toLowerCase(), label: country }
  })
  const [name, setName] = useState('')
  const [country, setCountry] = useState()

  const onSubmit = (e) => {
    e.preventDefault()

    if (!name || !country) {
      alert('Please complete all fields.')
      return
    }

    onAdd({
      name,
      country: country.label
    })

    setName('')
    setCountry()
    setShowModalAddItem(!showModalAddItem)
  }

  if (!showModalAddItem) {
    return null
  }

  return (
    <div className="fixed left-0 top-0 right-0 bottom-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
      <div className="shadow-lg overflow-hidden sm:rounded-2xl">
        <form onSubmit={onSubmit}>
          <div className="p-2 md:p-4 bg-white">
            <div className="max-w-xl space-y-6">
              <div className="px-2 space-y-6">
                <span className="font-medium tracking-widest text-base">
                  Add Spot
                </span>
                <div className="space-y-2">
                  <WrapperInputUnderlined
                    id="name"
                    title="Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                  <LabelUnderlined id="country" title="Country" />
                  <Select
                    id="country"
                    name="country"
                    title="Country"
                    placeholder=""
                    value={country}
                    onChange={setCountry}
                    options={countries}
                    className="border-b-2 border-gray-300 hover:border-blue-500 transition ease-in-out duration-300"
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        border: state.isSelected ? '0' : '0',
                      })
                    }}
                  />
                </div>
                <div>
                  <LabelUnderlined
                    title="High Season"
                  />
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <div className="flex items-center space-x-4 my-2">
                      <DatePicker />
                      -
                      <DatePicker />
                    </div>
                  </MuiPickersUtilsProvider>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <MapSelect />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end space-x-3 p-3 bg-gray-50 text-right">
          <ButtonOutlineDanger
            title="Cancel"
            onClick={() => {
              setName('')
              setCountry()
              setShowModalAddItem(!showModalAddItem)
            }}
          >
            {/* ../Resources/svg/close.svg */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </ButtonOutlineDanger>
          <ButtonPrimary title="Add" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </ButtonPrimary>
        </div>
        </form>
      </div>
    </div>
  )
}

export default ModalAddItem
