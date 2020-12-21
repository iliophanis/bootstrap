import { Fragment, useState } from 'react'

import Modal from 'components/shared/common/Modal'
import DocumentsContainer from 'containers/references/DocumentsContainer'
import styles from 'components/shared/shared.module.css'

function DocumentReferencesModal({
  references,
  setReferences,
  setActiveReferenceButton
}) {
  const [modal, setModal] = useState(true)
  const [selected, setSelected] = useState([])
  const toggle = () => {
    setModal((state) => !state)
    setActiveReferenceButton(null)
  }

  function handleSetSelctedDocs() {
    const refClone = [...references]
    selected.map((doc) =>
      refClone.push({
        referenceType: 0,
        documentType: 0,
        id: doc.id,
        description: doc.title || doc.subject, //need fix all title in data are null
        isCorrespondanceReference: false
      })
    )
    setReferences(refClone)
    toggle()
  }
  return (
    <Modal
      className={styles.tableModal}
      isOpen={modal}
      toggle={toggle}
      headerProps={{
        toggle: toggle,
        children: (
          <span>
            <i className="fa fa-file-text text-info mt-1 mr-2"></i>
            Προσθήκη Σχετικού Εγγράφου
          </span>
        )
      }}
      bodyProps={{
        children: (
          <DocumentsContainer selected={selected} setSelected={setSelected} />
        )
      }}
      footerProps={{
        children: (
          <Fragment>
            <button
              type="button"
              className="btn btn-success"
              disabled={selected.length === 0}
              onClick={handleSetSelctedDocs}>
              <i className="fa fa-check-circle mr-2"></i>
              Προσθήκη Σχετικού
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={toggle}>
              <i className="fa fa-power-off mr-2"></i>
              Ακύρωση
            </button>
          </Fragment>
        )
      }}
    />
  )
}

export default DocumentReferencesModal
