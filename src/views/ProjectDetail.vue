<template>
    <div>
        <h1>{{ project.title }}</h1>
        <p>{{ project.description }}</p>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            project: {},
        };
    },
    methods: {
        fetchProject() {
            const slug = this.$route.params.slug;
            axios.get(`http://localhost:8000/api/projects/${slug}`)
                .then((res) => {
                    this.project = res.data;
                })
                .catch((error) => {
                    console.error('Errore nel recupero dei dettagli del progetto:', error);
                });
        },
    },
    created() {
        this.fetchProject();
    },
};
</script>
  
<style scoped></style>