import { useState } from 'react'
import { handlePercentage } from 'utils/statusColor'

function ProgressInput({
  name,
  disabled,
  label,
  sizeLabel,
  sizeInput,
  percentage,
  reference,
  ...props
}) {
  const [valueProgress, setValueProgress] = useState(percentage)
  const labelClasses = `label label-default ${
    sizeLabel === undefined ? 'col-2 col-sm-2' : sizeLabel
  }`
  const colClasses = `input-group ${
    sizeInput === undefined ? 'col-4 col-sm-4' : sizeInput
  }`
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
          name={name}
          disabled={disabled}
          className="w-100"
          type="range"
          min={0}
          max={100}
          step={10}
          ref={reference}
          onChange={(e) => setValueProgress(e.target.value)}
          defaultValue={percentage}
          {...props}
        />
      </div>
      <span className={`text-${handlePercentage(valueProgress)}`}>
        <strong>{valueProgress} %</strong>
      </span>
    </div>
  )
}

export default ProgressInput
