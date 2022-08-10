<template>
    <v-container>
        <v-card class="pa-5">
            
            <SignIn />
        </v-card>
    </v-container>
</template>

<script>
import SignIn from "../components/SignIn.vue";
export default {
    computed: {
        currentUser() {
            return this.$store.state.user;
        },
    },
    methods: {
        signOut() {
            console.log("Signed Out");
            this.$fire.auth.signOut();
            window.location = "/login";
        },
    },
    components: { SignIn },
};
</script>

<style>
</style>