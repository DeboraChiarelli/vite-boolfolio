<template>
    <div>
        <h1>Contattaci</h1>
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
            phoneNumber: 'xxx-xxxxxxx',
        };
    },
    created() {
        console.log('Il componente Contact è stato creato.');
    },
};
</script>
  
<style scoped>
.contact {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f8f8;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>