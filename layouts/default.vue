<template>
  <v-app dark>

    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-spacer />
        <v-btn color="primary" v-on:click="signOut()" class="sign-out">
          Sign out
        </v-btn>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant" class="mobile">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped" class="mobile">
        <v-icon>mdi-application</v-icon>
      </v-btn>

      <v-toolbar-title v-text="title" class="ml-2" />
      <v-spacer />
      <v-btn icon @click.stop="fixed = !fixed" class="mr-2">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn color="primary">
        <div v-if="currentUser">{{ currentUser.displayName }}</div>
        <div v-else>
          <NuxtLink to="/login" class="link" >Login</NuxtLink>
        </div>
      </v-btn>

    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app class="justify-center">
      <span>Festiv'app &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  methods: {
    signOut() {
      this.$fire.auth.signOut();
      window.location = "/login"
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.user;
    },
  },
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Accueil',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Festiv\'app'
    }
  }
}
</script>

<style>
.link {
  color: #FFFFFF !important;
  text-decoration: none;
}

.sign-out{
  width: 100%;
  position: absolute;
  bottom: 0;
}

@media only screen and (max-width: 1265px) {
  .mobile {
    display: none;
  }
}
</style>
