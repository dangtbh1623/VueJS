Vue.createApp({
    data() {
        return {
            textAlert: "Click Button",
            outputKeydown: "",
            druckEnter: ""
        };
    },
    methods: {
        alertButton() {
            alert(this.textAlert);
        },
        enterKeydown(event) {
            this.outputKeydown = event.target.value;
        },
        enterEnter(event) {
            this.druckEnter = event.target.value;
        }
    }
}).mount("#assignment");