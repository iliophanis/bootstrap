function CheckboxInput({
  label,
  sizeLabel,
  name,
  defaultValue,
  errorName,
  reference,
  ...props
}) {
  const labelClasses = `label label-default ${
    sizeLabel === undefined ? 'col-8 col-sm-8' : sizeLabel
  }`

  return (
    <div className="form-group row">
      {label && (
        <span className={labelClasses} htmlFor={name}>
          {props.icon && <i className={`fa fa-${props.icon} mr-3`}></i>}
          <strong>{label}</strong>
        </span>
      )}
      <div className="col-2 col-sm-2 custom-control custom-checkbox">
        <input
          id={name}
          type="checkbox"
          name={name}
          className={`custom-control-input
          ${errorName && ' border border-danger'}`}
          defaultChecked={defaultValue}
          ref={reference}
          {...props}
        />
        <label className="custom-control-label" htmlFor={name}></label>
        {errorName && <span className="text-danger">{errorName.message}</span>}
      </div>
    </div>
  )
}

export default CheckboxInput
