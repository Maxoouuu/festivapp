import colors from 'vuetify/es5/util/colors'

export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Festiv\'app',
    title: 'Festiv\'app',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyD-Qk5OOGJnRSkU8xmqgmzcbsNtqOUBSew",

          authDomain: "nuxt-firebaseauth-cbed4.firebaseapp.com",

          projectId: "nuxt-firebaseauth-cbed4",

          storageBucket: "nuxt-firebaseauth-cbed4.appspot.com",

          messagingSenderId: "963698309433",

          appId: "1:963698309433:web:a2f727786bfe269c2090e8",

          measurementId: "G-2JN1VJLYX1",

          storageBucket: "gs://nuxt-firebaseauth-cbed4.appspot.com",

          databaseURL: "https://nuxt-firebaseauth-cbed4-default-rtdb.europe-west1.firebasedatabase.app/",
        },
        services: {
          auth: {
            //persistence: 'local', // default
            initialize: {
              onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
              // onAuthStateChangedAction: 'onAuthStateChangedAction',
              // subscribeManually: false
            },
            ssr: false, // default
            /* emulatorPort: 9099,
            emulatorHost: 'http://localhost', */
          }
        }
      }
    ]
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken4,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
