import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'

import Tooltip from 'components/shared/common/Tooltip'

function IsPresentCell({ rowKey, value }) {
  const { t } = useTranslation('tasks')

  const checkIcon = (value) => {
    if (value === true) {
      return (
        <i id={`isPresent_${rowKey}`} className="fa fa-circle text-success"></i>
      )
    } else if (value === false) {
      return (
        <i id={`isPresent_${rowKey}`} className="fa fa-circle text-danger"></i>
      )
    }
    return null
  }

  const checkTooltipMessage = (value) => {
    if (value === true) {
      return (
        <Fragment>
          <i className="fa fa-circle text-success mr-2"></i>
          <span>{t('TASKS.TABLE_DATA.IS_PRESENT_CELL.TRUE')}</span>
        </Fragment>
      )
    } else if (value === false) {
      return (
        <Fragment>
          <i className="fa fa-circle text-danger mr-2"></i>
          <span>{t('TASKS.TABLE_DATA.IS_PRESENT_CELL.FALSE')}</span>
        </Fragment>
      )
    }
  }

  return (
    <div className="ml-3  mt-1 mb-1">
      {checkIcon(value)}

      <Tooltip placement="right" target={`isPresent_${rowKey}`}>
        <span className="mr-1">{checkTooltipMessage(value)}</span>
      </Tooltip>
    </div>
  )
}

export default IsPresentCell
