Vue.createApp({
    data() {
        return {
            tempStyle: "",
            hide: true,
            bColor: ""
        };
    },
    methods: {
        changeStyle() {
            if (this.tempStyle === "user1")
                this.style1 = true;
            else if (this.tempStyle === "user2")
                this.style2 = true;
                else{
                    this.style1 = false,
                    this.style2 = false
                }
         
        },
        showText(){
            this.hide = !this.hide
        },
        
    }
}).mount("#assignment");