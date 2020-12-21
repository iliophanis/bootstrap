import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'

import 'assets/translate/shared/shared.i18n'

function InvolvedList({ involved }) {
  const { t } = useTranslation('shared')

  return (
    <Fragment>
      {involved.length === 0 ? (
        <Fragment>
          <i className="fa fa-comment-o mr-2 text-primary"></i>
          <span className="text-primary">{t('SHARED.INVOLVED.EMPTY')}</span>
        </Fragment>
      ) : (
        <table className="table table-sm w-25 mt-2 ml-3">
          <tbody>
            {involved.map((item, idx) => (
              <tr key={idx}>
                <th scope="row">{++idx}</th>
                <td className="text-primary">
                  <i className="fa fa-user"></i>
                  <span className="ml-2">{item}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Fragment>
  )
}

export default InvolvedList
