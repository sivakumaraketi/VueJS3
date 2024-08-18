const app = Vue.createApp({
    data() {
        return {
            counter: 10,
            name: '',
            confirmedName: ''
        };
    },
    methods: {
        submitForm() {
            alert('submitted!');
        },
        setName(event, lastName) {
          this.name = event.target.value + lastName
        },
        confirmInput() {
            this.confirmedName = this.name;
          },
        add(num) {
            this.counter = this.counter + num
        }
    }
});
app.mount('#events');