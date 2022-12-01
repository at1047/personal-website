<template>
        <pre id="canvas" style='height:700px;width:700px;margin-top: 50px;'></pre>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

// @ts-ignore
import { main } from '@/assets/cube.js'


export default defineComponent({
    name: 'Cube',
    components: {},
    mounted
});

function mounted() {
    console.log('mounted')
    main()
}

</script>

<style scoped>
    /* wrapper {
        display: flex;
        justify-content: center;
    } */
    pre {
        margin: auto;
        color: #E1E1E1;
        font-size: 14px;
    }

</style>