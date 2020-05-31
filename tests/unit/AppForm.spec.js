import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'

import AppForm from '@/components/AppForm'
import initialState from '@/store/initialState'
import constants from '@/utils/constants'

import testApplicant from '../utils/testApplicant'

Vue.use(Vuex)
Vue.use(Vuetify)

describe('AppForm.vue', () => {
  let vuetify
  let actions
  let state
  let store

  let wrapper

  let submitAction

  beforeEach(async () => {
    vuetify = new Vuetify()

    state = initialState

    actions = {
      submitConfApp: sinon.spy()
    }

    store = new Vuex.Store({
      state,
      actions
    })

    submitAction = 'submitConfApp'
    const propsData = {
      APPLICATION_FIELDS: constants.CONF_APP_FIELDS,
      submitAction
    }

    wrapper = mount(AppForm, { Vue, vuetify, store })
    await wrapper.setProps(propsData)

    Object.keys(testApplicant).forEach(field =>
      wrapper.find(`#${field}`).setValue(testApplicant[field])
    )
  })

  it('calls store action "submitConfApp" when button is clicked and validation is correct', () => {
    sinon.stub(wrapper.vm.$refs.form, 'validate').returns(true)
    wrapper.vm.$on('action-btn:clicked', wrapper.vm.submitApplication)

    wrapper.find('.v-btn').trigger('click')

    expect(actions[submitAction]).to.have.been.calledWith(
      sinon.match.any,
      testApplicant
    )
  })
  it('calls does not store action "submitConfApp" when button is clicked and validation is not correct', () => {
    sinon.stub(wrapper.vm.$refs.form, 'validate').returns(false)
    wrapper.vm.$on('action-btn:clicked', wrapper.vm.submitApplication)

    wrapper.find('.v-btn').trigger('click')

    expect(actions[submitAction]).to.have.been.not.calledOnce
  })
})
