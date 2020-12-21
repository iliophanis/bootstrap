import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Page from 'components/shared/Page'
import SearchPaginationTable from 'components/shared/table/SearchPaginationTable'
import ArchivePopover from 'components/documents/tables/inbox/buttons/ArchivePopover'
import ActionPopover from 'components/documents/tables/inbox/buttons/action/ActionPopover'
import UpdatePopover from 'components/documents/tables/inbox/buttons/UpdatePopover'
import { toastWarning } from 'utils/toasts/toastWarning'

function Info(props) {
  const { t } = useTranslation('documents')
  const [selected, setSelected] = useState([])
  const [actionPopover, setActionPopover] = useState(false)
  const [archivePopover, setArchivePopover] = useState(false)
  const [updatePopover, setUpdatePopover] = useState(false)

  async function handleArchive() {
    if (selected.length === 0) {
      return toastWarning('Δεν έχετε επιλέξει κάποιο έγγραφο')
    }
    const documentsArchive = selected.map((selected) => selected.id)
    await props.onArchiveDocument(documentsArchive)
  }

  const breadcrumb = [
    {
      path: '/documents',
      caption: t('DOCUMENT.BREADCRUMB.HEADER')
    },
    {
      path: '/documents/info',
      caption: t('DOCUMENT.BREADCRUMB.INFO')
    }
  ]

  const buttons = [
    {
      id: 'archive',
      disabled: actionPopover || updatePopover,
      icon: 'archive',
      tooltip: t('DOCUMENT.BREADCRUMB.BUTTONS.ARCHIVE'),
      color: 'primary'
    },
    {
      id: 'action',
      disabled: archivePopover || updatePopover,
      icon: 'plus-square-o',
      tooltip: t('DOCUMENT.BREADCRUMB.BUTTONS.ACTION'),
      color: 'primary'
    },
    {
      id: 'update',
      disabled: archivePopover || actionPopover,
      icon: 'file',
      tooltip: t('DOCUMENT.BREADCRUMB.BUTTONS.UPDATE'),
      color: 'primary'
    }
  ]
  const columns = [
    {
      name: 'priority',
      type: 'badge',
      sortField: 'priority',
      caption: t('DOCUMENT.TABLE_HEADERS.PRIORITY.HEADER'),
      tooltip: t('DOCUMENT.TABLE_HEADERS.PRIORITY.TOOLTIP')
    },
    {
      name: 'classification',
      type: 'badge',
      sortField: 'classification',
      caption: t('DOCUMENT.TABLE_HEADERS.CLASSIFICATION.HEADER'),
      tooltip: t('DOCUMENT.TABLE_HEADERS.CLASSIFICATION.TOOLTIP')
    },
    {
      name: 'type',
      type: 'badge',
      sortField: 'type',
      caption: t('DOCUMENT.TABLE_HEADERS.TYPE.HEADER'),
      tooltip: t('DOCUMENT.TABLE_HEADERS.TYPE.TOOLTIP')
    },
    {
      name: 'subject',
      type: 'link',
      sortField: 'Versions.Subject',
      caption: t('DOCUMENT.TABLE_HEADERS.SUBJECT.HEADER'),
      tooltip: t('DOCUMENT.TABLE_HEADERS.SUBJECT.TOOLTIP')
    },
    {
      name: 'title',
      sortField: 'title',
      caption: t('DOCUMENT.TABLE_HEADERS.TITLE.HEADER'),
      tooltip: t('DOCUMENT.TABLE_HEADERS.TITLE.TOOLTIP')
    },
    {
      name: 'publisher',
      sortField: 'Versions.Approval.0.RecipientProfile.Company.Description',
      caption: t('DOCUMENT.TABLE_HEADERS.PUBLISHER.HEADER'),
      tooltip: t('DOCUMENT.TABLE_HEADERS.PUBLISHER.TOOLTIP')
    },
    {
      name: 'author',
      sortField: 'Versions.Approval.0.RecipientProfile.Name.Description',
      caption: t('DOCUMENT.TABLE_HEADERS.AUTHOR.HEADER'),
      tooltip: t('DOCUMENT.TABLE_HEADERS.AUTHOR.TOOLTIP')
    },
    {
      name: 'date',
      sortField: 'DistributionDate',
      caption: t('DOCUMENT.TABLE_HEADERS.DATE.HEADER'),
      tooltip: t('DOCUMENT.TABLE_HEADERS.DATE.TOOLTIP')
    },
    {
      name: 'tasksStatus',
      type: 'documentTasks',
      caption: t('DOCUMENT.TABLE_HEADERS.ASSIGNMENT.HEADER'),
      tooltip: t('DOCUMENT.TABLE_HEADERS.ASSIGNMENT.TOOLTIP')
    }
  ]
  return (
    <React.Fragment>
      <Page breadcrumb={breadcrumb} buttons={buttons}>
        <SearchPaginationTable
          tableUrl="documents"
          columns={columns}
          data={props.documents}
          lookups={props.lookups}
          params={props.params}
          setSelected={setSelected}
          selected={selected}
          rowSelection
        />
      </Page>
      <ArchivePopover
        setArchivePopover={setArchivePopover}
        archivePopover={archivePopover}
        actionPopover={actionPopover}
        updatePopover={updatePopover}
        selectedLength={selected.length}
        handleArchive={handleArchive}
      />
      <ActionPopover
        actionPopover={actionPopover}
        archivePopover={archivePopover}
        updatePopover={updatePopover}
        setActionPopover={setActionPopover}
        selectedLength={selected.length}
      />
      <UpdatePopover
        archivePopover={archivePopover}
        actionPopover={actionPopover}
        updatePopover={updatePopover}
        setUpdatePopover={setUpdatePopover}
        selectedLength={selected.length}
      />
      <ActionPopover />
    </React.Fragment>
  )
}

export default Info
