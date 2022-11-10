<template>
  <header>
  </header>
  <!-- <NavBar />
  <RouterView></RouterView> -->
  <div class="nav-bar">
    <router-link class="text nav" to="/">Go to Home</router-link>
    <router-link class="text nav" to="/about">Go to About</router-link>
    <a class="text nav" href="https://www.andrew-tai.com/renju/">Go to Renju</a>
    <a class="text nav" href="http://localhost:8080">Go to Renju Locally</a>
    <router-link class="text nav" to="/blog">Go to Blog</router-link>
  </div>

  <RouterView />
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

export default defineComponent({
  name: 'App',
  components: {
    RouterView,
    RouterLink,
  },
})

</script>