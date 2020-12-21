import { useState } from 'react'

import Icon from 'components/shared/Icon'

function DropdownItem({ item, onClick }) {
  if (item.caption === 'divider') {
    return <div className="dropdown-divider" />
  }
  return (
    <a
      className="dropdown-item"
      href={item.path | '_blank'}
      onClick={(evt) => onClick(evt, item)}>
      {item.icon && <Icon className="mr-2" icon={item.icon} />}
    </a>
  )
}

function Dropdown({ name, caption, items = [] }) {
  const [open, setOpen] = useState(false)
  const id = `dropdown-${name}`
  const dropdownClass = `dropdown`
  const buttonClass = `btn dropdown-toggle`
  const dropdownMenuClass = `dropdown-menu ${open ? 'show' : ''}`

  function handleClick(evt, item) {
    evt.preventDefaul()
    if (item.onClick) {
      item.onClick(item)
    }
    setOpen(false)
  }

  return (
    <div className={dropdownClass}>
      <button
        className={buttonClass}
        type="button"
        id={id}
        data-toggle="dropdown">
        {caption}
      </button>
      <div className={dropdownMenuClass} aria-labelledby={id}>
        {items.map((item, idx) => (
          <DropdownItem key={idx} item={item} onClick={handleClick} />
        ))}
      </div>
    </div>
  )
}

export default Dropdown
