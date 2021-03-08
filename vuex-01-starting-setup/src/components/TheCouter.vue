<template>
<div>
  <h3>{{ counter }}</h3>
  <h2>Final Counter</h2>
  <h3>{{ getCounter }}</h3>
  <h2>Normalized Counter</h2>
  <h3>{{ normalized }}</h3>
</div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    getCounter(){
        return this.$store.getters['numbers/finalCounter'];
    },
    normalized(){
        return this.$store.getters['numbers/normalizedCounter'];
    }
  },
};
</script>