<template>
  <EditorMarkdown />
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import EditorMarkdown from '../components/EditorMarkdown.vue'
// import Vim from './Vim.vue';

export default defineComponent({
    name: 'EditorPage',
    components: {
      EditorMarkdown,
        // Vim,
    },
});
</script>
