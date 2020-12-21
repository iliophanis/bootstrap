import styles from 'components/shared/shared.module.css'

function DatePicker({ label, name, date, setDate, labelCol = 3, ...props }) {
  const labelClasses = `col-md-${labelCol} col-form-label`
  const colClasses = `col-md-${12 - labelCol}`
  // const inputClasses = `h-100 w-50 border rounded text-dark bg`
  return (
    <div className="form-group row">
      {label && (
        <span className={labelClasses} htmlFor={name}>
          {props.icon && <i className={`fa fa-${props.icon} mr-3`}></i>}
          <strong>{label}</strong>
        </span>
      )}
      <div className={`${colClasses}`}>
        <input
          id={name}
          type="date"
          className={`${styles.inputDateTimePicker} w-100`}
          name={name}
          defaultValue={date}
          onChange={(e) => setDate(e.target.value)}
          min={props.minDate}
        />
      </div>
    </div>
  )
}

export default DatePicker
