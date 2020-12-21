import Tooltip from 'components/shared/common/Tooltip'

function ListTableCell({ values, item }) {
  return (
    <>
      <span id={`td_${item.id}`}>
        {values.length > 1 ? `${values[0]}...` : `${values[0]}`}
      </span>
      <Tooltip placement="auto" target={`td_${item.id}`}>
        {values.map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
      </Tooltip>
    </>
  )
}

export default ListTableCell
