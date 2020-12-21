import { Children, createElement, useState } from 'react'

import styles from 'components/shared/shared.module.css'

function Tab({ name, icon, label, badge, isActive, onClick, children }) {
  const tabClass = `btn btn-sm btn-link text-decoration-none ${
    styles.tabLink
  } ${
    isActive
      ? 'active border-top-0 border-right-0 border-left-0 border-bottom border-secondary rounded-0'
      : ''
  }`

  return (
    <li className="nav-item" role="presentation" exclude="true">
      <button className={tabClass} onClick={() => onClick(name)}>
        {icon ? <i className={`fa fa-${icon} mr-1`} /> : null}
        {label}
        {badge > 0 ? (
          <span className="badge badge-pill badge-dark ml-1">{badge}</span>
        ) : null}
      </button>
      {children}
    </li>
  )
}

function Tabs({ defaultTab = '', onTabClick, children }) {
  const [active, setActive] = useState(defaultTab)

  function handleTabClick(name) {
    if (onTabClick) {
      onTabClick(name)
    }
    setActive(name)
  }

  return (
    <div className="w-100">
      <ul className="nav nav-tabs justify-content-center border-0">
        {Children.map(children, (child) =>
          createElement(child.type, {
            ...{
              ...child.props,
              key: child.props.name,
              isActive: active === child.props.name,
              onClick: handleTabClick,
              children: undefined
            }
          })
        )}
      </ul>
      <div className="tab-content mt-2 p-2 border rounded border-muted">
        {Children.map(children, (child) => (
          <div
            className={`tab-pane ${
              child.props.name === active ? 'show active' : ''
            } container-fluid`}>
            {Children.map(child.props.children, (contentChild) =>
              createElement(contentChild.type, { ...contentChild.props })
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

Tabs.Tab = Tab

export default Tabs
