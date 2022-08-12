<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <form @submit.prevent="onCreatePost">
        <v-card>
          <v-toolbar flat color="blue-grey" dark>
            <v-toolbar-title>Ajouter un nouveau post</v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <v-text-field filled name="title" label="Title" id="title" v-model="title" required>
            </v-text-field>
            <v-text-field filled name="localisation" label="Localisation" id="localisation" v-model="localisation"
              required></v-text-field>
            <!-- <v-text-field type="date" filled name="date" label="Date du festival" id="date" v-model="date"
              required placeholder="La date du festival"></v-text-field> -->

            <!-- <input type="file" accept="image/gif, image/jpeg, image/png"
                            onchange="document.getElementById('blah').src = window.URL.createObjectURL(this.files[0])"
                            name="image" label="Image" id="image" required>
                        <img id="blah" width="100%" height="100%" /> -->

            <v-btn raised class="primary" @click="onPickFile">Choose file</v-btn>
            <input type="file" style="display:none" ref="fileInput" accept="image/*" @change="onFilePicked">
            <img :src="imageUrl" width="100%">

            <v-textarea filled name="description" label="Description" id="description" v-model="description">
            </v-textarea>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" type="submit" depressed>
              <!-- :disabled="!formIsValid" -->
              Post
            </v-btn>
          </v-card-actions>
        </v-card>
      </form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "AddPostPage",
  middleware: "auth",

  data() {
    return {
      title: '',
      localisation: '',
      imageUrl: '',
      image: null,
      description: '',
    }
  },
  computed: {
    formIsValid() {
      return this.title !== '' &&
        this.localisation !== '' &&
        this.imageUrl !== '' &&
        this.description !== ''
    },

  },
  methods: {
    onCreatePost() {
      if (!this.formIsValid) {
        return
      }
      if (!this.image) {
        return
      }
      const postData = {
        title: this.title,
        localisation: this.localisation,
        image: this.image,
        description: this.description,
      }
      this.$store.dispatch('createPost', postData)
      this.$router.push('/index')
    },
    onPickFile() {
      this.$refs.fileInput.click()
    },
    onFilePicked(event) {
      const files = event.target.files
      let filename = files[0].name;
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please add a valid file')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    }
  }
}

</script>
