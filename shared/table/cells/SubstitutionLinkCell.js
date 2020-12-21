import { Link } from '@reach/router'

function SubstitutionLinkCell({ value, id, item }) {
  return item.isActive ? (
    <Link
      className="text-decoration-none font-weight-bold"
      to={`/tools/substitutions/${id}`}>
      {value}
    </Link>
  ) : (
    value
  )
}

export default SubstitutionLinkCell
