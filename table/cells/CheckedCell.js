import styles from 'components/shared/shared.module.css'

function CheckedCell({ value }) {
  return (
    <input
      className={styles.disabledPointer}
      type="checkbox"
      disabled
      checked={value}
    />
  )
}

export default CheckedCell
