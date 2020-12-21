import './layouts.css'

function AppLayout({ header, leftSidebar, main, rightSidebar, footer }) {
  return (
    <div className="appLayout">
      <div className="parent">
        <header className="">{header}</header>
        <div className="left-side overflow-hidden">{leftSidebar}</div>
        <main className="p-3 overflow-auto">{main}</main>
        <div className="right-side overflow-hidden">{rightSidebar}</div>
        <footer className="">{footer}</footer>
      </div>
    </div>
  )
}

export default AppLayout
