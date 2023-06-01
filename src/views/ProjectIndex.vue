<template>
    <h1 class="text">Projects</h1>

        <router-link class="nav-text" to="/projects/projects">About</router-link>

</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

export default defineComponent({
    name: 'Projects',
    components: {
        RouterView,
        RouterLink,
    }
});
</script>
