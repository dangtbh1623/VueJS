Vue.createApp({
    data() {
        return {
            boxA: false,
            boxB: false,
            boxC: false,
        }
    },
    computed:{
        selectedA(){
            return {active: this.boxA};
        },
        selectedB(){
            return {active: this.boxB};
        },
        selectedC(){
            return {active: this.boxC};
        }
    },
    methods: {
        selectedBox(box) {
            if (box === "A")
                this.boxA = !this.boxA;
            else if (box === "B")
                this.boxB = !this.boxB;
            else
                this.boxC = !this.boxC;
        }
    }
}).mount("#styling");