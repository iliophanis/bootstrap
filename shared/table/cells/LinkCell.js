import { Link } from '@reach/router'

function LinkCell({ tableUrl, value, id, options }) {
  let column = value
  function urlKey() {
    switch (tableUrl) {
      case 'documents':
        return 'documents'
      case 'tasks':
        return 'tasks/view'
      case 'goals':
        return 'tasks/goals/view'
      case 'leaves':
        return 'tools/leaves'
      case 'library':
        return 'tools/library/view'
      case 'substitutions':
        return 'tools/substitutions'
      case 'contacts-external':
        return 'tools/contacts/external'
      case 'contacts-haf':
        return 'tools/contacts/haf'
      default:
        return 'tasks/issues/view'
    }
  }
  if (options) {
    const option = options.find((option) => option.id === value)
    column = option.description
  }

  return (
    <Link
      className="text-decoration-none font-weight-bold"
      to={`/${urlKey()}/${id}`}>
      {column}
    </Link>
  )
}

export default LinkCell
