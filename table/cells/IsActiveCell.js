import React from 'react'

function IsActiveCell({ value }) {
  const badgeColor = value ? 'success' : 'danger'
  return (
    <div className={`badge badge-${badgeColor}`}>
      {value ? 'Ενεργή' : 'Έχει λήξει'}
    </div>
  )
}

export default IsActiveCell
