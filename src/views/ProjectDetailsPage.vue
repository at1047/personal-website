<template>
  <h1 class="text">Projects</h1>
  <div v-html="markdownToHtml"></div>

</template>

<script lang="ts">

import { defineComponent } from "vue";
import { marked } from "marked";
import axios from "axios";

export default defineComponent({
  name: 'ProjectDetailsPage',
    components: {
    },
  data(){
    return {
     markdown:  null,
   };
  },
    async created() {
        console.log(this.$route.params.projectName)
        console.log(this.$route.params.blogName)
        try {
            this.markdown = await axios.get("//" + import.meta.env.VITE_API
              + "/blogs/test%20title%201")
                .then((res) => res.data)
                .then((data) => data.content)
        } catch(e) {
            console.error(e);
        };
        this.loading = false
        console.log(this.markdown)
    },
   computed: {
     markdownToHtml(){
       return marked(this.markdown);
     }
   }
});
</script>

