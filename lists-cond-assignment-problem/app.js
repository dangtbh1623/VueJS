Vue.createApp({
    data() {
        return {
            tasks: [],
            task: '',
            isListVisible: true
        };
    },
    computed: {
        showButtonFunction() {
            return this.isListVisible? 'Hide' : 'Show List';
        }
    },
    methods: {
        addTask() {
            if (this.task !== '') {
                this.tasks.push(this.task);
                this.task = '';
            }
        },
        showList() {
            this.isListVisible = !this.isListVisible;
        }
    }
}).mount("#assignment");