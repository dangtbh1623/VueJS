<template>
<div>
  <base-container title="Vuex" v-if="userIsAuthenticated">
    <the-couter></the-couter>
    <change-counter></change-counter>
    <button @click="addOne">Add 10</button>
  </base-container>
  <base-container title="Authentication">
  <user-auth></user-auth>
  </base-container>
</div>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import TheCouter from './components/TheCouter.vue';
import UserAuth from './components/UserAuth.vue';
import { mapActions,mapGetters } from 'vuex'

export default {
  components: {
    BaseContainer,
    TheCouter,
    ChangeCounter,
    UserAuth,
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    ...mapGetters(['userIsAuthenticated']),
  },
  methods: {
    addOne() {
      // this.$store.commit('increase', { value: 10 });
      this.$store.dispatch({
        type: 'numbers/increase',
        value: 10,
      })
    },
     ...mapActions(['logIn','logOut']),
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>