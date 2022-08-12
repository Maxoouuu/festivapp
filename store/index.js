export const state = () => ({
  user: false,
});

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
    if (authUser) {
      const { uid, email, displayName } = authUser;
      state.user = { uid, email, displayName };
    } else {
      state.user = false;
    }
  },
};



import Vue from 'vue'
import Vuex from 'vuex'
/* import * as firebase from 'firebase' */

Vue.use(Vuex)


export const store = new Vuex.Store({
  state: {
    loadedPosts: [
      {
        imageUrl: 'https://www.visit.alsace/wp-content/uploads/2018/11/festival-decibulles-2017-laurent-khram-longvixay-1-1600x900.jpg',
        id: 'afajfjadfaadfa323',
        title: 'Post in Alsace',
        localisation: 'Alsace',
        description: 'Alsace !'
      },
      {
        imageUrl: 'https://www.pariszigzag.fr/wp-content/uploads/2019/04/festival-paris-zigzag.jpg',
        id: 'aadsfhbkhlk1241',
        title: 'Post in Paris',
        localisation: 'Paris',
        description: 'It\'s Paris!'
      }
    ],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    setLoadedPosts(state, payload) {
      state.loadedPosts = payload
    },
    createPost(state, payload) {
      state.loadedPosts.push(payload)
    },
    setUser(state, payload) {
      state.user = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    clearError(state) {
      state.error = null
    }
  },
  actions: {
    loadPosts({ commit }) {
      commit('setLoading', true)
      firebase.database().ref('posts').once('value')
        .then((data) => {
          const posts = []
          const obj = data.val()
          for (let key in obj) {
            posts.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              imageUrl: obj[key].imageUrl,
              creatorId: obj[key].creatorId
            })
          }
          commit('setLoadedPosts', posts)
          commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', false)
          }
        )
    },
    createPost({ commit, getters }, payload) {
      const post = {
        title: payload.title,
        localisation: payload.localisation,
        imageUrl: payload.imageUrl,
        description: payload.description,
        creatorId: getters.user.id
      }

      let imageUrl
      let key

      firebase.database().ref('posts').push(post)
        .then((data) => {
          key = data.key
          return key
        })
        .then(key => {
          const filename = payload.image.name
          const ext = filename.slice(filename.lastIndexOf('.'))
          return firebase.storage().ref('/posts' + key + '.' + ext).put(payload.image)
        })
        .then(fileData => {
          imageUrl = fileData.metadata.downloadURLs[0]
          return firebase.database().ref('posts').child(key).update({ imageUrl: imageUrl })
        })
        .then(() => {
          commit('createPost', {
            ...post,
            imageUrl: imageUrl,
            id: key,
          })
        })
        .catch((error) => {
          console.log(error)
        })
      // Reach out to firebase and store it
    },
    
    
  },
  getters: {
    loadedPosts (state) {
      return state.loadedPosts.sort((postA, postB) => {
        return postA.date > postB.date
      })
    },
    featuredPosts(state, getters) {
      return getters.loadedPosts.slice(0, 5)
    },
    loadedPost(state) {
      return (postId) => {
        return state.loadedPosts.find((post) => {
          return post.id === postId
        })
      }
    },
    user(state) {
      return state.user
    },
    loading(state) {
      return state.loading
    },
    error(state) {
      return state.error
    }
  }
})


