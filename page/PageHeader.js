import { Link } from '@reach/router'

import PageHeaderButtons from './PageHeaderToolbar'

function PageHeader({ breadcrumb, buttons, isStuck }) {
  if (!breadcrumb || breadcrumb.length === 0) {
    return null
  }

  const classesForStuck = {
    false: {
      parent:
        'breadcrumb d-flex justify-content-between align-items-center flex-nowrap',
      item: 'breadcrumb-item'
    },
    true: {
      parent:
        'breadcrumb d-flex justify-content-between align-items-center  flex-nowrap sticky-top bg-dark',
      item: 'breadcrumb-item bg-dark text-white'
    }
  }

  return (
    <div className={classesForStuck[isStuck].parent}>
      <ol className="breadcrumb mb-0 p-0 user-select-none">
        {breadcrumb.slice(0, breadcrumb.length - 1).map((item, idx) => {
          return item.path === '' ? (
            <li key={idx} className={classesForStuck[isStuck].item}>
              {item.caption}
            </li>
          ) : (
            <li key={idx} className={classesForStuck[isStuck].item}>
              <Link to={item.path}>{item.caption}</Link>
            </li>
          )
        })}
        <li
          className={`${classesForStuck[isStuck].item} active d-block`}
          aria-current="page">
          {breadcrumb[breadcrumb.length - 1].caption}
        </li>
      </ol>
      <PageHeaderButtons buttons={buttons} isStuck={isStuck} />
    </div>
  )
}

export default PageHeader
