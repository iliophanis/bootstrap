import styles from 'components/shared/shared.module.css'
import Tooltip from 'components/shared/common/Tooltip'

function TableHeaderCell({ column }) {
  return (
    <th scope="col" className={styles.tableHeaderCell}>
      <span id={`th_${column.name}`}>{column.caption}</span>
      {column.tooltip && (
        <Tooltip placement="top" target={`th_${column.name}`}>
          {column.tooltip}
        </Tooltip>
      )}
    </th>
  )
}

export default TableHeaderCell
