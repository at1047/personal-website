<template>
  <h1 class="text">Projects</h1>
  <p style="margin-top: 30px; text-align: center;" v-if="loading" class="text">Loading...</p>
  <div v-for="(project, idx) of projects" :idx = idx>
    <router-link :to="`/projects/${project}`"><h3 class="text">{{ project }}</h3></router-link>
  </div>
</template>

<script lang="ts">

  import { defineComponent } from 'vue';
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router'

console.log(import.meta.env)

export default defineComponent({
    name: 'Projects',
    components: {
        RouterView,
        RouterLink,
    },
    data() {
        return {
            projects: null,
            loading: true
        };
    },
    async created() {
        try {
            this.projects = await axios.get("http://localhost:9090/projects")
                .then((res) => res.data)
        } catch(e) {
            console.error(e);
        };
        this.loading = false
    },
});
</script>
