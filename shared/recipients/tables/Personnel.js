import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import styles from 'components/tasks/tasks/tasks.module.css'
import SearchPaginationTable from 'components/shared/table/SearchPaginationTable'
import 'assets/translate/shared/shared.i18n'

function Personnel({ personnel }) {
  const { t } = useTranslation('shared')
  // eslint-disable-next-line

  const columns = [
    {
      name: 'isPresent',
      sortField: 'isPresent',
      type: 'isPresent',
      caption: t('SHARED.RECIPIENTS.PERSONNEL_TABLE.IS_PRESENT.HEADER'),
      tooltip: t('SHARED.RECIPIENTS.PERSONNEL_TABLE.IS_PRESENT.TOOLTIP')
    },
    {
      name: 'category',
      sortField: 'category',
      // type: 'tasksStatusType',
      caption: t('SHARED.RECIPIENTS.PERSONNEL_TABLE.CATEGORY.HEADER'),
      tooltip: t('SHARED.RECIPIENTS.PERSONNEL_TABLE.CATEGORY.TOOLTIP')
    },
    {
      name: 'infoTitle',
      sortField: 'infoTitle',
      // type: 'tasksStatusType',
      caption: t('SHARED.RECIPIENTS.PERSONNEL_TABLE.INFO_TITLE.HEADER'),
      tooltip: t('SHARED.RECIPIENTS.PERSONNEL_TABLE.INFO_TITLE.TOOLTIP')
    },
    {
      name: 'title',
      sortField: 'title',
      // type: 'tasksStatusType',
      caption: t('SHARED.RECIPIENTS.PERSONNEL_TABLE.TITLE.HEADER'),
      tooltip: t('SHARED.RECIPIENTS.PERSONNEL_TABLE.TITLE.TOOLTIP')
    }
  ]
  const [selected, setSelected] = useState([])
  return (
    <div className={styles.tablesRecipients}>
      <SearchPaginationTable
        columns={columns}
        data={personnel}
        params="params" // params={props.params}
        onChange="onChange" //onChange={props.onChange}
        setSelected={setSelected}
        selected={selected}
        rowSelection
      />
    </div>
  )
}

export default Personnel
