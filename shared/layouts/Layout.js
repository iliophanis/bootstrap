import './layouts.css'

function Left({ children }) {
  return <div className="left-side overflow-hidden">{children}</div>
}

function Main({ children }) {
  return <main className="p-3 overflow-auto">{children}</main>
}

function Right({ children }) {
  return <div className="right-side overflow-hidden">{children}</div>
}

function Feature({ children }) {
  return <>{children}</>
}

Feature.Left = Left
Feature.Main = Main
Feature.Right = Right

function Header({ children }) {
  return <header className="">{children}</header>
}

function Footer({ children }) {
  return <footer className="">{children}</footer>
}
function AppLayout({ children }) {
  return (
    <div className="appLayout">
      <div className="parent">{children}</div>
    </div>
  )
}
AppLayout.Header = Header
AppLayout.Feature = Feature
AppLayout.Footer = Footer

export default AppLayout
