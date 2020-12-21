function AlertInput({
  label,
  sizeLabel,
  value,
  badgeValue,
  className,
  children
}) {
  return (
    <div className="form-group row">
      {label && (
        <span
          className={`label label-default ${
            sizeLabel === undefined ? 'col-3 col-sm-3' : sizeLabel
          }`}>
          <strong className="text-muted">{label}</strong>
          {badgeValue && (
            <span className="badge badge-pill badge-dark ml-3">
              {badgeValue}
            </span>
          )}
        </span>
      )}
      <div className="col-8">
        <div className={`alert alert-info ${className}`}>
          <strong>{value}</strong>
        </div>
        {children}
      </div>
    </div>
  )
}

export default AlertInput
