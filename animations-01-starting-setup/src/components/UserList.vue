<template>
  <div>
    <div>
      <transition-group tag="ul" name="user-list">
        <li v-for="user in users" :key="user" @click="removeUser(user)">
          {{ user }}
        </li>
      </transition-group>
    </div>
    <div>
      <input type="text" ref="name" />
      <button @click="addUser">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Dang', 'Trinh', 'Buu', 'Hai'],
    };
  },
  methods: {
    addUser() {
      this.users.unshift(this.$refs.name.value);
    },
    removeUser(user) {
      this.users = this.users.filter((usr) => usr !== user);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem auto;
  text-align: center;
}

.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.user-list-leave-active{
     transition: all 1s ease-in;
     position: absolute;
}
.user-list-enter-active {
  transition: all 1s ease-in;
}

.user-list-move {
  transition: transform 0.5s ease;
}
</style>