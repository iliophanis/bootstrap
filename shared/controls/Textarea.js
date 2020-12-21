export function Textarea({ name, register, rows, className, ...rest }) {
  return (
    <textarea
      className={className}
      name={name}
      ref={register}
      rows={rows}
      {...rest}
    />
  )
}

function LabeledTextArea({
  rows = 2,
  label,
  labelCol = 3,
  name,
  register,
  ...rest
}) {
  const col = 12 - labelCol
  const labelClasses = `col-md-${col < 4 ? 12 : labelCol} col-form-label`
  const controlClasses = `col-md-${col < 4 ? 12 : col} form-control`

  return (
    <div className="form-group row">
      <label className={labelClasses}>{label}</label>
      <textarea
        className={controlClasses}
        rows={rows}
        name={name}
        ref={register}
        {...rest}
      />
    </div>
  )
}

export default LabeledTextArea
