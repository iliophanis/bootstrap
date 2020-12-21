import { useState } from 'react'

import styles from 'components/shared/shared.module.css'
import Tooltip from 'components/shared/common/Tooltip'

function SelectableTableHeaderCell({
  selected,
  setSelected,
  data,
  oneSelection
}) {
  const [selectAllData, setSelectAllData] = useState(true)
  function selectAllRows() {
    if (selected.length !== data.length && selectAllData === false) {
      return setSelected(data)
    }
    return selectAllData ? setSelected(data) : setSelected([])
  }
  return (
    <th scope="col" className={styles.tableHeaderCell}>
      <span id={'sel'}>
        {!oneSelection && (
          <div className="custom-control custom-checkbox">
            <input
              className="custom-control-input"
              id="selectAllRows"
              type="checkbox"
              checked={selected.length === data.length}
              onChange={(e) => {
                setSelectAllData((state) => !state)
                selectAllRows(e)
              }}
            />
            <label
              className="custom-control-label"
              htmlFor="selectAllRows"></label>
            {/* You have to use label "for" attribute, and id for input, because
            it triggers the script.(custom checkbox) */}
          </div>
        )}
      </span>
      <Tooltip placement="top" target={'sel'}>
        Επιλογή
      </Tooltip>
    </th>
  )
}

export default SelectableTableHeaderCell
