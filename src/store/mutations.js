import constants from '@/utils/constants'

import {
  SUBMIT_CONF_APP_REQUEST,
  SUBMIT_CONF_APP_SUCCESS,
  SUBMIT_CONF_APP_FAILURE,
  RESET_ALERT,
  RETRIEVE_CONF_APP_REQUEST,
  RETRIEVE_CONF_APP_SUCCESS,
  RETRIEVE_CONF_APP_FAILURE
} from './mutation-types'

export default {
  [SUBMIT_CONF_APP_REQUEST](state) {
    state.submitRequestLoading = true
  },
  [SUBMIT_CONF_APP_SUCCESS](state) {
    state.alertMsg = 'Submission successful'
    state.submitRequestLoading = false
    state.alertType = 'success'
  },
  [SUBMIT_CONF_APP_FAILURE](state) {
    state.alertMsg = 'Submission failed'
    state.submitRequestLoading = false
    state.alertType = 'error'
  },
  [RESET_ALERT](state) {
    state.alertMsg = ''
    state.alertType = ''
  },
  [RETRIEVE_CONF_APP_REQUEST](state) {
    state.retrieveRequestLoading = true
  },
  [RETRIEVE_CONF_APP_SUCCESS](state, payload) {
    console.log(payload.data.ok.msg)
    state.conf_applicants = payload.data.ok.collectionList
    state.data = createGraphData(state.conf_applicants)
    state.retrieveRequestLoading = true
  },
  [RETRIEVE_CONF_APP_FAILURE](state) {
    state.retrieveRequestLoading = false
  }
}

const createGraphData = applicants => {
  return constants.ADMIN.pieCharts.reduce((acc, chartLabel) => {
    const itemCounts = itemsByCount(applicants, chartLabel)
    return { ...acc, [chartLabel]: countsToArray(itemCounts) }
  }, {})
}

const itemsByCount = (applicants, field) => {
  return applicants.reduce((acc, applicant) => {
    acc[applicant[field]] = acc[applicant[field]] + 1
    return acc
  }, itemsInApplicationField(field))
}

const itemsInApplicationField = field => {
  return constants.CONF_APP_FIELDS.filter(f => f.name == field)[0].items.reduce(
    (acc, i) => ({ ...acc, [i]: 0 }),
    {}
  )
}

const countsToArray = itemCounts => {
  return Object.keys(itemCounts).reduce((acc, item) => {
    acc.push({ name: item, y: itemCounts[item] })
    return acc
  }, [])
}
