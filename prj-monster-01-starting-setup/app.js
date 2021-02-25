function randowValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            roundCount: 0,
            winner: null,
            logs: []
        };
    },
    watch: {
        monsterHealth(value) {
            if (value === 0)
                if (this.playerHealth === 0)
                    this.winner = 'Draw';
                else
                    this.winner = 'Player';

        },
        playerHealth(value) {
            if (value === 0)
                if (this.monsterHealth === 0)
                    this.winner = 'Draw';
                else
                    this.winner = 'Monster';
        }
    },
    computed: {
        styleMH() {
            return { 'width': this.monsterHealth + '%' };
        },
        stylePH() {
            return { 'width': this.playerHealth + '%' };
        }
    },
    methods: {
        playerAttack() {
            this.roundCount++;
            const value = randowValue(10, 20);
            this.addBlog('Player', 'attack', value);
            if (this.monsterHealth - value <= 0)
                this.monsterHealth = 0;
            else
                this.monsterHealth = this.monsterHealth - value;
            this.monsterAttack();
        },
        monsterAttack() {
            const value = randowValue(15, 25);
            this.addBlog('Monster', 'attack', value);
            if (this.playerHealth - value <= 0)
                this.playerHealth = 0;
            else
                this.playerHealth = this.playerHealth - value;
        },
        playerSAttack() {
            this.roundCount++;
            const value = randowValue(15, 25);
            this.addBlog('Player', 'SpecialAttack', value);
            if (this.monsterHealth - value <= 0)
                this.monsterHealth = 0;
            else
                this.monsterHealth = this.monsterHealth - value;
            this.monsterAttack();
        },
        playAgain() {
            this.monsterHealth = 100,
                this.playerHealth = 100,
                this.roundCount = 0,
                this.winner = null,
                this.logs = []
        },
        playerHeal() {
            this.roundCount++;
            const value = randowValue(15, 25);
            this.addBlog('Player', 'heals', value);
            if (this.playerHealth + value > 100)
                this.playerHealth = 100;
            else
                this.playerHealth = this.playerHealth + value;
            this.monsterAttack();
        },
        playerSurrender() {
            this.winner = 'Monster';
            this.playerHealth = 0;
        },
        addBlog(wer, was, value) {
            this.logs.unshift({
                logBy: wer,
                logAction: was,
                logValue: value
            })
        }
    }
});

app.mount('#game')