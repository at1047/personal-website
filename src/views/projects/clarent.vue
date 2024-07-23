<template>
    <Breadcrumbs :breadcrumbArr="this.$route.meta" v-if="this.loading == false"/>
    <div class="project-header">
    <h2 style="display: inline;">Clarent</h2>
    <p style="display: inline; margin-left: 20px;">A bistable split ergonomic keyboard for gaming</p>
    </div>


    <h3 class="emph">Pain Points</h3>

    <p>
    How to create a two bistable environments with different amplitudes for the pinky and ring finger column
    </p>

    <h3 class="emph">The problem with existing solutions</h3>

    <h4>1. Do nothing</h4>
    <p>
    Column stagger good for regular typing, but the stagger is offset when home row is moved to WASD when gaming.
    Thumb/space bar placement is also moved when using WASD.
    Only control key on bottom left, missing a control for additional inputs (can’t move to thumb cluster, control key often use in conjunction with space key)
    </p>

    <h4>2. Remapping the game</h4>

    <p>
    Original thumb space key is tap-dance for command/mod key. The short press key for Tap-dance is read on the falling edge, which is not good enough for gaming
    A lot of games to remap
    Not enough keys on the right of WASD for additional key-binds
    Additional keys on the left, but pinky and ring finger is less dexterous than pointer finger
    </p>

    <h4>3. Create a gaming layer</h4>

    <p>
    Removes an entire column from the keyboard, can’t type normally
    Needs pressing of a button, sometimes forget to switch layers even with visual cue (RGB)
    </p>

</template>

<script>

import { defineComponent } from "vue";
// import { marked } from "marked";
// import axios from "axios";
import Breadcrumbs from '../../components/Breadcrumbs.vue'

export default defineComponent({
    name: 'ProjectClarentPage',
    components: {
        Breadcrumbs,
    },
    data(){
        return {
            markdown:  "",
            breadCrumbArr: null,
        };
    },
    async created() {
            this.breadCrumbArr = this.$route.meta
            this.breadCrumbArr['clarent'] = '/projects/'
                  + 'Clarent'
            this.loading = false
        },
});

</script>

<style scoped>
  @import '../../assets/projects.css';
</style>
