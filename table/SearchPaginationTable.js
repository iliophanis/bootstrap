import { Fragment } from 'react'

import Table from 'components/shared/table/Table'
import Filtering from './utils/SearchBox'
import Pagination from './utils/Pagination'

function SearchPaginationTable({
  tableUrl,
  columns,
  data,
  lookups,
  params,
  onChange,
  rowSelection,
  setSelected,
  selected,
  oneSelection
}) {
  return (
    <Fragment>
      <div className="mb-2">
        <Filtering params={params} onChange={onChange} />
      </div>
      <Table
        tableUrl={tableUrl}
        columns={columns}
        data={data}
        lookups={lookups}
        params={params}
        onChange={onChange}
        rowSelection={rowSelection}
        setSelected={setSelected}
        selected={selected}
        oneSelection={oneSelection}
      />
      {data.length !== 0 && <Pagination params={params} onChange={onChange} />}
    </Fragment>
  )
}

export default SearchPaginationTable
