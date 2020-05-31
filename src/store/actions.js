import { httpPost, httpGet } from '@/utils/api'

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
  async submitConfApp({ commit }, postData) {
    commit(SUBMIT_CONF_APP_REQUEST)
    try {
      const payload = await httpPost('/conf_app', postData)
      commit(SUBMIT_CONF_APP_SUCCESS)
    } catch (e) {
      console.log(`Error: ${JSON.stringify(e)}`)
      commit(SUBMIT_CONF_APP_FAILURE)
    } finally {
      setTimeout(() => commit(RESET_ALERT), 5000)
    }
  },
  async getConfAppCollection({ commit }) {
    commit(RETRIEVE_CONF_APP_REQUEST)
    try {
      const payload = await httpGet('/conf_app')
      commit(RETRIEVE_CONF_APP_SUCCESS, payload)
    } catch (e) {
      console.log(`Error: ${e}`)
      commit(RETRIEVE_CONF_APP_FAILURE)
    } finally {
      setTimeout(() => commit(RESET_ALERT), 5000)
    }
  }
}
