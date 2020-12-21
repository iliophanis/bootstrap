import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import 'assets/translate/shared/shared.i18n'

function External({ references, setReferences, setActiveReferenceButton }) {
  const { t } = useTranslation('shared')
  const [invalidExternal, setInvalidExternal] = useState(false)
  const [existExternal, setExistExternal] = useState(false)
  const external = useRef(null)

  function onAddExternal(e) {
    e.preventDefault()
    const exist = references.find(
      (references) => references.description === external.current.value
    )
    if (external.current.value === '') {
      setExistExternal(false)
      return setInvalidExternal(true)
    }
    if (exist) {
      setExistExternal(true)
      return setInvalidExternal(true)
    }

    const submitedData = {
      referenceType: 2,
      documentType: 0,
      id: external.current.value,
      description: external.current.value,
      isCorrespondanceReference: false
    }
    setInvalidExternal(false)
    setReferences([...references, submitedData])
    setActiveReferenceButton(null)
  }

  function onKeyPress(e) {
    if (e.which === 13) {
      onAddExternal(e)
    }
  }

  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className="fa fa-keyboard-o"></i>
        </span>
      </div>
      <input
        className={`form-control ${invalidExternal && 'is-invalid'}`}
        ref={external}
        onKeyPress={onKeyPress}
        placeholder={t('SHARED.REFERENCES.EXTERNAL.PLACEHOLDER')}
      />

      <div className="input-group-append">
        <button
          type="button"
          className="btn btn-primary"
          onClick={(e) => onAddExternal(e)}>
          <i className="fa fa-plus"></i>
        </button>
      </div>
      {existExternal && (
        <div className="invalid-feedback">
          {t('SHARED.REFERENCES.EXTERNAL.ERROR_MESSAGE')}
        </div>
      )}
    </div>
  )
}

export default External
