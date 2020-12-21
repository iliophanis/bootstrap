import { useState } from 'react'

import Tooltip from 'components/shared/common/Tooltip'

function Switch({ name, value, label, tooltip, ...rest }) {
  const [checked, setChecked] = useState(value || false)

  const id = `${name}-customSwitch`
  return (
    <>
      <div
        className="custom-control custom-switch"
        id={id}
        onClick={() => setChecked((state) => !state)}>
        <input
          type="checkbox"
          className="custom-control-input"
          checked={checked}
          {...rest}
        />
        <label className="custom-control-label user-select-none">
          {label || ' '}
        </label>
      </div>
      {tooltip ? (
        <Tooltip placement="top" target={id}>
          {tooltip}
        </Tooltip>
      ) : null}
    </>
  )
}

export default Switch
