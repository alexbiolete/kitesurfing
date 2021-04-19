import PropTypes from 'prop-types'
import ButtonOutlineSecondary from '../Atoms/ButtonOutlineSecondary'
import WrapperInputUnderlinedSmall from '../Molecules/WrapperInputUnderlinedSmall'

const ModalFilter = ({
  filterCountry,
  setFilterCountry,
  filterProbability,
  setFilterProbability,
  onClick
}) => {
  return (
    <div className="absolute top-20 right-4">
      <div className="shadow-lg overflow-hidden rounded-2xl">
        <div className="p-4 bg-white">
          <div className="w-40 flex flex-col items-center space-y-4 -mt-4">
            <WrapperInputUnderlinedSmall
              id="country"
              title="Country"
              onChange={(e) => setFilterCountry(e.target.value)}
              value={filterCountry}
            />
            <WrapperInputUnderlinedSmall
              id="probability"
              title="Wind probability"
              onChange={(e) => setFilterProbability(e.target.value)}
              value={filterProbability}
            />
          </div>
        </div>
        <div className="flex items-center justify-end space-x-3 p-3 bg-gray-50 text-right">
          <ButtonOutlineSecondary
            title="Apply filters"
            onClick={onClick}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="currentColor">
              <g>
                <path d="M0,0h24 M24,24H0" fill="none"/>
                <path d="M7,6h10l-5.01,6.3L7,6z M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6 c0,0,3.72-4.8,5.74-7.39C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z"/>
                <path d="M0,0h24v24H0V0z" fill="none"/>
              </g>
            </svg>
          </ButtonOutlineSecondary>
        </div>
      </div>
    </div>
  )
}

ModalFilter.propTypes = {
  filterCountry: PropTypes.string,
  setFilterCountry: PropTypes.func,
  filterProbability: PropTypes.string,
  setFilterProbability: PropTypes.func,
  onClick: PropTypes.func
}

export default ModalFilter
