import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import SearchPaginationTable from 'components/shared/table/SearchPaginationTable'
import styles from 'components/tasks/tasks/tasks.module.css'
import 'assets/translate/shared/shared.i18n'

function Profiles(props) {
  const { t } = useTranslation('shared')
  const columns = [
    {
      name: 'company',
      sortField: 'company',
      // type: 'tasksStatusType',
      caption: t('SHARED.RECIPIENTS.PROFILES_TABLE.COMPANY.HEADER'),
      tooltip: t('SHARED.RECIPIENTS.PROFILES_TABLE.COMPANY.TOOLTIP')
    },
    {
      name: 'department',
      sortField: 'department',
      // type: 'tasksStatusType',
      caption: t('SHARED.RECIPIENTS.PROFILES_TABLE.DEPARTMENT.HEADER'),
      tooltip: t('SHARED.RECIPIENTS.PROFILES_TABLE.DEPARTMENT.TOOLTIP')
    },
    {
      name: 'title',
      sortField: 'title',
      // type: 'tasksStatusType',
      caption: t('SHARED.RECIPIENTS.PROFILES_TABLE.TITLE.HEADER'),
      tooltip: t('SHARED.RECIPIENTS.PROFILES_TABLE.TITLE.TOOLTIP')
    }
  ]
  const [selected, setSelected] = useState([])
  return (
    <div className={styles.tablesRecipients}>
      <SearchPaginationTable
        setSelected={setSelected}
        selected={selected}
        rowSelection
        columns={columns}
        data={props.profiles}
        params="params" // params={props.params}
        onChange="onChange" //onChange={props.onChange}
      />
    </div>
  )
}

export default Profiles
