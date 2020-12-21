import { useRef } from 'react'
import { InputGroupText, InputGroupAddon, Input, InputGroup } from 'reactstrap'

function External({
  referenceData,
  setReferenceData,
  setActiveReferenceButton
}) {
  const external = useRef(null)
  function onAddExternal(e) {
    e.preventDefault()
    const submitedData = {
      ReferenceType: 2,
      DocumentType: 0,
      Id: external.current.value,
      Description: external.current.value
    }
    setReferenceData([...referenceData, submitedData])
    setActiveReferenceButton(null)
  }

  return (
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
          <i className="fa fa-keyboard-o"></i>
        </InputGroupText>
      </InputGroupAddon>
      <Input ref={external} placeholder="Προσθήκη εμπλεκόμενου φορέα" />
      <button
        type="button"
        className="btn btn-primary"
        onClick={(e) => onAddExternal(e)}>
        <i className="fa fa-plus"></i>
      </button>
    </InputGroup>
  )
}

export default External
