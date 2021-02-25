<template>
  <ul>
      <learning-resource v-for="res in res" :key="res.id" :res="res"></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';
export default {
  components: { LearningResource },
  inject: ['res'],
};
</script>

<style sccoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>