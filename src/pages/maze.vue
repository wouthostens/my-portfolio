<script setup>
import TitleComponent from '../components/title.vue';
import db, { scoreRef } from '../../firebaseconfig';
import { query, orderBy, limit, getDoc, getDocs, doc, setDoc, Timestamp } from "firebase/firestore";
import 'firebase/firestore';
import description from '../components/description.vue';
</script>

<template>
    <div>
        <TitleComponent title="Snake game" />
        <div class="h-85vh overflow-auto pb-5 ">
            <div @touchstart="handleTouchStart" @touchend="handleTouchEnd"
                @touchmove="isPlaying ? $event.preventDefault() : null"
                class=" game-board  items-center w-full sm:w-3/4 lg:w-1/2 rounded-lg shadow-lg  dark:text-slate-400 dark:bg-slate-800 bg-gray-200">
                <description extraClass="mx-5 text-center"
                    description="Gebruik de pijltoetsen om de slang te besturen of verander van richting door te swipen op je smartphone. Zodra je begint met het spel, zal het scrollen op je smartphone niet meer mogelijk zijn totdat het spel voorbij is. Het doel is simpel: eet het rode voedsel en vermijd de muren. Elke keer dat je het voedsel opeet, zal je score toenemen. Maar pas op! Het spel wordt steeds uitdagender met extra muren die elke 5 punten verschijnen. Veel succes en laat die slang lekker groeien!" />
                <div v-for="(row, i) in gameBoard" :key="i"
                    class="row border  border-indigo-400 dark:border-yellow-500">
                    <div v-for="(cell, j) in row" :key="j"
                        :class="['cell', cell, cell === 'deathTrap' ? 'bg-indigo-400 dark:bg-yellow-500 snake:bg-green' : '', ' border dark:border-yellow-500 border-indigo-400 snake:bg-green']">
                    </div>
                </div>
                <p>Score: {{ score }}</p>
                <form class="pt-1 " @submit.prevent="startGame">
                    <input autocomplete="on" id="Name"
                        class="text-center  border-4 border-indigo-400 dark:border-yellow-400" v-model="playerName"
                        placeholder="Enter your name" required />
                    <button class="dark:text-yellow-500 ml-2 p-2   border-4 border-indigo-400 dark:border-yellow-500"
                        type="submit">Start Game</button>
                </form>
                <div
                    class="dark:bg-slate-900 p-6 w-full sm:w-3/4 lg:w-1/2 mx-auto bg-white rounded-xl shadow-md overflow-hidden flex flex-col my-3">
                    <h3 class="text-2xl">Top 5 High Scores </h3>
                    <ul>
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
            rawGameBoard: Array(20).fill(Array(20).fill('')),
            direction: 'right',
            food: null,
            gameInterval: null,
            score: 0,
            highScores: [],
            deathTraps: [],
            touchStartX: 0,
            touchStartY: 0,
            isPlaying: false,
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
        startGame() {
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

    computed: {
        gameBoard() {
            return this.rawGameBoard.map((row, y) => row.map((cell, x) => {
                if (this.isSnake({ x, y })) return 'snake';
                if (this.isFood({ x, y })) return 'food';
                if (this.isDeathTrap({ x, y })) return 'deathTrap';
                return '';
            }));
        },
    },
    mounted() {
        window.addEventListener('keydown', this.preventScroll);
        window.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowUp' && this.direction !== 'down') this.direction = 'up';
            if (e.key === 'ArrowDown' && this.direction !== 'up') this.direction = 'down';
            if (e.key === 'ArrowLeft' && this.direction !== 'right') this.direction = 'left';
            if (e.key === 'ArrowRight' && this.direction !== 'left') this.direction = 'right';
        });
        this.updatescoreboard();
    },
    beforeDestroy() {
        window.removeEventListener('keydown', this.preventScroll);
    },
};
</script>

<style scoped>
.game-board {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}

.row {
    display: flex;
}

.row div {
    width: 20px;
    height: 20px;
}

.snake {
    background: green;
}

.food {
    background: red;
}
</style>