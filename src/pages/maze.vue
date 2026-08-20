<script setup>
import { defineAsyncComponent } from 'vue';
import TitleComponent from '../components/title.vue';
import db, { scoreRef } from '../../firebaseconfig';
import { query, orderBy, limit, getDoc, getDocs, doc, setDoc, Timestamp } from "firebase/firestore";
import 'firebase/firestore';
import description from '../components/description.vue';

// Three.js wordt pas ingeladen wanneer iemand deze pagina opent
const Snake3D = defineAsyncComponent(() => import('../components/snake3d.vue'));
</script>

<template>
    <div>
        <TitleComponent title="Snake game" />
        <div class="h-85vh overflow-auto pb-10">
            <div @touchstart="handleTouchStart" @touchend="handleTouchEnd"
                @touchmove="isPlaying ? $event.preventDefault() : null"
                class="game-board animate-fade-up mx-2 w-full items-center rounded-2xl border border-zinc-900/10 bg-white/70 p-5 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] sm:mx-auto sm:w-3/4 lg:w-1/2 md:p-7">
                <description extraClass="mx-5 text-center"
                    description="Gebruik de pijltoetsen om de slang te besturen of verander van richting door te swipen op je smartphone. Zodra je begint met het spel, zal het scrollen op je smartphone niet meer mogelijk zijn totdat het spel voorbij is. Het doel is simpel: eet het rode voedsel en vermijd de muren. Elke keer dat je het voedsel opeet, zal je score toenemen. Maar pas op! Het spel wordt steeds uitdagender met extra muren die elke 5 punten verschijnen. Veel succes en laat die slang lekker groeien!" />

                <Snake3D :snake="snake" :food="food" :deathTraps="deathTraps" :grid="20" />

                <p class="mt-4 text-center font-display text-lg font-semibold text-zinc-900 dark:text-white">
                    Score: {{ score }}</p>
                <form class="mt-3 flex flex-wrap items-center justify-center gap-2" @submit.prevent="startGame">
                    <input autocomplete="on" id="Name"
                        class="rounded-full border border-zinc-900/10 bg-white px-4 py-2 text-center text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/30 dark:border-white/10 dark:bg-white/5 dark:text-white"
                        v-model="playerName" placeholder="Vul je naam in" required />
                    <button
                        class="rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/30"
                        type="submit">{{ isPlaying ? 'Herstart game' : 'Start game' }}</button>
                </form>
                <div
                    class="mx-auto my-4 flex w-full flex-col rounded-xl border border-zinc-900/10 bg-zinc-900/[0.02] p-5 dark:border-white/10 dark:bg-white/[0.03] sm:w-3/4 lg:w-1/2">
                    <h3 class="font-display text-lg font-semibold text-zinc-900 dark:text-white">Top 5 highscores</h3>
                    <ul class="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                        <li v-for="(score, index) in highScores" :key="index">
                            {{ index + 1 }}. {{ score.name }}: {{ score.score }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script scoped>
export default {
    data() {
        return {
            snake: [{ x: 10, y: 10 }],
            direction: 'right',
            food: null,
            gameInterval: null,
            score: 0,
            highScores: [],
            deathTraps: [],
            touchStartX: 0,
            touchStartY: 0,
            isPlaying: false,
            playerName: '',
        };
    },
    methods: {
        handleTouchStart(e) {
            this.touchStartX = e.changedTouches[0].clientX;
            this.touchStartY = e.changedTouches[0].clientY;
        },

        handleTouchEnd(e) {
            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;
            const diffX = this.touchStartX - touchEndX;
            const diffY = this.touchStartY - touchEndY;

            if (Math.abs(diffX) > Math.abs(diffY)) {
                // Horizontal swipe
                if (diffX > 0 && this.direction !== 'right') {
                    // Swipe left
                    this.direction = 'left';
                } else if (diffX < 0 && this.direction !== 'left') {
                    // Swipe right
                    this.direction = 'right';
                }
            } else {
                // Vertical swipe
                if (diffY > 0 && this.direction !== 'down') {
                    // Swipe up
                    this.direction = 'up';
                } else if (diffY < 0 && this.direction !== 'up') {
                    // Swipe down
                    this.direction = 'down';
                }
            }
        },
        preventScroll(e) {
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault();
            }
        },
        handleKeydown(e) {
            if (e.key === 'ArrowUp' && this.direction !== 'down') this.direction = 'up';
            if (e.key === 'ArrowDown' && this.direction !== 'up') this.direction = 'down';
            if (e.key === 'ArrowLeft' && this.direction !== 'right') this.direction = 'left';
            if (e.key === 'ArrowRight' && this.direction !== 'left') this.direction = 'right';
        },
        startGame() {
            clearInterval(this.gameInterval);
            this.direction = 'right';
            this.snake = [{ x: 10, y: 10 }];
            this.food = this.getRandomEmptyCell();
            this.score = 0;
            this.gameInterval = setInterval(this.gameLoop, 200);
            this.deathTraps = [];
            this.isPlaying = true;
        },
        endGame() {
            clearInterval(this.gameInterval);
            this.saveHighScore();
            this.isPlaying = false;
            this.highScores.sort((a, b) => b.score - a.score);
            if (this.highScores.length > 3) this.highScores.length = 3; // Keep only top 3 scores
        },
        gameLoop() {
            const head = { ...this.snake[0] }; // copy head
            switch (this.direction) {
                case 'up': head.y--; break;
                case 'down': head.y++; break;
                case 'left': head.x--; break;
                case 'right': head.x++; break;
            }
            if (this.isSnake(head) || !this.isInsideBoard(head)) {
                this.endGame();
                return;
            }
            this.snake.unshift(head);
            if (this.isDeathTrap(head)) {
                this.endGame();
                return;
            }
            if (this.isFood(head)) {
                this.food = this.getRandomEmptyCell();
                this.score++;
                if (this.score % 5 === 0) {
                    this.deathTraps.push(this.getRandomEmptyCell());
                }
            } else {
                this.snake.pop();
            }

        },
        isInsideBoard(cell) {
            return cell.x >= 0 && cell.y >= 0 && cell.x < 20 && cell.y < 20;
        },
        isSnake(cell) {
            return this.snake.some(part => part.x === cell.x && part.y === cell.y);
        },
        isFood(cell) {
            return this.food && this.food.x === cell.x && this.food.y === cell.y;
        },
        isDeathTrap(cell) {
            return this.deathTraps.some(trap => trap.x === cell.x && trap.y === cell.y);
        },
        getRandomEmptyCell() {
            let cell = null;
            while (!cell || this.isSnake(cell) || this.isFood(cell) || this.isDeathTrap(cell)) {
                cell = { x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20) };
            }
            return cell;
        },
        async saveHighScore() {
            const docRef = doc(db, 'score', this.playerName);
            const docSnap = await getDoc(docRef);
            if (!docSnap.exists() || this.score > docSnap.data().score) {
                await setDoc(docRef, {
                    name: this.playerName,
                    score: this.score,
                    date: Timestamp.now(),
                });
            }
            this.updatescoreboard();
        },
        async updatescoreboard() {
            const q = query(scoreRef, orderBy("score", "desc"), limit(5));
            const highScoresFire = await getDocs(q);
            this.highScores = highScoresFire.docs.map(doc => doc.data());
        },
    },

    mounted() {
        window.addEventListener('keydown', this.preventScroll);
        window.addEventListener('keydown', this.handleKeydown);
        this.updatescoreboard();
    },
    beforeUnmount() {
        window.removeEventListener('keydown', this.preventScroll);
        window.removeEventListener('keydown', this.handleKeydown);
        clearInterval(this.gameInterval);
    },
};
</script>

<style scoped>
.game-board {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}
</style>
