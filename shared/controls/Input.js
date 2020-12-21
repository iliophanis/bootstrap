function Input({
  type = 'text',
  label,
  name,
  labelCol = 3,
  register,
  ...rest
}) {
  const labelClasses = `col-md-${labelCol} col-form-label`
  const controlClasses = `col-md-${12 - labelCol} form-control`

  return (
    <div className="form-group row">
      <label className={labelClasses}>{label}</label>
      <input
        className={controlClasses}
        type={type}
        name={name}
        ref={register}
        {...rest}
      />
    </div>
  )
}

export default Input
