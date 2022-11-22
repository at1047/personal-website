<template>
  <header>
  </header>
  <body>
    <div class="header-container">
      <div class="web-nav-bar">
        <router-link class="text nav" to="/">~/</router-link>
        <router-link class="text nav" to="about/">.config/</router-link>
        <a class="text nav" href="https://www.andrew-tai.com/renju/">.renju/</a>
        <router-link class="text nav" to="/blog">.logs/</router-link>
        <router-link class="text nav" to="/recipes">.recipes/</router-link>
      </div>
      
    </div>
    <div class="body">
      <RouterView />
    </div>
  </body>
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