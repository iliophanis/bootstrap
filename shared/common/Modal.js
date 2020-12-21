import ReactstrapModal from 'reactstrap/es/Modal'
import ReactstrapModalHeader from 'reactstrap/es/ModalHeader'
import ReactstrapModalBody from 'reactstrap/es/ModalBody'
import ReactstrapModalFooter from 'reactstrap/es/ModalFooter'

function Modal({ headerProps, footerProps, bodyProps, toggle, ...rest }) {
  return (
    <div>
      <ReactstrapModal {...rest}>
        {headerProps && (
          <ReactstrapModalHeader toggle={toggle} {...headerProps} />
        )}
        <ReactstrapModalBody {...bodyProps} />
        {footerProps && <ReactstrapModalFooter {...footerProps} />}
      </ReactstrapModal>
    </div>
  )
}

export default Modal
