import { useState, useEffect, forwardRef } from 'react'
import { useTranslation } from 'react-i18next'

import styles from 'components/shared/shared.module.css'
import ReferenceIcons from 'components/shared/references/ReferenceIcons'
import External from 'components/shared/references/External'
import DocumentModal from 'components/shared/references/document/DocumentModal'
import LibraryModal from 'components/shared/references/library/LibraryModal'
import ReferenceTable from 'components/shared/references/ReferenceTable'
import 'assets/translate/shared/shared.i18n'

/*
  Document-0 referenceType:0,documentType:0
  Library-1 referenceType:1,documentType:0
  External-2 referenceType:2,documentType:0, (ID===DESCRIPTION)
  File-2 referenceType:2,documentType:0, DIFFERENCE (ID !==DESCRIPTION)
*/

function References({
  id,
  references,
  onChange,
  setReferences,
  upload,
  download,
  source
}) {
  const { t } = useTranslation('shared')
  const [activeReferenceButton, setActiveReferenceButton] = useState(null)
  const [pendingFile, setPendingFile] = useState([])
  function handleShowReference(choice) {
    switch (choice) {
      case 0:
        return (
          <External
            setReferences={setReferences}
            references={references}
            setActiveReferenceButton={setActiveReferenceButton}
          />
        )
      case 1:
        return (
          <DocumentModal
            references={references}
            setReferences={setReferences}
            setActiveReferenceButton={setActiveReferenceButton}
          />
        )
      case 2:
        return (
          <LibraryModal
            references={references}
            setReferences={setReferences}
            setActiveReferenceButton={setActiveReferenceButton}
          />
        )
      default:
        return null
    }
  }

  useEffect(() => {
    if (onChange) {
      onChange(references)
    }
  }, [references, onChange])
  return (
    <div className="card">
      <div className="card-header d-flex alert-info p-1">
        <div className="pl-2">
          <i className="fa fa-folder-open-o mr-2"></i>
          <strong>{t('SHARED.REFERENCES.TITLE')}</strong>
          <div className="badge badge-dark badge-pill ml-2">
            {references.length !== 0 ? references.length : 0}
          </div>
        </div>
        <div className="ml-auto">
          <ReferenceIcons
            upload={upload}
            pendingFile={pendingFile}
            setPendingFile={setPendingFile}
            references={references}
            setReferences={setReferences}
            activeReferenceButton={activeReferenceButton}
            setActiveReferenceButton={setActiveReferenceButton}
          />
        </div>
      </div>
      <div className={`${styles.referencesBody} card-body`}>
        <div>
          {handleShowReference(activeReferenceButton)}
          <ReferenceTable
            download={download}
            id={id}
            source={source}
            pendingFile={pendingFile}
            references={references}
            setReferences={setReferences}
          />
        </div>
      </div>
    </div>
  )
}

// TODO: this just bypasses the forwardRef warning
const ForwardRefWrapper = forwardRef((props, ref) => <References {...props} />)

export default ForwardRefWrapper
