<template>
  <div>
    <base-dialog :show="!!error" title="Error" @close="handleError">
      <p>{{ error }}</p>
      <base-spinner></base-spinner>
    </base-dialog>
    <base-dialog :show="isLoading" title="Authentication" fixed>
      <p>Authenticating ...</p>
      <base-spinner></base-spinner>
    </base-dialog>

    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">Email</label>
          <input type="text" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <p v-if="!formIsValid" class="errors">
          Please enter a valid Email and Password !
        </p>
        <div class="actions">
          <base-button> {{ submitButtonCaption }}</base-button>
          <base-button mode="flat" @click.prevent="switchMode">{{
            switchButtonCaption
          }}</base-button>
        </div>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      error: null,
      isLoading: false,
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === 'login') {
        return 'Login';
      } else {
        return 'SignUp';
      }
    },
    switchButtonCaption() {
      if (this.mode === 'login') {
        return 'SignUp instead';
      } else {
        return 'Login instead';
      }
    },
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;
      if (this.mode === 'signup') {
        try {
          await this.$store.dispatch('signUp', {
            email: this.email,
            password: this.password,
          });
        } catch (error) {
          this.error = error.message || 'Something went wrong!!';
        }
      } else {
         try {
          await this.$store.dispatch('logIn', {
            email: this.email,
            password: this.password,
          });
        } catch (error) {
          this.error = error.message || 'Something went wrong!!';
        }
      }
      this.isLoading = false;
    },
    switchMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
    handleError(){
      this.error = null;
    }
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>