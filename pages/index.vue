<template>
  <v-container>
    <v-layout flex row wrap>

      <div class="div">
        <h2>Festivapp</h2>
      </div>
      <div class="div">
        <h3>Le réseaux social spécialement fait pour les festivals</h3>
      </div>

      <div class="div">
        <p>Connectez vous pour pouvoir poster du contenu</p>
      </div>

      <div class="div">
        <v-btn to="/posts">Voir les posts</v-btn>
      </div>



    </v-layout>
  </v-container>

</template>

<script>

export default {
  name: "IndexPage",
  /* data() {
    return {
      posts: [

      ]
    }
  },
  methods: {
    getPosts() {
      this.$axios.get('http://localhost:8080/posts').then(response =>{
        response.set ('Access-Control-Allow-Origin', '*')
        console.log('response', response)
      }).catch(err =>{
        console.log('err', err)
      })
    }
  },
  created() {
    this.getPosts()
  } */

}


</script>

<style>
.div {
  width: 100%;
  display: flex;
  justify-content: center;
  margin:20px 0;
}
</style>