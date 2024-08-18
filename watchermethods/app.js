const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            result: '',
        };
    },
    methods: {
        add(num) {
            this.counter = this.counter + num
        },
        subtract(num) {
            this.counter = this.counter - num
        }
    },
    watch: {
        counter(value) {
            value >= 37 ? 
            this.result = 'Too much!' :
            this.result = 'Not there yet'
          },
          result() {
            const that = this;
            setTimeout(function() {
                that.counter = 0;
            }, 5000)
          }
    },
});
app.mount('#watchers');