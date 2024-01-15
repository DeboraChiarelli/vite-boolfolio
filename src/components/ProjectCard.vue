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

    </div>
</template>
  

<style lang="scss" scoped></style>