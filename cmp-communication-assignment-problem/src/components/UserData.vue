<template>
    <div class="box"><form>
      <label>Name: <input name="name" v-model="enteredPerson.enteredName" /></label>
      <label>Age: <input name="age" v-model="enteredPerson.enteredAge" /></label>
      <button @click.prevent="addPerson">Save</button>
    </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            enteredPerson: {
                enteredName: '',
                enteredAge: 0,
            }
        };
    },
    methods:{
        addPerson(){
            this.$emit('add',this.enteredPerson);
        }
    }
};
</script>