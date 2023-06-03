<template>
    <Breadcrumbs :breadcrumbArr="this.$route.meta" v-if="this.$route.meta"/>
    <p style="margin-top: 30px; text-align: center;" v-if="loading" class="text">Loading...</p>

    <div class="main">
        <div v-for="(blogtitle, idx) of blogtitles" :idx = idx>
            <router-link :to="`/projects/${this.$route.params.projectName}/${blogtitle.titleCode}`">
                <h3>{{ blogtitle.title }}</h3>
            </router-link>
        </div>
    </div>
</template>

<script>

import { defineComponent } from 'vue';
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router'
import Breadcrumbs from '../components/Breadcrumbs.vue'

export default defineComponent({
    name: 'ProjectIndex',
    components: {
        RouterView,
        RouterLink,
        Breadcrumbs,
    },
    data() {
        return {
            blogtitles: null,
            loading: true,
        }
    },
    async created() {
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

