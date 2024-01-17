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
  
<style scoped>
.project-detail {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>