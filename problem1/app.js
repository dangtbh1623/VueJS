Vue.createApp({
    data(){
        return{
            name: "Dang Trinh",
            age: 31,
            imgUrl: "sensorA.png",

        }
    },
    methods:{
        addAge(){
            return this.age + 5;            
        },
        randomNumber(){
            return Math.random();
        }
    }
}).mount("#assignment");