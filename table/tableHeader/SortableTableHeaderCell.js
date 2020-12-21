import { useState } from 'react'

import styles from 'components/shared/shared.module.css'
import Tooltip from 'components/shared/common/Tooltip'
// import { TransitionStatuses } from 'reactstrap/es/utils'

function SortingIcon({ sortDescending, sortBy, activeSortBy }) {
  function handleAscendingEnable() {
    if (sortDescending === false && activeSortBy === sortBy) {
      return true
    }
    if (sortDescending === true && activeSortBy === sortBy) {
      return false
    }
  }

  return (
    <div className="d-inline-flex flex-column align-items-center justify-content-center">
      <span
        className={
          handleAscendingEnable()
            ? 'btn-link fa fa-sort-asc'
            : ' fa fa-sort-asc'
        }
        style={{ lineHeight: '1px' }}></span>
      <span
        className={
          handleAscendingEnable() === false
            ? 'btn-link fa fa-sort-desc'
            : 'fa fa-sort-desc'
        }
        style={{ lineHeight: '1px' }}></span>
    </div>
  )
}

function SortableTableHeaderCell({
  params,
  onChange,
  column,
  activeSortBy,
  setActiveSortBy
}) {
  const [sortDescending, setSortDescending] = useState()

  function onSorting(sortBy, sortDesc) {
    if (sortDescending === false) {
      sortDesc = true
    }
    onChange(
      Object.assign(
        {},
        params,
        { sortBy: sortBy },
        { sortDesc: sortDesc },
        { page: 1 }
      )
    )
    setActiveSortBy(sortBy)
    setSortDescending(sortDesc)
  }

  return (
    <th
      scope="col"
      className={styles.sortableTableHeaderCell}
      onClick={() => onSorting(column.sortField, false)}>
      <div id={`th_${column.name}`} className="d-flex">
        <span className="mr-1">{column.caption}</span>
        {column.sortField && (
          <SortingIcon
            sortDescending={sortDescending}
            sortBy={column.sortField}
            activeSortBy={activeSortBy}
          />
        )}
      </div>
      {column.tooltip && (
        <Tooltip placement="top" target={`th_${column.name}`}>
          {column.tooltip}
        </Tooltip>
      )}
    </th>
  )
}

export default SortableTableHeaderCell
