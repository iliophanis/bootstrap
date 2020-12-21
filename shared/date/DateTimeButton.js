import { forwardRef } from 'react'
import styles from 'components/shared/shared.module.css'

function DateTimeButton({ name, disabled, onClick, value }, reference) {
  return (
    <button
      type="button"
      name={name}
      disabled={disabled}
      className={`btn active ${disabled ? 'btn-dark ' : 'btn-primary'}`}
      ref={reference}
      onClick={onClick}>
      <span className={styles.dateTimeButton1}>
        <i className="fa fa-calendar  mr-2"></i>
        <span className="mr-2">{value}</span>
        <i className="fa fa-clock-o"></i>
      </span>
    </button>
  )
}

export default forwardRef(DateTimeButton)
