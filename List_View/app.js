const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course and learn Vue',
            vueLink: 'https://vuejs.org'
        };
    },
    methods: {
        outputGoal() {
            const randomeNumber = Math.random();
            if(randomeNumber < 0.5) {
                return '<h2>Learn Vue</h2>';
            } else {
                return 'Master Vue';
            }
        }
    }
});

app.mount('#user-goal')