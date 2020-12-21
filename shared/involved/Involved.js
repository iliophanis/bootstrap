import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import styles from 'components/shared/shared.module.css'
import 'assets/translate/shared/shared.i18n'
import External from 'components/shared/involved/External'
import Tooltip from 'components/shared/common/Tooltip'

function Involved({ involved }) {
  // const alphabeticSort = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
  const { t } = useTranslation('shared')
  const [involvedData, setInvolvedData] = useState(involved ? involved : [])
  const [activeInvolvedButton, setActiveInvolvedButton] = useState()
  let i = 0
  function handleRemoveInvolvement(index) {
    const ref = [...involvedData]
    ref.splice(index, 1)
    setInvolvedData(ref)
  }
  function handleShowInvolved(involvedType) {
    switch (involvedType) {
      case 0:
        return (
          <External
            setReferenceData={setInvolvedData}
            referenceData={involvedData}
            setActiveReferenceButton={setActiveInvolvedButton}
          />
        )
      default:
        return null
    }
  }
  return (
    <div className="d-flex flex-wrap">
      <div className="p-2 flex-fill">
        <div className="card">
          <div className={`alert ${styles.involvedCardHeader} alert-info`}>
            <div className="text-primary mt-2">
              <i className="fa fa-institution mr-2 ml-2"></i>
              <strong>{t('SHARED.INVOLVED.TITLE')}</strong>
            </div>
            <div>
              <label className="btn-link mr-2 mt-1">
                <span id="add-involved" className="fa-stack fa-iris-stack">
                  <i className="fa fa-keyboard-o fa-stack-2x fa-iris-entity"></i>
                  {activeInvolvedButton !== 0 ? (
                    <i
                      className="fa fa-plus-circle fa-sm fa-stack-1x fa-iris-action text-success"
                      onClick={() => setActiveInvolvedButton(0)}></i>
                  ) : (
                    <i
                      className="fa fa-minus-circle fa-sm fa-stack-1x fa-iris-action text-danger"
                      onClick={() => setActiveInvolvedButton(null)}></i>
                  )}
                </span>
                <Tooltip placement="top" target="add-involved">
                  {t('SHARED.INVOLVED.TOOLTIP_ADD_INVOLVED')}
                </Tooltip>
              </label>
            </div>
          </div>
          <div className="card-body">
            <div>
              {involvedData &&
                involvedData.map((item, index) => {
                  i++
                  return (
                    <div key={index} className="d-flex justify-content-between">
                      <div>
                        {/* {alphabeticSort[i - 1]}. {reference.Description} */}
                        {i}. {item}
                      </div>
                      <div className={styles.cursorPointer}>
                        <i
                          className="fa fa-1x fa-times-circle text-danger"
                          onClick={(index) =>
                            handleRemoveInvolvement(index)
                          }></i>
                      </div>
                    </div>
                  )
                })}
              {handleShowInvolved(activeInvolvedButton)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Involved
