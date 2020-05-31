<template>
  <div class="home">
    <v-img src="../assets/home/ec_banner.png" />

    <v-row align="center" justify="center">
      <v-col v-for="(card, i) in HOME.cards" :key="i" cols="12" sm="6" md="4">
        <v-card align="center" justify="center">
          <v-img class="home-image" :src="imgAppendLocation(card.img)" />
          <v-card-title class="title" v-text="card.title" />
          <v-card-subtitle v-text="card.subtitle" />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import constants from '../utils/constants'

export default {
  name: 'Home',
  data() {
    return {
      HOME: constants.HOME
    }
  },
  methods: {
    imgAppendLocation(img) {
      // webpack needs require() if the exact module is NOT known at compile time (https://webpack.js.org/guides/dependency-management/)
      return require(`../assets/home/${img}`)
    }
  }
}
</script>
<style scoped>
.home-image {
  border-bottom-right-radius: 50% 50%;
  border-bottom-left-radius: 50% 50%;
  max-width: 300px;
  max-height: 200px;
}
</style>
