<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [],
      BASE_URL: 'http://127.0.0.1:8000/api'
    };
  },
  methods: {
    fetchProjects() {
      axios.get(`${this.BASE_URL}/projects`)
        .then((res) => {
          console.log(res.data.results);
          this.projects = res.data.results;
        });
    }
  },
  created() {
    this.fetchProjects();
  }
}
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.container {
  text-align: center;
  margin-top: 20px;
}

.project-card {
  /* background-color: #fff;*/
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