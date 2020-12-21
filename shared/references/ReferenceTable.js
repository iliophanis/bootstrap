import { Fragment } from 'react'
import { navigate } from '@reach/router'

import styles from 'components/shared/shared.module.css'
import { formatBytes } from 'utils/formatBytes'
import { toastError } from 'utils/toasts/toastError'

function ReferenceTable({
  id,
  source,
  download,
  pendingFile,
  references,
  setReferences
}) {
  function handleCheckIfIsExternal(reference) {
    return (
      reference.referenceType === 2 && reference.id === reference.description
    )
  }
  async function handleDownloadFile(fileId) {
    const sid = id ? id : 'new' //id of document-issue-task...
    const file = { id: fileId, source: source, sid: sid }
    const response = await download(file)
    if (response.error) {
      return toastError(
        'Δεν έχετε τα απαραίτητα δικαιώματα να δέιτε το αρχείο.'
      )
    }
    const params = response.split('.')
    if (response) {
      window.open(
        `${process.env.REACT_APP_API_URI}/files/${params[0]}/${params[1]}/${params[2]}`
      )
    }
  }

  function handleNavigateLink(referenceType, id) {
    if (referenceType === 0) {
      return navigate(`/documents/${id}`)
    } else if (referenceType === 1) {
      return navigate(`/tools/library/${id}`)
    } else if (referenceType === 2) {
      return handleDownloadFile(id)
    }
  }

  function handleRefIcon(reference, referenceType) {
    if (referenceType === 0) {
      return 'file-text'
    } else if (referenceType === 1) {
      return 'university'
    } else if (referenceType === 2 && reference.id === reference.description) {
      return 'keyboard-o'
    } else {
      return 'paperclip'
    }
  }

  function handleRemoveRef(reference) {
    setReferences((state) => {
      const newState = state.slice()
      newState.splice(newState.indexOf(reference), 1)
      return newState
    })
  }

  function swap(reference, type) {
    const idx1 = references.indexOf(reference)
    const idx2 = type === 'up' ? idx1 - 1 : idx1 + 1
    const referencesClone = [...references]
    const temp = referencesClone[idx2]
    referencesClone[idx2] = referencesClone[idx1]
    referencesClone[idx1] = temp
    setReferences(referencesClone)
  }
  return (
    <Fragment>
      {pendingFile.length !== 0 && (
        <table className="table table-borderless  table-hover">
          <tbody>
            {pendingFile.map((file, index) => {
              return (
                <tr key={index}>
                  <td>
                    <i className="fa fa-paperclip fa-lg ml-2"></i>
                  </td>
                  <td className="text-info">{file.name}</td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated bg-success w-100"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100">
                        {formatBytes(file.size)}
                      </div>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
      {references.length !== 0 && (
        <table className="table table-borderless  table-hover">
          <tbody>
            {references.map((reference, index) => {
              return (
                <tr key={index} style={{ padding: '0.25rem' }}>
                  <td>
                    <span
                      onClick={() => {
                        swap(reference, 'up')
                      }}
                      className={index < 1 ? styles.fa_disabled : 'btn-link'}>
                      <i
                        className={`fa fa-caret-up mr-2 ${styles.cursorPointer}`}></i>
                    </span>
                    <span
                      onClick={() => {
                        swap(reference, 'down')
                      }}
                      className={
                        index === references.length - 1
                          ? styles.fa_disabled
                          : 'btn-link'
                      }>
                      <i
                        className={`fa fa-caret-down ${styles.cursorPointer}`}></i>
                    </span>
                    <span className="ml-2 mr-2">
                      <i
                        className={`fa fa-${handleRefIcon(
                          reference,
                          reference.referenceType
                        )} fa-lg`}></i>
                    </span>
                    {++index}.
                    <span
                      className={
                        handleCheckIfIsExternal(reference)
                          ? 'ml-2 text-muted'
                          : `ml-2 btn-link ${styles.cursorPointer}`
                      }
                      onClick={() =>
                        !handleCheckIfIsExternal(reference) &&
                        handleNavigateLink(
                          reference.referenceType,
                          reference.id
                        )
                      }>
                      {reference.description}
                    </span>
                  </td>
                  <td className={`align-middle ${styles.cursorPointer}`}>
                    <i
                      className="fa fa-times-circle-o pull-right text-danger fa-lg"
                      onClick={() => handleRemoveRef(reference)}></i>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </Fragment>
  )
}

export default ReferenceTable
