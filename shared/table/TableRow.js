import styles from 'components/shared/shared.module.css'
import TableCell from 'components/shared/table/TableCell'

function TableRow({
  tableUrl,
  rowKey,
  columns,
  item,
  lookups,
  rowSelection,
  selected,
  setSelected,
  data,
  oneSelection
}) {
  function handleChangeSelect(item) {
    setSelected((state) => {
      const idx = state.indexOf(item)
      if (idx !== -1) {
        const newState = state.slice()
        newState.splice(idx, 1)
        return newState
      }
      return oneSelection ? [item] : [...state, item]
    })
  }
  return (
    <tr className={styles.tableRow}>
      {rowSelection && (
        <TableCell
          rowKey={rowKey}
          lookups={lookups}
          value={
            <div className="custom-control custom-checkbox">
              <input
                id={rowKey}
                type="checkbox"
                className="custom-control-input"
                checked={selected.includes(data[rowKey]) === true}
                onChange={(e) => {
                  handleChangeSelect(item)
                }}
              />
              <label className="custom-control-label" htmlFor={rowKey}></label>
              {/* You have to use label "for" attribute, and id for input, because
            it triggers the script.(custom checkbox) */}
            </div>
          }
          id={rowKey}
        />
      )}
      {columns.map((col, idx) => (
        <TableCell
          tableUrl={tableUrl}
          rowKey={rowKey}
          key={idx}
          lookups={lookups}
          value={col.name ? item[col.name] : item}
          id={item.Id || item.id}
          item={item}
          {...col}
        />
      ))}
    </tr>
  )
}

export default TableRow
