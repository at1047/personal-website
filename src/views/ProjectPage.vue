<template>
    <h1 class="text">Projects</h1>

    <p>content</p>



</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ProjectPage',
    components: {
    },
});
</script>

<style scoped>
    button {
        height: 30px;
        width: 30px;
        background-color: transparent;
        border: transparent;
        color: #BBBBBB;
        position:absolute;
        top: 10px;
        right: 10px;
        font-size: 30px;
    }

    button:hover {
        color: white
    }

    .modal {
        position: relative;
        background-color: #1A1A1A;
        width: 600px;
        padding: 30px 100px;
        border-radius: 8px;
        z-index: 999;
    }

    .modal-background {
        background-color: rgba(255,255,255,0.1);
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-enter-active,
    .modal-leave-active {
        transition: all 0.25s ease;
    }

    .modal-enter-from,
    .modal-leave-to {
        opacity: 0;
        transition: scale(1.1);
    }
</style>
