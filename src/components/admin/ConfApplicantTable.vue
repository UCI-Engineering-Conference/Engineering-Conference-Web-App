<template>
  <v-card flat>
    <v-card-title>
      Conference Applicants
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="this.$store.state.conf_applicants"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
import constants from '@/utils/constants'
export default {
  name: 'ConfApplicantTable',
  computed: {
    headers: () =>
      constants.CONF_APP_FIELDS.map(field => ({
        text: field.label,
        value: field.name
      }))
  },
  data() {
    return {
      search: ''
    }
  },
  mounted() {
    //statistics could have also loaded this data
    console.log('Getting collection from backend..')
    if (!this.$store.state.conf_applicants.length) {
      this.$store.dispatch('getConfAppCollection')
    }
  }
}
</script>

<style></style>
