<template>
    <v-container>
        <v-layout row wrap flex justify-center>
            <v-flex justify-center>
                <v-card class="v-card card-w">
                    <v-card-title>
                        <h6 class="primary--text">Titre</h6>
                    </v-card-title>
                    <img src="..\static\festival.png" width="100%">
                    <v-card-text>
                        <div class="info--text"> Localisation</div>
                        <div>La description du festival</div>
                    </v-card-text>
                    <v-card-actions>
                       <div>Afficher les commentaire</div>
                    </v-card-actions>
                </v-card>
                
                <v-card class="v-card card-w ">
                    <v-card-title>
                        <h6 class="primary--text">Titre</h6>
                    </v-card-title>
                    <img src="..\static\festival2.png" width="100%">
                    <v-card-text>
                        <div class="info--text"> Localisation</div>
                        <div>La description du festival</div>
                    </v-card-text>
                    <v-card-actions>
                       <div>Afficher les commentaire</div>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    /* props: ['id'],
    computed: {
        post() {
            return this.$store.getters.loadedPost(this.id)
        }
    } */
}
</script>

<style lang="scss" scoped>
.v-card{
    margin-bottom: 20px ;
}
.card-w{
    max-width: 600px;
}
</style>