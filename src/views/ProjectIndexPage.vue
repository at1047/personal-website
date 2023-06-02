<template>
    <p style="margin-top: 30px; text-align: center;" v-if="loading" class="text">Loading...</p>
    <div v-for="(blogtitle, idx) of blogtitles" :idx = idx>
      <router-link :to="`/projects/${this.$route.params.projectName}/${blogtitle.titleCode}`">
        <h3>{{ blogtitle.title }}</h3>
      </router-link>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router'

console.log(import.meta.env)

export default defineComponent({
    name: 'ProjectIndex',
    components: {
        RouterView,
        RouterLink,
    },
    data() {
        return {
            blogtitles: null,
            loading: true
        };
    },
    async created() {
        console.log(this.$route.params.projectName)
        try {
            this.blogtitles = await axios.get("//" + import.meta.env.VITE_API
              + "/blogtitles/" + this.$route.params.projectName)
                .then((res) => res.data)
        } catch(e) {
            console.error(e);
        };
        this.loading = false
    },
});
</script>
