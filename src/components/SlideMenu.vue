<template>

        <div id="mySidenav" class="sidenav">
            <p @click="close()" class="closebtn" >&times;</p>
            <router-link class="nav-text" to="/recipes">Recipes</router-link>
            <a class="nav-text" href="https://www.andrew-tai.com/renju/">Renju</a>
        </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router'


export default defineComponent({
    name: 'SlideMenu',
    components: {},
    methods: {
      close(){
        this.$emit('close-slide');
      }
    },
});
</script>

<style scoped>

.sidenav {
  height: 100vh;
  width: 300px;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: transform 1s;
  padding-top: 60px;
}

.nav-text {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 20px;
  color: #E1E1E1;
  display: block;
  transition: color 0.3s;
}

.nav-text:hover,
.closebtn:hover {
  color: #9b9b9b;
  cursor: pointer;
}

.closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  color: #f1f1f1;
  transition: color 0.3s;
}
.slide-enter-active {
  animation: menu-slide .5s;
}
.slide-leave-active {
  animation: menu-slide .5s reverse;
  animation-fill-mode: forwards;
}

@keyframes menu-slide {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>