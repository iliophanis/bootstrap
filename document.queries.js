import { getHeaders, getParams, getUrlParams } from 'api/utilities'

async function getDocumentById({ token, profile, id }) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URI}/v2/documents/${id}`,
      {
        headers: getHeaders({ token, profile })
      }
    )
    if (!response.ok) {
      let msg = ''
      try {
        msg = await response.text()
      } catch {
        msg = `${response.status} ${response.statusText}`
      }
      throw new Error(msg)
    }

    const json = await response.json()
    return {
      data: json
    }
  } catch (err) {
    return { data: null, error: err }
  }
}

async function getPending({
  token,
  profile,
  page,
  pageSize,
  filter,
  sortBy,
  sortDesc
}) {
  try {
    const params = getUrlParams({ page, pageSize, filter, sortBy, sortDesc })
    const response = await fetch(
      `${process.env.REACT_APP_API_URI}/v2/documents/pending?${params}`,
      {
        headers: getHeaders({ token, profile })
      }
    )

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`)
    }

    const json = await response.json()
    return {
      data: json.data,
      params: getParams({
        pagination: json.pagination,
        filter,
        sortBy,
        sortDesc
      })
    }
  } catch (err) {
    console.error(err)
    return { data: [] }
  }
}

async function getAction({
  token,
  profile,
  page,
  pageSize,
  filter,
  sortBy,
  sortDesc
}) {
  try {
    const params = getUrlParams({ page, pageSize, filter, sortBy, sortDesc })
    const response = await fetch(
      `${process.env.REACT_APP_API_URI}/v2/documents/inbox/action?${params}`,
      {
        headers: getHeaders({ token, profile })
      }
    )

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`)
    }

    const json = await response.json()
    const pagination = json.pagination
    //θα αλλαχτεί θα παει στο json
    return {
      data: json.data,
      params: getParams({ pagination, filter, sortBy, sortDesc })
    }
  } catch (err) {
    console.error(err)
    return { data: [] }
  }
}

async function getInfo({
  token,
  profile,
  page,
  pageSize,
  filter,
  sortBy,
  sortDesc
}) {
  try {
    const params = getUrlParams({ page, pageSize, filter, sortBy, sortDesc })
    const response = await fetch(
      `${process.env.REACT_APP_API_URI}/v2/documents/inbox/info?${params}`,
      {
        headers: getHeaders({ token, profile })
      }
    )

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`)
    }

    const json = await response.json()
    const pagination = json.pagination
    //θα αλλαχτεί θα παει στο json
    return {
      data: json.data,
      params: getParams({ pagination, filter, sortBy, sortDesc })
    }
  } catch (err) {
    console.error(err)
    return { data: [] }
  }
}

async function getDistribution({
  token,
  profile,
  page,
  pageSize,
  filter,
  sortBy,
  sortDesc
}) {
  try {
    const params = getUrlParams({ page, pageSize, filter, sortBy, sortDesc })
    const response = await fetch(
      `${process.env.REACT_APP_API_URI}/v2/documents/outbox/distribution?${params}`,
      {
        headers: getHeaders({ token, profile })
      }
    )

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`)
    }

    const json = await response.json()
    const pagination = json.pagination
    return {
      data: json.data,
      params: getParams({ pagination, filter, sortBy, sortDesc })
    }
  } catch (err) {
    console.error(err)
    return { data: [] }
  }
}

async function getInProgress({
  token,
  profile,
  page,
  pageSize,
  filter,
  sortBy,
  sortDesc
}) {
  try {
    const params = getUrlParams({ page, pageSize, filter, sortBy, sortDesc })
    const response = await fetch(
      `${process.env.REACT_APP_API_URI}/v2/documents/outbox/inprogress?${params}`,
      {
        headers: getHeaders({ token, profile })
      }
    )

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`)
    }

    const json = await response.json()
    const pagination = json.pagination
    return {
      data: json.data === null ? [] : json.data,
      params: getParams({
        pagination,
        filter,
        sortBy,
        sortDesc
      })
    }
  } catch (err) {
    console.error(err)
    return { data: [] }
  }
}

async function getReferences({
  token,
  profile,
  page,
  pageSize,
  filter,
  sortBy,
  sortDesc
}) {
  try {
    console.log('references')
    const params = getUrlParams({ page, pageSize, filter, sortBy, sortDesc })
    const response = await fetch(
      `${process.env.REACT_APP_API_URI}/documents/references?${params}`,
      {
        headers: getHeaders({ token, profile })
      }
    )

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`)
    }
    const pagination = response.headers.get('X-Pagination')
    //θα αλλαχτεί θα παει στο json
    const json = await response.json()
    return {
      data: json,
      params: getParams({ pagination, filter, sortBy, sortDesc })
    }
  } catch (err) {
    console.error(err)
    return { data: [] }
  }
}

const documentQueries = {
  getDocumentById,
  getPending,
  getAction,
  getInfo,
  getDistribution,
  getInProgress,
  getReferences
}

export default documentQueries
