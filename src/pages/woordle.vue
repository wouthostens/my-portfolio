<template>
    <div>
        <h1>Welcome to Woordle!</h1>
        <div>
            <input type="text" v-model="guess" @keyup.enter="checkGuess" />
            <button @click="checkGuess">Guess</button>
        </div>
        <div v-if="showResult">
            <p v-if="isCorrect">Congratulations! You guessed it right!</p>
            <p v-else>Oops! Wrong guess. Try again!</p>
        </div>
        <p>Number of guesses: {{ guesses }}</p>
        <p>Next Woordle: {{ nextWoordle }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            word: "hello",
            guess: "",
            showResult: false,
            isCorrect: false,
            guesses: 0,
        };
    },
    methods: {
        checkGuess() {
            this.guesses++;
            if (this.guess.toLowerCase() === this.word.toLowerCase()) {
                this.isCorrect = true;
            } else {
                this.isCorrect = false;
            }
            this.showResult = true;
        },
    },
    computed: {
        nextWoordle() {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            return tomorrow.toDateString();
        },
    },
};
</script>

<style scoped>

</style>