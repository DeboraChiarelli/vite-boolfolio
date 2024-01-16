<template>
    <div>
        <h1>{{ welcomeMessage }}</h1>
        <p>{{ formattedMessage }}</p>
        <button @click="changeMessage">Cambia Messaggio</button>
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

<style scoped></style>