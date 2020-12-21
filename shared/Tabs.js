import { useState } from 'react'

function Tab({ tab, isActive, type = 'tab', onClick }) {
  const tabClass = `nav-link text-primary ${
    isActive
      ? 'active border-top-0 border-right-0 border-left-0 border-bottom border-secondary'
      : ''
  }`
  const pillClass = `nav-link ${isActive ? 'active' : ''}`

  return (
    <li className="nav-item" role="presentation">
      <a
        className={type === 'pill' ? pillClass : tabClass}
        id={`${tab.name}-tab`}
        href="# "
        data-toggle={type === 'tabs' ? 'tab' : 'pill'}
        role="tab"
        aria-controls={tab.name}
        aria-selected={isActive ? 'true' : 'false'}
        onClick={onClick}>
        {tab.icon && <i className={`fa fa-${tab.icon} mr-1`} />}
        {tab.caption}
        {tab.count > 0 && (
          <span className="badge badge-pill badge-dark ml-1">{tab.count}</span>
        )}
      </a>
    </li>
  )
}

function Tabs({ tabs = [], type = 'tabs', border = 'inner', centered = true }) {
  const [active, setActive] = useState(tabs[0] ? tabs[0].name : null)

  const tabsClass = `nav nav-${type} border-0 ${
    centered ? 'justify-content-center' : ''
  }`

  return (
    <div
      className={border === 'outer' ? 'border border-muted rounded p-2' : ''}>
      <ul className={tabsClass} role="tablist">
        {tabs.map((tab) => (
          <Tab
            key={tab.name}
            tab={tab}
            isActive={tab.name === active}
            type={type === 'tabs' ? 'tab' : 'pill'}
            onClick={() => setActive(tab.name)}
          />
        ))}
      </ul>
      <div
        className={`tab-content mt-2 p-2 ${
          border === 'inner' ? 'border border-muted rounded' : ''
        }`}>
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`tab-pane ${tab.name === active ? 'active' : ''}`}
            id={tab.name}
            role="tabpanel"
            aria-labelledby={`${tab.name}-tab`}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tabs
