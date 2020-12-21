import React, { useState } from 'react'
import Tooltip from 'components/shared/common/Tooltip'
import styles from 'components/shared/shared.module.css'

function TableHead({
  params,
  onChange,
  sort,
  activeSort,
  setActiveSort,
  tooltipId,
  headMessage,
  tooltipMessage
}) {
  const [active, setActive] = useState({})
  function onSorting(sortBy, sortDesc) {
    if (sort === '') {
      return
    }
    if (active.sortBy === sort && active.sortDesc === false) {
      sortDesc = true
    }
    setActiveSort(sort)
    onChange(
      Object.assign(
        {},
        params,
        { sortBy: sortBy },
        { sortDesc: sortDesc },
        { page: 1 }
      )
    )
    setActive({ sortBy: sortBy, sortDesc: sortDesc })
  }
  return (
    <React.Fragment>
      <th>
        <span
          id={tooltipId}
          style={{ cursor: 'pointer' }}
          onClick={() => onSorting(sort, false)}>
          {headMessage}
          {sort !== '' && (
            <span className={` fa-stack ${styles.fa_stack_inline} `}>
              <i
                className={
                  active.sortBy === sort &&
                  active.sortDesc === false &&
                  activeSort === sort
                    ? 'btn-link fa fa-stack-1x fa-sort-asc'
                    : 'fa fa-stack-1x fa-sort-asc'
                }></i>
              <i
                className={
                  active.sortBy === sort &&
                  active.sortDesc === true &&
                  activeSort === sort
                    ? 'btn-link fa fa-stack-1x fa-sort-desc'
                    : 'fa fa-stack-1x fa-sort-desc'
                }></i>
            </span>
          )}
        </span>
        <Tooltip
          placement="top"
          target={tooltipId}>
          {tooltipMessage}
        </Tooltip>
      </th>
    </React.Fragment>
  )
}

export default TableHead
