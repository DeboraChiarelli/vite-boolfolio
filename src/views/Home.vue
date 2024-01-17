<template>
    <div>
        <h1>{{ welcomeMessage }}</h1>
        <p>{{ formattedMessage }}</p>
        <button @click="changeMessage">Cambia Messaggio</button>
        <!-- Router-link per la pagina Portfolio -->
        <router-link to="/portfolio">Vai alla Pagina Portfolio</router-link>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            welcomeMessage: 'Benvenuto nel nostro sito!',
            additionalMessage: ' Grazie per la visita!',
        };
    },
    computed: {
        formattedMessage() {
            return this.welcomeMessage.toUpperCase() + this.additionalMessage;
        },
    },
    methods: {
        changeMessage() {
            this.welcomeMessage = 'Nuovo Messaggio!';
        },
    },
    created() {
        console.log('Il componente Home è stato creato.');
    },
};
</script>
  
<style scoped>
.home {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f0f0f0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.home button {
    margin-top: 10px;
    padding: 8px 12px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
}

.home button:hover {
    background-color: #0056b3;
}
</style>