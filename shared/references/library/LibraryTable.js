import { useTranslation } from 'react-i18next'

import 'assets/translate/shared/shared.i18n'
import SearchPaginationTable from 'components/shared/table/SearchPaginationTable'

function LibraryTable(props) {
  const { t } = useTranslation('shared')

  const columns = [
    {
      name: 'title',
      sortField: 'title',
      caption: t('SHARED.REFERENCES.LIBRARY.TABLE.TITLE.HEADER'),
      tooltip: t('SHARED.REFERENCES.LIBRARY.TABLE.TITLE.TOOLTIP')
    },
    {
      name: 'subject',
      sortField: 'subject',
      caption: t('SHARED.REFERENCES.LIBRARY.TABLE.SUBJECT.HEADER'),
      tooltip: t('SHARED.REFERENCES.LIBRARY.TABLE.SUBJECT.TOOLTIP')
    },
    {
      name: 'publisher',
      type: 'badge badge-pill badge-light',
      sortField: 'publisher',
      caption: t('SHARED.REFERENCES.LIBRARY.TABLE.PUBLISHER.HEADER'),
      tooltip: t('SHARED.REFERENCES.LIBRARY.TABLE.PUBLISHER.TOOLTIP')
    },
    {
      name: 'folder',
      sortField: 'folder',
      caption: t('SHARED.REFERENCES.LIBRARY.TABLE.FOLDER.HEADER'),
      tooltip: t('SHARED.REFERENCES.LIBRARY.TABLE.FOLDER.TOOLTIP')
    },
    {
      name: 'publicationDate',
      sortField: 'publicationDate',
      caption: t('SHARED.REFERENCES.LIBRARY.TABLE.DATE.HEADER'),
      tooltip: t('SHARED.REFERENCES.LIBRARY.TABLE.DATE.TOOLTIP')
    }
  ]
  return (
    <SearchPaginationTable
      tableUrl="library"
      columns={columns}
      data={props.documents}
      params={props.params}
      onChange={props.onChange}
      selected={props.selected}
      setSelected={props.setSelected}
      rowSelection
    />
  )
}

export default LibraryTable
