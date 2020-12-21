import LinkCell from 'components/shared/table/cells/LinkCell'
import SubstitutionLinkCell from 'components/shared/table/cells/SubstitutionLinkCell'
import IsPresentCell from 'components/shared/table/cells/IsPresentCell'
import ListTableCell from 'components/shared/table/cells/ListTableCell'
import CheckedCell from 'components/shared/table/cells/CheckedCell'
import ReadTableCell from 'components/shared/table/cells/ReadTableCell'
import ActionsCell from 'components/shared/table/cells/ActionsCell'
import IsActiveCell from 'components/shared/table/cells/IsActiveCell'
import LookupCell from 'components/shared/table/cells/LookupCell'
import DocumentTasksCell from 'components/shared/table/cells/DocumentTasksCell'

function TableCell({
  tableUrl,
  rowKey,
  type,
  value,
  lookups,
  id,
  item,
  ...props
}) {
  function CellComponent() {
    switch (type) {
      case 'badge':
        return (
          <div
            className={`badge badge-pill badge-${
              props.badgeColor !== undefined ? props.badgeColor : 'dark'
            }`}>
            {value}
          </div>
        )
      case 'lookup':
        return <LookupCell value={value} options={lookups[props.lookup]} />
      case 'link':
        return (
          <LinkCell
            tableUrl={tableUrl}
            value={value}
            id={id}
            options={props.lookup !== undefined ? lookups[props.lookup] : null}
          />
        )
      case 'substitutionlink':
        return <SubstitutionLinkCell value={value} id={id} item={item} />
      case 'isPresent':
        return <IsPresentCell rowKey={rowKey} value={value} />
      case 'list':
        return <ListTableCell values={value} item={item} />
      case 'checked':
        return <CheckedCell value={value} />
      case 'active':
        return <IsActiveCell value={value} />
      case 'read':
        return <ReadTableCell rowKey={rowKey} type="read" value={value} />
      case 'actions':
        return <ActionsCell rowKey={rowKey} value={value} />
      case 'documentTasks':
        return <DocumentTasksCell value={value} id={id} />
      default:
        return value
    }
  }
  return <td>{CellComponent()}</td>
}

export default TableCell
