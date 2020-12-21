import 'assets/translate/shell/shell.i18n'
import loading from 'assets/loading.gif'
import styles from 'components/shell/shell.module.css'
import Footer from 'components/shell/Footer'

const LOADER_SIZE = 128

function Loading() {
  return (
    <div className="w-100" style={{ zIndex: '1100 !important' }}>
      <div className="vh-100 d-flex flex-column overflow-hidden">
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-primary p-0 shell-header skeleton-header"
          sticky="top"></nav>
        <div className="flex-grow-1 d-flex overflow-hidden">
          <div className="d-flex">
            <div className={styles.sidebar}>
              <ul className="nav flex-column" />
            </div>
          </div>
          <div className="flex-grow-1 d-flex h-100 w-100 overflow-auto p-3">
            <div className="center-container w-100 ">
              {/* <div
                className="spinner-border text-info"
                style={{ width: '3rem', height: '3rem' }}
              /> */}
              <img
                className="img-fluid"
                src={loading}
                width={LOADER_SIZE}
                alt="loading"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Loading
