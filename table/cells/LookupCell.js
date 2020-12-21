import React from 'react'

import Tooltip from 'components/shared/Tooltip'

function LookupCell({ value, options }) {
  let children = <div className="badge rounded-pill bg-info">{value}</div>
  if (!options) return children
  const option = options.find((option) => option.id === value)
  children = option.flagColor ? (
    <i className={option.flagColor}></i>
  ) : (
    <div className="badge rounded-pill bg-info">{option.description}</div>
  )

  return <Tooltip tooltip={option.description}>{children}</Tooltip>
}

export default LookupCell
