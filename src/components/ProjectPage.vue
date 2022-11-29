<template>
    <h1 class="text">Projects</h1>
    
    <div v-for="(project, index) in projects">
        <ProjectCard :title="project.title" :description="project.description" @click="project.open = true"
        :icons="project.icons"></ProjectCard>
        <Teleport to="body">
            <Transition name="modal">
                <div v-if="project.open" class="modal-background">
                    <div class="modal" ref="modal">
                        <component :is="project.card" />
                        <button @click="project.open = false">&times;</button>
                    </div>
                </div> 
            </Transition>
        </Teleport>
    </div>
    


    
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import ProjectCard from './ProjectCard.vue';
import ProjectCardRenju from './ProjectCardRenju.vue';
import ProjectCardGo from './ProjectCardGo.vue';


export default defineComponent({
    name: 'ProjectPage',
    components: {
        ProjectCard,
        ProjectCardRenju,
        ProjectCardGo
    },
    data () {
        return {
            projects: [{
                open: false,
                title: 'Renju Multiplayer Game',
                description: 'Two-player online renju game built using Socket.io and native Javascript',
                text: 'Hello from the modal!',
                card: 'ProjectCardRenju',
                icons: [
                    // 'https://img.shields.io/badge/Socket.io-B3B3B3?style=flat-square&logo=socket.io&logoColor=black',
                    // 'https://img.shields.io/badge/Express.js-B3B3B3?style=flat-square&logo=express&logoColor=blue',
                    // 'https://img.shields.io/badge/JavaScript-B3B3B3?style=flat-square&logo=javascript&logoColor=ffe300',
                    // 'https://img.shields.io/badge/nginx-B3B3B3?style=flat-square&logo=nginx&logoColor=%23009639',
                    'https://img.shields.io/badge/Socket.io-D8D8D8?style=flat&logo=socket.io&logoColor=black',
                    'https://img.shields.io/badge/Express.js-3d7ac4?style=flat&logo=express&logoColor=white',
                    'https://img.shields.io/badge/JavaScript-d4c33f?style=flat&logo=javascript&logoColor=black',
                    'https://img.shields.io/badge/nginx-3d913e?style=flat&logo=nginx&logoColor=white',
                ]
            },{
                open: false,
                title: 'Recipes Backend API',
                description: "A backend API for my recipes page, built with MongoDB and GO",
                text: 'Hello from the modal!',
                card: 'ProjectCardGo',
                icons: [
                    // 'https://img.shields.io/badge/MongoDB-B3B3B3?style=flat-square&logo=mongodb&logoColor=4EA94B',
                    // 'https://img.shields.io/badge/Go-B3B3B3?style=flat-square&logo=go&logoColor=00ADD8',
                    'https://img.shields.io/badge/MongoDB-3a8038?style=flat&logo=mongodb&logoColor=white',
                    'https://img.shields.io/badge/Go-0082a3?style=flat&logo=go&logoColor=white',

                ]
            },{
                open: false,
                title: 'Internal Reporting Dashboard - GAP Inc.',
                description: "Full Stack Dashboard for Gap Inc. (China, Shanghai, Japan, Hong Kong), display crucial sales KPI via Plotly Dash Application",
                text: 'Hello from the modal!',
                card: 'ProjectCardGo',
                icons: [
                    // 'https://img.shields.io/badge/MongoDB-B3B3B3?style=flat-square&logo=mongodb&logoColor=4EA94B',
                    // 'https://img.shields.io/badge/Go-B3B3B3?style=flat-square&logo=go&logoColor=00ADD8',
                    'https://img.shields.io/badge/MongoDB-3a8038?style=flat&logo=mongodb&logoColor=white',
                    'https://img.shields.io/badge/Go-0082a3?style=flat&logo=go&logoColor=white',

                ]
            },{
                open: false,
                title: 'Recipes Editor',
                description: "Full Stack Dashboard for Gap Inc. (China, Shanghai, Japan, Hong Kong), display crucial sales KPI via Plotly Dash Application",
                text: 'Hello from the modal!',
                card: 'ProjectCardGo',
                icons: [
                    // 'https://img.shields.io/badge/MongoDB-B3B3B3?style=flat-square&logo=mongodb&logoColor=4EA94B',
                    // 'https://img.shields.io/badge/Go-B3B3B3?style=flat-square&logo=go&logoColor=00ADD8',
                    'https://img.shields.io/badge/MongoDB-3a8038?style=flat&logo=mongodb&logoColor=white',
                    'https://img.shields.io/badge/Go-0082a3?style=flat&logo=go&logoColor=white',

                ]
            },{
                open: false,
                title: 'Insurance KPI Dashboard - Artera',
                description: "Full Stack Dashboard for Gap Inc. (China, Shanghai, Japan, Hong Kong), display crucial sales KPI via Plotly Dash Application",
                text: 'Hello from the modal!',
                card: 'ProjectCardGo',
                icons: [
                    // 'https://img.shields.io/badge/MongoDB-B3B3B3?style=flat-square&logo=mongodb&logoColor=4EA94B',
                    // 'https://img.shields.io/badge/Go-B3B3B3?style=flat-square&logo=go&logoColor=00ADD8',
                    'https://img.shields.io/badge/MongoDB-3a8038?style=flat&logo=mongodb&logoColor=white',
                    'https://img.shields.io/badge/Go-0082a3?style=flat&logo=go&logoColor=white',

                ]
            }]
        }
    }
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