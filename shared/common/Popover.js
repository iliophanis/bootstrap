import ReactstrapPopover from 'reactstrap/es/UncontrolledPopover'
import ReactstrapPopoverHeader from 'reactstrap/es/PopoverHeader'
import ReactstrapPopoverBody from 'reactstrap/es/PopoverBody'

function Popover({ headerProps, bodyProps, target, ...rest }) {
  return (
    <ReactstrapPopover placement="left" target={target} {...rest}>
      <ReactstrapPopoverHeader {...headerProps} />
      <ReactstrapPopoverBody {...bodyProps} />
    </ReactstrapPopover>
  )
}

export default Popover
