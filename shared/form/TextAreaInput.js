import styles from 'components/shared/shared.module.css'

function TextAreaInput({
  label,
  sizeLabel = 3,
  name,
  defaultValue,
  placeholder,
  errorName,
  reference,
  rows = 3,
  ...props
}) {
  const labelClasses = `col-md-${sizeLabel} col-form-label`
  const colClasses = `col-md-${12 - sizeLabel}`
  return (
    <div className="form-group row">
      <span className={labelClasses} htmlFor={name}>
        {props.icon && <i className={`fa fa-${props.icon} mr-3`}></i>}
        <strong>{label}</strong>
      </span>
      <div className={colClasses}>
        <textarea
          id={name}
          placeholder={placeholder}
          name={name}
          className={
            errorName
              ? `border border-danger form-control ${styles.textAreaResize}`
              : `form-control ${styles.textAreaResize}`
          }
          rows={rows}
          defaultValue={defaultValue}
          ref={reference}
          {...props}
        />
        {errorName && <span className="text-danger">{errorName.message}</span>}
      </div>
    </div>
  )
}

export default TextAreaInput
