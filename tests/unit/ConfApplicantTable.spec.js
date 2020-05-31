import { shallowMount, mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'

import ConfApplicantTable from '@/components/admin/ConfApplicantTable'
import initialState from '@/store/initialState'

Vue.use(Vuex)
Vue.use(Vuetify)

describe('ConfApplicantTable.vue', () => {
  let vuetify
  let actions
  let state
  let store
  let wrapper

  beforeEach(() => {
    vuetify = new Vuetify()
    state = initialState

    actions = {
      getConfAppCollection: sinon.spy()
    }

    store = new Vuex.Store({
      state,
      actions
    })
    wrapper = shallowMount(ConfApplicantTable, { Vue, vuetify, store })
  })

  it('displays properly on Mount', () => {
    expect(wrapper.find('v-data-table-stub').exists()).to.be.true
  })

  it('dispatchs action "getConfAppCollection" on mount', () => {
    expect(actions.getConfAppCollection).to.have.been.calledOnce
  })
})
