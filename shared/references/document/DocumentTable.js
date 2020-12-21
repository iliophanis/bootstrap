import { useTranslation } from 'react-i18next'

import 'assets/translate/shared/shared.i18n'
import SearchPaginationTable from 'components/shared/table/SearchPaginationTable'

function DocumentReferencesTable(props) {
  const { t } = useTranslation('shared')
  const columns = [
    {
      name: 'type',
      type: 'badge',
      sortField: 'type',
      caption: t('SHARED.REFERENCES.DOCUMENTS.TABLE.TYPE.HEADER'),
      tooltip: t('SHARED.REFERENCES.DOCUMENTS.TABLE.TYPE.TOOLTIP')
    },
    {
      name: 'title',
      sortField: 'title',
      caption: t('SHARED.REFERENCES.DOCUMENTS.TABLE.TITLE.HEADER'),
      tooltip: t('SHARED.REFERENCES.DOCUMENTS.TABLE.TITLE.TOOLTIP')
    },
    {
      name: 'subject',
      sortField: 'Versions.Subject',
      caption: t('SHARED.REFERENCES.DOCUMENTS.TABLE.SUBJECT.HEADER'),
      tooltip: t('SHARED.REFERENCES.DOCUMENTS.TABLE.SUBJECT.TOOLTIP')
    },
    {
      name: 'author',
      sortField: 'Versions.Approval.0.RecipientProfile.Name.Description',
      caption: t('SHARED.REFERENCES.DOCUMENTS.TABLE.PUBLISHER.HEADER'),
      tooltip: t('SHARED.REFERENCES.DOCUMENTS.TABLE.PUBLISHER.TOOLTIP')
    },
    {
      name: 'date',
      sortField: 'DistributionDate',
      caption: t('SHARED.REFERENCES.DOCUMENTS.TABLE.DATE.HEADER'),
      tooltip: t('SHARED.REFERENCES.DOCUMENTS.TABLE.DATE.TOOLTIP')
    }
  ]

  return (
    <SearchPaginationTable
      columns={columns}
      data={props.references}
      params={props.params}
      onChange={props.onChange}
      setSelected={props.setSelected}
      selected={props.selected}
      rowSelection
    />
  )
}

export default DocumentReferencesTable
