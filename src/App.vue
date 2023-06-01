<template>
  <header>
  </header>
  <body>
    <transition name="slide">
    <SlideMenu v-show="showSlideMenu" v-on:close-slide="closeSlideMenu()"></SlideMenu>
    </transition>
    <nav>
      <div class="nav-bar nav-bar-left">
        <span class="nav-icons" v-on:click="openSlideMenu()"><font-awesome-icon icon="fa-bars" /></span>
      </div>
      <div class="nav-bar nav-bar-center">
        <router-link class="nav-text" to="/">Home</router-link>
        <router-link class="nav-text" to="/projects">Projects</router-link>
        <router-link class="nav-text" to="/blog">Blog</router-link>
      </div>
      <div class="nav-bar nav-bar-right">
        <a class="nav-icons" href="https://github.com/at1047" target="_blank"><font-awesome-icon icon="fa-brands fa-github" /></a>
        <a class="nav-icons" href="https://www.youtube.com/channel/UCSjOvYqYrVd5-d78yg-Cvlw" target="_blank"><font-awesome-icon icon="fa-brands fa-youtube" /></a>
        <a class="nav-icons" target="_blank"><font-awesome-icon icon="fa-envelope" /></a>
      </div>
    </nav>
    <div id="nav-underline"></div>

    <main>
      <RouterView />
    </main>
  </body>
</template>

<script lang="ts">

  import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import SlideMenu from './components/SlideMenu.vue'

export default defineComponent({
    name: 'App',
    components: {
    RouterView,
    RouterLink,
    SlideMenu,
  },
  data() {
    return {
      showSlideMenu: false,
    }
  },
  methods: {
      openSlideMenu(){
        this.$emit('open-slide');
        this.showSlideMenu = true;
      },
      closeSlideMenu(){
      this.showSlideMenu = false;
      }
    },
})

</script>

<style scoped>
nav {
  display: inline-grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  position:relative;
}



a {
  display: grid;
  align-items: center;
}

button {
  background: -webkit-linear-gradient(0deg, #ad5ddf, #e05cd5);
  padding: 0 5px;
  border-radius: 5px;
  border: 0;
}

#nav-underline {
  display: none;
  width: 100%;
  height: 1px;
  background: #E1E1E1;
}

.nav-icons {
  font-size: 24px;
}

.nav-icons:hover {
  cursor: pointer;
  color: #9b9b9b;
}

.nav-text {
  font-size: 16px;
  font-weight: 200;
}
.nav-icons,
.nav-text {
  transition: color 0.5s ease-in-out;
  color: #E1E1E1;
}


.nav-bar {
  box-sizing: border-box;
}


.nav.router-link-exact-active {
  opacity: 0.5;
  color: #7d7d7d;
  cursor: default;
}

.nav-bar-left {
  flex-basis: calc(100% / 3);
  display: flex;
  align-items: center;
  padding-left: 50px;
  border-left: none;
}
.nav-bar-center {
  flex-basis: calc(100% / 3);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
}
.nav-bar-right {
  flex-basis: calc(100% / 3);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 90px;

}
/*
.nav-bar-contacts,
.nav-bar-socials {
  flex-grow: 1;
}
.nav-bar-socials {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 50px;
  padding-right: 50px;
}

.nav-bar-contacts {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
*/



</style>
