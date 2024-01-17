<template>
  <div>
    <router-view :projects="projects" :currentPage="currentPage" :totalPages="totalPages" :onPageChange="onPageChange" />
  </div>
</template>

<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';
import Portfolio from './views/Portfolio.vue';

export default {
  components: {
    ProjectCard,
    Portfolio,
  },
  data() {
    return {
      projects: [],
      currentPage: 1,
      totalPages: 1,
      BASE_URL: 'http://127.0.0.1:8000/api',
    };
  },
  methods: {
    fetchProjects(page = 1) {
      axios.get(`${this.BASE_URL}/projects?page=${page}`)
        .then((res) => {
          console.log(res.data.results);
          this.projects = res.data.results.data;
          this.totalPages = res.data.results.last_page;
          this.currentPage = res.data.results.current_page;
        });
    },
    onPageChange(newPage) {
      this.fetchProjects(newPage);
    },
  },
  created() {
    this.fetchProjects();
  },
};
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
  margin-top: 20px;
}

.project-card {
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.project-card:hover {
  transform: scale(1.05);
}
</style>