<template>
    <div>
        <h1>Benvenuto nel nostro sito!</h1>
        <p>Grazie per la visita!</p>
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