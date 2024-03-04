<script setup>
import titlecomponent from '../components/title.vue';
</script>

<template>
    <div>
        <titlecomponent title="Snake game" />
        <div class="game-board items-center dark:text-yellow-500 text-indigo-500 ">
            <div v-for="(row, i) in gameBoard" :key="i" class="row border  border-indigo-400 dark:border-yellow-500">
                <div v-for="(cell, j) in row" :key="j"
                    :class="['cell', cell, cell === 'deathTrap' ? 'bg-indigo-400 dark:bg-yellow-500 snake:bg-green' : '', ' border dark:border-yellow-500 border-indigo-400 snake:bg-green']">
                </div>
            </div>
            <p>Score: {{ score }}</p>
            <form class="pt-1 " @submit.prevent="startGame">
                <input autocomplete="on" id="Name" class="text-center  border-4 border-indigo-400 dark:border-yellow-400" v-model="playerName"
                    placeholder="Enter your name" required />
                <button class="dark:text-yellow-500 ml-2 p-2   border-4 border-indigo-400 dark:border-yellow-500"
                    type="submit">Start Game</button>
            </form>
            <h3 class="text-2xl">Top 3 High Scores</h3>
            <ul>
                <li v-for="(score, index) in highScores" :key="index">
                    {{ score.name }}: {{ score.score }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            gameBoard: Array(20).fill(Array(20).fill('')),
            snake: [{ x: 10, y: 10 }],
            direction: 'right',
            food: null,
            gameInterval: null,
            score: 0,
            highScores: [],
            deathTraps: [],
        };
    },
    methods: {
        startGame() {
            this.direction = 'right';
            this.snake = [{ x: 10, y: 10 }];
            this.food = this.getRandomEmptyCell();
            this.score = 0;
            this.gameInterval = setInterval(this.gameLoop, 200);
            this.deathTraps = [];
        },
        endGame() {
            clearInterval(this.gameInterval);
            this.highScores.push({ name: this.playerName, score: this.score });
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
    },
    computed: {
        gameBoard() {
            return this.gameBoard.map((row, y) => row.map((cell, x) => {
                if (this.isSnake({ x, y })) return 'snake';
                if (this.isFood({ x, y })) return 'food';
                if (this.isDeathTrap({ x, y })) return 'deathTrap';
                return '';
            }));
        },
    },
    mounted() {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowUp' && this.direction !== 'down') this.direction = 'up';
            if (e.key === 'ArrowDown' && this.direction !== 'up') this.direction = 'down';
            if (e.key === 'ArrowLeft' && this.direction !== 'right') this.direction = 'left';
            if (e.key === 'ArrowRight' && this.direction !== 'left') this.direction = 'right';
        });
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