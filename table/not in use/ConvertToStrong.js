import React from 'react'
import Tooltip from 'components/shared/common/Tooltip'

function ConvertToStrong({ tooltipId, value, enumType }) {
  let classes = ''
  let titleType = ''

  enumType.map((item) => {
    if (item.Id === value) {
      classes = item.shortName
      titleType = item.Description
    }
    return null //Fix Warning: Arrow function expected a return value  array-callback-return
  })

  const checkTooltip = (value) => {
    return value === undefined ? 'undefined-id' : value
  }

  return (
    <React.Fragment>
      <strong  id={checkTooltip(tooltipId)} > {classes}</ strong>
      <Tooltip
        placement="top"
        target={checkTooltip(tooltipId)}>
        {titleType}
      </Tooltip>
    </React.Fragment>
  )
}

export default ConvertToStrong
