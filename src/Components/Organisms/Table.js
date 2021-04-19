import PropTypes from 'prop-types'
import { columns } from '../../Resources/listColumns'

const Table = ({
  spots,
  useSortableData
}) => {
  const { items, requestSort, sortConfig } = useSortableData(spots)

  return (
    <div className="overflow-x-auto lg:rounded-2xl shadow-lg">
      <div className="inline-block min-w-full overflow-hidden -mb-1.5">
        <table className="table-auto min-w-full">
          <thead>
            <tr className="bg-gray-200">
              {/*
                * Generate columns from array.
                */}
              {columns.length > 0 ?
                columns.map((column, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="px-6 py-2"
                  >
                    <div className="inline-flex items-center justify-between w-full font-medium whitespace-nowrap">
                      {column.label}
                      <div className="flex flex-col mx-2">
                        {/*
                          * If there is any ascending sorting
                          * set on this column, show a
                          * highlighted button.
                          *
                          * The button also toggles sorting
                          * in its direction by its column.
                          */}
                        {sortConfig !== null &&
                          sortConfig.key === column.field &&
                          sortConfig.direction === 'ascending'
                        ? (
                          <button
                            type="button"
                            className="bg-gray-300 rounded-md focus:outline-none"
                            onClick={() => requestSort(column.field, 'ascending') }
                          >
                            <span className="text-gray-700">
                              {/* ../Resources/svg/arrow-up.svg */}
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                              </svg>
                            </span>
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="focus:outline-none"
                            onClick={() => requestSort(column.field, 'ascending') }
                          >
                            <span className="text-gray-700">
                              {/* ../Resources/svg/arrow-up.svg */}
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                              </svg>
                            </span>
                          </button>
                        )}

                        {/*
                          * If there is any descending sorting
                          * set on this column, show a
                          * highlighted button.
                          *
                          * The button also toggles sorting
                          * in its direction by its column.
                          */}
                        {
                          sortConfig !== null &&
                          sortConfig.key === column.field &&
                          sortConfig.direction === 'descending'
                        ? (
                          <button
                            type="button"
                            className="bg-gray-300 rounded-md focus:outline-none"
                            onClick={() => requestSort(column.field, 'descending') }
                          >
                            <span className="text-gray-700">
                              {/* ../Resources/svg/arrow-down.svg */}
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </span>
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="focus:outline-none"
                            onClick={() => requestSort(column.field, 'descending') }
                          >
                            <span className="text-gray-700">
                              {/* ../Resources/svg/arrow-down.svg */}
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </span>
                          </button>
                        )}
                      </div>
                    </div>
                  </th>
                ))
              : (
                ''
              )}
            </tr>
          </thead>

          <tbody className="bg-white">
            {/*
              * Generate rows for the table.
              */}
            {items.length > 0 ?
              items.map((item, index) => (
                <tr
                  key={index}
                  style={{ backgroundColor: index % 2 === 1 ? "#F9F9F9" : "transparent" }}
                >
                  <td className="px-6 py-2 flex items-center font-normal">
                    {item.name}
                    {item.favourite ? (
                    <span className="flex-shrink-0 text-yellow-500 mx-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="currentColor">
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
                  </td>
                  <td className="px-6 py-2 font-normal">
                    {item.country}
                  </td>
                  <td className="px-6 py-2 font-normal">
                    {parseFloat(item.lat).toFixed(2)}
                  </td>
                  <td className="px-6 py-2 font-normal">
                    {parseFloat(item.long).toFixed(2)}
                  </td>
                  <td className="px-6 py-2 font-normal">
                    {item.probability}%
                  </td>
                  <td className="px-6 py-2 font-normal">
                    {item.month}
                  </td>
                </tr>
              ))
            : (
              <tr>
                <td className="px-6 pt-3 pb-2 font-normal">
                  No spots to show.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

Table.propTypes = {
  spots: PropTypes.array,
  useSortableData: PropTypes.object
}

export default Table
