function TextInput({
  label,
  type,
  sizeLabel = 3,
  name,
  defaultValue,
  placeholder,
  errorName,
  reference,
  ...props
}) {
  const labelClasses = `col-md-${sizeLabel} col-form-label `
  const colClasses = `col-md-${12 - sizeLabel}`
  return (
    <div className="form-group row">
      {label && (
        <span className={labelClasses} htmlFor={name}>
          {props.icon && <i className={`fa fa-${props.icon} mr-3`}></i>}
          <strong>{label}</strong>
        </span>
      )}
      <div className={colClasses}>
        <input
          id={name}
          type={type === undefined ? 'text' : type}
          placeholder={placeholder}
          name={name}
          className={`form-control ${errorName && 'border border-danger'}`}
          defaultValue={defaultValue}
          ref={reference}
          {...props}
        />
        {errorName && <span className="text-danger">{errorName.message}</span>}
      </div>
    </div>
  )
}

export default TextInput
