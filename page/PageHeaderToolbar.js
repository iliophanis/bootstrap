import styles from 'components/shared/shared.module.css'
import Tooltip from 'components/shared/common/Tooltip'

const hideDisabled = false

function Button({
  id,
  text,
  icon,
  color,
  tooltip,
  divider,
  disabled,
  onClick,
  ...rest
}) {
  const buttonClass = `btn btn-link ${styles.pageHeaderToolbarButton} ${
    divider
      ? 'border-top-0 border-bottom-0 border-left-0 border-right border-primary'
      : ''
  }`
  const colorClass = color ? `text-${color}` : ''
  const iconClass = icon ? `fa fa-${icon}` : ''

  return (
    <>
      <button
        id={id}
        type="button"
        className={buttonClass}
        disabled={disabled}
        onClick={onClick}
        {...rest}>
        {icon && <i className={`${iconClass} ${colorClass}`} />}
        {text && <span className={colorClass}>{text}</span>}
      </button>
      {tooltip && (
        <Tooltip key="btn-tooltip" placement="bottom" target={id}>
          {tooltip}
        </Tooltip>
      )}
    </>
  )
}

function ButtonGroup({ buttons }) {
  if (hideDisabled) {
    buttons = buttons.filter((x) => !x.disabled)
  }
  return (
    <div
      className={`btn-group btn-group-sm ml-2 ${styles.pageHeaderToolbarGroup}`}
      role="group">
      {buttons.map((button, idx) => (
        <Button key={idx} {...button} />
      ))}
    </div>
  )
}

function PageHeaderToolbar({ buttons }) {
  if (!buttons) {
    return null
  }
  var groups = Array.isArray(buttons[0]) ? buttons : [buttons]
  return (
    <div className="btn-toolbar" role="toolbar">
      {groups.map((group, idx) => (
        <ButtonGroup key={idx} buttons={group} />
      ))}
    </div>
  )
}

export default PageHeaderToolbar
