import { Fragment } from 'react'

import styles from 'components/shared/shared.module.css'
import TableHeader from 'components/shared/table/TableHeader'
import TableRow from 'components/shared/table/TableRow'

function Table({
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
      <table className={`table table-hover table-sm ${styles.table}`}>
        <TableHeader
          columns={columns}
          params={params}
          onChange={onChange}
          rowSelection={rowSelection}
          oneSelection={oneSelection}
          setSelected={setSelected}
          selected={selected}
          data={data}
        />
        <tbody>
          {data.map((item, idx) => (
            <TableRow
              oneSelection={oneSelection}
              tableUrl={tableUrl}
              key={idx}
              rowKey={idx}
              columns={columns}
              item={item}
              lookups={lookups}
              rowSelection={rowSelection}
              selected={selected}
              setSelected={setSelected}
              data={data}
            />
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}

export default Table
