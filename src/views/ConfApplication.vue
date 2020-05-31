<template>
  <div class="application" align="center" justify="center">
    <h2>Conference Application</h2>
    <app-form
      :APPLICATION_FIELDS="CONF_APP_FIELDS"
      submitAction="submitConfApp"
    ></app-form>
  </div>
</template>

<script>
import constants from '@/utils/constants'
import AppForm from '@/components/AppForm'
export default {
  name: 'ConfApplication',
  components: {
    AppForm
  },
  data() {
    return {
      CONF_APP_FIELDS: constants.CONF_APP_FIELDS
    }
  }
}
</script>
