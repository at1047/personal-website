<template>
    <div>
        <ul>
            <li v-for="recipe of recipes">{{ recipe }}</li> 
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import * as Vue from 'vue';
import axios from 'axios';
// import VueAxios from 'vue-axios';
// Vue.use(VueAxios,axios)

export default defineComponent({
    name: "RecipeList",
    data() {
        return {
            recipes: [],
        };
    },
    async created() {
        try {
            const res = await axios.get("https://andrew-tai.com/recipes") ;
            this.recipes = res.data;
        } catch(e) {
            console.error(e);
        }
    }

}) 
</script>