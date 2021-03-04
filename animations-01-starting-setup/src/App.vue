<template>
<div class="container">
  <user-list></user-list>
</div>
  
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition name="para">
      <p v-if="paraIsVisible">This is only sometime visible ...</p>
    </transition>
    <button @click="togglePara">Toggle</button>
  </div>
  <div class="container">
    <transition
      name="paraJS"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      @before-leave="beforeLeave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
    >
      <p v-if="paraIsVisibleJS">
        This is only sometime visible with JavaScript ...
      </p>
    </transition>
    <button @click="toggleParaJS">Toggle JavaScript</button>
  </div>
  <div class="container">
    <transition name="showUsers" mode="out-in">
      <button @click="showAndHideUser" v-if="showUser">Hide users</button>
      <button @click="showAndHideUser" v-else>Show users</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
import UserList from './components/UserList';
export default {
  components: {
    UserList,
  },
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paraIsVisible: false,
      paraIsVisibleJS: false,
      showUser: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    enterCancelled() {
      clearInterval(this.enterInterval);
    },
    leaveCancelled() {
      clearInterval(this.leaveInterval);
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    togglePara() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    toggleParaJS() {
      this.paraIsVisibleJS = !this.paraIsVisibleJS;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    showAndHideUser() {
      this.showUser = !this.showUser;
    },
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    beforeLeave(el) {
      el.style.opacity = 1;
    },
    leave(el, done) {
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translateX(-150px); */
  animation: slide-fade 0.3s ease-out forwards;
}

.para-enter-from {
  /* opacity: 0;
  transform: translateY(-30px); */
}

.para-enter-to {
  /* opacity: 1;
  transform: translateY(0); */
}

.para-enter-active {
  animation: slide-fade 0.5s ease-out;
}

.para-leave-to {
  /* opacity: 0;
  transform: translateY(30px); */
}

.para-leave-from {
  /* opacity: 1;
  transform: translateY(0); */
}

.para-leave-active {
  animation: slide-fade 0.5s ease-in;
}

.showUsers-enter-from,
.showUsers-leave-to {
  opacity: 0;
}

.showUsers-enter-to,
.showUsers-leave-from {
  opacity: 1;
}

.showUsers-enter-active {
  transition: opacity 0.3s ease-out;
}

.showUsers-leave-active {
  transition: opacity 0.3s ease-in;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>