Vue.createApp({
    data() {
        return {
            ergebnis: 0
        }
    },
    watch:{
        ergebnis(value){
            const that = this;
            
            if(value > 37)
            setTimeout(function(){
                that.ergebnis = 0;
            },5000);
        }
    },
    computed: {
        check() {
            if (this.ergebnis >= 37)
                return "Too much!";
            else
                return "Not there yet";
        }
    },
    methods: {
        addNum(num) {
            this.ergebnis = this.ergebnis + num;
        }
    }
}).mount("#assignment"); 