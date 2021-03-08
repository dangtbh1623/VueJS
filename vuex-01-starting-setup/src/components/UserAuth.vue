<template>
    <div>
        <button @click="logIn" v-if="!userIsAuthenticated">Log In</button>
        <button @click="logOut" v-if="userIsAuthenticated">Log Out</button>
    </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
export default {
    methods:{
        ...mapActions(['logIn','logOut']),
    },
    computed:{
        ...mapGetters(['userIsAuthenticated']),
    }
}
</script>