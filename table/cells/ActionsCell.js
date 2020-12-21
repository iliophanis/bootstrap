import { useState } from 'react'

import styles from 'components/shared/shared.module.css'
import Tooltip from 'components/shared/common/Tooltip'
import DocumentModal from 'components/tasks/issues/table/DocumentModal'
import TaskModal from 'components/tasks/issues/table/TaskModal'

function ActionsCell({ rowKey, value }) {
  const [documentModal, setDocumentModal] = useState(false)
  const [taskModal, setTaskModal] = useState(false)
  const toggle = (label) => {
    if (label === 'documents') {
      setDocumentModal((state) => !state)
    } else {
      setTaskModal((state) => !state)
    }
  }
  const options = [
    {
      label: 'documents',
      description: 'Συνδεδεμένα Έγγραφα',
      icon: 'file-text',
      data: value.documents
    },
    {
      label: 'tasks',
      description: 'Συνδεδεμένες Εργασίες',
      icon: 'tasks',
      data: value.tasks
    }
  ]
  return (
    <div className="d-flex flex-row justify-content-between">
      {options.map((option, index) => {
        return option.data.length > 0 ? (
          <div
            className={`${styles.cursorPointer} btn-link w-50`}
            onClick={() => toggle(option.label)}
            key={index}>
            <i
              className={`fa fa-${option.icon} mr-3`}
              id={`${option.icon}_${rowKey}`}
            />
            <Tooltip placement="top" target={`${option.icon}_${rowKey}`}>
              <div>
                <span className="badge badge-pill badge-light mr-2 mb-2">
                  {option.data.length}
                </span>
                {option.description}
              </div>
            </Tooltip>
          </div>
        ) : (
          <div key={index} className="w-50"></div>
        )
      })}
      <DocumentModal
        modal={documentModal}
        toggle={() => toggle('documents')}
        documents={value.documents}
      />
      <TaskModal
        modal={taskModal}
        toggle={() => toggle('tasks')}
        tasks={value.tasks}
      />
    </div>
  )
}

export default ActionsCell
