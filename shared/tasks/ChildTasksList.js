import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { navigate } from '@reach/router'

import 'assets/translate/shell/shell.i18n'
import styles from 'components/shared/shared.module.css'
import { handlePercentage } from 'utils/statusColor'

function ChildTasksList({ tasks }) {
  const { t } = useTranslation('shared')

  return (
    <Fragment>
      {tasks.length === 0 ? (
        <Fragment>
          <i className="fa fa-comment-o mr-2 text-primary"></i>
          <span className="text-primary">{t('SHARED.CHILD_TASK_EMPTY')}</span>
        </Fragment>
      ) : (
        <table className="table table-hover table-sm w-75 mt-2 ml-3">
          <tbody>
            {tasks.map((item, idx) => (
              <tr
                key={idx}
                className={styles.cursorPointer}
                onClick={() => navigate(`/tasks/view/${item.id}`)}>
                <th scope="row">{++idx}</th>
                <td>
                  <span
                    className={`badge badge-${handlePercentage(
                      item.value
                    )} mr-2`}>
                    {item.value} %
                  </span>
                </td>
                <td className="text-primary">{item.description}</td>
                {/* <td>
                  <span className="badge badge-dark">
                    <i className="fa fa-user-circle mr-2 ml-1"></i>
                    rank (speciality) test user
                  </span>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Fragment>
  )
}

export default ChildTasksList
