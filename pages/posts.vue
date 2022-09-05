<template>
    <v-container>
        <v-layout row wrap flex justify-center>
            <v-flex>
                <div flex justify-center width="100%">
                    <v-card class="v-card ">
                        <v-card-title>
                            <h6 class="primary--text">Festival de Paris</h6>
                        </v-card-title>
                        <img src="../assets/images/festival.png" width="100%" alt="image">
                        <v-card-text>
                            <div class="info--text">localisation : Paris</div>
                            <div>Une ambiance de dingue</div>
                        </v-card-text>
                        <v-card-actions>
                            <div>Afficher les commentaires</div>
                        </v-card-actions>
                    </v-card>

                    <v-card class="v-card ">
                        <v-card-title>
                            <h6 class="primary--text">festival de Rennes </h6>
                        </v-card-title>
                        <img src="../assets/images/festival2.png" width="100%" alt="image">
                        <v-card-text>
                            <div class="info--text">localisation : Rennes</div>
                            <div>le meilleur festival</div>
                        </v-card-text>
                        <v-card-actions>
                            <div>Afficher les commentaires</div>
                        </v-card-actions>
                    </v-card>

                    <v-card class="v-card">
                        <v-card-title>
                            <h6 class="primary--text">Festival de Nantes</h6>
                        </v-card-title>
                        <img src="../assets/images/festival3.jpeg" width="100%" alt="image">
                        <v-card-text>
                            <div class="info--text">localisation : nantes</div>
                            <div>Trop bien </div>
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
    props: ['id'],
    computed: {
        post() {
            return this.$store.getters.loadedPost(this.id)
        }
    } 
}
</script>

<style lang="scss" scoped>
.v-card {
    margin-bottom: 20px;
}
</style>