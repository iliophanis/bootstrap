function DateTimePicker({
  label,
  name,
  date,
  setDate,
  time,
  setTime,
  labelCol = 3,
  ...props
}) {
  const labelClasses = `col-md-${labelCol} col-form-label`
  const colClasses = `col-md-${12 - labelCol} input-group`
  // const inputClasses = `h-100 w-50 border rounded text-dark bg`
  return (
    <div className="form-group row">
      <span className={labelClasses} htmlFor={name}>
        {props.icon && <i className={`fa fa-${props.icon} mr-3`}></i>}
        <strong>{label}</strong>
      </span>
      <div className={`${colClasses}`}>
        <input
          id={name}
          type="date"
          className="form-control"
          name={name}
          defaultValue={date}
          onChange={(e) => setDate(e.target.value)}
          min={props.minDate}
        />
        <input
          type="time"
          className="form-control"
          defaultValue={time}
          onChange={(e) => setTime(e.target.value)}
          min={props.minTime}
        />
      </div>
    </div>
  )
}

export default DateTimePicker
