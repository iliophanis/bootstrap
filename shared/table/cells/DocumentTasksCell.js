import { Link } from '@reach/router'

import Tooltip from 'components/shared/Tooltip'

function DocumentTasksCell({ value, id }) {
  return (
    <Tooltip tooltip={`${value.percentage} %`}>
      {value.assignedTasks > 0 && (
        <Link to={`/documents/tasks/${id}`}>
          <i
            className={`fa fa-tasks ${
              value.status === 2 ? 'text-success' : 'text-warning'
            }`}></i>
        </Link>
      )}
    </Tooltip>
  )
}

export default DocumentTasksCell
