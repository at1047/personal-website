<template>

    <h2>~ / Projects</h2>
    <!--
    <div v-for="(project, idx) of projects" :idx = idx>
        <router-link :to="`/projects/${project.projectCode}`"><h3 class="text menu-item">{{ project.project }}</h3></router-link>
    </div>
    <p style="margin-top: 30px; text-align: center;" v-if="loading" class="text">Loading...</p>
    -->

    <router-link to="/projects/clarent"><h3 class="text menu-item">Clarent</h3></router-link>
</template>

<script>

    import { defineComponent } from 'vue';
    // import axios from 'axios';
    import { RouterLink, RouterView } from 'vue-router'

    // console.log(import.meta.env)

    export default defineComponent({
        name: 'Projects',
        components: {
        //    RouterView,
            RouterLink,
        },
        // data() {
        //     return {
        //         projects: null,
        //         loading: true
        //     };
        // },
        // async created() {
        //     try {
        //         this.projects = await axios.get("//" + import.meta.env.VITE_API
        //             + "/projects")
        //             .then((res) => res.data)
        //     } catch(e) {
        //         console.error(e);
        //     };
        //     this.loading = false
        // },
    });
</script>


<style scope>
/*
.menu-item:hover {
  opacity: 0.3 ;
}
*/

.menu-item {
background-color: var(--color-menu-item);
border-radius: 5px;
margin-top: 7px;
padding: 2px 10px;
transition: background-color 100ms ease-out;
}

.menu-item:hover {
background-color: var(--color-menu-item-hover);
}

h2 {
  font-size: 60px;
  margin-bottom: 3px;
}

h3 {
  font-size: 35px;
  color: #D1D1D1;
}

h4 {
  font-size: 16px;
}

p {
  font-size: 14px;
  margin-bottom: 30px;
  color: #C1C1C1;
}

</style>
