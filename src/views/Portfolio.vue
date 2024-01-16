<template>
    <div>
        <h1>Portfolio</h1>
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
</template>
  
<script>
import ProjectCard from '../components/ProjectCard.vue';

export default {
    components: {
        ProjectCard,
    },
    data() {
        return {
            projects: [],
        };
    },
};
</script>
  
<style scoped></style>