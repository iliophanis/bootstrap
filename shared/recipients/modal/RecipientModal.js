import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import ProfilesContainer from 'containers/recipient/ProfilesContainer'
import PersonnelContainer from 'containers/recipient/PersonnelContainer'
import styles from 'components/shared/shared.module.css'
import Tooltip from 'components/shared/common/Tooltip'
import Modal from 'components/shared/common/Modal'
import 'assets/translate/shared/shared.i18n'
import { navItems } from 'components/shared/recipients/modal/navItems'

function RecipientModal({ disableButton }) {
  const { t } = useTranslation('shared')
  const [activeTab, setActiveTab] = useState('profiles')
  const [modal, setModal] = useState(false)

  const toggleTab = (tab) => {
    setActiveTab(tab)
  }
  function navItemStyle(tab) {
    if (activeTab === tab) {
      if (tab === 'personnel') {
        return `bg-white text-primary rounded-0 border border-primary`
      }
      return 'bg-white text-primary rounded-0 border border-primary'
    } else {
      if (tab === 'personnel') {
        return ` text-white`
      }
      return 'text-white'
    }
  }

  const toggle = () => setModal(!modal)

  return (
    <React.Fragment>
      <div>
        <button
          type="button"
          className="btn btn-info"
          disabled={disableButton}
          id="recipients"
          onClick={toggle}>
          <span className={styles.modalButton}>
            <i className="fa fa-object-ungroup mr-2"></i>
            {t('SHARED.RECIPIENTS.BUTTON.TITLE')}
          </span>
        </button>

        <Tooltip placement="top" target="recipients">
          {t('SHARED.RECIPIENTS.BUTTON.TOOLTIP')}
        </Tooltip>
      </div>
      <Modal
        className={styles.modal}
        isOpen={modal}
        toggle={toggle}
        headerProps={{
          toggle: toggle,
          children: (
            <span>
              <i className="fa fa-th-list mt-1 mr-2"></i>
              {t('SHARED.RECIPIENTS.RECIPIENTS_HEADER')}
            </span>
          )
        }}
        bodyProps={{
          children: (
            <React.Fragment>
              <ul className="nav nav-tabs">
                {navItems.map((item, index) => {
                  return (
                    <li className="nav nav-item" key={index}>
                      <span
                        className={`nav-link ${
                          item.tab === activeTab && 'active'
                        } ${navItemStyle(item.tab)}`}
                        onClick={() => {
                          toggleTab(item.tab)
                        }}>
                        {t(`${item.caption}`)}
                      </span>
                    </li>
                  )
                })}
              </ul>
              <div className="tab-content">
                <div
                  className={`tab-pane ${
                    activeTab === 'profiles' && 'active'
                  }`}>
                  <br />
                  <ProfilesContainer />
                </div>
                <div
                  className={`tab-pane ${
                    activeTab === 'personnel' && 'active'
                  }`}>
                  <br />
                  <PersonnelContainer />
                </div>
              </div>
            </React.Fragment>
          )
        }}
        footerProps={{
          children: (
            <React.Fragment>
              <button
                className="btn btn-success"
                disabled={true}
                onClick={toggle}>
                <i className="fa fa-check-circle mr-2"></i>{' '}
                {t('SHARED.RECIPIENTS.SELECT_BUTTON')}
              </button>{' '}
              <button className="btn btn-warning" onClick={toggle}>
                <i className="fa fa-power-off mr-2"></i>
                {t('SHARED.RECIPIENTS.CANCEL_BUTTON')}
              </button>
            </React.Fragment>
          )
        }}
      />
    </React.Fragment>
  )
}

export default RecipientModal
