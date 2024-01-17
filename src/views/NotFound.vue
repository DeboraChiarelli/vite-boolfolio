<template>
    <div>
        <h1>404 - Pagina non trovata</h1>
        <p>La pagina che stai cercando non esiste. Torna alla <router-link :to="{ name: 'home' }">pagina
                iniziale</router-link>.</p>
    </div>
</template>
  
<script>
export default {
    created() {
        console.log('Il componente NotFound è stato creato.');
    },
};
</script>
  
<style scoped>
h1 {
    color: #ff0000;
}
</style>