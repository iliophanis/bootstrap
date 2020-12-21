import { selectorFamily } from 'recoil'

import documentQueries from 'api/document/document.queries'

export const documentByIdQuery = selectorFamily({
  key: 'documents.Current',
  get: ({ token, profile, id }) => async () => {
    const response = await documentQueries.getDocumentById({
      token,
      profile,
      id
    })
    return response
  }
})

export const pendingDocumentsQuery = selectorFamily({
  key: 'documents.Pending',
  get: ({
    token,
    profile,
    page,
    pageSize,
    filter,
    sortBy,
    sortDesc
  }) => async () => {
    const response = await documentQueries.getPending({
      token,
      profile,
      page,
      pageSize,
      filter,
      sortBy,
      sortDesc
    })
    return response
  }
})

export const actionDocumentsQuery = selectorFamily({
  key: 'documents.Action',
  get: ({
    token,
    profile,
    page,
    pageSize,
    filter,
    sortBy,
    sortDesc
  }) => async () => {
    const response = await documentQueries.getAction({
      token,
      profile,
      page,
      pageSize,
      filter,
      sortBy,
      sortDesc
    })
    return response
  }
})

export const infoDocumentsQuery = selectorFamily({
  key: 'documents.Info',
  get: ({
    token,
    profile,
    page,
    pageSize,
    filter,
    sortBy,
    sortDesc
  }) => async () => {
    const response = await documentQueries.getInfo({
      token,
      profile,
      page,
      pageSize,
      filter,
      sortBy,
      sortDesc
    })
    return response
  }
})

export const draftsQuery = selectorFamily({
  key: 'documents.Drafts',
  get: ({
    token,
    profile,
    page,
    pageSize,
    filter,
    sortBy,
    sortDesc
  }) => async () => {
    const response = await documentQueries.getDrafts({
      token,
      profile,
      page,
      pageSize,
      filter,
      sortBy,
      sortDesc
    })
    return response
  }
})

export const distributionQuery = selectorFamily({
  key: 'documents.Distribution',
  get: ({
    token,
    profile,
    page,
    pageSize,
    filter,
    sortBy,
    sortDesc
  }) => async () => {
    const response = await documentQueries.getDistribution({
      token,
      profile,
      page,
      pageSize,
      filter,
      sortBy,
      sortDesc
    })
    return response
  }
})

export const inProgressQuery = selectorFamily({
  key: 'documents.InProgress',
  get: ({
    token,
    profile,
    page,
    pageSize,
    filter,
    sortBy,
    sortDesc
  }) => async () => {
    const response = await documentQueries.getInProgress({
      token,
      profile,
      page,
      pageSize,
      filter,
      sortBy,
      sortDesc
    })
    return response
  }
})

export const referencesQuery = selectorFamily({
  key: 'document.References',
  get: ({
    token,
    profile,
    page,
    pageSize,
    filter,
    sortBy,
    sortDesc
  }) => async () => {
    const response = await documentQueries.getReferences({
      token,
      profile,
      page,
      pageSize,
      filter,
      sortBy,
      sortDesc
    })
    return response
  }
})
