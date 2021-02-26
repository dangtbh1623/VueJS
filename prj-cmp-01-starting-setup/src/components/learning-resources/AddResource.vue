<template>
  <div>
    <base-dialog
      v-if="isInvalid"
      title="Invalid value !!!"
      @close="confirmError"
    >
      <template #default>At least one input value is invalid</template>
      <template #actions>
        <base-button @click="confirmError">Ok</base-button>
      </template>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitData">
        <div class="form-control">
          <label
            >Title<input name="title" type="text" ref="titleInput"
          /></label>
        </div>
        <div class="form-control">
          <label
            >Description<textarea
              name="description"
              rows="3"
              ref="textAreaInput"
            ></textarea>
          </label>
        </div>
        <div class="form-control">
          <label>Link<input name="link" type="url" ref="linkInput" /></label>
        </div>
        <div>
          <base-button type="submit">Add resource</base-button>
        </div>
      </form>
    </base-card>
  </div>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseDialog from '../UI/BaseDialog.vue';
export default {
  components: { BaseDialog, BaseButton },
  inject: ['addRes'],
  data() {
    return {
      isInvalid: false,
    };
  },
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDiscription = this.$refs.textAreaInput.value;
      const enteredLink = this.$refs.linkInput.value;
      if (
        enteredTitle.trim() === '' ||
        enteredDiscription.trim() === '' ||
        enteredLink.trim() === ''
      ) {
        this.isInvalid = true;
        return;
      }
      this.addRes(enteredTitle, enteredDiscription, enteredLink);
      this.$refs.titleInput.value = '';
      this.$refs.textAreaInput.value = '';
      this.$refs.linkInput.value = '';
    },
    confirmError() {
      this.isInvalid = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #006115;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>