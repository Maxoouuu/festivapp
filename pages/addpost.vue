<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">

      <v-card>
        <v-toolbar flat color="blue-grey" dark>
          <v-toolbar-title>Ajouter un nouveau post</v-toolbar-title>
        </v-toolbar>

        <v-card-text>
          <v-text-field filled label="Titre"></v-text-field>
          <v-text-field filled label="Localisation"></v-text-field>

          <input type="file" accept="image/gif, image/jpeg, image/png"
            onchange="document.getElementById('blah').src = window.URL.createObjectURL(this.files[0])">
          <img id="blah" width="100%" height="100%" />

          <v-textarea filled label="Description"></v-textarea>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" depressed>
            Post
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-col>
  </v-row>



</template>

<script>



export default {
    name: "AddPostPage",
    middleware: "auth",
    
}
</script>
