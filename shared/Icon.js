function Icon({ icon, badge, badgeColor = 'danger' }) {
  return (
    <i className={`fa fa-${icon}`}>
      {badge > 0 && (
        <span className={`text-${badgeColor} font-weight-bold pl-1`}>!</span>
      )}
    </i>
  )
}

export default Icon
