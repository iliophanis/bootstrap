function DateTimeInput({
  dateProps,
  timeProps,
  register,
  labelCol = 3,
  name,
  label,
  ...props
}) {
  const labelClasses = `col-md-${labelCol} col-form-label`
  const colClasses = `col-md-${12 - labelCol}`
  return (
    <div className="form-group row">
      <span className={labelClasses} htmlFor={name}>
        {props.icon && <i className={`fa fa-${props.icon} mr-3`}></i>}
        <strong>{label}</strong>
      </span>
      <div className={`input-group ${colClasses}`}>
        <input
          className="form-control"
          type="date"
          {...dateProps}
          ref={register}
        />
        <input
          className="form-control"
          type="time"
          {...timeProps}
          ref={register}
        />
      </div>
    </div>
  )
}

export default DateTimeInput
