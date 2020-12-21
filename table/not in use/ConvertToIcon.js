import React from 'react'
import Tooltip from 'components/shared/common/Tooltip'

function ConvertToIcon({ tooltipId, value, enumType }) {
  let classes = ''
  let title = ''

  enumType.map((item) => {
    if (item.Id === value) {
      classes = item.flagColor
      title = item.Description
    }
    return null //Fix Warning: Arrow function expected a return value  array-callback-return
  })

  const checkTooltip = (value) => {
    return value === undefined ? 'undefined-id' : value
  }

  return (
    <React.Fragment>
      <i className={classes} id={checkTooltip(tooltipId)}></i>
      <Tooltip
        placement="top"
        target={checkTooltip(tooltipId)}>
        {title}
      </Tooltip>
    </React.Fragment>
  )
}

export default ConvertToIcon
