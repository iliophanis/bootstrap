import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'

import Modal from 'components/shared/common/Modal'
import styles from 'components/shared/shared.module.css'
import 'assets/translate/shared/shared.i18n'

function DeleteModal({ title, modal, toggle, onDelete, body }) {
  const { t } = useTranslation('shared')
  return (
    <Modal
      target="delete-button"
      className={styles.deleteModalContainer}
      isOpen={modal}
      toggle={toggle}
      headerProps={{
        children: (
          <div>
            <i className="fa fa-trash fa-lg text-danger mt-1 mr-2"></i>
            {t('SHARED.MODALS.DELETEMODAL.HEADER')} {title}
          </div>
        )
      }}
      bodyProps={{
        children: (
          <Fragment>
            <h4 className="d-flex justify-content-center">
              {t('SHARED.MODALS.DELETEMODAL.TITLE')}
            </h4>
            {body && (
              <div className="alert alert-info text-center">
                <i className="fa fa-arrow-circle-right mr-2"></i>
                <strong>{body}</strong>
              </div>
            )}
            <div className="alert alert-danger mt-2 text-center">
              <strong>{t('SHARED.MODALS.DELETEMODAL.MESSAGE')}</strong>
            </div>
          </Fragment>
        )
      }}
      footerProps={{
        className: `justify-content-center ${styles.deleteModalFooter}`,
        children: (
          <Fragment>
            <button
              type="button"
              className="btn btn-outline-warning"
              onClick={toggle}>
              <i className="fa fa-power-off mr-2"></i>
              {t('SHARED.MODALS.DELETEMODAL.CANCEL')}
            </button>
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={onDelete}>
              <i className="fa fa-times mr-2"></i>
              {t('SHARED.MODALS.DELETEMODAL.DELETE')}
            </button>
          </Fragment>
        )
      }}
    />
  )
}

export default DeleteModal
