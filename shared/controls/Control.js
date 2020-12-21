import { forwardRef } from 'react'
import { useTranslation } from 'react-i18next'

function Input({ name, register, ...rest }) {
  return <input type="text" name={name} ref={register} {...rest} />
}

function DateInput({ name, register, ...rest }) {
  return <input type="date" name={name} ref={register} {...rest} />
}

function TimeInput({ name, register, ...rest }) {
  return <input type="time" name={name} ref={register} {...rest} />
}

function DatetimeInput({ dateProps, timeProps, register }) {
  return (
    <div className="input-group">
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
  )
}

function RangeInput({ name, register, className, ...rest }) {
  return (
    <input
      className={`${className} form-control-range`}
      type="range"
      name={name}
      ref={register}
      {...rest}
    />
  )
}

function Checkbox({ name, register, ...rest }) {
  return (
    <div className="form-check">
      <input
        className="form-check-input position-static"
        type="checkbox"
        name={name}
        ref={register}
        {...rest}
      />
    </div>
  )
}

function Textarea({ name, register, rows, ...rest }) {
  return <textarea name={name} ref={register} rows={rows} {...rest} />
}

function Select({
  name,
  register,
  options,
  optionKey = 'id',
  optionValue = 'description',
  className,
  ...rest
}) {
  return (
    <select
      className={`${className} custom-select`}
      name={name}
      ref={register}
      {...rest}>
      {options.map((item, idx) => (
        <option key={idx} value={item[optionKey]}>
          {item[optionValue]}
        </option>
      ))}
    </select>
  )
}

function Radio({
  name,
  register,
  options,
  optionKey = 'id',
  optionValue = 'description',
  inline = true,
  defaultValue
}) {
  const classes = `form-check ${inline ? 'form-check-inline' : ''}`
  return (
    <div>
      {options.map((item, idx) => (
        <div key={idx} className={classes}>
          <input
            className="form-check-input"
            type="radio"
            name={name}
            value={item[optionKey]}
            defaultChecked={defaultValue === item[optionKey]}
            ref={register}
          />
          <label className="form-check-label">{item[optionValue]}</label>
        </div>
      ))}
    </div>
  )
}

function Label({ labelCol, icon, label }) {
  return (
    <label className={`col-sm-${labelCol} col-form-label user-select-none`}>
      {icon && <i className={`fa fa-${icon} mr-3`}></i>}
      <span className="font-weight-bold">{label}</span>
    </label>
  )
}

function ValidationFeedback({ error }) {
  const { t } = useTranslation()
  return error ? (
    <div className="invalid-feedback ml-1">{t(error.message)}</div>
  ) : null
}

function ControlSelector({ type, ...rest }) {
  switch (type) {
    case 'input':
      return <Input {...rest} />
    case 'date':
      return <DateInput {...rest} />
    case 'time':
      return <TimeInput {...rest} />
    case 'datetime':
      return <DatetimeInput {...rest} />
    case 'range':
      return <RangeInput {...rest} />
    case 'select':
      return <Select {...rest} />
    case 'textarea':
      return <Textarea {...rest} />
    case 'checkbox':
      return <Checkbox {...rest} />
    case 'radio':
      return <Radio {...rest} />

    default:
      throw new Error('unknown control type')
  }
}

function Control({
  name,
  icon,
  label,
  labelCol = 3,
  register,
  type,
  error,
  ...rest
}) {
  return (
    <div className="form-group row">
      <Label labelCol={labelCol} icon={icon} label={label} />
      <div className={`col-sm-${12 - labelCol} input-group`}>
        <ControlSelector
          type={type}
          className={`form-control ${error ? 'is-invalid' : ''}`}
          name={name}
          register={register}
          {...rest}
        />
        <ValidationFeedback error={error} />
      </div>
    </div>
  )
}

const ForwardRefWrapper = forwardRef((props, ref) => <Control {...props} />)

export default ForwardRefWrapper
