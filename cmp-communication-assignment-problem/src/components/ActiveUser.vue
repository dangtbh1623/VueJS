<template>
  <div class="box">
    <h2>{{ person.name }}</h2>
    <h3>{{ person.age }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["person"],
};
</script>