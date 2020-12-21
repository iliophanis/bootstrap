function Select({
  name,
  label,
  options,
  register,
  labelCol = 3,
  valueProp = 'id',
  displayProp = 'description',
  ...rest
}) {
  const labelClasses = `col-md-${labelCol} col-form-label`,
    controlClasses = `col-md-${12 - labelCol} form-control`

  return (
    <div className="form-group row">
      <label className={labelClasses}>{label}</label>
      <select className={controlClasses} name={name} ref={register} {...rest}>
        {options.map((item) => (
          <option key={item[valueProp]} value={item[valueProp]}>
            {item[displayProp]}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
