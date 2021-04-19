const TableSpots = ({ columns, rows }) => {
  return (
    <table className="table-auto w-full text-left">
      <thead>
        <tr
          style={{ backgroundColor: "#D8D8D8" }}
        >
          {columns.length > 0 ?
            columns.map((column) => (
              <th className="px-2 py-1">
                <div className="inline-flex items-center justify-between w-full font-medium">
                  {column.label}
                  <span className="flex flex-col -space-y-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current w-4 h-4">
                      <path d="M0 0h24v24H0V0z" fill="none"/>
                      <path d="M7 14l5-5 5 5H7z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current w-4 h-4">
                      <path d="M0 0h24v24H0V0z" fill="none"/>
                      <path d="M7 10l5 5 5-5H7z"/>
                    </svg>
                  </span>
                </div>
              </th>
            ))
          : (
            ''
          )}
        </tr>
      </thead>
      <tbody>
        {rows.length > 0 ?
          rows.map((row, index) => (
            <tr
              key={index}
              style={{ backgroundColor: index % 2 === 1 ? "#F3F3F3" : "transparent" }}
            >
              <td className="px-2 py-1 font-normal">
                {row.name}
              </td>
              <td className="px-2 py-1 font-normal">
                {row.country}
              </td>
              <td className="px-2 py-1 font-normal">
                {row.lat}
              </td>
              <td className="px-2 py-1 font-normal">
                {row.long}
              </td>
              <td className="px-2 py-1 font-normal">
                {row.probability}
              </td>
              <td className="px-2 py-1 font-normal">
                {row.month}
              </td>
            </tr>
          ))
        : (
          <tr>
            <td>
              No rows to show.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default TableSpots
