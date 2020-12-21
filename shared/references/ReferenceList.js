import { Fragment } from 'react'
import { navigate } from '@reach/router'
import { useTranslation } from 'react-i18next'

import 'assets/translate/shared/shared.i18n'
import styles from 'components/shared/shared.module.css'

function ReferenceList({ references }) {
  const { t } = useTranslation('shared')

  return (
    <Fragment>
      {references.length === 0 ? (
        <div>
          <i className="fa fa-comment-o mr-2 text-primary"></i>
          <span className="text-primary">{t('SHARED.REFERENCES.EMPTY')}</span>
        </div>
      ) : (
        <table className="table table-hover table-sm w-50 mt-2 ml-3">
          <tbody>
            {references.map((item, idx) => (
              <tr
                key={idx}
                onClick={() => navigate(`/documents/${item.id}`)}
                className={styles.cursorPointer}>
                <th scope="row">{++idx}</th>
                <td className="text-primary">
                  <i className="fa fa-file-text-o"></i>
                  <span className="ml-2"> {item.description}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Fragment>
  )
}

export default ReferenceList
