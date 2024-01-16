<template>
    <div>
        <h1>{{ pageTitle }}</h1>
        <p>Email: {{ email }}</p>
        <p>Telefono: {{ phoneNumber }}</p>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            pageTitle: 'Contattaci',
            email: 'info@example.com',
            phoneNumber: 'xxx-xxxx',
        };
    },
    created() {
        console.log('Il componente Contact è stato creato.');
    },
};
</script>

<style scoped></style>