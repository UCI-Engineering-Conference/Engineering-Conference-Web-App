import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import storeConfig from '../utils/store-config'
import { cloneDeep } from 'lodash'

import axios from 'axios'
import { urlPrefix } from '@/utils/api'

import applicantsResponse from '../utils/applicantsResponseSuccess'
import testApplicant from '../utils/testApplicant'

const localVue = createLocalVue()
localVue.use(Vuex)

const config = {
  headers: { 'Content-Type': 'application/json' }
}

describe('submitApplication', () => {
  const stubBody = { config, data: testApplicant }
  let axiosStub
  let store
  before(() => {
    axiosStub = sinon
      .stub(axios, 'post')
      .withArgs(`${urlPrefix}/conf_app`, stubBody)
  })

  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(storeConfig))
  })

  it('posts an applicant using axios', async () => {
    const data = 'Successfull Post Request'
    axiosStub.resolves({ status: 200, data: { data } })

    expect(store.state.submitRequestLoading).to.be.false
    await store.dispatch('submitConfApp', testApplicant)

    expect(store.state.alertMsg).to.equal('Submission successful')
  })

  it('handles error messages from axios', async () => {
    const data = 'Unsuccessfull Post Request'
    axiosStub.rejects({ status: 400, data: { data } })

    await store.dispatch('submitConfApp', testApplicant)

    expect(store.state.alertMsg).to.equal('Submission failed')
  })
})

describe('getApplicantCollection', () => {
  const stubBody = { config }
  let axiosStub
  let store
  before(() => {
    axiosStub = sinon
      .stub(axios, 'get')
      .withArgs(`${urlPrefix}/conf_app`, stubBody)
  })

  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(storeConfig))
  })

  it('gets a list of all applicants using axios', async () => {
    axiosStub.resolves({ status: 200, data: applicantsResponse })

    expect(store.state.retrieveRequestLoading).to.be.false
    await store.dispatch('getConfAppCollection')

    expect(store.state.conf_applicants).to.equal(
      applicantsResponse.ok.collectionList
    )
  })

  it('handles error messages from axios', async () => {
    axiosStub.rejects({ status: 400, data: {} })

    await store.dispatch('getConfAppCollection')

    expect(store.state.conf_applicants).to.be.empty
  })
})
