<template>
  <div class="blog" v-html="markdownToHtml"></div>
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
     markdown:  "",
   };
  },
    async created() {
        try {
            this.markdown = await axios.get("//" + import.meta.env.VITE_API
              + "/blogs/" + this.$route.params.blogName)
              //+ "/blogs/" + "test%20title%201")
                .then((res) => res.data)
                .then((data) => data.content)
        } catch(e) {
            console.error(e);
        };
        this.loading = false
    },
   computed: {
     markdownToHtml(){
       return marked(this.markdown);
     }
   }
});
</script>

<style scoped>
.blog {
  width: 800px;
  margin: 50px auto;
}
</style>
