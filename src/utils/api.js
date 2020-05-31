import axios from 'axios'

export const urlPrefix =
  'https://us-central1-engineering-conference.cloudfunctions.net/api'

const config = { headers: { 'Content-Type': 'application/json' } }

export const httpPost = async (apiEndpoint, postData) => {
  return axios.post(`${urlPrefix}${apiEndpoint}`, {
    data: postData,
    config
  })
}

export const httpGet = async apiEndpoint => {
  return axios.get(`${urlPrefix}${apiEndpoint}`, {
    config
  })
}
