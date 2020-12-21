import { useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'

import useUrlState from 'utils/useUrlState'
import { authState } from 'stores/user'
import { draftsQuery } from 'stores/documents'
import Drafts from 'components/documents/tables/outbox/Drafts'

function DraftsContainer() {
  const [lookups, setLookups] = useState({})
  const auth = useRecoilValue(authState)

  const [params, setParams] = useUrlState({
    page: 1,
    pageSize: 10,
    filter: '',
    sortBy: '',
    sortDesc: false
  })

  const query = useRecoilValue(
    draftsQuery({
      token: auth.token,
      profile: auth.currentProfile,
      ...params
    })
  )

  function handleChange({ page, pageSize, filter, sortBy, sortDesc }) {
    setParams({ page, pageSize, filter, sortBy, sortDesc })
  }

  useEffect(() => {
    async function getLookups() {
      const lookups = {
        priorities: `${process.env.PUBLIC_URL}/lookups/shared/PriorityTypes.json`,
        classifications: `${process.env.PUBLIC_URL}/lookups/documents/ClassificationTypes.json`,
        documentTypes: `${process.env.PUBLIC_URL}/lookups/documents/DocumentTypes.json`,
        documentTaskTypes: `${process.env.PUBLIC_URL}/lookups/documents/DocumentTasksTypes.json`
      }

      Object.keys(lookups).forEach(async (key) => {
        const response = await fetch(lookups[key])
        const json = await response.json()
        setLookups((state) => Object.assign({}, state, { [key]: json }))
      })
    }

    getLookups()
  }, [])

  return (
    <Drafts
      lookups={lookups}
      documents={query.data}
      params={query.params}
      onChange={handleChange}
    />
  )
}

export default DraftsContainer
