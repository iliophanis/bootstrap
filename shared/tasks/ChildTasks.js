import { useTranslation } from 'react-i18next'
import { Link } from '@reach/router'

import styles from 'components/shared/shared.module.css'
import 'assets/translate/shared/shared.i18n'
import { handlePercentage } from 'utils/statusColor'

function ChildTasks({ tasks, disabled }) {
  const { t } = useTranslation('shared')

  return (
    <div className="d-flex flex-wrap">
      <div className="p-2 flex-fill">
        <div className="card">
          <div
            className={`alert d-flex justify-content-between ${
              disabled === true ? 'alert-secondary' : 'alert-success'
            }`}>
            <div className={disabled === true ? 'text-dark' : 'text-primary'}>
              <i className="fa fa-object-ungroup mr-2"></i>
              <strong>{t('SHARED.CHILD_TASK.HEADER')}</strong>
              <div className="badge badge-dark badge-pill ml-2">
                {tasks.length !== 0 ? tasks.length : 0}
              </div>
            </div>
          </div>
          <div className={`card-body ${styles.childTaskCardBody}`}>
            {tasks.length !== 0 ? (
              <ul className="list-group list-group-flush">
                {tasks.map((item, idx) => (
                  <li
                    className="list-group-item"
                    key={idx}
                    id={`childTask_${idx}`}>
                    <span className="mr-1">{idx + 1}. </span>
                    <span
                      className={`badge badge-${handlePercentage(
                        item.value
                      )} mr-2`}>
                      {item.value}%
                    </span>

                    <Link to={`/tasks/view/${item.id}`}>
                      {item.description}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="card-text">
                <span>{t('SHARED.CHILD_TASK.EMPTY_TASK')}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChildTasks
