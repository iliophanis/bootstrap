import { Fragment, useState } from 'react'
import styles from 'components/shared/shared.module.css'
/*
  props:
    - documents: []
        array of documents returned from api

    - onChange: ({ page, pageSize, filter, sortBy, sortDesc })
        call this to change page, sorting or apply filter
*/
const dropdown = [
  { label: '5', value: 5 },
  { label: '10', value: 10 },
  { label: '20', value: 20 },
  { label: '25', value: 25 },
  { label: '50', value: 50 },
  { label: '100', value: 100 }
]
function DropdownPageSize({ params, onChange }) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(10)
  const toggle = () => setOpen(!open)
  function onPageSize(menuPageSize) {
    onChange(Object.assign({}, params, { pageSize: menuPageSize }))
    setSelected(menuPageSize)
    setOpen(false)
  }

  return (
    <Fragment>
      <div className="btn-group ">
        <span className={`btn-primary btn-sm ${styles.dropdownRecordButton}`}>
          {selected} εγγραφές
        </span>
        <button
          type="button"
          className="btn btn-outline-primary dropdown-toggle btn-sm dropdown-toggle-split "
          data-toggle="dropdown"
          onClick={toggle}>
          <span className="sr-only">Toggle Dropdown</span>
        </button>
        <div className={`dropdown-menu ${open && 'show'}`}>
          {dropdown.map((pageSize) => {
            return (
              <div
                className={`dropdown-item ${
                  selected === pageSize.value && 'active'
                } ${styles.cursorPointer}`}
                onClick={() => onPageSize(pageSize.value)}
                key={pageSize.value}>
                {pageSize.label}
              </div>
            )
          })}
        </div>
      </div>
    </Fragment>
  )
}

export default DropdownPageSize
