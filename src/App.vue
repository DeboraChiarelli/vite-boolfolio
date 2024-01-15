<script>
import axios from 'axios';

export default {
  data() {
    return {
      projects: [],
      BASE_URL: 'http://localhost:8000/api'
    };
  },
  methods: {
    fetchProjects() {
      axios.get(`${this.BASE_URL}/projects`)
        .then((res) => {
          console.log(res);
          this.projects = res.data;
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
    <div class="container">
      <h1>
        Lista Progetti
      </h1>
    </div>

    <div class="container">
      <div>
        <div v-for="project in projects" :key="project.id" class="card project-card">
          <h2>{{ project.title }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>