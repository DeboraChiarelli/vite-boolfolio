<template>
    <div>
        <h1>Portfolio</h1>
        <div v-for="project in projects" :key="project.id" class="project-item">
            <ProjectCard :project="project" />
        </div>
        <div class="container">
            <ul class="pagination">
                <li v-for="n in totalPages" :class="{ 'active': n === currentPage }" :key="n" @click="setPage(n)">
                    {{ n }}
                </li>
            </ul>
        </div>
        <router-link to="/">Torna alla Home</router-link>
    </div>
</template>
  
<script>
import ProjectCard from '../components/ProjectCard.vue';

export default {
    components: {
        ProjectCard,
    },
    props: {
        currentPage: {
            type: Number,
            required: true,
        },
        totalPages: {
            type: Number,
            required: true,
        },
        projects: {
            type: Array,
            required: true,
        },
        onPageChange: {
            type: Function,
            required: true,
        },
    },
    methods: {
        setPage(n) {
            this.onPageChange(n);
        },
    },
};
</script>
  
<style lang="scss" scoped>
.project-item {
    margin-bottom: 20px;
}

.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    list-style: none;
    padding: 20px;

    .active {
        color: cornflowerblue;
        font-weight: 700;
    }
}
</style>