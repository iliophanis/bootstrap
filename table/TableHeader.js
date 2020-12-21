import { useState } from 'react'

import TableHeaderCell from 'components/shared/table/tableHeader/TableHeaderCell'
import SortableTableHeaderCell from 'components/shared/table/tableHeader/SortableTableHeaderCell'
import SelectableTableHeaderCell from './tableHeader/SelectableTableHeaderCell'

function TableHeader({
  data,
  columns,
  params,
  onChange,
  rowSelection,
  selected,
  setSelected,
  oneSelection
}) {
  const [activeSortBy, setActiveSortBy] = useState('')

  return (
    <thead className="bg-primary text-white">
      <tr>
        {rowSelection && (
          <SelectableTableHeaderCell
            key="sel"
            selected={selected}
            data={data}
            setSelected={setSelected}
            oneSelection={oneSelection}
          />
        )}
        {columns.map((column, idx) =>
          column.sortField ? (
            <SortableTableHeaderCell
              key={idx}
              params={params}
              onChange={onChange}
              column={column}
              activeSortBy={activeSortBy}
              setActiveSortBy={setActiveSortBy}
            />
          ) : (
            <TableHeaderCell key={idx} column={column} />
          )
        )}
      </tr>
    </thead>
  )
}

export default TableHeader
