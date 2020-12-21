import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'

import styles from 'components/shared/shared.module.css'
import 'assets/translate/shared/shared.i18n'
import Tooltip from 'components/shared/common/Tooltip'

function ReferenceIcons({
  upload,
  pendingFile,
  setPendingFile,
  references,
  setReferences,
  activeReferenceButton,
  setActiveReferenceButton
}) {
  const { t } = useTranslation('shared')
  const AddIconClassName = `fa fa-plus-circle fa-sm fa-stack-1x ${styles.fa_stack_1x} text-success`
  const MinusIconClassName = `fa fa-minus-circle fa-sm fa-stack-1x ${styles.fa_stack_1x} text-danger`

  function handleIconClassName(icon) {
    return `fa ${icon} fa-stack-2x ${styles.fa_stack_2x}`
  }

  async function handleUpload(e) {
    let files = e.target.files
    let data = new FormData()
    let pendingFileClone = [...pendingFile]
    if (files instanceof FileList || files instanceof Array) {
      for (const file of files) {
        data.append(file.name, file)
        pendingFileClone.push({
          name: file.name,
          size: file.size,
          type: file.type
        })
      }
    } else {
      data.append(files.name, files)
    }
    setPendingFile(pendingFileClone)
    const response = await upload(data)
    const fileClone = [...references]

    await response.map((file) => {
      const fileReference = {
        ...file,
        referenceType: 2,
        documentType: 0
      }
      return fileClone.push(fileReference)
    })
    setPendingFile([])
    setReferences(fileClone)
  }

  return (
    <Fragment>
      <label className="btn-link mr-2 my-auto">
        <div
          id="doc-out-iris"
          className={`fa-stack ${styles.cursorPointer}`}
          onClick={() =>
            setActiveReferenceButton(activeReferenceButton === 0 ? null : 0)
          }>
          <i className={handleIconClassName('fa-keyboard-o')}></i>
          <i
            className={
              activeReferenceButton !== 0
                ? AddIconClassName
                : MinusIconClassName
            }></i>
        </div>
        <Tooltip placement="top" target="doc-out-iris">
          {t('SHARED.REFERENCES.TOOLTIP_DOC_OUT_IRIS')}
        </Tooltip>
      </label>
      <span className={`btn-link mr-2 ${styles.cursorPointer}`}>
        <span
          className="fa-stack"
          id="add-doc"
          onClick={() => setActiveReferenceButton(1)}>
          <i className={handleIconClassName('fa-file')}></i>
          <i className={AddIconClassName}></i>
        </span>
        <Tooltip placement="top" target="add-doc">
          {t('SHARED.REFERENCES.TOOLTIP_ADD_DOC')}
        </Tooltip>
      </span>
      <span className={`btn-link mr-2 ${styles.cursorPointer}`}>
        <span
          className="fa-stack"
          id="add-doc-library"
          onClick={() => setActiveReferenceButton(2)}>
          <i className={handleIconClassName('fa-university')}></i>
          <i className={AddIconClassName}></i>
        </span>
        <Tooltip placement="top" target="add-doc-library">
          {t('SHARED.REFERENCES.TOOLTIP_ADD_DOC_LIBRARY')}
        </Tooltip>
      </span>
      <label className={`btn-link mr-2 my-auto ${styles.cursorPointer}`}>
        <span id="add-file" className="fa-stack" title="Προσθήκη Αρχείου">
          <i className={handleIconClassName('fa-paperclip')}></i>
          <i className={AddIconClassName}></i>
          <input
            type="file"
            onChange={(e) => handleUpload(e)}
            multiple
            style={{ display: 'none' }}
          />
        </span>
        <Tooltip placement="top" target="add-file">
          {t('SHARED.REFERENCES.TOOLTIP_ADD_FILE')}
        </Tooltip>
      </label>
    </Fragment>
  )
}

export default ReferenceIcons
