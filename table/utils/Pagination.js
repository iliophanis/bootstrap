import { useTranslation } from 'react-i18next'

const pageSizes = [
  { value: 10, caption: '10 εγγραφές' },
  { value: 15, caption: '15 εγγραφές' },
  { value: 20, caption: '20 εγγραφές' },
  { value: 50, caption: '50 εγγραφές' },
  { value: 100, caption: '100 εγγραφές' }
]

function PaginationPageSizeSelect({ defaultValue, onChange }) {
  function handleChange(evt) {
    onChange(evt.target.value)
  }

  return (
    <select
      className="form-control form-control-sm"
      value={defaultValue}
      onChange={handleChange}>
      {pageSizes.map((item) => (
        <option key={item.value} value={item.value}>
          {item.caption}
        </option>
      ))}
    </select>
  )
}

function PaginationItem({ icon, caption, disabled, onClick }) {
  return (
    <li className={`page-item ${disabled ? 'disabled' : ''}`}>
      <button className="btn-link page-link" onClick={onClick}>
        <i className={`fa fa-${icon} mr-2`} />
        <span>{caption}</span>
      </button>
      {/* <a className="page-link" href={null} onClick={onClick}>
        <i className={`fa fa-${icon} mr-2`} />
        <span>{caption}</span>
      </a> */}
    </li>
  )
}

function Pagination({ params, onChange }) {
  const { t } = useTranslation('shell')

  function onPageSizeChange(pageSize) {
    onChange(Object.assign({}, params, { pageSize: pageSize }))
  }

  function onPageChange(page) {
    onChange(Object.assign({}, params, { page: page }))
  }
  function onNextPage() {
    onPageChange(params.page + 1)
  }
  function onFirstPage() {
    onPageChange(1)
  }
  function onPreviousPage() {
    onPageChange(params.page - 1)
  }

  function onLastPage() {
    onPageChange(params.pages)
  }

  const firstItem = (params.page - 1) * params.pageSize + 1
  const lastItem =
    params.page * params.pageSize < params.total
      ? params.page * params.pageSize
      : params.total

  const pagination = [
    {
      icon: 'fast-backward',
      caption: t('SHARED.PAGINATION.FIRST'),
      disabled: params.page === 1,
      onClick: onFirstPage
    },
    {
      icon: 'step-backward',
      caption: t('SHARED.PAGINATION.PREVIOUS'),
      disabled: params.page === 1,
      onClick: onPreviousPage
    },
    {
      icon: 'step-forward',
      caption: t('SHARED.PAGINATION.NEXT'),
      disabled: params.page === params.pages,
      onClick: onNextPage
    },
    {
      icon: 'fast-forward',
      caption: t('SHARED.PAGINATION.LAST'),
      disabled: params.page === params.pages,
      onClick: onLastPage
    }
  ]

  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="">
        <PaginationPageSizeSelect
          defaultValue={params.pageSize}
          onChange={onPageSizeChange}
        />
      </div>
      <div className="font-weight-bold">
        {firstItem}-{lastItem} / {params.total}
      </div>

      <nav aria-label="IRIS pagination">
        <ul className="pagination pagination-sm m-0">
          {pagination.map((item, idx) => (
            <PaginationItem key={idx} {...item} />
          ))}
        </ul>
      </nav>
    </div>
  )
}
export default Pagination
