function SelectInput({
  label,
  sizeLabel = 3,
  name,
  defaultValue,
  options,
  reference,
  append = false,
  optionkey = 'id',
  optionValue = 'description',
  ...props
}) {
  const labelClasses = `col-md-${sizeLabel} col-form-label `
  const colClasses = append
    ? `input-group col-md-${12 - sizeLabel}`
    : `col-md-${12 - sizeLabel}`
  return (
    <div className="form-group row">
      {label && (
        <span className={labelClasses} htmlFor={name}>
          {props.icon && <i className={`fa fa-${props.icon} mr-3`}></i>}
          <strong>{label}</strong>
        </span>
      )}
      <div className={colClasses}>
        <select
          id={name}
          name={name}
          className={`form-control ${props.disabled ? 'disabled' : ''}`}
          defaultValue={defaultValue}
          ref={reference}
          {...props}>
          {options &&
            options.map((item, index) => (
              <option key={index} value={item[optionkey]}>
                {item[optionValue] === undefined
                  ? item.title
                  : item[optionValue]}
              </option>
            ))}
        </select>
        {append && (
          <div className="input-group-append">
            <div className="input-group-text">
              <i
                className={`${
                  options.find((o) => o.id === Number(props.appendicon))
                    .flagColor
                }`}></i>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SelectInput
