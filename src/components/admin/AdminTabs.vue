<template>
  <v-card>
    <v-tabs v-model="tab" fixed-tabs background-color="primary" dark>
      <v-tab>
        Conference Applicants
      </v-tab>
      <v-tab>
        Statistics
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <conf-applicant-table />
      </v-tab-item>
      <v-tab-item>
        <statistics />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import ConfApplicantTable from '@/components/admin/ConfApplicantTable'
import Statistics from '@/components/admin/Statistics'
export default {
  name: 'AdminTabs',
  components: {
    ConfApplicantTable,
    Statistics
  },
  data() {
    return {
      tab: null
    }
  }
}
</script>
