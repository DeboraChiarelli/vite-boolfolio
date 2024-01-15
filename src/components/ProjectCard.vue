<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>
  

<template>
    <div class="card project-card">
        <h2>{{ project.title }}</h2>
        <p> {{ project.description }}</p>
    </div>
</template>
  

<style lang="scss" scoped>
.card {
    /* background-color: #fff; */
    border: 1px solid #ddd;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
}

.card:hover {
    transform: scale(1.05);
}
</style>