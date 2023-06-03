<template>
    <ul>
        <li v-for="(bc, idx) of this.breadcrumbArr" v-if="this.breadcrumbArr" :idx = idx>
            <router-link :to="`${bc}`">
                <span>{{ (bc == '/') ? '~' : bc }}</span>
            </router-link>
        </li>
    </ul>
</template>

<script>

import { defineComponent } from 'vue';
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router'

export default defineComponent({
    name: 'Breadcrumbs',
    props: ['breadcrumbArr'],
    components: {
        RouterView,
        RouterLink,
    },
    created() {
    }


});
</script>

<style scoped>

ul {
  margin: 0;
  padding: 0;
}

li {
    display:inline;
}

</style>
