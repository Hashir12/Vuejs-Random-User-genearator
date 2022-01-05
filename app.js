const app = Vue.createApp({
    data() {
        return {
            firstName: 'Hashir',
            lastName: 'Masood',
            email: "hashirbutt1996@gmail.com",
            gender: 'male',
            pic: 'https://randomuser.me/api/portraits/men/75.jpg'
        }
    }
})

app.mount('#app')