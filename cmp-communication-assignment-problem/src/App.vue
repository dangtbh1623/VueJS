<template>
  <section>
    <active-user
      v-for="persona in personen"
      :key="persona.id"
      :person="persona"
    ></active-user>
    <user-data @add="addPerson"></user-data>
  </section>
</template>

<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from './components/UserData.vue';
export default {
  components: { ActiveUser, UserData },
  data() {
    return {
      personen: [
        { id: 1, name: "Hai Dang", age: 31 },
        { id: 2, name: "Xuan Phuong", age: 30 },
        { id: 3, name: "Milly", age: 1 },
      ],
      count: 4,
    };
  },
  methods:{
      addPerson(person){
          const newPerson = {
              id: this.count++,
              name: person.enteredName,
              age: person.enteredAge
          }
          this.personen.push(newPerson);
      }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
  margin: 3rem auto;
}

.box {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

label{
    display: block;
}

input{
    display: block;
    margin: auto;
    border: 1px solid #ccc;
    margin-bottom: 1rem;
}

input:focus {
  outline: none;
  border-color: #1b995e;
  background-color: #d7fdeb;
}

button {
    margin: 1rem auto;
}
</style>