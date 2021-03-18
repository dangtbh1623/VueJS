<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="!goalData.isVisible">{{ goalData.goalString }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleCourse">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { reactive } from 'vue';
export default {
  // data() {
  //   return {
  //     goal: 'Finish this course!',
  //     isVisible: false,
  //   };
  // },
  // methods: {
  //   toggleCourse() {
  //     this.isVisible = !this.isVisible;
  //   },
  // },
  setup() {
    // const goalString = ref('Finish this course! Composition-API');
    // const isVisible = ref(false);
    const goalData = reactive({
      goalString: 'Finish this course! Composition-API',
      isVisible: false,
    });
    function toggleCourse() {
      goalData.isVisible = !goalData.isVisible;
    }
    return {
      goalData,
      toggleCourse,
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>