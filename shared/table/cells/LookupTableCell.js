import Tooltip from 'components/shared/common/Tooltip'

function LookupTableCell({ rowKey, value, type, options }) {
  if (!options) {
    return <td />
  }
  const option = options.find((option) => option.id === value)
  return (
    <td>
      {option.flagColor ? (
        <i className={option.flagColor} id={`${type}_${rowKey}`}></i>
      ) : (
        <strong id={`${type}_${rowKey}`}>{option.description}</strong>
      )}
      <Tooltip placement="top" target={`${type}_${rowKey}`}>
        {option.description}
      </Tooltip>
    </td>
  )
}

export default LookupTableCell
