import styles from 'components/shared/shared.module.css'

function Tooltip({ tooltip, children }) {
  return (
    <div className={styles.tooltip}>
      {children}
      <div className={styles.tooltipContent}>{tooltip}</div>
    </div>
  )
}

export default Tooltip
