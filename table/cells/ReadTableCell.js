import { useTranslation } from 'react-i18next'

import Tooltip from 'components/shared/common/Tooltip'
import 'assets/translate/shared/shared.i18n'

function Read({ rowKey, value, type }) {
  const { t } = useTranslation('shared')
  return (
    <>
      <i
        id={`${type}_${rowKey}`}
        className={
          value === true
            ? 'fa fa-envelope-open text-secondary'
            : 'fa fa-envelope text-info'
        }
      />
      <Tooltip placement="left" target={`${type}_${rowKey}`}>
        {value === true ? t('SHARED.READ') : t('SHARED.NOT_READ')}
      </Tooltip>
    </>
  )
}

export default Read
