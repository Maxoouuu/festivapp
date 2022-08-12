<template>
    <v-container >
        <v-layout row wrap flex justify-center>
            <v-flex >
                <div flex justify-center width="100%" > 
                    <v-card class="v-card ">
                        <v-card-title>
                            <h6 class="primary--text">Festival</h6>
                        </v-card-title>
                        <img src="..\static\festival.png" width="100%" alt="image">
                        <v-card-text>
                            <div class="info--text"> Localisation</div>
                            <div>La description du festival</div>
                        </v-card-text>
                        <v-card-actions>
                            <div>Afficher les commentaires</div>
                        </v-card-actions>
                    </v-card>

                    <v-card class="v-card ">
                        <v-card-title>
                            <h6 class="primary--text">Festival </h6>
                        </v-card-title>
                        <img src="..\static\festival2.png" width="100%" alt="image">
                        <v-card-text>
                            <div class="info--text"> Localisation</div>
                            <div>La description du festival</div>
                        </v-card-text>
                        <v-card-actions>
                            <div>Afficher les commentaires</div>
                        </v-card-actions>
                    </v-card>
                </div>
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
.v-card {
    margin-bottom: 20px;
}

</style>