<template>
  <button @click="confirmInput">Button</button>
  <button @click="saveFormula">Save</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../users/UserItem';

export default {
  data() {
    return {
      isSaved: false,
    };
  },
  components: {
    UserItem,
  },
  beforeRouteLeave(to,from,next){
    if(this.isSaved){
      next();
    } else {
      const confirmValue = confirm('Are you sure?');
      next(confirmValue);
    }
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      this.$router.push('/teams');
    },
    saveFormula() {
      this.isSaved = true;
    },
  },
  
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>