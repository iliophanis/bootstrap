function Col({ children }) {
  return <div className="col-auto">{children}</div>
}

function Row({ children }) {
  return <div className="form-row">{children}</div>
}

Row.Col = Col

function Group({ children }) {
  return <div className="form-group">{children}</div>
}
function RowGroup({ children }) {
  return <div className="form-group row">{children}</div>
}

function Form({ children }) {
  return <div className="container-fluid">{children}</div>
}

Form.Row = Row
Form.Group = Group
Form.RowGroup = RowGroup

export default Form
