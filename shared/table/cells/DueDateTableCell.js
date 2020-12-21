import styles from 'components/shared/shared.module.css'

function DueDateTableCell({ date }) {
  const now = new Date()
  const checkDate = new Date(date.dueDate)

  if (!date) {
    return <td />
  }
  return (
    <td
      className={
        now < checkDate
          ? `${styles.dueDateDataCell} text-success`
          : `${styles.dueDateDataCell} text-danger`
      }>
      {/* <strong>{new Date(value).toLocaleDateString('el-GR')}</strong> */}
      <strong>{date.dueDateView}</strong>
    </td>
  )
}

export default DueDateTableCell
