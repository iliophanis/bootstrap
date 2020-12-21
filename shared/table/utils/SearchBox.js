import { useRef } from 'react'

function Filtering({ params, onChange }) {
  const filter = useRef(null)
  function onKeyPress(e) {
    if (e.which === 13) {
      onFilterChange()
    }
  }

  function onFilterChange() {
    const FindSearch = filter.current.value
    onChange(Object.assign({}, params, { filter: FindSearch }))
  }

  return (
    <div className="input-group">
      <input
        className="form-control"
        ref={filter}
        onKeyPress={onKeyPress}
        placeholder="Αναζήτηση..."
      />
      <div className="input-group-append">
        <button
          type="button"
          className="btn btn-primary"
          onClick={onFilterChange}>
          <i className="fa fa-search mr-2"></i>Αναζήτηση
        </button>
      </div>
    </div>
  )
}

export default Filtering
