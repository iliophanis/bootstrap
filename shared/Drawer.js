import { useEffect } from 'react'

import styles from 'components/shared/shared.module.css'

function Drawer({ show, onClose, background, fullWidth, children }) {
  useEffect(() => {
    function handleEscape(evt) {
      console.debug('key:', evt.key)
      if (evt.key === 'Escape') {
        onClose()
      }
    }

    if (show) {
      document.addEventListener('keydown', handleEscape)
      console.debug('added ESC listener')
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      console.debug('removed ESC listener', '(unmount)')
    }
  }, [show, onClose])

  const openClass = fullWidth ? styles.drawerOpenFullWidth : styles.drawerOpen
  const classes = `${styles.drawer} ${show ? openClass : ''} ${
    background ? `bg-${background}` : ''
  }`

  return (
    <>
      <div className={show ? styles.drawerBackdrop : ''} onClick={onClose} />
      <div className={classes}>{children}</div>
    </>
  )
}

export default Drawer
