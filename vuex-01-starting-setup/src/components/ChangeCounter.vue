<template>
<div>
    <button @click="increment">add 3</button>
    <button @click="increase({value: 15})">add 15</button>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods:{
        ...mapActions('numbers',['increment','increase']),
        //addOne(){
           // this.$store.dispatch('increment');
        //}
    },
}
</script>